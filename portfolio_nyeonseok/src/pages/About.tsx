import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const strengths = [
  {
    icon: '🔐',
    title: '보안 인식',
    desc: 'JWT, HttpOnly 쿠키, XSS 방어 등 보안을 고려한 인증 시스템 설계 경험',
  },
  {
    icon: '🔧',
    title: '문제 해결력',
    desc: 'CORS, 배포 이슈, 상태 관리 복잡도 등 실제 문제를 분석하고 해결한 다수의 경험',
  },
  {
    icon: '🚀',
    title: '배포 경험',
    desc: 'AWS EC2, Lambda, S3, CloudFront, Pulumi IaC를 활용한 실제 서비스 배포 경험',
  },
  {
    icon: '🤝',
    title: '협업 능력',
    desc: 'Jira-GitHub 연동 애자일 협업, 기획·타부서와의 커뮤니케이션 실무 경험',
  },
  {
    icon: '🧩',
    title: '컴포넌트 설계',
    desc: '커스텀 훅, CSS Modules, 재사용 가능한 컴포넌트 구조 설계 경험',
  },
  {
    icon: '📱',
    title: 'PWA 개발',
    desc: 'Service Worker, dvh 단위 뷰포트 처리 등 모바일 최적화 PWA 개발 경험',
  },
];

const certs = [
  { icon: '💻', name: '정보처리기사', date: '2024.09.10' },
  { icon: '🗃️', name: 'SQL개발자 (SQLD)', date: '2023.12.15' },
  { icon: '📊', name: '데이터분석 준전문가 (ADsP)', date: '2024.11.29' },
  { icon: '🏗️', name: '데이터아키텍처 준전문가 (DAsP)', date: '2024.10.25' },
  { icon: '🗣️', name: 'TOEIC Speaking Intermediate High', date: '2025.11.20' },
  { icon: '⌨️', name: '컴퓨터활용능력 1급', date: '2023.04.21' },
];

const workStyles = [
  {
    emoji: '📋',
    text: '<strong>문서화 중시</strong> — Jira, GitHub 이슈를 통한 체계적인 작업 관리와 애자일 협업을 선호합니다.',
  },
  {
    emoji: '🔍',
    text: '<strong>원인 분석 우선</strong> — 문제가 생기면 임시방편보다 근본 원인을 파악하고 해결하는 것을 지향합니다.',
  },
  {
    emoji: '💬',
    text: '<strong>적극적 커뮤니케이션</strong> — 기획·타 부서와의 요구사항 협의 경험을 바탕으로 명확한 소통을 실천합니다.',
  },
  {
    emoji: '🌱',
    text: '<strong>지속적 학습</strong> — 새로운 기술과 도구를 두려워하지 않고 공식 문서를 기반으로 빠르게 습득합니다.',
  },
];

export default function About() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page">
      <div className="container">
        {/* Profile */}
        <div className="about-profile">
          <div className="about-avatar">안현석</div>
          <div className="about-info">
            <h1>안현석</h1>
            <div className="role-badge">⚛️ 프론트엔드 개발자</div>
            <p className="about-bio">
              사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              Remix, React 기반의 웹 애플리케이션 개발 경험을 보유하고 있으며,
              보안 인증 시스템, AI API 연동, AWS 서버리스 배포까지 폭넓게 경험했습니다.
              <br /><br />
              SSAFY 교육 과정을 통해 팀 프로젝트에서 프론트엔드 개발을 주도하며
              협업 역량을 키웠고, 실무에서는 대구경북 교통카드 시스템 유지보수와
              LG SHOPTIME 서비스 페이지 개발을 통해 운영 환경에서의 실전 경험을 쌓았습니다.
              <br /><br />
              정보처리기사, SQLD를 포함한 다수의 자격증을 보유하며 기술 역량 향상에
              꾸준히 노력하고 있습니다.
            </p>
            <div className="about-contact-list">
              <div className="about-contact-item">
                <div className="contact-icon">✉️</div>
                <a href="mailto:ynustudy1357@gmail.com">ynustudy1357@gmail.com</a>
              </div>
              <div className="about-contact-item">
                <div className="contact-icon">🐙</div>
                <a href="https://github.com/nyeonseok" target="_blank" rel="noopener noreferrer">
                  github.com/nyeonseok
                </a>
              </div>
              <div className="about-contact-item">
                <div className="contact-icon">📍</div>
                <span>대구광역시</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="about-section reveal">
          <h2 className="about-section-title">개발자로서의 강점</h2>
          <div className="strength-grid">
            {strengths.map((s, i) => (
              <div key={i} className="strength-card">
                <div className="strength-icon">{s.icon}</div>
                <div className="strength-title">{s.title}</div>
                <div className="strength-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="about-section reveal">
          <h2 className="about-section-title">일하는 방식</h2>
          <div className="workstyle-list">
            {workStyles.map((w, i) => (
              <div key={i} className="workstyle-item">
                <span className="workstyle-emoji">{w.emoji}</span>
                <p
                  className="workstyle-text"
                  dangerouslySetInnerHTML={{ __html: w.text }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section reveal">
          <h2 className="about-section-title">자격증</h2>
          <div className="cert-list">
            {certs.map((c, i) => (
              <div key={i} className="cert-item">
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-date">{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-section reveal" style={{ borderTop: 'none', marginTop: 0, paddingTop: 0, paddingBottom: 80 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:ynustudy1357@gmail.com" className="btn btn-primary">
              연락하기 ✉️
            </a>
            <Link to="/projects" className="btn btn-secondary">
              프로젝트 보기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
