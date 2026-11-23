/** 목록에서 다룬 문제를 먼저 읽을 수 있도록 기존 사례를 요약합니다. */
export const projectTopics: Record<string, { title: string; categories: string[] }> = {
  geomate: { title: '유료 AI 호출의 중복 실행과 이중 과금 막기', categories: ['Backend', 'AI'] },
  projectree: { title: '3D 트리 렌더링 병목을 측정하고 개선하기', categories: ['Frontend', '성능'] },
  sadala: { title: 'AI 주식 주문에 사용자 승인 단계 두기', categories: ['AI', '운영·인프라'] },
  'trip-baton': { title: '웹과 모바일을 함께 고려한 여행 PWA 만들기', categories: ['Frontend'] },
  vqa: { title: '제한된 GPU에서 VLM 학습하고 검증하기', categories: ['AI'] },
};
export const projectCategories = ['전체', 'Backend', 'Frontend', 'AI', '성능', '운영·인프라'];
