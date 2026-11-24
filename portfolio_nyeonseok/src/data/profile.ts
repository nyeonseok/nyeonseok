export const profile = {
  name: '안현석',
  nameEn: 'An Hyeon-seok',
  email: 'aragorn2358@naver.com',
  github: 'https://github.com/nyeonseok',
  education: '영남대학교 수학과 · 컴퓨터공학과',
  gpa: '3.94 / 4.50',

  headline: ['익숙함에 안주하지 않고', '도전하는 개발자'],
  summary: '운영 환경의 문제부터 Backend 신뢰성, AI Application, 서비스 성능까지 직접 부딪히며 해결해왔습니다.',
  method: '문제는 로그·데이터·수치로 원인을 확인하고, 구조를 바꾼 뒤 실제 정상 상태까지 검증합니다.',
  keywords: [
    'Backend',
    'System Reliability',
    'Problem Solving',
    'AI Application',
    'Service Operation',
    'Performance',
    'Observability',
  ],

  strengths: [
    '운영 장애를 로그와 데이터로 좁히고 정상화까지 검증합니다.',
    '동시 요청·재시도·타임아웃에서도 데이터와 비용이 어긋나지 않도록 Backend 흐름을 설계합니다.',
    '성능 병목을 실제 실행환경에서 측정하고 구조적으로 개선합니다.',
    'AI 결과를 그대로 신뢰하지 않고 검증·승인·재시도 경계를 서비스 요구사항에 맞게 설계합니다.',
    'Frontend / Backend / Infra 간 경계를 이해하고 필요한 데이터 구조와 실행 흐름을 조율합니다.',
  ],

  /** 로고는 data/skillIcons.ts에서 이름으로 찾는다. 로고가 없는 기술은 텍스트 칩으로 나온다. */
  skills: [
    {
      area: 'Backend',
      desc: 'Spring Boot로 인증·이미지 업로드·AI 연동 API를 만들고, 동시 요청과 재시도에도 데이터가 어긋나지 않게 설계합니다.',
      items: ['Spring Boot', 'Java', 'Spring Security', 'JPA', 'JWT', 'Python', 'FastAPI 연동'],
    },
    {
      area: 'Database',
      desc: 'PostgreSQL 스키마를 Flyway로 관리하고, 공공 운영 환경에서는 Tibero 데이터를 DataGrip으로 직접 조회·추출했습니다.',
      items: ['PostgreSQL', 'MySQL', 'Tibero', 'Flyway', 'DataGrip'],
    },
    {
      area: 'Testing',
      desc: 'Testcontainers로 실제 PostgreSQL을 띄워 Repository·DB 제약·동시성까지 테스트합니다.',
      items: ['JUnit', 'Testcontainers'],
    },
    {
      area: 'AI / Agent',
      desc: 'Qwen2.5-VL-7B를 4-bit 양자화와 LoRA로 파인튜닝했고, LangGraph·Custom MCP 기반 AI Agent 서비스에서 MCP를 기획했습니다.',
      items: [
        'OpenAI API', 'LangGraph', 'Custom MCP', 'Hugging Face', 'Transformers',
        'Qwen2.5-VL', 'PyTorch', 'PEFT', 'LoRA', 'BitsAndBytes',
      ],
    },
    {
      area: 'Infra / Operations',
      desc: '망분리 공공 환경에서 WebtoB·JEUS 기반 시스템을 6개월간 운영했고, AWS·Docker·k3s 환경을 구성합니다.',
      items: ['AWS', 'S3', 'Docker', 'Linux', 'Nginx', 'WebtoB', 'JEUS', 'NAT', 'k3s'],
    },
    {
      area: 'Observability',
      desc: 'Prometheus·Loki·Tempo로 Metric·Log·Trace를 모아 Grafana에서 함께 확인하는 환경을 구성했습니다.',
      items: ['Prometheus', 'Grafana', 'Loki', 'Tempo'],
    },
    {
      area: 'Frontend',
      desc: 'React·TypeScript로 화면을 만들고, Zustand로 사용자·SSE·카메라/마이크 상태를 관리했습니다.',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Zustand'],
    },
    {
      area: 'Collaboration',
      desc: 'Git·GitHub Flow로 협업하고, Jira·Notion으로 일정과 이슈를 관리합니다.',
      items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Notion'],
    },
  ],
};
