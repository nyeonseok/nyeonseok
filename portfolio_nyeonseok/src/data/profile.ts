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

  skills: [
    { area: 'Backend', items: 'Spring Boot · Java · Spring Security · JPA · JWT · Python · FastAPI 연동' },
    { area: 'Database', items: 'PostgreSQL · MySQL · Tibero · Flyway · DataGrip' },
    { area: 'Testing', items: 'JUnit · Testcontainers' },
    {
      area: 'AI / Agent',
      items: 'OpenAI API · LangGraph · Custom MCP · Hugging Face · Transformers · Qwen2.5-VL · PyTorch · PEFT · LoRA · BitsAndBytes',
    },
    { area: 'Infra / Operations', items: 'AWS · S3 · Docker · Linux · Nginx · WebtoB · JEUS · NAT · k3s' },
    { area: 'Observability', items: 'Prometheus · Grafana · Loki · Tempo' },
    { area: 'Frontend', items: 'React · TypeScript · JavaScript · HTML · CSS · Zustand' },
    { area: 'Collaboration', items: 'Git · GitHub · GitLab · Jira · Notion' },
  ],
};
