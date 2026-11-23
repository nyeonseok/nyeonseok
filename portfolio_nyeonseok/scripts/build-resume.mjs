// resume/resume.html → public/resume.pdf
// 사용법: npm run resume   (Chrome 또는 Edge가 필요하다. 다른 경로면 CHROME_PATH 로 지정)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'resume', 'resume.html');
const output = path.join(root, 'public', 'resume.pdf');

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((candidate) => candidate && existsSync(candidate));

if (!browser) {
  console.error('Chrome 또는 Edge를 찾지 못했습니다. CHROME_PATH 환경변수로 실행 파일 경로를 지정하세요.');
  process.exit(1);
}

// 사용 중인 브라우저 프로필과 겹치지 않도록 임시 프로필로 실행한다.
const profile = mkdtempSync(path.join(tmpdir(), 'resume-chrome-'));
try {
  execFileSync(browser, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${output}`,
    pathToFileURL(input).href,
  ], { stdio: 'ignore' });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

const kb = Math.round(statSync(output).size / 1024);
console.log(`이력서 PDF 생성: ${path.relative(root, output)} (${kb} KB)`);
