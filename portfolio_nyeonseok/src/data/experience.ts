import type { CaseStudy, Tone } from './types';

export interface Experience {
  id: string;
  tone: Tone;
  title: string;
  org: string;
  employment: string;
  period: string;
  role: string;
  summary: string;
  incident: CaseStudy;
  takeaway: string;
  duties: string[];
  tech: string[];
  /** 같은 소속에서의 보조 경험 — 한 줄 수준 */
  related?: { title: string; period: string; detail: string }[];
}

export const experiences: Experience[] = [
  {
    id: 'transit-card',
    tone: 'sky',
    title: '대구·경북 어르신 무임 교통카드 공공 시스템',
    org: 'CODE JS',
    employment: '프리랜서 개발자',
    period: '2025.06.19 – 2025.12.19',
    role: 'WEB/WAS 유지보수 · 운영 · 데이터 조회 · 장애 대응',
    summary:
      '망분리된 공공 운영환경에서 WebtoB + JEUS + Tibero 기반 시스템을 6개월간 운영하며 로그·배치·DB·민원·이상접근 이슈를 대응했습니다.',

    incident: {
      id: 'encryption-license',
      title: '암호화 모듈 라이선스 만료 장애',
      flows: [
        {
          title: '대응 흐름',
          steps: [
            '이상 데이터 발견',
            '서버 로그 확인',
            '암호화 모듈 라이선스 만료 특정',
            '이중화된 두 서버에 순차 적용',
            { text: '정상 암호화 확인', tag: '검증' },
            '평문 약 50건 추출',
            '재암호화',
            { text: '기존 데이터와 건별 정합성 검증', tag: '검증' },
          ],
        },
      ],
      problem: [
        '선임이 부재한 상황에서 모니터링 중 데이터 적재 방식의 이상을 발견했습니다. 애플리케이션을 바로 수정하기보다 서버 로그를 먼저 추적했고, 암호화 모듈 라이선스 만료로 일부 데이터가 평문으로 저장되고 있음을 확인했습니다.',
      ],
      decision: [
        '두 서버를 동시에 변경하면, 교체 과정에서 문제가 생겼을 때 정상 서버가 남지 않는다고 판단했습니다.',
      ],
      actions: [
        '한 서버에 먼저 새 라이선스 적용',
        '암호화 정상 동작을 확인한 뒤 두 번째 서버에 순차 적용',
        '보안 공백 기간에 평문 저장된 약 50건을 DataGrip으로 전수 추출',
        '데이터를 재암호화한 뒤 기존 데이터와 건별 비교',
      ],
      results: [
        '이후 적재 데이터의 정상 암호화 확인',
        '평문 저장 약 50건 재암호화 완료',
        '기존 저장 데이터와 건별 정합성 일치 확인',
      ],
    },
    takeaway:
      '운영에서는 원인을 제거하는 것만으로 끝내지 않고, 변경 후 서비스와 데이터가 실제 정상 상태로 돌아왔는지까지 확인합니다.',

    duties: [
      '서버 용량 및 로그 모니터링, 로그 백업',
      '배치 오류와 서비스 이슈 확인 및 대응',
      '이상 접근자 모니터링·문서화',
      '현업 데이터 요청의 목적과 조회 조건을 확인한 뒤 SQL 작성 및 CSV 전달',
      'SQL 쿼리 개선',
      'WEB 페이지 개발 및 UX 개선',
      '외부 진입 트래픽을 DNAT으로 내부 서버에 매핑하는 환경에서 WebtoB(WEB) + JEUS(WAS) 운영',
      '시연 환경에서 외부 통신 없이 실행할 수 있도록 네트워크 통신 부분 수정',
    ],
    tech: ['WebtoB', 'JEUS', 'Tibero', 'SQL', 'DataGrip', 'Spring Boot', 'Linux', 'NAT'],

    related: [
      {
        title: 'LG SHOPTIME 서비스 페이지 개발·유지보수',
        period: '2025.06 – 2025.12',
        detail: '기능 명세서 기반 신규 서비스 페이지 개발과 운영 중 페이지 오류 대응 (jQuery)',
      },
    ],
  },
];
