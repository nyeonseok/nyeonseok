import type { Project } from '../types';

const geomate: Project = {
  slug: 'geomate',
  name: 'Geomate',
  tone: 'green',
  tagline: '사진 기반 AI 기하 학습 서비스',
  context: 'SSAFY 자율 프로젝트',
  period: '2026.10.06 – 2026.11.18',
  org: '삼성청년SW·AI아카데미 (SSAFY)',
  role: 'Backend · 백엔드 초기 기반 구성 · 학습/문제/AI 연동 API',
  team: '6인 팀',

  card: {
    role: 'Backend · AI 연동 API',
    stack: ['Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers'],
    metric: { value: '148회', label: '원스토어 정식 배포 · 누적 다운로드' },
    highlight: '원스토어 정식 배포 · 누적 148회 다운로드',
  },

  stack: [
    'Spring Boot',
    'Java',
    'Spring Security',
    'JWT',
    'JPA',
    'PostgreSQL',
    'Flyway',
    'JUnit',
    'Testcontainers',
    'Docker',
    'S3',
    'FastAPI 연동',
    'Swagger',
  ],

  keyResults: [
    { value: '원스토어 정식 배포', label: '실제 사용자가 이용하는 서비스' },
    { value: '148회', label: '누적 다운로드' },
    { value: '약 980건', label: 'Backend 테스트 (@Test 기준)' },
  ],

  overview: [
    '학생이 기하 문제 사진을 올리면 VLM이 조건을 해석하고, 기하 엔진이 검증·판정하고, LLM이 단계형 힌트를 제공하는 학습 서비스입니다.',
    '공개 API는 Spring Boot가 담당하고 Python(FastAPI) 엔진·AI는 내부 API로 분리했습니다. AI 해석 결과를 검증된 사실로 바로 취급하지 않고 판정 불가와 오답을 분리했으며, 유료 AI 호출의 권한·횟수·재시도 여부는 Spring에서 통제했습니다.',
  ],

  focus:
    '백엔드 초기 기반부터 학습·문제함·사진 해석·AI 힌트 API를 맡아, 외부 AI 호출의 불확실성·동시 요청·재시도에서도 비용과 데이터가 어긋나지 않는 구조를 만드는 데 집중했습니다.',

  contributions: [
    {
      title: 'Backend 기반',
      items: [
        'Spring Boot 초기 프로젝트 구성, PostgreSQL · Flyway 마이그레이션',
        'JWT 기반 Spring Security, ProblemDetail 전역 예외 처리, JPA Auditing',
      ],
    },
    {
      title: '학습 · 문제 API',
      items: [
        '학습 단계 전이 PREDICTION → DIAGNOSED → REVEALED 구현',
        '문제함·폴더 CRUD, 복습·오답·풀이 기록 조회 API',
      ],
    },
    {
      title: 'AI 연동',
      items: [
        'AI 힌트 API — 유료 AI 호출의 중복 실행·재시도 제어',
        '사진 해석(VLM) 비동기 작업과 코인 차감·환불 흐름',
        'Python 엔진 클라이언트의 상태 코드별 오류 매핑과 X-Request-Id 추적',
      ],
    },
    {
      title: '테스트 · 문서',
      items: [
        'Testcontainers(PostgreSQL) 기반 Repository · DB 제약 · 동시성 테스트',
        'Backend 개발 규칙 · API 오류 응답 · 엔진 호출 규칙 문서화',
      ],
    },
  ],

  cases: [
    {
      id: 'paid-ai-call',
      title: '유료 AI 호출의 중복 실행과 이중 과금 경로 제어',
      problem: [
        'AI 힌트는 호출이 느리고 호출마다 비용이 발생합니다. 같은 입력의 동시 요청, 타임아웃, 서버 재시작, DB 저장 실패가 겹치면 같은 요청을 여러 번 유료 호출할 수 있는 경로가 생길 수 있었습니다.',
      ],
      decision: [
        '외부 AI 호출이 실패했다는 사실만 보지 않고, 실패한 시점에 요청이 이미 처리됐을 가능성까지 구분해 재시도 여부를 결정했습니다.',
      ],
      table: {
        caption: '실패 유형별 재시도 기준',
        columns: ['실패 유형', '판단', '처리'],
        rows: [
          ['503 · 연결 실패', '처리되지 않았다고 판단 가능', '즉시 재시도'],
          ['읽기 타임아웃 · 연결 끊김 · 응답 파싱 실패', '이미 과금됐을 가능성이 있음', '즉시 재호출하지 않고 retry_at 이후 재시도'],
          ['결과 저장 실패', '유료 호출이 이미 끝난 뒤의 실패', '기록을 제거하지 않아 같은 유료 요청이 곧바로 반복되지 않게 처리'],
        ],
      },
      actions: [
        '입력 해시 유니크 제약으로 동일 입력의 생성 주체를 하나로 제한',
        'READY / FAILED / GENERATING 상태와 generation 번호를 이용한 펜싱 구조 적용',
        '계정별 슬라이딩 윈도우 요청 제한 적용',
      ],
      results: [
        '같은 입력의 동시 요청이 동일한 유료 생성으로 중복되지 않도록 설계',
        '타임아웃·저장 실패·워커 경합에서 발생할 수 있는 재호출 경로를 테스트로 검증',
        '장애 상황에서도 앱은 500 대신 생성 중 / 힌트 없음 상태를 받도록 처리',
      ],
    },
    {
      id: 'vlm-job',
      title: 'VLM 사진 해석 비동기 작업과 코인 정합성',
      problem: [
        '사진 해석은 수십 초가 걸리고 유료 VLM을 사용합니다. 요청 스레드와 DB 트랜잭션을 오래 점유하면 안 됐고, 해석에 실패하면 차감한 코인이 반드시 환불되어야 했습니다.',
      ],
      decision: [
        '오래 걸리는 외부 호출은 트랜잭션 밖으로 빼고, 실패 기록과 환불처럼 함께 바뀌어야 하는 상태는 하나의 트랜잭션으로 묶었습니다.',
      ],
      flows: [
        {
          title: '사진 해석 Job',
          steps: [
            { text: '작업 가져가기 — 짧은 트랜잭션', tag: 'TX' },
            'S3 다운로드 · Python 호출 — 트랜잭션 밖',
            { text: '결과 저장 — 짧은 트랜잭션', tag: 'TX' },
            { text: '실패 시: 실패 기록 + 환불을 하나의 트랜잭션으로', tag: 'TX' },
          ],
          note: '상태: 대기 → 실행 → 성공 / 실패 · 오래 실행 중이거나 대기 중인 작업은 스케줄러가 복구',
        },
      ],
      actions: [
        '사진 해석을 Job으로 분리하고 대기 → 실행 → 성공 / 실패 상태 전이 설계',
        '문제당 활성 작업 1개를 부분 유니크 인덱스로 제한',
        '작업 최초 시작 시에만 일일 횟수와 코인 차감',
        '오래 실행 중인 작업과 대기 상태 작업을 복구하는 스케줄러 구성',
        '환불이 완료되지 않은 과거 실패 작업은 기동 시 보정하는 복구 로직 추가',
      ],
      results: [
        '긴 외부 호출 동안 DB 커넥션을 점유하지 않는 구조로 분리',
        '실패 기록과 환불이 서로 다른 상태로 남지 않도록 트랜잭션 경계 설정',
        '서버 재시작·작업 중단 이후에도 복구 가능한 작업 흐름 구성',
      ],
    },
    {
      id: 'concurrency',
      title: '동시성 · 데이터 정합성 · 멱등성',
      problem: [
        '같은 요청이 동시에 들어오거나 재전송되는 상황은 정상 요청 테스트만으로는 드러나지 않고, 그대로 두면 데이터가 어긋날 수 있었습니다.',
      ],
      decision: [
        '여러 API를 구현한 뒤, 동시에 요청되거나 같은 요청이 재전송되는 상황을 API별로 별도 감사했습니다.',
      ],
      table: {
        caption: '상황별 처리',
        columns: ['상황', '처리'],
        rows: [
          ['같은 폴더에 같은 이름 동시 등록', '유니크 인덱스 + flush로 즉시 확인'],
          ['폴더 삭제와 문제 등록', '등록 시 폴더 잠금'],
          ['폴더 삭제 vs 문제 이동', '잠금 순서를 통일해 교착 가능성 축소'],
          ['풀이 화면 이어 저장', 'revision 기반 낙관적 동시성, 불일치 시 409'],
          ['학습 완료 중복 요청', '시도 행 잠금 후 최초 결과 재사용'],
          ['주요 생성 API 재전송', 'Idempotency-Key + 정규화된 요청 해시'],
        ],
      },
      actions: [
        '이미지 업로드는 파일 전체를 메모리에 올리지 않고 스트림으로 처리',
        'S3 업로드 후 DB 저장이 실패하면 업로드한 파일을 정리',
      ],
      results: ['DB 제약·행 잠금·낙관적 동시성·멱등키로 동시 요청의 정합성 보호'],
    },
    {
      id: 'testing',
      title: '테스트 기반 Backend 구성',
      decision: [
        '정상 흐름보다 동시 요청·타임아웃·서버 재시작처럼 운영 중 실제로 생길 수 있는 예외 경로를 먼저 테스트했습니다.',
      ],
      actions: [
        'Testcontainers(PostgreSQL)로 실제 PostgreSQL 위에서 Repository · DB 제약 · 동시성 테스트',
        'Python 엔진 클라이언트의 상태 코드별 오류 매핑과 X-Request-Id 추적',
        'Backend 개발 규칙 · API 오류 응답 · 엔진 호출 규칙 문서화',
      ],
      results: ['@Test 기준 약 980건으로 정상 경로뿐 아니라 경합·실패 경로를 반복 검증'],
    },
  ],

  flows: [
    {
      title: '서비스 흐름',
      steps: [
        '문제 사진 업로드 (S3)',
        'Spring: 문제 · 해석 작업 생성',
        { text: '비동기 실행 — 외부 호출은 DB 트랜잭션 밖', tag: 'async' },
        'Python 내부 API: VLM 해석 → 기하 엔진 검증',
        'Spring: 조건 버전 저장 → 학습 작업 공간',
        '예상 · 답 제출 → 엔진 판정 · 진단 → 결과 확인 → AI 힌트',
      ],
    },
  ],

  takeaway:
    '정상 흐름보다 동시 요청·타임아웃·서버 재시작처럼 운영 중 실제로 생길 수 있는 예외 경로를 먼저 테스트하고, DB 제약과 트랜잭션 경계로 시스템의 상태가 어긋나지 않도록 설계했습니다.',

  // 회고는 실제로 작성한 내용만 채운다. body가 비어 있으면 화면에 나오지 않는다.
  retrospective: [
    { label: '가장 잘한 판단' },
    { label: '가장 어려웠던 지점과 해결 과정' },
    { label: '아쉬웠던 설계 / 기술적 한계' },
    { label: '다시 만든다면 바꾸고 싶은 점' },
  ],

  media: [
    { dir: 'video', label: '영상 소개', placement: 'video' },
    { dir: 'screens', label: '서비스 화면', placement: 'screens' },
    { dir: 'problem-solving', label: '문제 해결 자료', placement: 'cases' },
    { dir: 'results', label: '결과 자료', placement: 'results' },
    { dir: 'architecture', label: 'Architecture', placement: 'flow' },
  ],
  captions: {
    'cover/cover.webp': 'Geomate 대표 이미지 — 도형을 어려워하는 학생들을 위한 기하학습 보조도구 서비스',
    'video/geomate-video.mp4': 'Geomate 서비스 소개 영상 (1분 20초)',
  },
};

export default geomate;
