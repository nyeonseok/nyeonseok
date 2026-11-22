/**
 * 포트폴리오 콘텐츠 타입.
 * 모든 문구·수치의 원본은 저장소 루트의 `안현석info.md`이다. 내용을 바꿀 때는 그 문서를 먼저 고친다.
 */

/** 프로젝트별 색. 실제 색 값은 index.css의 [data-tone] 정의에 있다. */
export type Tone = 'green' | 'blue' | 'rose' | 'amber' | 'violet' | 'sky' | 'orange' | 'teal';

export interface KeyResult {
  value: string;
  label: string;
}

export interface DataTable {
  caption: string;
  columns: string[];
  rows: string[][];
  /** 숫자 열(오른쪽 정렬). 지정하면 모바일에서도 표 형태를 유지한다. */
  numeric?: boolean[];
  /** 마지막 열을 '개선 후' 값처럼 강조 */
  emphasizeLast?: boolean;
}

export type FlowStep = string | { text: string; tag?: string };

export interface Flow {
  title: string;
  steps: FlowStep[];
  note?: string;
}

/** 문제 → 판단 → 해결 → 결과 */
export interface CaseStudy {
  id: string;
  title: string;
  problem?: string[];
  decision?: string[];
  actions?: string[];
  /** '해결' 아래에 놓이는 표 (판단 기준, 구성 등) */
  table?: DataTable;
  results?: string[];
  /** '결과' 아래에 놓이는 표 (개선 전후 측정값 등) */
  resultTable?: DataTable;
  /** 사례를 이해하는 데 필요한 흐름. 2개면 나란히(초기 → 변경 후) 표시 */
  flows?: Flow[];
  /** public/projects/<slug>/<media>/ 의 이미지를 이 사례 아래에 표시 */
  media?: string;
}

export interface ContributionGroup {
  title: string;
  items: string[];
}

export interface RetroItem {
  label: string;
  /** 비어 있으면 화면에 나오지 않는다. 모든 항목이 비면 회고 섹션 전체가 숨겨진다. */
  body?: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

/**
 * public/projects/<slug>/<dir>/ 폴더를 상세 페이지 어디에 보여줄지.
 * cover 폴더는 카드와 상세 상단에 자동으로 쓰이므로 여기에 적지 않는다.
 */
export interface MediaFolder {
  dir: string;
  label: string;
  placement: 'screens' | 'cases' | 'results' | 'flow';
}

export interface Project {
  slug: string;
  name: string;
  tone: Tone;
  /** 한 줄 설명 */
  tagline: string;
  /** 예: SSAFY 자율 프로젝트 */
  context: string;
  period: string;
  org: string;
  role: string;
  team?: string;

  /** 목록 카드에 보여줄 최소 정보 */
  card: {
    role: string;
    stack: string[];
    /** 대표 이미지가 없을 때 카드 상단에 크게 보여줄 대표 결과 */
    metric: KeyResult;
    /** 대표 이미지가 있을 때 카드 본문에 보여줄 대표 결과 한 줄 */
    highlight: string;
  };

  stack: string[];
  keyResults?: KeyResult[];
  keyResultsNote?: string;

  /** 서비스 소개 — 팀 전체 기준 */
  overview: string[];
  /** 개인 기여 — 내가 맡은 부분 */
  focus?: string;
  contributions: ContributionGroup[];

  cases: CaseStudy[];
  outcomes?: string[];
  flows?: Flow[];
  takeaway?: string;
  retrospective?: RetroItem[];
  links?: ExternalLink[];

  media: MediaFolder[];
  /** 키: `<folder>/<file>` (예: 'screens/01-main.webp'), 값: 캡션 겸 대체 텍스트 */
  captions?: Record<string, string>;
}

export interface SmallProject {
  slug: string;
  name: string;
  tone: Tone;
  tagline: string;
  period: string;
  org: string;
  role: string;
  stack: string[];
  problem: string;
  actions: string[];
  results: KeyResult[];
  note?: string;
  links?: ExternalLink[];
  captions?: Record<string, string>;
}
