export interface Award {
  date: string;
  title: string;
  org: string;
  related?: { label: string; to: string };
}

/**
 * 실제 수상만 넣는다.
 * ILKAN 상위 6%, 특허 출원, 삼성 SW 역량테스트 A형은 수상이 아니므로 education.ts에서 보여준다.
 */
export const awards: Award[] = [
  {
    date: '2026.06',
    title: 'SSAFY 1학기 최종 관통 프로젝트 최우수상',
    org: '삼성청년SW·AI아카데미 (SSAFY) 프로젝트 경진대회',
    related: { label: 'Trip Baton', to: '/projects/trip-baton' },
  },
  {
    date: '2025',
    title: '멋쟁이사자처럼 교내 아이디어톤 1위',
    org: '멋쟁이사자처럼',
  },
];
