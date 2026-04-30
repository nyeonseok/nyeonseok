import React from 'react';

/* ── Design tokens ──────────────────────────────────── */
const ACCENT   = '#1D4ED8';
const ACCENT_L = '#EFF6FF';
const TEXT     = '#111827';
const MID      = '#374151';
const MUTED    = '#6B7280';
const BORDER   = '#E5E7EB';
const LINE     = '#DBEAFE';

/* ── Tiny helpers ────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: '8.5pt',
      fontWeight: 800,
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      color: ACCENT,
      margin: '0 0 7px 0',
      paddingBottom: '5px',
      borderBottom: `1.5px solid ${LINE}`,
    }}>{children}</h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 6, marginBottom: 2 }}>
      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>·</span>
      <span style={{ color: MID, fontSize: '8.5pt', lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background: ACCENT_L,
      color: ACCENT,
      fontSize: '7.5pt',
      fontWeight: 700,
      padding: '1px 7px',
      borderRadius: 3,
      whiteSpace: 'nowrap' as const,
      letterSpacing: '0.02em',
    }}>{children}</span>
  );
}

/* ── Main component ──────────────────────────────────── */
export const ResumeDocument = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '18mm 20mm 16mm',
        background: '#ffffff',
        color: TEXT,
        fontFamily: "'Noto Sans KR', 'Inter', -apple-system, sans-serif",
        fontSize: '9pt',
        lineHeight: 1.6,
        boxSizing: 'border-box' as const,
      }}
    >
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 12,
        borderBottom: `3px solid ${ACCENT}`,
        marginBottom: 18,
      }}>
        <div>
          <div style={{ fontSize: '28pt', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.05, color: TEXT }}>
            안현석
          </div>
          <div style={{ fontSize: '11pt', fontWeight: 600, color: ACCENT, marginTop: 4, letterSpacing: '0.02em' }}>
            Frontend Developer · 프론트엔드 개발자
          </div>
        </div>
        <div style={{ textAlign: 'right', color: MUTED, fontSize: '8.5pt', lineHeight: 1.7 }}>
          <div>✉  aragorn2358@naver.com</div>
          <div>⌂  github.com/nyeonseok</div>
          <div>📍 대구광역시</div>
        </div>
      </div>

      {/* ═══════════════════════ SKILLS ══════════════════════ */}
      <div style={{ marginBottom: 18 }}>
        <SectionTitle>기술 스택</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 5 }}>
          {[
            { label: 'Frontend',   skills: 'React · Remix · TypeScript · Zustand · CSS Modules · HTML/CSS · PWA · React Router · Vite · Axios' },
            { label: 'Infra',      skills: 'AWS (EC2 · Lambda · S3) · Pulumi · Spring Boot · Vercel' },
            { label: 'Tools',      skills: 'Git · GitHub · Jira · VS Code · Figma' },
            { label: 'APIs / DB',  skills: 'OpenAI API · Gemini API · Kakao Map API · SQL · Tibero' },
          ].map(row => (
            <div key={row.label} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{
                background: ACCENT_L,
                color: ACCENT,
                fontSize: '7.5pt',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 3,
                whiteSpace: 'nowrap' as const,
                minWidth: 64,
                textAlign: 'center' as const,
              }}>{row.label}</span>
              <span style={{ color: MID, fontSize: '8.5pt' }}>{row.skills}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════ EXPERIENCE ══════════════════ */}
      <div style={{ marginBottom: 18 }}>
        <SectionTitle>경력</SectionTitle>

        {/* LG SHOPTIME */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>LG SHOPTIME</span>
              <Tag>jQuery · HTML5 · CSS3</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED, whiteSpace: 'nowrap' as const, marginLeft: 8 }}>2025.06 – 2025.12</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4, fontWeight: 500 }}>
            서비스 페이지 개발 및 유지보수
          </div>
          <Bullet>기능 명세서 기반 신규 서비스 페이지 개발로 서비스 기능 확장 지원</Bullet>
          <Bullet>운영 중 발생한 페이지 오류 및 기능 이슈 대응, 서비스 안정적 운영 기여</Bullet>
          <Bullet>기획 및 타 부서와의 요구사항 협의 및 빠른 반영 — 실무 커뮤니케이션 경험</Bullet>
        </div>

        {/* Daegu Transport */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>대구경북 어르신 무임 교통카드</span>
              <Tag>Spring Boot · Tibero · SQL</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED, whiteSpace: 'nowrap' as const, marginLeft: 8 }}>2025.06 – 2025.12</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4, fontWeight: 500 }}>
            프로젝트 유지보수 및 인프라 관리
          </div>
          <Bullet>서버 라이선스 교체로 고객 정보 조회 오류 해결, 평문 저장 데이터 → 암호화 전환</Bullet>
          <Bullet>DB 모니터링, 클라이언트-서버 통신 점검, 민원 대응으로 서비스 민원 약 70% 감소</Bullet>
          <Bullet>서비스 안정화 → 2025년 9월 이용 금액 전월 대비 약 11.4% 증가 (↑79.7백만원)</Bullet>
        </div>
      </div>

      {/* ═══════════════════════ PROJECTS ════════════════════ */}
      <div style={{ marginBottom: 18 }}>
        <SectionTitle>프로젝트</SectionTitle>

        {/* VERO */}
        <div style={{ marginBottom: 11, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2, flexWrap: 'wrap' as const, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>VERO</span>
              <span style={{ fontSize: '8pt', color: MUTED }}>팀 프로젝트 (4인)</span>
              <Tag>Remix · TypeScript · Zustand · AWS · Pulumi</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED }}>프론트엔드 개발</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4 }}>
            생성형 AI와의 안전한 소통을 지원하는 보안 웹 애플리케이션
          </div>
          <Bullet>JWT + Refresh Token Rotation + HttpOnly 쿠키로 XSS 방어 및 보안 인증 시스템 구현</Bullet>
          <Bullet>Pulumi IaC로 S3 · Lambda · API Gateway · CloudFront를 코드로 관리하여 Serverless 배포 성공</Bullet>
          <Bullet>채팅 페이징 도입으로 대화 데이터 전체 로딩 → 페이지 단위 호출로 성능 개선</Bullet>
          <div style={{ fontSize: '8pt', color: MUTED, marginTop: 3 }}>
            GitHub: github.com/sw-security-web-app/sw-security-web-app_FE
          </div>
        </div>

        {/* Il-Kan */}
        <div style={{ marginBottom: 11, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2, flexWrap: 'wrap' as const, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>Il-Kan</span>
              <span style={{ fontSize: '8pt', color: MUTED }}>팀 프로젝트 (6인)</span>
              <Tag>React · TypeScript · Vite · AWS EC2 · OpenAI API</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED }}>프론트엔드 개발</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4 }}>
            AI 기반 공실 활용 지역 경제 활성화 웹 솔루션
          </div>
          <Bullet>OpenAI gpt-image-1로 공실 리모델링 AI 시각화 구현 (Gemini 대비 성능 대폭 향상)</Bullet>
          <Bullet>AWS EC2 배포 + ALB로 HTTP→HTTPS 리다이렉트 설정, Jira-GitHub 연동 애자일 협업</Bullet>
        </div>

        {/* Menu Picker */}
        <div style={{ marginBottom: 11, paddingBottom: 10, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2, flexWrap: 'wrap' as const, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>Menu Picker</span>
              <span style={{ fontSize: '8pt', color: MUTED }}>개인 프로젝트</span>
              <Tag>React · Gemini API · Kakao API · PWA · Vercel</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED }}>풀스택 개발</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4 }}>
            위치 기반 AI 음식점 추천 서비스 (서버리스 PWA)
          </div>
          <Bullet>Vercel Serverless 함수로 CORS 없이 Gemini API 안전하게 호출하는 서버리스 아키텍처 구축</Bullet>
          <Bullet>Kakao Map API + navigator.geolocation으로 GPS 기반 주변 맛집 탐색 및 추천 구현</Bullet>
          <div style={{ fontSize: '8pt', color: MUTED, marginTop: 3 }}>
            Demo: menu-picker-fe.vercel.app
          </div>
        </div>

        {/* STAGE ON */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2, flexWrap: 'wrap' as const, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' as const }}>
              <span style={{ fontWeight: 700, fontSize: '10pt', color: TEXT }}>STAGE ON</span>
              <span style={{ fontSize: '8pt', color: MUTED }}>팀 프로젝트 (6인)</span>
              <Tag>React · TypeScript · PWA · Vercel</Tag>
            </div>
            <span style={{ fontSize: '8pt', color: MUTED }}>프론트엔드 개발 (PWA)</span>
          </div>
          <div style={{ fontSize: '8.5pt', color: MUTED, marginBottom: 4 }}>
            국내외 아티스트 공연 일정 확인 PWA 서비스
          </div>
          <Bullet>dvh 단위 적용으로 모바일 주소창 등장/사라짐에 따른 UI 떨림 문제 해결</Bullet>
          <Bullet>useSearch · useMyBands 커스텀 훅으로 UI 로직과 API 통신 완전 분리, 재사용성 확보</Bullet>
        </div>
      </div>

      {/* ═══════════════════════ CERTIFICATIONS ══════════════ */}
      <div>
        <SectionTitle>자격증</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px 12px' }}>
          {[
            { name: '정보처리기사',                     date: '2024.09' },
            { name: 'SQL개발자 (SQLD)',                 date: '2023.12' },
            { name: '데이터분석 준전문가 (ADsP)',        date: '2024.11' },
            { name: '데이터아키텍처 준전문가 (DAsP)',    date: '2024.10' },
            { name: 'TOEIC Speaking Intermediate High', date: '2025.11' },
            { name: '컴퓨터활용능력 1급',               date: '2023.04' },
          ].map(cert => (
            <div key={cert.name} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>·</span>
              <span style={{ fontSize: '8.5pt', color: MID, fontWeight: 600 }}>{cert.name}</span>
              <span style={{ fontSize: '7.5pt', color: MUTED }}>({cert.date})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer line */}
      <div style={{
        marginTop: 20,
        paddingTop: 8,
        borderTop: `1px solid ${BORDER}`,
        textAlign: 'center' as const,
        fontSize: '7.5pt',
        color: MUTED,
      }}>
        안현석 · Frontend Developer · aragorn2358@naver.com · github.com/nyeonseok
      </div>
    </div>
  );
});

ResumeDocument.displayName = 'ResumeDocument';
