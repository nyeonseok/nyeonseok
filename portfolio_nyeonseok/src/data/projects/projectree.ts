import type { Project } from '../types';

const projectree: Project = {
  slug: 'projectree',
  name: 'Projectree',
  tone: 'blue',
  tagline: 'WebRTC 기반 프로젝트 협업 서비스',
  context: 'SSAFY 공통 프로젝트',
  period: '2026.07.13 – 2026.08.10',
  org: '삼성청년SW·AI아카데미 (SSAFY)',
  role: 'PM · Frontend · 실시간 통신 · 성능 최적화',
  team: '6인 팀',

  card: {
    role: 'PM · Frontend · 성능 최적화',
    stack: ['React', 'Three.js', 'WebRTC', 'SSE', 'SQS'],
    metric: { value: '9.3 → 45.4', label: '3D 트리 평균 FPS · Label DOM 4,000 → 592' },
    highlight: '평균 FPS 9.3 → 45.4 · Label DOM 4,000 → 592',
  },

  stack: ['React', 'Three.js', 'OpenVidu', 'WebRTC', 'SSE', 'SQS', 'S3', 'Zustand', 'AWS'],

  keyResults: [
    { value: '9.3 → 45.4', label: '평균 FPS' },
    { value: '76.9% → 4.2%', label: '30FPS 미만 프레임' },
    { value: '4,000 → 592', label: 'Label DOM' },
    { value: '594.9MB → 205MB', label: 'JS Heap' },
  ],
  keyResultsNote: '실제 빌드 환경에서 동일한 3D 트리 데이터를 기준으로 개선 전후를 측정했습니다.',

  overview: [
    'WebRTC 화상회의의 음성을 STT와 생성형 AI로 처리해 회의록과 3D 프로젝트 트리로 시각화하고, 실시간 알림과 비동기 처리 기능을 연결한 협업 서비스입니다.',
  ],

  focus:
    'PM으로 스크럼과 Front/Back 조율을 맡으면서, Frontend의 실시간 통신과 3D 트리 렌더링 성능을 담당했습니다.',

  contributions: [
    {
      title: '성능 최적화',
      items: ['3D 트리 라벨 렌더링 병목 측정 및 구조 개선', '서버 트리 재조립을 없애는 데이터 구조 제안'],
    },
    {
      title: '실시간 통신 · 파일',
      items: [
        'OpenVidu와 통신해 회의방 생성·종료 기능 구현, OpenVidu를 별도 EC2에 분리 배치',
        '로그인 후 공통 Layout에서 SSE 자동 연결·재연결, Heartbeat와 lastEventId를 활용한 연결 관리',
        'OpenVidu 녹음 파일의 비동기 처리를 위해 SQS 활용',
        'Presigned URL을 이용해 Frontend에서 S3로 직접 이미지 업로드',
        'Zustand로 사용자, SSE, 카메라/마이크 트랙, 토스트, 로그인 모달 상태 관리',
      ],
    },
    {
      title: 'PM · Front/Back 조율',
      items: [
        '매일 오전 스크럼 진행, 개발 이슈와 변경사항 공유',
        'Frontend에서 필요한 데이터 형식과 Backend 처리 방식을 조율',
      ],
    },
  ],

  cases: [
    {
      id: 'rendering',
      title: '3D 트리 렌더링 병목 개선',
      flows: [
        {
          title: '진행 방식',
          steps: ['실제 실행환경에서 병목 측정', '원인을 좁힘', '구조 변경', { text: '동일 조건에서 다시 검증', tag: '재측정' }],
        },
      ],
      problem: ['모든 노드에 라벨을 표시하면서 약 4,000개의 DOM이 생성됐고, 평균 FPS가 9.3까지 하락했습니다.'],
      decision: [
        '체감으로 판단하지 않고, 실제 빌드 환경에서 동일한 3D 트리 데이터를 기준으로 개선 전후 성능을 측정했습니다.',
      ],
      actions: [
        '화면에 표시할 라벨 노드 수 제한',
        '디자인 변경 시 React state 변경으로 전체를 리렌더링하지 않도록 구조 변경',
        'ref로 DOM을 참조하고 useFrame에서 직접 갱신',
      ],
      resultTable: {
        caption: '개선 전후 — 실제 빌드 환경, 동일한 3D 트리 데이터',
        columns: ['지표', '개선 전', '개선 후'],
        rows: [
          ['Label DOM', '4,000', '592'],
          ['평균 FPS', '9.3', '45.4'],
          ['30FPS 미만 프레임', '76.9%', '4.2%'],
          ['라벨 리렌더', '5,373회', '0회'],
          ['JS Heap', '594.9MB', '205MB'],
        ],
        numeric: [false, true, true],
        emphasizeLast: true,
      },
      media: 'performance',
    },
    {
      id: 'tree-json',
      title: '반복되는 서버 트리 재조립 제거',
      problem: ['3D 트리를 조회할 때마다 서버에서 동일한 트리 구조를 다시 조립하고 있었습니다.'],
      decision: [
        '트리 데이터는 생성·수정보다 조회가 더 자주 발생합니다. 조회할 때마다 조립하기보다, 바뀔 때만 조립해 두는 편이 맞다고 판단했습니다.',
      ],
      flows: [
        { title: '기존', steps: ['3D 트리 조회 요청', '서버에서 트리 구조 조립 (매 조회)', '응답'] },
        {
          title: '제안한 구조',
          steps: [
            '생성 · 수정 · 삭제 시에만 DFS로 트리 조립',
            'Three.js가 바로 쓸 수 있는 JSON 형태로 저장',
            { text: '조회 시 저장된 JSON을 그대로 반환', tag: '조립 없음' },
          ],
        },
      ],
      actions: [
        '위 구조를 제안하고, Frontend에 필요한 데이터 형식과 서버 처리 방식을 조율',
      ],
      results: ['조회마다 반복되던 트리 재조립 연산 제거'],
    },
  ],

  takeaway:
    '동작하는 기능을 그대로 두지 않고 실제 실행환경에서 병목을 측정 → 원인을 좁힘 → 구조를 변경 → 동일 조건에서 다시 검증했습니다.',

  retrospective: [
    { label: '프로젝트에서 가장 잘한 판단' },
    { label: '성능 최적화를 하며 배운 점' },
    { label: 'PM / Front-Back 조율에서 아쉬웠던 점' },
    { label: '다시 만든다면 바꾸고 싶은 구조' },
    { label: '이후 프로젝트에 실제로 적용한 변화' },
  ],

  media: [
    { dir: 'screens', label: '서비스 화면', placement: 'screens' },
    { dir: 'results', label: '결과 자료', placement: 'results' },
    { dir: 'architecture', label: 'Architecture', placement: 'flow' },
  ],
  captions: {
    'cover/cover.webp': 'Projectree 대표 이미지 — Ideas connect, grow together',
  },
};

export default projectree;
