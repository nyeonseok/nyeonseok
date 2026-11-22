# 안현석 포트폴리오

React 19 · TypeScript · Vite · React Router (data router).

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입 검사 + 빌드 (dist/)
npm run lint
```

## 콘텐츠 수정

모든 문구·수치의 원본은 저장소 루트의 `안현석info.md`입니다. 사이트 내용은 컴포넌트가 아니라 `src/data/`에만 있습니다.

| 파일 | 내용 |
|---|---|
| `src/data/projects/*.ts` | 프로젝트 1개 = 파일 1개. 노출 순서는 `projects/index.ts`의 배열 순서 |
| `src/data/experience.ts` | 실무 경험 |
| `src/data/awards.ts` | 수상 (실제 수상만) |
| `src/data/education.ts` | 교육 · 대외활동 |
| `src/data/certifications.ts` | 자격 (자격번호는 넣지 않음) |
| `src/data/extras.ts` | 프로젝트 외 자잘한 것들 |
| `src/data/profile.ts` | 이름, 연락처, Hero 문구, 일하는 방식, 기술 |

### 프로젝트 색

각 프로젝트 파일의 `tone`(green · blue · rose · amber · violet · sky · orange · teal)이 카드, 상세 페이지, 통계 타일의
색을 정합니다. 실제 색 값은 `src/index.css`의 `[data-tone]` 정의에 있고, 라이트/다크 모두 대비와 색각 이상 구분을
검증한 값입니다. 카드 상단에 크게 보이는 숫자는 `card.metric`이며, `cover/` 폴더에 이미지를 넣으면 그 자리에 이미지가 나옵니다.

### 회고 채우기

각 SSAFY 프로젝트 파일의 `retrospective`에 항목이 준비되어 있습니다. `body`를 채운 항목만 화면에 나오고,
모두 비어 있으면 회고 섹션과 목차 항목이 함께 숨겨집니다.

```ts
retrospective: [
  { label: '가장 잘한 판단', body: '실제로 작성한 회고 내용' },
  { label: '가장 어려웠던 지점과 해결 과정' }, // 비어 있으면 숨김
],
```

### 문제 해결 사례 구조

`cases`의 각 항목은 문제(`problem`) → 판단(`decision`) → 해결(`actions`, `table`) → 결과(`results`, `resultTable`)
순서로 표시됩니다. 비어 있는 칸은 표시되지 않습니다.

## 이미지

`public/projects/<프로젝트>/<폴더>/`에 파일을 넣으면 빌드 시점에 자동으로 인식됩니다. 자세한 규칙은
[public/projects/README.md](public/projects/README.md)를 보세요.
스캔 로직은 `vite-plugin-project-images.ts`에 있습니다.
