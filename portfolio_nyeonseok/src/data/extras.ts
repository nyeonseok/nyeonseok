import type { FlowStep, KeyResult, Tone } from './types';

/** '프로젝트 외 자잘한 것들' — 정규 프로젝트는 아니지만 실제로 만들어서 쓰는 것들 */
export interface ExtraItem {
  id: string;
  tone: Tone;
  title: string;
  period: string;
  tools: string[];
  problem: string;
  flow: FlowStep[];
  points: string[];
  metric: KeyResult;
  result: string;
}

export const extras: ExtraItem[] = [
  {
    id: 'job-posting-automation',
    tone: 'teal',
    title: '생성형 AI 기반 채용공고 자동화',
    period: '2026.09 – 현재',
    tools: ['ChatGPT 예약 실행', 'Notion'],
    problem:
      '여러 채용 플랫폼과 기업 채용페이지를 반복해서 확인해야 했고, 기존 필터만으로는 개인 경험과 JD 적합도까지 판단하기 어려웠습니다.',
    flow: [
      '지원 조건 정의',
      '공고 탐색',
      '지원 가능 여부 판별',
      'JD 적합도 평가',
      '기존 DB 비교',
      '신규 저장 / 갱신',
      { text: '누락 검증', tag: '검증' },
    ],
    points: [
      'IT 직무 · 신입 · 정규직 · 기업규모 · 제외조건을 규칙으로 정의',
      '전공, SSAFY, 개발기술, WEB/WAS 운영, DB·장애대응 경험을 JD 적합도 기준으로 구조화',
      '한 번의 검색 결과를 그대로 신뢰하지 않고 공식 채용목록을 추가 확인, 미확인 기업군·직무군은 재검색',
    ],
    metric: { value: '하루 3~4개', label: '지원 가능한 신규 공고 · 약 1주 운영 기준' },
    result: '약 1주 운영 기준, 하루 평균 3~4개의 지원 가능한 신규 공고를 Notion에서 관리하고 있습니다.',
  },
];
