export interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  role: string;
  gradient: string;
  techStack: string[];
  responsibilities: string[];
  achievements: Achievement[];
  featured?: boolean;
}

export const workProjects: WorkProject[] = [
  {
    id: "daegu-transport",
    title: "대구경북 어르신 무임 교통카드",
    subtitle: "공공 시스템 WEB & WAS 유지보수 · 운영 · 인프라 관리",
    description:
      "대구·경북 지자체 행정복지센터에서 사용하는 무임 교통카드 관리 시스템입니다. 교통카드 이용 고객 정보 및 무임 교통카드 이용 데이터를 관리하며, 외부 진입 트래픽(100.x)을 DNAT으로 내부 서버(5.x)에 매핑하는 네트워크 구조에서 WebtoB(WEB) + JEUS(WAS) 기반 시스템을 운영·유지보수했습니다.",
    period: "2025.06 ~ 2025.12",
    role: "공공 시스템 WEB & WAS 유지보수 · 운영 · 인프라 관리",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    techStack: [
      "WebtoB",
      "JEUS",
      "Tibero",
      "Tibero Studio",
      "DataGrip",
      "SG Client",
      "CHAKRA",
      "Spring Boot",
    ],
    responsibilities: [
      "서버 용량·로그 모니터링 및 로그 일일 백업",
      "서버 모니터링 및 이슈 대응·트러블 슈팅",
      "클라이언트–서버 통신 상태 점검 및 이슈 대응 (배치 오류, 통신 오류, 민원)",
      "서비스 이상 접근자 모니터링 및 문서화 → 차단",
      "타 부서 요청에 따른 DB 조회 및 SQL 쿼리 개선",
      "WEB 페이지 개발 및 UX 개선",
      "모바일 카드 발급 관련 민원 및 서비스 오류 대응",
    ],
    achievements: [
      {
        title: "암호화 모듈 라이선스 만료 장애 대응",
        description:
          "선임 부재 상황에서 서버 로그를 정밀 분석해 암호화 모듈의 라이선스 만료로 데이터가 평문 저장되고 있음을 식별. 이중화된 서버에 텀을 두고 순차적으로 라이선스를 교체해 전면 장애를 방지하고, 평문 저장 데이터를 DataGrip으로 전수 추출·재암호화하여 정합성을 건별 검증",
        metric: "평문 데이터 약 50건 재암호화 완료",
      },
      {
        title: "비결정론적 장애 분석 및 인프라 설정 동기화",
        description:
          "운영-개발 환경 간 설정 불일치로 발생한 장애를 해결하기 위해 미들웨어 설정 파일 및 환경 변수를 정밀 대조. 운영 환경에만 적용된 타임아웃 임계치와 라이선스 로드 방식 차이를 찾아내어 환경 간 설정을 동기화하고 운영 표준 수립",
        metric: "데이터 연동 오류 원인 격리 및 재발 방지",
      },
      {
        title: "이상 접근자 모니터링",
        description:
          "서비스 이상 접근자를 모니터링·문서화해 차단하고 이해관계자에게 현황 전파",
      },
      {
        title: "서비스 민원 감소",
        description:
          "로그 분석 기반 배치 오류 원인 파악 및 체계적인 오류 대응으로 서비스 안정화",
        metric: "민원 약 70% 감소",
      },
      {
        title: "교통카드 이용 증가",
        description:
          "서비스 안정화 후 무임 교통카드 이용 금액 증가 (2025년 9월, 전월 대비)",
        metric: "↑ 79.7백만원 (11.4%)",
      },
    ],
    featured: true,
  },
  {
    id: "lg-shoptime",
    title: "LG SHOPTIME",
    subtitle: "LG SHOPTIME 프로모션 페이지 개발 및 운영 유지보수",
    description:
      "LG SHOPTIME 서비스 운영 과정에서 필요한 프로모션 및 서비스 페이지를 개발하고, 운영 중 발생하는 이슈를 대응하며 서비스 안정성을 유지했습니다. 기획 및 타 부서와의 긴밀한 커뮤니케이션으로 요구사항을 빠르게 반영했습니다.",
    period: "2025.06 ~ 2025.12",
    role: "서비스 페이지 개발 및 유지보수",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    techStack: ["jQuery", "HTML5", "CSS3"],
    responsibilities: [
      "기능 명세서 기반 신규 서비스 페이지 개발",
      "운영 중 발생한 페이지 오류 및 기능 이슈 대응",
      "기존 페이지 유지보수 및 기능 수정",
      "기획 및 타 부서와의 요구사항 반영 커뮤니케이션",
    ],
    achievements: [
      {
        title: "명세서 기반 개발",
        description: "명세서 기반 개발로 서비스 기능 확장 지원",
      },
      {
        title: "서비스 안정적 운영",
        description: "이슈 대응을 통한 서비스 안정적 운영 기여",
      },
      {
        title: "실무 커뮤니케이션",
        description: "기획 및 타 부서와의 요구사항 협의 및 빠른 반영",
      },
    ],
    featured: true,
  },
];
