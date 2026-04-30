import veroImg from "../assets/vero.webp";
import ilkanImg from "../assets/ilkan.webp";
import menuPickerImg from "../assets/menupicker.webp";
import stageOnImg from "../assets/stageon.webp";

export interface Feature {
    title: string;
    description: string;
}
export interface Contribution {
    title: string;
    items: string[];
}
export interface Troubleshoot {
    title: string;
    problem: string;
    solution: string;
    code?: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    background?: string;
    techReason?: string;
    type: "team" | "toy" | "side";
    typeLabel: string;
    gradient: string;
    role: string;
    period?: string;
    techStack: string[];
    features: Feature[];
    contributions: Contribution[];
    troubleshooting: Troubleshoot[];
    thumbnail?: string;
    github?: string;
    demo?: string;
    teamSize?: number;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "vero",
        title: "VERO",
        subtitle: "생성형 AI와의 안전한 소통을 지원하는 보안 웹 애플리케이션",
        description:
            'VERO는 정보 보안을 핵심 가치로 삼아, 생성형 AI와의 안전한 소통을 지원하는 웹 애플리케이션입니다. 기업 ChatGPT 사용 제한 문제에서 출발하여, "쉽지만 안전하게"라는 원칙 아래 복잡한 보안 설정을 UX를 해치지 않으면서 구현했습니다.',
        background:
            "기업 내 ChatGPT 사용이 증가하면서 기밀 정보 유출 우려로 사내 AI 도구 접근을 전면 차단하는 사례가 늘고 있습니다. 그러나 단순 차단은 업무 생산성 저하로 이어집니다. VERO는 '보안을 지키면서도 AI를 활용할 수 있는 환경'을 제공하는 것을 목표로 기획되었습니다. 검열 AI로 민감 정보 필터링 후 외부 AI에 전달하고, JWT + HttpOnly 쿠키 기반 보안 인증으로 안전한 접근 제어를 구현했습니다.",
        techReason:
            "Remix는 SSR 기반 라우팅과 loader/action 패턴으로 인증 처리 및 데이터 흐름을 서버에서 제어할 수 있어 보안 중심 서비스에 적합했습니다. Zustand는 Redux 대비 보일러플레이트가 적고 Access Token 상태 관리에 충분한 기능을 제공합니다. CSS Modules는 스타일 충돌 없이 컴포넌트별 독립적인 스타일링을 보장합니다. Pulumi는 AWS 인프라를 코드로 관리해 재현 가능하고 일관된 배포 환경을 구성할 수 있어 선택했습니다.",
        type: "team",
        typeLabel: "팀 프로젝트",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        role: "프론트엔드 개발",
        techStack: [
            "Remix",
            "TypeScript",
            "Zustand",
            "CSS Modules",
            "Jira",
            "AWS Lambda",
            "AWS S3",
            "CloudFront",
            "Pulumi",
        ],
        thumbnail: veroImg,
        teamSize: 4,
        featured: true,
        features: [
            {
                title: "회원가입",
                description:
                    "일반 사용자 / 회사 관리자 / 회사 직원 구분, 이메일 & 핸드폰 인증",
            },
            {
                title: "로그인 보안",
                description:
                    "비밀번호 5회 오류 시 제한, 영어+특수문자+숫자 8자리 이상 조건",
            },
            {
                title: "아이디/비밀번호 찾기",
                description:
                    "핸드폰 인증 기반 아이디 전송, 임시 비밀번호 이메일 발송",
            },
            {
                title: "마이 페이지",
                description:
                    "역할별 정보 렌더링, 관리자는 부서 직원 명단 조회 및 AI 학습 접근 가능",
            },
            {
                title: "생성형 AI 통신",
                description:
                    "ChatGPT / Gemini / Claude 선택, 이전 대화 기록 접근, 검열 AI 필터링",
            },
            {
                title: "검열 AI 학습",
                description:
                    "텍스트/파일(.txt, .pdf) 업로드, DP 활용으로 AI 모델 직접 학습 방지",
            },
        ],
        contributions: [
            {
                title: "로그인 & 인증 시스템",
                items: [
                    "JWT 기반 로그인 서비스 개발",
                    "Refresh Token Rotation + HttpOnly 쿠키로 XSS 방어",
                    "Zustand로 Access Token을 LocalStorage에 관리",
                    "axios Interceptor로 매 요청 시 Access Token 자동 주입",
                    "토큰 만료 시 Refresh Token으로 자동 재발급",
                ],
            },
            {
                title: "회원가입 구현",
                items: [
                    "사용자 유형(일반 / 관리자 / 직원)별 회원가입 플로우 구현",
                    "이메일 및 핸드폰 인증 API 연동",
                ],
            },
            {
                title: "생성형 AI 통신 UI",
                items: [
                    "최근 4개 대화방 날짜 + 미리보기 제공",
                    "사이드바에 이전 대화 목록 렌더링",
                    "useParams로 선택 AI 저장, 새 대화방 생성",
                    "전송 중 버튼 비활성화, useRef로 자동 스크롤",
                    "페이징을 통해 메모리 효율 향상",
                    "스크롤 업 시 페이징으로 이전 대화 로드",
                ],
            },
            {
                title: "AWS 배포 (Pulumi)",
                items: [
                    "S3, Lambda, API Gateway, CloudFront를 Pulumi로 관리",
                    "Serverless Lambda 용량 초과 문제 해결",
                    "배포 환경 코드화로 재현 가능한 인프라 구성",
                ],
            },
        ],
        troubleshooting: [
            {
                title: "새로고침 시 순간 로그아웃 현상",
                problem:
                    "배포 후 새로고침 시 Access Token이 순간적으로 null이 되어 로그아웃 처리되는 UX 문제",
                solution:
                    "Custom Hook 도입 — isLogin() 함수 대신 LocalStorage를 직접 참조하여 상태를 즉시 반영",
            },
            {
                title: "채팅 페이징으로 성능 개선",
                problem:
                    "채팅이 길어질수록 전체 데이터를 불러와 속도 저하 발생",
                solution:
                    "페이지 이동마다 해당 페이지 데이터만 API 호출 — 메모리 효율 개선",
            },
            {
                title: "AWS Lambda 용량 초과",
                problem:
                    "Serverless 배포 시 AWS Lambda 용량 초과 반복으로 배포 실패",
                solution:
                    "Pulumi 도구 도입 — S3, Lambda, API Gateway, CloudFront 설정을 코드로 관리하여 배포 성공",
                code: `const bucket = new aws.s3.Bucket("vero-deploy");
const lambda = new aws.lambda.Function("lambdaFunction", {
  code: new pulumi.asset.AssetArchive({
    ".": new pulumi.asset.FileArchive("../build/lambda"),
  }),
  runtime: aws.lambda.Runtime.NodeJS20dX,
  role: lambdaRole.arn,
  handler: "index.handler",
});`,
            },
        ],
        github: "https://github.com/sw-security-web-app/sw-security-web-app_FE",
    },
    {
        id: "il-kan",
        title: "Il-Kan",
        subtitle: "AI를 통해 공실율을 낮추는 지역 경제 활성화 웹 솔루션",
        description:
            "Il-Kan은 대구 동성로의 심각한 공실 문제를 해결하기 위한 웹 솔루션입니다. 실제 건물주/부동산 인터뷰를 바탕으로 기획되었으며, 빈 점포를 공유 오피스·프리랜서 시장으로 연결하고, AI 리모델링 시각화 기능으로 건물주의 의사결정을 지원합니다.",
        background:
            "대구 동성로 일대 공실률이 40%를 넘어서며 지역 경제 침체가 가속화되고 있습니다. 팀원들이 직접 건물주와 부동산 중개인을 인터뷰한 결과, 핵심 장벽은 '리모델링 비용 부담'과 '수익화 경로 불투명'이었습니다. Il-Kan은 AI 리모델링 시각화로 초기 비용 부담 없이 공간 가능성을 확인하고, 공유 오피스·프리랜서 매칭으로 즉시 수익을 창출할 수 있도록 설계되었습니다.",
        techReason:
            "React + Vite 조합은 빠른 HMR과 경량 번들로 개발 생산성을 높였습니다. OpenAI gpt-image-1 모델은 초기 사용한 Gemini Imagine 대비 원본 이미지 반영 품질이 훨씬 뛰어나 전환했습니다. react-router-dom은 역할별(건물주/전문가/의뢰자) 페이지 분기를 직관적으로 구성할 수 있어 선택했습니다. AWS EC2 + ALB는 HTTPS 강제 리다이렉트와 커스텀 도메인 적용을 간단하게 처리할 수 있어 적합했습니다.",
        type: "team",
        typeLabel: "팀 프로젝트",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        role: "프론트엔드 개발",
        techStack: [
            "React",
            "Vite",
            "TypeScript",
            "CSS Modules",
            "AWS EC2",
            "OpenAI API",
            "Jira",
            "react-router-dom",
        ],
        thumbnail: ilkanImg,
        teamSize: 6,
        featured: true,
        features: [
            {
                title: "로그인",
                description: "전문가 / 건물주 / 의뢰자 역할 선택",
            },
            {
                title: "마이 페이지",
                description:
                    "역할별 상이한 정보 렌더링 (진행 중 의뢰, 빌리는/빌려주는 공간, 지원 현황)",
            },
            {
                title: "공간 조회",
                description: "지역 · 카테고리별 조회, 페이징",
            },
            { title: "일거리 조회", description: "카테고리별 조회, 페이징" },
            {
                title: "AI 리모델링",
                description:
                    "공실 사진 업로드 + 방향성 입력 → GPT API로 이미지 변환",
            },
        ],
        contributions: [
            {
                title: "생성형 AI 이미지 변환",
                items: [
                    "OpenAI API key 발급 및 연동",
                    "FormData로 사진 + 프롬프트 전송",
                    "전송 후 버튼 비활성화 + 로딩 아이콘으로 UX 향상",
                    "Gemini → OpenAI gpt-image-1 모델 전환으로 품질 대폭 개선",
                ],
            },
            {
                title: "서버 배포",
                items: [
                    "AWS EC2 백엔드 서버 배포 기여",
                    "커스텀 도메인 적용",
                    "AWS ALB로 HTTP(80) → HTTPS(443) 리다이렉트",
                ],
            },
            {
                title: "Routing & UI/UX",
                items: [
                    "react-router-dom 페이지 라우팅 구현",
                    "max-width 설정으로 UI 레이아웃 안정화",
                    "커스텀 모달로 정보 접근성 향상",
                ],
            },
            {
                title: "등록 아이템 상태 관리",
                items: [
                    "지원 전문가, 날짜 선정, 선택 여부 등 복잡한 상태 개별 관리",
                    "시작/마감 날짜 기반 progress bar 구현",
                    "Jira-GitHub 연동으로 애자일 방식 협업",
                ],
            },
        ],
        troubleshooting: [
            {
                title: "생성형 AI 이미지 품질 개선",
                problem:
                    "Gemini Imagine 모델 사용 시 원본 사진을 반영하지 못하는 성능 이슈 발생",
                solution:
                    "OpenAI gpt-image-1 모델로 전환 + 프롬프트 세분화/정규화 → 성능 눈에 띄게 향상",
            },
            {
                title: "마이 페이지 복잡한 상태 관리",
                problem:
                    "지원자, 선택, 날짜, 준비 완료 여부 등 관리할 상태가 많아 복잡도 폭발적 증가",
                solution:
                    "컴포넌트화하여 책임 분리 — 각 컴포넌트가 자체 상태를 관리하도록 구조 개선",
                code: `<RegisteredWorkItem
  key={item.taskId}
  item={item}
  role={item.requester.role}
  startDate={startDate}
  endDate={endDate}
/>`,
            },
        ],
        github: "https://github.com/Likelion-YeungNam-Univ/ILKAN-web",
    },
    {
        id: "menu-picker",
        title: "Menu Picker",
        subtitle: "위치 기반 AI 음식점 추천 서비스 (서버리스 PWA)",
        description:
            "먹고 싶은 메뉴와 분위기는 있지만 어딜 가야 할지 모를 때를 위한 서비스입니다. 서버리스 + PWA로 구현하여 별도 서버 없이 모바일에서 앱처럼 설치하고 사용할 수 있습니다.",
        background:
            "점심·저녁마다 반복되는 '어디서 먹지?' 고민을 해결하고 싶었습니다. 단순 랜덤 추천이 아닌 현재 위치 기반으로 실제 주변 음식점을 AI가 추천해주는 서비스를 만들기로 했습니다. 백엔드 서버 없이도 운영 비용 없이 배포할 수 있도록 Vercel 서버리스와 PWA를 결합해, 모바일에서 앱처럼 쓸 수 있는 완성도를 목표로 삼았습니다.",
        techReason:
            "Vercel 서버리스 함수는 별도 서버 없이 Gemini API CORS 문제를 해결하고 무료로 운영할 수 있어 선택했습니다. Gemini API는 텍스트 기반 음식점 추천 프롬프트에 충분한 성능을 보이면서 무료 티어가 넉넉합니다. Kakao Map/Keyword API는 국내 음식점 데이터 정확도와 지도 연동이 Google Maps 대비 국내 환경에서 훨씬 뛰어납니다. PWA는 앱 스토어 배포 없이 모바일 홈 화면에 추가할 수 있어 진입 장벽을 낮췄습니다.",
        type: "toy",
        typeLabel: "토이 프로젝트",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        role: "개인 개발 (풀스택)",
        techStack: [
            "React",
            "Vite",
            "TypeScript",
            "Vercel Serverless",
            "Gemini API",
            "Kakao API",
            "PWA",
        ],
        thumbnail: menuPickerImg,
        featured: true,
        features: [
            {
                title: "QR 코드",
                description:
                    "react-device-detect로 모바일 여부 판별, 비모바일 환경에서만 QR 표시",
            },
            {
                title: "위치 불러오기",
                description:
                    "Kakao Keyword API로 주변 장소 표시, geolocation으로 좌표 수신",
            },
            {
                title: "Gemini AI",
                description:
                    "Vercel 서버리스 함수를 통한 Gemini API 호출 (CORS 우회)",
            },
            {
                title: "결과 표시",
                description:
                    "Gemini 응답 파싱, Kakao Address API로 위치 표시, 카카오맵 연동",
            },
            {
                title: "PWA",
                description: "모바일에 앱처럼 설치 가능, 오프라인 지원",
            },
        ],
        contributions: [
            {
                title: "전체 개발 (풀스택 솔로)",
                items: [
                    "CORS 해결을 위한 Vercel 서버리스 함수 도입",
                    "react-device-detect + QRCodeCanvas로 기기별 분기 처리",
                    "navigator.geolocation으로 GPS/Wi-Fi 위치 수신",
                    "Kakao Map & Address API 연동",
                    "Gemini API 프롬프트 설계 및 응답 파싱",
                    "PWA manifest 및 서비스워커 설정",
                ],
            },
        ],
        troubleshooting: [
            {
                title: "CORS 이슈 해결 (서버리스 도입)",
                problem:
                    "프론트에서 Gemini API를 직접 호출하면 CORS 정책으로 차단",
                solution:
                    "Vercel 서버리스 함수(/api/gemini.ts)에 Gemini 호출 로직 등록 — 서버 경유로 CORS 해결",
            },
            {
                title: "GPS 기반 위치 수신",
                problem: "PWA에서 GPS로 위치 수신 방법 미숙지",
                solution:
                    "navigator.geolocation.getCurrentPosition() 사용 — GPS 외 Wi-Fi/IP 정보도 활용",
                code: `navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    getAddressFromCoords(latitude, longitude);
  },
  (error) => { /* 에러 처리 */ }
);`,
            },
        ],
        github: "https://github.com/MenuPicker/MenuPicker_FE",
        demo: "https://menu-picker-fe.vercel.app",
    },
    {
        id: "stage-on",
        title: "STAGE ON",
        subtitle: "국내외 아티스트 공연 일정 확인 PWA 서비스",
        description:
            "국내외 아티스트의 공연 일정을 한눈에 확인할 수 있는 서비스입니다. PWA로 제작되어 모바일 앱처럼 설치 가능하며, 커스텀 훅 기반 설계로 유지보수성을 높였습니다.",
        background:
            "공연 팬들이 여러 사이트를 오가며 일정을 직접 취합해야 하는 불편함에서 출발했습니다. 특히 모바일 환경에서 공연 일정을 앱처럼 빠르게 확인하고 싶다는 수요가 있었습니다. 앱 스토어 출시 없이도 모바일 홈 화면에 추가할 수 있는 PWA로 제작하고, 타임테이블 뷰를 통해 날짜·아티스트별 일정을 직관적으로 파악할 수 있도록 했습니다.",
        techReason:
            "React + Vite는 빠른 개발 환경과 경량 번들링이 모바일 PWA 성능에 유리합니다. CSS Modules는 6인 팀에서 스타일 네이밍 충돌 없이 각자 독립적으로 컴포넌트를 개발할 수 있어 채택했습니다. Vercel은 GitHub 연동으로 자동 배포가 되어 팀 협업 시 빠른 프리뷰 확인이 가능합니다. 커스텀 훅(useSearch, useMyBands) 패턴을 적용해 UI 컴포넌트와 API 로직을 분리, 유지보수성과 재사용성을 높였습니다.",
        type: "side",
        typeLabel: "사이드 프로젝트",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        role: "프론트엔드 개발",
        techStack: [
            "React",
            "Vite",
            "TypeScript",
            "PWA",
            "CSS Modules",
            "Vercel",
            "Jira",
        ],
        thumbnail: stageOnImg,
        teamSize: 6,
        features: [
            { title: "소셜 로그인", description: "카카오, 구글 소셜 로그인" },
            {
                title: "선호 아티스트 선택",
                description: "첫 로그인 시 최소 2개 선택 필수",
            },
            {
                title: "검색",
                description:
                    "최근 검색 5개, 추천 검색어 5개, 공연/밴드 탭 구분",
            },
            {
                title: "타임테이블",
                description: "날짜 · 공연별 표시, 커스텀 가능",
            },
            { title: "MY BANDS", description: "선호 아티스트 관리 및 삭제" },
            {
                title: "PWA",
                description:
                    "모바일 앱처럼 설치 가능, dvh 단위 안정적 뷰포트 처리",
            },
        ],
        contributions: [
            {
                title: "PWA 설치 및 레이아웃",
                items: [
                    "모바일 환경에서 일관된 UI 제공",
                    "dvh 단위로 안정적인 뷰포트 높이 처리",
                    "max-width: 600px으로 모바일 최적화 레이아웃",
                ],
            },
            {
                title: "검색 기능",
                items: [
                    "useSearch 커스텀 훅으로 UI 로직과 API 통신 분리",
                    "최근 검색어 / 추천 검색어 / 공연 / 아티스트 통합 검색",
                ],
            },
            {
                title: "MY BANDS",
                items: [
                    "useMyBands 커스텀 훅으로 책임 분리",
                    "아티스트 삭제 및 체크박스 선택 상태 관리",
                ],
            },
        ],
        troubleshooting: [
            {
                title: "모바일 주소창으로 인한 UI 떨림",
                problem:
                    "모바일 브라우저 주소창이 등장/사라질 때 뷰포트 높이가 변해 컴포넌트가 떨림",
                solution:
                    "vh → dvh(dynamic viewport height) 단위로 변경하여 동적 뷰포트 높이 대응",
                code: `body {
  margin: auto;
  max-width: 600px;
  min-height: 100dvh;
}`,
            },
            {
                title: "커스텀 훅으로 코드 분리",
                problem:
                    "한 파일에 모든 로직이 집중되어 코드 길이 과다, 재사용 불가",
                solution:
                    "API 통신 로직을 커스텀 훅으로 분리 → UI/API 파일 완전 분리, 재사용성 확보",
                code: `export default function useSearch() {
  const [recent, setRecent] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  // ... 로직
  return { recent, recommendList, handleSearch, ... };
}`,
            },
        ],
        github: "https://github.com/stage-on/stage_on_WEB",
    },
];
