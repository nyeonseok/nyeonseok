import type { Project } from '../types';

const tripBaton: Project = {
  slug: 'trip-baton',
  name: 'Trip Baton',
  tone: 'amber',
  tagline: '생성형 AI와 배치 기능을 활용한 여행 PWA 서비스',
  context: 'SSAFY 1학기 최종 관통 프로젝트',
  period: '2026.06.08 – 2026.06.26',
  org: '삼성청년SW·AI아카데미 (SSAFY)',
  role: 'Frontend 아키텍처 · UI/UX · 일부 Backend · 일정 관리',
  team: '2인 팀',

  card: {
    role: 'Frontend 아키텍처 · UI/UX · 일정 관리',
    stack: ['React', 'TypeScript', 'FSD', 'PWA', 'OpenAI API'],
    metric: { value: '최우수상', label: 'SSAFY 1학기 최종 관통 프로젝트' },
    highlight: 'SSAFY 1학기 최종 관통 프로젝트 최우수상',
  },

  stack: ['React', 'TypeScript', 'FSD', 'PWA', 'Zustand', 'OAuth', 'JWT', 'S3', 'OpenAI API'],

  keyResults: [{ value: '최우수상', label: 'SSAFY 1학기 최종 관통 프로젝트' }],

  overview: [
    '여행 경험을 릴레이처럼 다음 사람에게 이어가는 여행 서비스입니다. 생성형 AI와 배치 기능을 활용했고, PWA 기반 웹앱으로 만들어 하나의 코드베이스에서 웹과 모바일 환경을 구분해 제공합니다.',
  ],

  focus:
    'Frontend 아키텍처와 모바일 UX, 인증·파일 업로드, AI 연동, 팀 일정 관리를 맡았습니다.',

  contributions: [
    {
      title: 'Frontend 구조',
      items: [
        'FSD(Feature-Sliced Design) 도입, 도메인별 ui / api / hook 분리',
        '웹/모바일 환경에 따라 UI 분기',
        'Zustand + persist를 이용한 전역 상태관리',
      ],
    },
    {
      title: '모바일 UX',
      items: [
        'PWA 설치 지원, 비모바일 환경에서 QR을 이용한 모바일 접근',
        '하단 네비게이션 · Drag Bottom Sheet · Toast',
        'Promise 기반 Confirm Modal, Route Guard',
      ],
    },
    {
      title: '인증 · 파일 업로드',
      items: [
        'Kakao / Google OAuth 로그인, JWT 기반 인증/인가',
        'Axios Interceptor로 Access Token 주입',
        'Presigned URL을 이용해 Frontend가 S3에 직접 이미지 업로드',
      ],
    },
    {
      title: 'AI · Batch · Search',
      items: [
        'OpenAI API 연동, 일정 주기로 작동하는 Batch 기능 구현',
        '검색 입력에 debounce 적용, 검색 기능을 재사용 가능한 컴포넌트로 분리',
      ],
    },
    {
      title: '프로젝트 관리',
      items: ['Jira · Notion을 이용해 일정 및 이슈 관리'],
    },
  ],

  cases: [
    {
      id: 'web-mobile',
      title: '하나의 코드베이스로 웹과 모바일 UX 제공',
      problem: ['하나의 코드베이스에서 웹과 모바일 UX를 동시에 만족시켜야 했습니다.'],
      decision: [
        'FSD를 도입해 도메인별로 ui / api / hook을 나누고, 웹/모바일 분기도 도메인 단위에서 처리하기로 했습니다. 도메인 단위로 로직을 확인할 수 있어 유지보수가 쉬워진다고 판단했습니다.',
      ],
      actions: [
        '도메인별 폴더에서 웹/모바일 환경에 따라 UI 분기',
        '모바일에서는 하단 네비게이션 · Drag Bottom Sheet · Toast 등 앱에 가까운 컴포넌트로 렌더링',
        'PWA로 설치를 지원하고, 비모바일 환경에서는 QR로 모바일 접근을 안내',
      ],
      results: [
        '하나의 코드베이스에서 웹/모바일 환경을 구분한 PWA 서비스 구현',
        '도메인 단위 책임 분리로 코드 구조 정리',
      ],
    },
    {
      id: 'ai-format',
      title: 'AI 응답 형식 고정',
      problem: ['같은 요청에도 AI 응답 형식이 일정하지 않아, 서비스가 결과를 바로 처리하기 어려웠습니다.'],
      decision: ['원하는 응답 형식을 예시와 함께 제시해 형식부터 고정하기로 했습니다.'],
      actions: [
        'One-shot Prompting으로 원하는 응답 형식을 얻도록 프롬프트 구성',
        '백엔드에서 항상 파싱 가능한 형태의 값을 프론트로 전달',
      ],
      results: ['생성형 AI · 배치 기능을 실제 사용자 흐름에 연결'],
    },
  ],

  retrospective: [
    { label: '처음 아키텍처를 맡으며 배운 점' },
    { label: '가장 잘한 선택' },
    { label: '기술적으로 아쉬웠던 점' },
    { label: '다시 만든다면 바꾸고 싶은 점' },
    { label: '이 프로젝트 이후 달라진 개발 방식' },
  ],

  links: [
    { label: 'GitHub', href: 'https://github.com/SSAFY-TRIP-AL' },
    { label: '서비스', href: 'https://tripbaton.vercel.app/' },
  ],

  media: [
    { dir: 'screens', label: '서비스 화면', placement: 'screens' },
    { dir: 'results', label: '결과 자료', placement: 'results' },
    { dir: 'architecture', label: 'Architecture', placement: 'flow' },
  ],
  captions: {
    'cover/cover.webp': 'Trip Baton 대표 이미지 — AI Travel Relay Platform',
    'screens/01-main.webp': '메인 화면 — 진행 중인 릴레이와 참여 현황, QR 코드로 모바일 접근',
    'screens/02-relay.webp': '릴레이 경로 — 참여 지역을 지도 위 선으로 연결하고 AI 지역 설명 표시',
    'screens/03-relay-detail.webp': '릴레이 상세 — 지나온 지역과 AI 추천 여행지',
    'screens/04-demo.mp4': '서비스 시연 영상',
  },
};

export default tripBaton;
