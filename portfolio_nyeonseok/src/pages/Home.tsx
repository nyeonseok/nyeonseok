import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import type { IconType } from 'react-icons';
import {
  SiReact, SiRemix, SiTypescript, SiVite, SiCssmodules,
  SiPwa, SiOpenai, SiKakao, SiPulumi,
} from 'react-icons/si';
import { BiLogoAws } from 'react-icons/bi';
import { FaBolt } from 'react-icons/fa';
import { projects } from '../data/projects';

interface SkillChip { Icon: IconType; color: string; name: string; }

const skillChips: SkillChip[] = [
  { Icon: SiReact,      color: '#61DAFB', name: 'React' },
  { Icon: SiRemix,      color: '#E1E1E1', name: 'Remix' },
  { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { Icon: FaBolt,       color: '#FF9F43', name: 'Zustand' },
  { Icon: SiCssmodules, color: '#000BFF', name: 'CSS Modules' },
  { Icon: BiLogoAws,    color: '#FF9900', name: 'AWS' },
  { Icon: SiPwa,        color: '#5A0FC8', name: 'PWA' },
  { Icon: SiVite,       color: '#646CFF', name: 'Vite' },
  { Icon: SiOpenai,     color: '#74AA9C', name: 'OpenAI API' },
  { Icon: SiKakao,      color: '#FEE500', name: 'Kakao API' },
  { Icon: SiPulumi,     color: '#8A3391', name: 'Pulumi' },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter(p => p.featured);

  return (
    <div style={{ paddingTop: 0 }}>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow" />
          <div className="hero-glow-2" />
          <div className="hero-grid" />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            프론트엔드 개발자
          </div>
          <h1 className="hero-name">
            안녕하세요,<br />
            <span className="hero-name-highlight">안현석</span>입니다.
          </h1>
          <p className="hero-title">
            <strong>Frontend Developer</strong> — 사용자 경험을 최우선으로 생각합니다
          </p>
          <p className="hero-desc">
            Remix · React 기반 웹 앱 개발 경험을 보유하고 있으며, 보안 인증 시스템,
            AI API 연동, AWS 서버리스 배포까지 폭넓게 경험했습니다.
            채용 담당자분의 연락을 언제나 환영합니다.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary btn-lg">
              프로젝트 보기 →
            </Link>
            <a
              href="https://github.com/nyeonseok"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-text">
              <div className="section-header">
                <span className="section-label reveal">About Me</span>
                <h2 className="section-title reveal">사용자를 위한 코드를<br />작성합니다</h2>
              </div>
              <p className="reveal">
                정보처리기사, SQLD, ADsP 등 다수의 자격증을 보유하고 있으며,
                실무에서는 대구경북 교통카드 시스템 유지보수와 LG SHOPTIME
                서비스 페이지 개발 경험이 있습니다.
              </p>
              <p className="reveal reveal-delay-1" style={{ marginTop: 12 }}>
                SSAFY 교육 과정을 통해 Remix, React 기반의 팀 프로젝트에서
                프론트엔드 개발을 주도하며, 보안 기능 설계부터 AWS 배포까지
                전체 사이클을 경험했습니다.
              </p>
              <div className="reveal reveal-delay-2" style={{ marginTop: 24 }}>
                <Link to="/about" className="btn btn-secondary">자세히 보기 →</Link>
              </div>
            </div>
            <div className="about-stats">
              {[
                { number: '4+', label: '완성 프로젝트' },
                { number: '6+', label: '보유 자격증' },
                { number: '2년+', label: '개발 경험' },
              ].map((stat, i) => (
                <div key={i} className={`stat-card reveal reveal-delay-${i}`}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Skills Quick ── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">기술 스택</h2>
            <p className="section-desc">다양한 프로젝트를 통해 경험한 기술들입니다.</p>
          </div>
          <div className="skills-quick-grid">
            {skillChips.map((s, i) => (
              <div key={s.name} className={`skill-chip reveal reveal-delay-${Math.min(i % 5, 4)}`}>
                <s.Icon size={18} color={s.color} />
                {s.name}
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 28, textAlign: 'right' }}>
            <Link to="/skills" className="btn btn-ghost">전체 스킬 보기 →</Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Featured Projects ── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title">대표 프로젝트</h2>
            <p className="section-desc">직접 기획하고 개발에 참여한 주요 프로젝트들입니다.</p>
          </div>
          <div className="grid-3">
            {featured.map((project, i) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`card reveal reveal-delay-${i}`}
              >
                <div className="card-thumbnail">
                  <div className="card-thumbnail-inner" style={{ background: project.gradient }} />
                  <span className="card-thumbnail-label">{project.title}</span>
                </div>
                <div className="card-body">
                  <div className="card-tags">
                    <span className={`tag tag-${project.type}`}>{project.typeLabel}</span>
                    {project.teamSize && (
                      <span className="tag tag-accent">팀 {project.teamSize}인</span>
                    )}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.subtitle}</p>
                  <div className="card-techs">
                    {project.techStack.slice(0, 3).map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tech-tag">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="card-footer">
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
                    {project.role}
                  </span>
                  <span className="card-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-secondary">모든 프로젝트 보기 →</Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Contact ── */}
      <section className="section">
        <div className="container">
          <div className="contact-section reveal">
            <h2 className="contact-title">함께 일하고 싶으신가요?</h2>
            <p className="contact-desc">
              새로운 기회와 협업에 열려있습니다. 언제든지 연락해주세요.
            </p>
            <div className="contact-actions">
              <a href="mailto:ynustudy1357@gmail.com" className="btn btn-primary btn-lg">
                이메일 보내기 ✉️
              </a>
              <a
                href="https://github.com/nyeonseok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
