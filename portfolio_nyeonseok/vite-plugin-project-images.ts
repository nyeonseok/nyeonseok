/**
 * public/projects/<project>/<folder>/ 안의 이미지·영상을 빌드 시점에 스캔해
 * `virtual:project-images` 모듈로 제공한다.
 *
 * - 폴더에 파일을 넣기만 하면 화면에 나타나고, 비어 있는 폴더는 UI에서 자동으로 숨겨진다.
 * - 이미지의 width/height를 함께 넘겨 Layout Shift 없이 렌더링할 수 있게 한다.
 * - 개발 서버에서는 파일 추가/삭제 시 자동으로 새로고침된다.
 * - 빌드 결과물에서는 안내용 README.md / .gitkeep 파일을 제거한다.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';

const VIRTUAL_ID = 'virtual:project-images';
const RESOLVED_ID = '\0' + VIRTUAL_ID;
const SUB_DIR = 'projects';

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg']);
const VIDEO_EXT = new Set(['.mp4', '.webm']);
const DOC_FILES = new Set(['README.md', '.gitkeep']);

interface Size {
  width: number;
  height: number;
}

interface Asset extends Partial<Size> {
  src: string;
  /** `<folder>/<file>` 형식. 데이터 파일의 captions 키로 사용 */
  key: string;
  kind: 'image' | 'video';
  /** 영상 전용: 같은 이름의 `<name>.poster.<ext>` 이미지 */
  poster?: string;
}

/** `demo.poster.webp` → 'demo' (영상 `demo.mp4`의 포스터) */
const POSTER_RE = /^(.+)\.poster\.(?:webp|jpe?g|png|avif)$/i;

type Manifest = Record<string, Record<string, Asset[]>>;

function readSvgSize(file: string): Size | undefined {
  const head = fs.readFileSync(file, 'utf8').slice(0, 4000);
  const w = /\bwidth="([\d.]+)(?:px)?"/.exec(head);
  const h = /\bheight="([\d.]+)(?:px)?"/.exec(head);
  if (w && h) return { width: Number(w[1]), height: Number(h[1]) };
  const vb = /viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)\s*"/.exec(head);
  if (vb) return { width: Number(vb[1]), height: Number(vb[2]) };
  return undefined;
}

function readJpegSize(b: Buffer): Size | undefined {
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = b[i + 1];
    if (marker === 0xff) {
      i += 1;
      continue;
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSof) return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return undefined;
}

function readImageSize(file: string): Size | undefined {
  try {
    if (path.extname(file).toLowerCase() === '.svg') return readSvgSize(file);
    const b = fs.readFileSync(file);
    // PNG
    if (b.length >= 24 && b.readUInt32BE(0) === 0x89504e47) {
      return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
    }
    // GIF
    if (b.toString('ascii', 0, 3) === 'GIF') {
      return { width: b.readUInt16LE(6), height: b.readUInt16LE(8) };
    }
    // WebP
    if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = b.toString('ascii', 12, 16);
      if (chunk === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
      if (chunk === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
      if (chunk === 'VP8L') {
        const bits = b.readUInt32LE(21);
        return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
      }
    }
    // JPEG
    if (b[0] === 0xff && b[1] === 0xd8) return readJpegSize(b);
    // AVIF (ispe box)
    const ispe = b.indexOf('ispe');
    if (ispe > 0) return { width: b.readUInt32BE(ispe + 8), height: b.readUInt32BE(ispe + 12) };
  } catch {
    // 크기를 읽지 못해도 이미지는 그대로 표시한다.
  }
  return undefined;
}

function listDirs(dir: string): string[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name);
}

const byName = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

function scan(root: string, base: string): Manifest {
  const manifest: Manifest = {};
  if (!fs.existsSync(root)) return manifest;

  for (const project of listDirs(root).sort(byName)) {
    for (const folder of listDirs(path.join(root, project)).sort(byName)) {
      const dir = path.join(root, project, folder);
      const files = fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((e) => e.isFile() && !e.name.startsWith('.'))
        .map((e) => e.name)
        .filter((name) => {
          const ext = path.extname(name).toLowerCase();
          return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext);
        })
        .sort(byName);

      if (files.length === 0) continue;

      const toSrc = (file: string) => base + [SUB_DIR, project, folder, file].map(encodeURIComponent).join('/');

      // 포스터 이미지는 목록에서 빼고 같은 이름의 영상에 붙인다.
      const posters = new Map<string, string>();
      for (const file of files) {
        const match = POSTER_RE.exec(file);
        if (match) posters.set(match[1], file);
      }

      manifest[project] ??= {};
      manifest[project][folder] = files
        .filter((file) => !POSTER_RE.test(file))
        .map((file): Asset => {
          const key = `${folder}/${file}`;
          if (!VIDEO_EXT.has(path.extname(file).toLowerCase())) {
            return { src: toSrc(file), key, kind: 'image', ...readImageSize(path.join(dir, file)) };
          }
          const poster = posters.get(path.basename(file, path.extname(file)));
          return {
            src: toSrc(file),
            key,
            kind: 'video',
            ...(poster ? { poster: toSrc(poster), ...readImageSize(path.join(dir, poster)) } : {}),
          };
        });
    }
  }
  return manifest;
}

function removeDocFiles(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) removeDocFiles(full);
    else if (DOC_FILES.has(entry.name)) fs.rmSync(full);
  }
}

export default function projectImages(): Plugin {
  let config: ResolvedConfig;
  const imagesRoot = () => path.join(config.publicDir, SUB_DIR);

  return {
    name: 'project-images',

    configResolved(resolved) {
      config = resolved;
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
      return undefined;
    },

    load(id) {
      if (id !== RESOLVED_ID) return undefined;
      return `export default ${JSON.stringify(scan(imagesRoot(), config.base))};`;
    },

    configureServer(server) {
      const root = imagesRoot();
      server.watcher.add(root);

      const onFsChange = (file: string) => {
        const rel = path.relative(root, file);
        if (rel.startsWith('..') || path.isAbsolute(rel)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };

      server.watcher.on('add', onFsChange);
      server.watcher.on('unlink', onFsChange);
      server.watcher.on('change', onFsChange);
      server.watcher.on('unlinkDir', onFsChange);
    },

    closeBundle() {
      if (config.command !== 'build') return;
      removeDocFiles(path.resolve(config.root, config.build.outDir, SUB_DIR));
    },
  };
}
