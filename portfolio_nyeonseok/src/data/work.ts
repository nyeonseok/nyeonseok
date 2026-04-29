export interface Achievement { title: string; description: string; metric?: string; }

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
    id: 'daegu-transport',
    title: '대구경북 어르신 무임 교통카드',
    subtitle: '지자체 무임 교통카드 관리 시스템 유지보수 및 인프라 관리',
    description:
      '대구·경북 지자체 행정복지센터에서 사용하는 무임 교통카드 관리 시스템의 유지보수를 담당했습니다. 교통카드 이용 고객 정보 및 데이터를 관리하며, 서버 라이선스 문제 해결과 암호화 전환을 통해 서비스 안정성을 대폭 향상시켰습니다.',
    period: '2025.06 ~ 2025.12',
    role: '프로젝트 유지보수 및 인프라 관리',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    techStack: ['Spring Boot', 'Tibero', 'Tibero Studio', 'SG Client', 'CHAKRA', 'SQL'],
    responsibilities: [
      'DB 용량 모니터링 및 로그 관리',
      '클라이언트–서버 통신 상태 점검',
      '서버 배포 및 운영 관리',
      '타 부서 요청에 따른 DB 데이터 조회 및 SQL 작성',
      '모바일 카드 발급 관련 민원 및 서비스 오류 대응',
    ],
    achievements: [
      {
        title: '서버 라이선스 문제 해결',
        description: '라이선스 교체로 고객 정보 조회 오류 해결, 평문 저장 데이터를 암호화 방식으로 전환',
      },
      {
        title: '서비스 민원 감소',
        description: '체계적인 오류 대응 및 서비스 안정화 작업',
        metric: '민원 약 70% 감소',
      },
      {
        title: '교통카드 이용 증가',
        description: '서비스 안정화 후 무임 교통카드 이용 금액 증가 (2025년 9월, 전월 대비)',
        metric: '↑ 79.7백만원 (11.4%)',
      },
    ],
    featured: true,
  },
  {
    id: 'lg-shoptime',
    title: 'LG SHOPTIME',
    subtitle: 'LG SHOPTIME 프로모션 페이지 개발 및 운영 유지보수',
    description:
      'LG SHOPTIME 서비스 운영 과정에서 필요한 프로모션 및 서비스 페이지를 개발하고, 운영 중 발생하는 이슈를 대응하며 서비스 안정성을 유지했습니다. 기획 및 타 부서와의 긴밀한 커뮤니케이션으로 요구사항을 빠르게 반영했습니다.',
    period: '2025.06 ~ 2025.12',
    role: '서비스 페이지 개발 및 유지보수',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    techStack: ['jQuery', 'HTML5', 'CSS3'],
    responsibilities: [
      '기능 명세서 기반 신규 서비스 페이지 개발',
      '운영 중 발생한 페이지 오류 및 기능 이슈 대응',
      '기존 페이지 유지보수 및 기능 수정',
      '기획 및 타 부서와의 요구사항 반영 커뮤니케이션',
    ],
    achievements: [
      {
        title: '명세서 기반 개발',
        description: '명세서 기반 개발로 서비스 기능 확장 지원',
      },
      {
        title: '서비스 안정적 운영',
        description: '이슈 대응을 통한 서비스 안정적 운영 기여',
      },
      {
        title: '실무 커뮤니케이션',
        description: '기획 및 타 부서와의 요구사항 협의 및 빠른 반영',
      },
    ],
    featured: true,
  },
];
