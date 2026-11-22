import type { ProjectAsset } from '../lib/media';

interface MediaItemProps {
  asset: ProjectAsset;
  alt: string;
  caption?: string;
  /** 첫 화면에 보이는 이미지는 eager로 불러온다 */
  priority?: boolean;
}

export function MediaItem({ asset, alt, caption, priority = false }: MediaItemProps) {
  const media =
    asset.kind === 'video' ? (
      <video
        className="media__video"
        src={asset.src}
        poster={asset.poster}
        width={asset.width}
        height={asset.height}
        controls
        playsInline
        // 포스터가 있으면 재생 전까지 영상을 받지 않는다.
        preload={asset.poster ? 'none' : 'metadata'}
        aria-label={alt}
      />
    ) : (
      <img
        className="media__img"
        src={asset.src}
        alt={alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    );

  return (
    <figure className="media">
      {media}
      {caption && <figcaption className="media__caption">{caption}</figcaption>}
    </figure>
  );
}

interface GalleryProps {
  assets: ProjectAsset[];
  label: string;
  projectName: string;
  captions?: Record<string, string>;
}

/** 이미지가 하나도 없으면 아무것도 렌더링하지 않는다. */
export function Gallery({ assets, label, projectName, captions = {} }: GalleryProps) {
  if (assets.length === 0) return null;

  return (
    <div className={`gallery${assets.length === 1 ? ' gallery--single' : ''}`}>
      {assets.map((asset, i) => {
        const caption = captions[asset.key];
        return (
          <MediaItem
            key={asset.key}
            asset={asset}
            alt={caption ?? `${projectName} ${label} ${i + 1}`}
            caption={caption}
          />
        );
      })}
    </div>
  );
}
