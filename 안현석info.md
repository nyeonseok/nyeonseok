# 안현석 포트폴리오

---

## 자격증

| 취득일 | 자격증명 | 발행처 / 기관 | 자격 번호 |
|--------|----------|--------------|-----------|
| 2024/09/10 | 정보처리기사 | 한국산업인력공단 | 242020408215 |
| 2023/12/15 | SQL개발자 (SQLD) | 한국데이터베이스진흥원 | SQLD-051016142 |
| 2024/11/29 | 데이터분석 준전문가 (ADsP) | 한국데이터베이스진흥원 | ADsP-043016593 |
| 2024/10/25 | 데이터아키텍처 준전문가 (DAsP) | 한국데이터베이스진흥원 | DAsP-057001773 |
| 2025/11/20 | TOEIC Speaking Test Intermediate High | YBM | 103283 |
| 2023/04/21 | 컴퓨터활용능력 1급 | 대한상공회의소 | 23-K9-030229 |
| 2019/09/23 | 1종보통운전면허 | 경찰청(운전면시험관리단) | — |

---

## 목차

- [VERO](#vero)
- [Il-Kan](#il-kan)
- [Menu Picker](#menu-picker)
- [STAGE ON](#stage-on)
- [대구경북 어르신 무임 교통카드](#대구경북-어르신-무임-교통카드)
- [LG SHOPTIME](#lg-shoptime)

---

## VERO

**역할:** 프론트엔드 개발

### 팀원

| 이름 | 역할 | GitHub |
|------|------|--------|
| 김도연 | 백엔드 개발 | [@tkv00](https://github.com/tkv00) |
| 박재성 | 백엔드 개발 | [@pjs1710](https://github.com/pjs1710) |
| 안현석 | 프론트엔드 개발 | [@nyeonseok](https://github.com/nyeonseok) |
| 이형준 | 검열AI 개발 | [@lhj010217](https://github.com/lhj010217) |

### 프로젝트 개요

**VERO**는 정보 보안을 핵심 가치로 삼아, 생성형 AI와의 안전한 소통을 지원하는 웹 애플리케이션입니다.

Remix 프레임워크 기반으로 제작되었으며, 프론트엔드 개발을 맡아 전체 UI 구현, 사용자 흐름 설계, 보안 기능 연동을 담당했습니다.

### 배경 & 목표

<!-- 이미지: 기업 ChatGPT 사용 제한 관련 통계/뉴스 -->

- 생성형 AI 사용이 활발하지만 대화 데이터 유출 위험이 크다는 문제의식
- 여러 기업들의 ChatGPT 사용 제한 현황
- **"쉽지만 안전하게"** — 복잡한 보안 설정을 UX를 해치지 않으면서 구현

### 기술 스택

| 기술 | 선택 이유 |
|------|-----------|
| Remix | 파일 기반 라우팅과 SSR 지원으로 SEO와 초기 로딩 최적화 |
| TypeScript | 명확한 타입 명시로 안정성 및 유지보수성 강화 |
| Zustand | Redux 대비 가벼운 구조로 빠르고 직관적인 상태 관리 |
| CSS Modules | 컴포넌트 단위 스타일링으로 클래스 충돌 방지 |
| Custom Hooks | 반복되는 로직 분리로 코드 가독성 향상 |

### 폴더 구조

```
app/
├── api/              # axios interceptor 구현
├── components/       # 재사용 가능한 컴포넌트
├── css/              # CSS Modules
├── routes/           # Remix 파일 기반 라우팅
├── store/            # 전역 상태 관련 로직
├── entry.client.tsx
├── entry.server.tsx
├── root.tsx
└── setProxy.js       # 프록시 설정 (CORS)
```

### 주요 기능

1. **회원가입** — 일반 사용자 / 회사 관리자 / 회사 직원 구분, 이메일 & 핸드폰 인증
2. **로그인** — 비밀번호 5회 오류 시 제한, 영어+특수문자+숫자 8자리 이상
3. **아이디 / 비밀번호 찾기** — 핸드폰 인증 기반 아이디 전송, 임시 비밀번호 이메일 발송
4. **마이 페이지** — 역할별 정보 렌더링, 관리자는 부서 직원 명단 조회 및 AI 학습 접근 가능
5. **부서 직원 명단 조회** — 이름 검색, 페이징
6. **검열 AI 학습** — 텍스트 또는 파일(.txt, .pdf) 업로드, DP 활용으로 AI 모델 직접 학습 방지
7. **생성형 AI 통신** — ChatGPT / Gemini / Claude 선택, 이전 대화 기록 접근, 검열 AI 필터링

### 개인 기여

**1. 회원가입 구현**
- 사용자 유형(일반 / 관리자 / 직원)별 회원가입 플로우 구현
- 이메일 및 핸드폰 인증 API 연동

**2. 로그인 & 인증**
- JWT 기반 로그인 서비스 개발
- Refresh Token Rotation + HttpOnly 쿠키로 XSS 방어
- Zustand로 Access Token을 LocalStorage에 관리

**3. 상태 관리**
- axios Interceptor로 매 요청 시 Access Token을 header에 주입
- 토큰 만료 시 Refresh Token으로 자동 재발급

**4. 이메일 찾기 / 비밀번호 재설정**
- 백엔드 API 통신으로 폼 제출 구현

**5. 마이 페이지**
- 사용자 정보 API 연동, 역할별 다른 UI 렌더링
- `useState`로 로딩 화면 처리

**6. 부서 직원 명단 조회**
- 페이징 적용, 검색 시에도 페이징 유지
- `table`로 직원 정보 표시

**7. AI 학습 데이터 업로드**
- `FormData`로 텍스트/파일 전송
- `useState`로 제출 후 로딩 화면 렌더링

**8. 생성형 AI 통신**
- 최근 4개 대화방 날짜 + 미리보기 제공
- 사이드바에 이전 대화 목록 렌더링
- `useParams`로 선택 AI 저장, 새 대화방 생성
- 전송 중 버튼 비활성화, `useRef`로 자동 스크롤
- 스크롤 업 시 페이징으로 이전 대화 로드

**9. Routing & UI/UX**
- Remix SSR, 파일 기반 Flat Routing
- `rem` 단위로 반응형 웹/앱 구현
- CSS Module로 클래스 충돌 방지

### 주요 문제 해결

**1. 새로고침 시 순간 로그아웃 현상**

- 문제: 배포 후 새로고침 시 Access Token이 순간적으로 `null`이 되어 로그아웃
- 해결: Custom Hook 도입. `isLogin()` 함수 대신 LocalStorage를 직접 참조하여 상태 반영

**2. 페이징으로 성능 개선**

- 문제: 채팅이 길어질수록 속도 저하
- 해결: 페이지 이동마다 해당 페이지 데이터만 API 호출하여 메모리 효율 개선

**3. 파일 기반 라우팅 적응**

- 문제: Remix의 파일 기반 라우팅에 초기 어려움
- 해결: 공식 문서 및 레퍼런스 참고하여 Flat Routing 구조 확립

**4. AWS 배포 (Pulumi 활용)**

- 문제: Serverless 배포 시 AWS Lambda 용량 초과 반복
- 해결: Pulumi 도구 도입 — S3, Lambda, API Gateway, CloudFront 설정 파일을 코드로 관리하여 배포 성공

```tsx
const bucket = new aws.s3.Bucket("vero-deploy");
const lambda = new aws.lambda.Function("lambdaFunction", {
  code: new pulumi.asset.AssetArchive({
    ".": new pulumi.asset.FileArchive("../build/lambda"),
  }),
  runtime: aws.lambda.Runtime.NodeJS20dX,
  role: lambdaRole.arn,
  handler: "index.handler",
});
```

참고: [Deploying Remix Vite on Lambda using Pulumi](https://dev.to/gautierblandin/deploying-remix-vite-on-lambda-using-pulumi-41oj)

---

## Il-Kan

**역할:** 프론트엔드 개발

### 팀원

| 이름 | 역할 | GitHub |
|------|------|--------|
| 김소윤 | P&D | [@kimsoyun112](https://github.com/kimsoyun112) |
| 곽동욱 | 백엔드 개발 | [@KDWorld81](https://github.com/KDWorld81) |
| 문찬주 | 프론트엔드 개발 | [@moonchanju](https://github.com/moonchanju) |
| 박지원 | 프론트엔드 개발 | [@cryingdryice](https://github.com/cryingdryice) |
| 안현석 | 프론트엔드 개발 | [@nyeonseok](https://github.com/nyeonseok) |
| 이나현 | 백엔드 개발 | [@lnahyun](https://github.com/lnahyun) |

### 프로젝트 개요

**Il-Kan**은 지역 경제 활성화를 목표로, AI를 통해 공실율을 낮추는 웹 솔루션입니다.

Vite 기반으로 개발되었으며, 프론트엔드 개발을 맡아 전체 UI 구현, 사용자 흐름 설계, 상태 관리를 담당했습니다.

### 배경 & 목표

<!-- 이미지: 대구/경북 공실율 통계 -->
<!-- 이미지: 실제 건물주/부동산 인터뷰 자료 -->

- 대구/경북 대표 상권 '동성로' 5곳 중 1곳이 빈 점포 — 지역 경제 억제 문제의식
- 공실을 공유 오피스 · 프리랜서 시장으로 활용하는 아이디어
- 실제 건물주/부동산 인터뷰 결과: 빈 건물을 어떻게라도 활용하고 싶다는 수요 확인

### 폴더 구조

```
src/
├── api/          # axios interceptor 구현
├── assets/       # svg 파일들
├── components/   # 재사용 가능한 컴포넌트
├── context/      # 전역 loading 관리
├── css/          # CSS Module
├── layout/       # GlobalLayout 구현
├── pages/        # 라우팅 페이지들
├── store/        # 사용자 전역 상태 관련 로직
├── App.tsx
├── index.css
└── main.tsx
```

### 주요 기능

1. **로그인** — 전문가 / 건물주 / 의뢰자 역할 선택
2. **마이 페이지** — 역할별 상이한 정보 렌더링 (진행 중 의뢰, 빌리는/빌려주는 공간, 일거리 지원 현황 등)
3. **공간 조회** — 지역 · 카테고리별 조회, 페이징
4. **일거리 조회** — 카테고리별 조회, 페이징
5. **생성형 AI 통신** — 공실 사진 업로드 + 리모델링 방향성 입력 → GPT API로 이미지 변환

### 개인 기여

**1. 사용자 상태 관리**
- axios Interceptor로 로그인 시 `role`을 header에 담아 전송
- Custom Hook으로 페이지 이동 시 로그인 여부 확인

**2. 서버 배포**
- AWS EC2 백엔드 서버 배포 기여
- 커스텀 도메인 적용
- AWS ALB로 HTTP(80) → HTTPS(443) 리다이렉트

**3. 생성형 AI 통신**
- OpenAI API key 발급 및 연동
- `FormData`로 사진 + 프롬프트 전송
- 전송 후 버튼 비활성화 + 로딩 아이콘으로 UX 향상
- AI 응답 결과를 사용자에게 표시하는 UI 구현

**4. Routing & UI/UX**
- `react-router-dom` 페이지 라우팅
- `max-width` 설정으로 UI 레이아웃 안정화
- CSS Module로 컴포넌트 단위 스타일링
- 커스텀 모달로 정보 접근성 향상

**5. 등록 아이템 상태 관리**
- 지원 전문가, 날짜 선정, 선택 여부 등 복잡한 상태 개별 관리
- 시작/마감 날짜 기반 progress bar 구현

**6. Jira 연동**
- GitHub-Jira 연동으로 애자일 방식 협업 진행

### 주요 문제 해결

**1. 생성형 AI 이미지 품질**

- 문제: Gemini Imagine 모델 사용 시 원본 사진을 반영하지 못하는 성능 이슈
- 해결: OpenAI `gpt-image-1` 모델로 전환 + 프롬프트 세분화/정규화 → 성능 눈에 띄게 향상

<!-- 이미지: Gemini vs OpenAI 결과 비교 -->

**2. 마이 페이지 복잡한 상태 관리**

- 문제: 지원자, 선택, 날짜, 준비 완료 여부 등 관리할 상태가 많아 복잡도 증가
- 해결: 한 페이지에서 전부 관리하지 않고 컴포넌트화하여 책임 분리

```tsx
<RegisteredWorkItem
  key={item.taskId}
  item={item}
  role={item.requester.role}
  startDate={startDate}
  endDate={endDate}
/>
```

---

## Menu Picker

**역할:** 개인 토이 프로젝트 (서버리스 / PWA)

### 프로젝트 개요

먹고 싶은 메뉴와 분위기는 있지만 어딜 가야 할지 모를 때를 위한 서비스입니다. 서버리스 + PWA로 구현했습니다.

### 폴더 구조

```
src/
├── assets/
├── components/
├── layout/
├── pages/
├── App.tsx
└── main.tsx
api/
└── gemini.ts     # Gemini API 통신 (서버리스)
```

### 주요 기능

1. **QR 코드** — `react-device-detect`로 모바일 여부 판별, 비모바일 환경에서만 QR 표시 (`QRCodeCanvas`)
2. **위치 불러오기** — Kakao Keyword API로 주변 장소 표시, `geolocation`으로 좌표 수신
3. **Gemini 통신** — Vercel 서버리스 함수를 통한 Gemini API 호출
4. **결과 표시** — Gemini 응답 파싱, Kakao Address API로 위치 표시, 카카오맵 연동
5. **PWA** — 모바일에 앱처럼 설치 가능

### 주요 문제 해결

**1. CORS 이슈 해결 (서버리스 함수 도입)**

- 문제: 프론트에서 Gemini를 직접 호출하면 CORS 발생
- 해결: Vercel 서버리스 함수에 Gemini 호출 로직을 등록하여 해결

**2. QR 코드 및 기기 판별**

- 문제: QR 생성 방법과 기기 판별 방법 미숙지
- 해결: `QRCodeCanvas` 라이브러리로 QR 생성, `react-device-detect`로 모바일 여부 판별

```tsx
import { isMobile } from "react-device-detect";
import { QRCodeCanvas } from "qrcode.react";

{!isMobile && (
  <div className={indexStyle.qrDiv}>
    <button onClick={clickDownloadBtn}>앱으로 열기</button>
  </div>
)}

<QRCodeCanvas value="https://menu-picker-fe.vercel.app" size={200} />
```

**3. GPS 기반 위치 수신**

- 문제: PWA에서 GPS로 위치 수신 방법 미숙지
- 해결: `navigator.geolocation` 사용 — GPS 외 Wi-Fi/IP 정보도 활용

```tsx
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    getAddressFromCoords(latitude, longitude);
  },
  (error) => { /* 에러 처리 */ }
);
```

---

## STAGE ON

**역할:** 프론트엔드 개발 (PWA)

### 프로젝트 개요

국내외 아티스트의 공연 일정을 한눈에 확인할 수 있는 서비스입니다. PWA로 제작되어 모바일 앱처럼 설치 가능합니다.

### 폴더 구조

```
src/
├── assets/
├── components/
├── layout/
├── pages/
├── hooks/        # 커스텀 훅
├── api/          # 인터셉터, API 호출 함수
├── App.tsx
└── main.tsx
```

### 주요 기능

1. **소셜 로그인** — 카카오, 구글
2. **선호 아티스트 선택** — 첫 로그인 시 최소 2개 선택
3. **공연 정보 게시** — 선호 아티스트 및 공연 홈 화면 표시
4. **검색** — 최근 검색 5개, 추천 검색어 5개, 공연/밴드 탭 구분
5. **타임테이블** — 날짜 · 공연별 표시, 커스텀 가능
6. **MY BANDS** — 선호 아티스트 관리 및 삭제
7. **MY CONCERTS** — 선호 공연 목록 및 상세 정보
8. **PWA** — 모바일 앱처럼 설치 가능

### 개인 기여

**1. PWA 설치 및 레이아웃 설정**

- 모바일 환경에서 일관된 UI 제공
- `dvh` 단위로 안정적인 뷰포트 높이 처리

```css
body {
  margin: auto;
  max-width: 600px;
  min-height: 100dvh;
}
```

**2. 검색 기능**

- `useSearch` 커스텀 훅으로 UI 로직과 API 통신 분리

```tsx
const {
  recent, recommendList, performances, artists,
  loading, isSearch, setIsSearch,
  handleSearch, handleLikeBands, deleteRecent,
  fetchRecentSearch, fetchRecommendSearch,
} = useSearch();
```

**3. MY BANDS**

- `useMyBands` 커스텀 훅으로 책임 분리

```tsx
const {
  bandList, checkedList, toggleCheck,
  removeMyBands, loading, onDelete, setOnDelete,
} = useMyBands();
```

**4. 인프라**
- Vercel 프론트엔드 배포
- Jira-GitHub 연동으로 애자일 협업

### 주요 문제 해결

**1. 모바일 주소창으로 인한 UI 떨림**

- 문제: 모바일 주소창 등장 시 컴포넌트가 불안정하게 떨림
- 해결: `vh` → `dvh` 단위로 변경

**2. 커스텀 훅으로 코드 분리**

- 문제: 한 파일에 모든 로직이 집중되어 코드 길이 과다, 재사용 불가
- 해결: API 통신 로직을 커스텀 훅으로 분리 → UI/API 파일 완전 분리, 재사용성 확보

```tsx
export default function useSearch() {
  // 로직
  return { recent, recommendList, /* ... */ };
}
```

---

## 대구경북 어르신 무임 교통카드

**기간:** 2025.06 ~ 2025.12  
**역할:** 프로젝트 유지보수 및 인프라 관리

### 프로젝트 배경

대구·경북 지자체 행정복지센터에서 사용하는 무임 교통카드 관리 시스템. 교통카드 이용 고객 정보 및 무임 교통카드 이용 데이터를 관리합니다.

### 담당 역할

- DB 용량 모니터링 및 로그 관리
- 클라이언트–서버 통신 상태 점검
- 서버 배포 및 운영 관리
- 타 부서 요청에 따른 DB 데이터 조회 및 SQL 작성
- 모바일 카드 발급 관련 민원 및 서비스 오류 대응

### 성과

- 서버 라이선스 만료 문제 해결 — 라이선스 교체로 고객 정보 조회 오류 해결, 평문 저장 데이터를 암호화 방식으로 전환
- 클라이언트–서버 통신 오류 정상화
- 서비스 관련 민원 약 **70% 감소**
- 2025년 9월 무임 교통카드 이용 금액 8월 대비 약 **79.7백만 원 증가 (약 11.4%)**

### 사용 기술

Spring Boot · Tibero · Tibero Studio · SG Client · CHAKRA

---

## LG SHOPTIME

**기간:** 2025.06 ~ 2025.12  
**역할:** 서비스 페이지 개발 및 유지보수

### 프로젝트 배경

LG SHOPTIME 서비스 운영 과정에서 필요한 프로모션 및 서비스 페이지를 개발하고, 운영 중 발생하는 이슈를 대응하며 서비스 안정성을 유지하는 프로젝트입니다.

### 담당 역할

- 기능 명세서 기반 신규 서비스 페이지 개발
- 운영 중 발생한 페이지 오류 및 기능 이슈 대응
- 기존 페이지 유지보수 및 기능 수정
- 기획 및 타 부서와의 요구사항 반영 커뮤니케이션

### 성과

- 명세서 기반 개발로 서비스 기능 확장 지원
- 이슈 대응을 통한 서비스 안정적 운영 기여

### 사용 기술

jQuery

### 핵심 경험

- 명세서 기반 실무 서비스 페이지 개발 경험
- 운영 환경에서의 이슈 분석 및 빠른 문제 대응
- 기획 및 타 부서와의 협업 커뮤니케이션