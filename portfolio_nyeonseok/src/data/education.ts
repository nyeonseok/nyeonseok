export interface EducationItem {
  title: string;
  org: string;
  period: string;
  role?: string;
  /** 눈에 띄게 보여줄 성과 (수상이 아닌 것 포함) */
  highlights?: string[];
  points: string[];
}

/** 노출 순서 = 배열 순서. 최신 활동(종료일이 늦은 것)이 위로 오도록 유지한다. */
export const education: EducationItem[] = [
  {
    title: '삼성청년SW·AI아카데미 1학기 — SW·AI 이론 및 실습 과정',
    org: '삼성청년SW·AI아카데미 (SSAFY)',
    period: '2026.01.07 – 2026.06.26',
    highlights: ['삼성 SW 역량테스트 A형'],
    points: [
      '알고리즘·자료구조, Java 객체지향, Spring Boot · MyBatis · REST API, Vue.js, SQL·DB 모델링 학습',
      '생성형 AI · 머신러닝/딥러닝 · LangChain/Agent · Fine-tuning · MCP 학습',
      '매일 알고리즘 문제를 풀며 학습하고 삼성 SW 역량테스트 A형 취득',
    ],
  },
  {
    title: '미지수',
    org: '미지수',
    period: '2019.03.15 – 2026.02.20',
    role: '기획부장',
    points: [
      '1년 단위 행사와 일정을 기획·운영',
      '기획부원 의견을 수렴해 역할과 진행 방식을 조율하고, 준비부터 실행까지 일정 관리',
    ],
  },
  {
    title: '멋쟁이사자처럼',
    org: '멋쟁이사자처럼',
    period: '2025.03.04 – 2025.12.31',
    highlights: ['교내 아이디어톤 1위', 'ILKAN 약 250개 팀 중 상위 6%'],
    points: [
      '딥페이크·딥보이스 문제를 주제로 AI 보안 솔루션 기획, 교수 자문과 타깃층 필드리서치로 구현 가능성과 필요성 검증',
      '교내 아이디어톤 1위',
      '중앙 해커톤에서 ILKAN의 Frontend · Infra · PM 역할 수행 — 총 1,500명 · 약 250개 팀 중 상위 6%',
    ],
  },
  {
    title: '수학학원 보조강사',
    org: '윌수학학원',
    period: '2022.12.01 – 2025.06.30',
    role: '보조강사',
    points: [
      '초·중·고 학생 대상 시험문제 채점·풀이, 교재 제작, 문서 및 데스크 업무',
      '답을 바로 알려주기보다 학생이 막힌 지점을 파악해 이해 가능한 방식으로 설명 — 2년 7개월 근무',
    ],
  },
  {
    title: '교생실습',
    org: '동부고등학교',
    period: '2025.05.07 – 2025.05.30',
    role: '고등학교 수학 교생',
    points: [
      '고등학교 1학년 공통수학 18회 수업, 학생 상담, 기말고사 문제 제작',
      '매 수업 후 판서와 설명을 복기하고 담당교사 피드백을 다음 수업에 반영',
    ],
  },
  {
    title: '대구경북혁신대학',
    org: '대구경북혁신대학',
    period: '2023.03.06 – 2024.12.31',
    highlights: ['특허 출원'],
    points: [
      'AI 교육을 통해 데이터 가공과 모델 학습의 기본 과정 학습, Transformer 기반 AI 모델 개발 및 학습 데이터 처리 경험',
      '제주도 팀 프로젝트에서 특산품을 활용한 지역 문제 해결 아이디어를 구체화해 관련 특허 출원',
    ],
  },
];
