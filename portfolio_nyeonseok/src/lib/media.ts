import manifest, { type ProjectAsset } from 'virtual:project-images';

export type { ProjectAsset };

/** public/projects/<slug>/<folder>/ 의 파일 목록. 폴더가 없거나 비어 있으면 빈 배열 */
export function getAssets(slug: string, folder: string): ProjectAsset[] {
  return manifest[slug]?.[folder] ?? [];
}

/** cover 폴더의 첫 번째 이미지 */
export function getCover(slug: string): ProjectAsset | undefined {
  return getAssets(slug, 'cover').find((a) => a.kind === 'image');
}
