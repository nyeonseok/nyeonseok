import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="not-found">
        <div className="not-found-number">404</div>
        <h2>프로젝트를 찾을 수 없습니다</h2>
        <button onClick={() => navigate('/projects')} className="btn btn-primary" style={{ marginTop: 8 }}>
          프로젝트 목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ background: project.gradient }} />
        <div className="container detail-hero-content">
          <button className="detail-back" onClick={() => navigate('/projects')}>
            ← 프로젝트 목록
          </button>
          <div className="reveal">
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className={`tag tag-${project.type}`}>{project.typeLabel}</span>
              {project.teamSize ? (
                <span className="tag tag-accent">팀 {project.teamSize}인</span>
              ) : (
                <span className="tag tag-toy">개인 개발</span>
              )}
            </div>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-subtitle">{project.subtitle}</p>
            <div className="detail-meta">
              <div className="detail-meta-item">
                <span>역할</span>
                <strong>{project.role}</strong>
              </div>
              {project.period && (
                <div className="detail-meta-item">
                  <span>기간</span>
                  <strong>{project.period}</strong>
                </div>
              )}
              {project.teamSize && (
                <div className="detail-meta-item">
                  <span>팀 규모</span>
                  <strong>{project.teamSize}명</strong>
                </div>
              )}
            </div>
            <div className="detail-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  🐙 GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  🚀 배포 링크
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="detail-body">
        <div className="container">
          {/* Overview */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">프로젝트 개요</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.975rem' }}>
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">기술 스택</h2>
            <div className="tech-stack-display">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-tag" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">주요 기능</h2>
            <div className="feature-list">
              {project.features.map(f => (
                <div key={f.title} className="feature-item">
                  <div className="feature-item-title">{f.title}</div>
                  <div className="feature-item-desc">{f.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contributions */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">개인 기여도</h2>
            <div className="contribution-list">
              {project.contributions.map(c => (
                <div key={c.title} className="contribution-item">
                  <div className="contribution-title">{c.title}</div>
                  <div className="contribution-points">
                    {c.items.map((item, i) => (
                      <div key={i} className="contribution-point">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">트러블슈팅</h2>
            <div className="trouble-list">
              {project.troubleshooting.map(t => (
                <div key={t.title} className="trouble-item">
                  <div className="trouble-header">{t.title}</div>
                  <div className="trouble-body">
                    <div className="trouble-row trouble-problem">
                      <span className="trouble-label">문제</span>
                      <p className="trouble-text">{t.problem}</p>
                    </div>
                    <div className="trouble-row trouble-solution">
                      <span className="trouble-label">해결</span>
                      <div>
                        <p className="trouble-text">{t.solution}</p>
                        {t.code && <pre className="code-block">{t.code}</pre>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">스크린샷</h2>
            <div className="screenshots-grid">
              {[1, 2, 3].map(n => (
                <div key={n} className="media-placeholder screenshot-placeholder">
                  <span className="media-icon">🖼️</span>
                  <span>Screenshot {n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Video */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">시연 영상</h2>
            <div className="media-placeholder video-placeholder">
              <span className="media-icon">▶️</span>
              <span>시연 영상 영역 (Video Placeholder)</span>
            </div>
          </div>

          {/* CTA */}
          <div className="detail-section reveal" style={{ borderBottom: 'none' }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  🐙 GitHub에서 코드 보기
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  🚀 배포 링크 방문
                </a>
              )}
              <button onClick={() => navigate('/projects')} className="btn btn-ghost">
                ← 목록으로
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
