import type { Project } from '../types';

const sadala: Project = {
  slug: 'sadala',
  name: '사달라',
  tone: 'rose',
  tagline: '자연어 기반 AI Agent 주식 서비스',
  context: 'SSAFY 특화 프로젝트',
  period: '2026.08.17 – 2026.09.28',
  org: '삼성청년SW·AI아카데미 (SSAFY)',
  role: 'Frontend · Infra · PM · MCP 기획',
  team: '팀 프로젝트',

  card: {
    role: 'Infra · MCP 기획 · PM · Frontend',
    stack: ['OpenAI API', 'LangGraph', 'Custom MCP', 'SSE', 'k3s'],
    metric: { value: '승인 후 실행', label: 'AI 주문 생성 → 사용자 승인 → Spring 실행' },
    highlight: 'AI 주문 생성 → 사용자 승인 → 실행으로 경계 분리',
  },

  stack: [
    'Spring Boot',
    'Python',
    'OpenAI API',
    'LangGraph',
    'Custom MCP',
    'SSE',
    'k3s',
    'Prometheus',
    'Grafana',
    'Loki',
    'Tempo',
    'AWS',
  ],

  keyResults: [
    { value: '4개', label: '자연어 기반 AI Agent 서비스' },
    { value: '승인 후 실행', label: '주식 주문 Human-in-the-loop' },
    { value: 'Metric · Log · Trace', label: '한곳에서 확인하는 관측 환경' },
  ],

  overview: [
    '자연어 요청을 기반으로 종목 뉴스 분석 · 시장 동향 분석 · 포트폴리오 제공 · 주식 구매를 수행하는 4개 AI Agent 서비스입니다.',
    '요청은 Spring을 거쳐 Python / OpenAI API, LangGraph, Custom MCP를 통해 외부 금융 API로 이어집니다.',
  ],

  focus:
    'AI가 판단하는 영역과 실제로 실행하는 영역의 경계를 정하고, 분리된 서비스 환경을 관찰할 수 있는 인프라를 만드는 일을 맡았습니다.',

  contributions: [
    {
      title: '실행 경계 · 통신',
      items: [
        '주식 주문의 Human-in-the-loop 적용과 실행 경계 변경',
        'SSE 연결 생명주기 개선 제안',
        'Custom MCP 기획',
      ],
    },
    {
      title: 'Infra',
      items: ['별도 EC2에 k3s 기반 Observability 환경 구축 (Prometheus · Grafana · Loki · Tempo)'],
    },
  ],

  cases: [
    {
      id: 'human-in-the-loop',
      title: '주식 주문의 Human-in-the-loop와 실행 경계 변경',
      problem: ['초기에는 주식 주문도 다른 Agent처럼 Custom MCP가 외부 API에 직접 요청하는 구조였습니다.'],
      decision: [
        '주식 주문은 단순 조회와 달리 사용자 계좌와 자산에 실제 영향을 주는 기능입니다. AI가 만든 결과를 즉시 실행하는 구조는 적절하지 않다고 판단했습니다.',
        '별도 주문 서버를 추가하기보다, 프로젝트 범위를 고려해 Spring에서 한국투자증권 API를 직접 호출하도록 바꿨습니다.',
      ],
      flows: [
        {
          title: '초기 구조',
          steps: ['자연어 주문 요청', 'AI Agent', 'Custom MCP', '외부 API에 직접 주문 요청'],
        },
        {
          title: '변경 후',
          steps: [
            '자연어 주문 요청',
            'AI Agent가 주문 정보 생성',
            { text: '사용자 확인 / 승인', tag: '사람' },
            'Spring',
            '한국투자증권 API 주문 실행',
          ],
        },
      ],
      actions: [
        'AI Agent는 주문 정보까지만 생성',
        '사용자가 주문 내용을 확인하고 최종 승인',
        '승인 이후 실제 실행은 MCP와 분리해 Spring에서 처리',
      ],
      results: [
        'AI 판단 단계와 실제 거래 실행 단계를 분리',
        'MCP 기반 조회/분석 흐름과 실제 주문 실행 경로 분리',
      ],
    },
    {
      id: 'sse-lifecycle',
      title: 'SSE 연결 생명주기 개선 제안',
      problem: [
        'Agent 처리가 비동기라 결과 전달에 SSE를 사용했습니다. 요청마다 SSE 연결을 만들고 결과 수신 후 종료하는 방식에서는, 사용자가 여러 채팅방에서 요청하면 한 사용자에게 여러 연결이 생길 수 있는 시나리오를 확인했습니다.',
      ],
      decision: ['연결을 요청 단위가 아니라 사용자 단위로 관리하면 생명주기가 단순해진다고 보고 구조 변경을 제안했습니다.'],
      actions: ['로그인 이후 SSE를 한 번 연결', '서비스 이용 중 하나의 연결을 유지'],
      results: ['제안한 방향으로 구조를 정리해 사용자별 연결 생명주기 단순화'],
    },
    {
      id: 'observability',
      title: 'k3s 기반 Observability 환경 구축',
      problem: ['서비스가 분리된 환경이라 각 서비스의 상태를 한곳에서 관찰할 방법이 필요했습니다.'],
      decision: [
        '별도 EC2에 관측 도구를 Pod 형태로 구성하고, 서로 다른 VPC 간 통신이 가능한 환경 위에서 Metric · Log · Trace를 함께 볼 수 있게 했습니다.',
      ],
      table: {
        caption: '구성',
        columns: ['도구', '역할'],
        rows: [
          ['Prometheus', 'Metric'],
          ['Grafana', 'Dashboard'],
          ['Loki', 'Log'],
          ['Tempo', 'Trace'],
        ],
      },
      results: ['Metric · Log · Trace를 함께 확인할 수 있는 관측 환경 구축'],
      media: 'observability',
    },
  ],

  flows: [
    {
      title: '서비스 흐름',
      steps: ['자연어 요청', 'Spring', 'Python / OpenAI API', 'LangGraph', 'Custom MCP', '외부 금융 API'],
    },
  ],

  takeaway:
    '기술적으로 가능한 구조를 그대로 유지하기보다, 기능이 사용자에게 미치는 영향에 따라 AI가 판단하는 영역과 실제 실행하는 영역의 경계를 다르게 설계했습니다.',

  retrospective: [
    { label: '프로젝트에서 가장 잘한 판단' },
    { label: '기술적으로 가장 많이 배운 점' },
    { label: '아쉬웠던 점 / 당시에는 놓쳤던 부분' },
    { label: '다시 만든다면 바꾸고 싶은 점' },
    { label: '이후 프로젝트에 실제로 적용한 변화' },
  ],

  media: [
    { dir: 'screens', label: '서비스 화면', placement: 'screens' },
    { dir: 'agent-flow', label: 'Agent 흐름', placement: 'flow' },
    { dir: 'architecture', label: 'Architecture', placement: 'flow' },
  ],
  captions: {},
};

export default sadala;
