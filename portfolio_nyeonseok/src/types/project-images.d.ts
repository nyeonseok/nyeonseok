declare module 'virtual:project-images' {
  export interface ProjectAsset {
    src: string;
    /** `<folder>/<file>` — 데이터 파일의 captions 키 */
    key: string;
    kind: 'image' | 'video';
    width?: number;
    height?: number;
    /** 영상 전용: 같은 폴더의 `<영상 이름>.poster.webp` */
    poster?: string;
  }

  /** { [projectSlug]: { [folder]: ProjectAsset[] } } — 파일이 있는 폴더만 포함된다. */
  const manifest: Record<string, Record<string, ProjectAsset[]>>;
  export default manifest;
}
