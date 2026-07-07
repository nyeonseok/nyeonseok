import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  if (!project) {
    return (
      <div className="not-found">
        <div className="not-found-number">404</div>
        <h2>프로젝트를 찾을 수 없습니다</h2>
        <button
          onClick={() => navigate("/projects")}
          className="btn btn-primary"
          style={{ marginTop: 8 }}
        >
          프로젝트 목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero">
        <div
          className="detail-hero-bg"
          style={{ background: project.gradient }}
        />
        <div className="container detail-hero-content">
          <button className="detail-back" onClick={() => navigate("/projects")}>
            ← 프로젝트 목록
          </button>
          <div className="reveal">
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              <span className={`tag tag-${project.type}`}>
                {project.typeLabel}
              </span>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  🐙 GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
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
          {/* Thumbnail */}
          {/* {project.thumbnail && (
            <div className="detail-section reveal" style={{ paddingBottom: 0 }}>
              <img
                src={project.thumbnail}
                alt={`${project.title} 대표 이미지`}
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', border: '1px solid var(--border)' }}
              />
            </div>
          )} */}

          {/* Overview */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">프로젝트 개요</h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "0.975rem",
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Background & Goals */}
          {project.background && (
            <div className="detail-section reveal">
              <h2 className="detail-section-title">배경 &amp; 목표</h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  fontSize: "0.975rem",
                }}
              >
                {project.background}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">기술 스택</h2>
            <div className="tech-stack-display">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="tech-tag"
                  style={{
                    fontSize: "0.85rem",
                    padding: "6px 14px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.techReason && (
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  fontSize: "0.925rem",
                  marginTop: 20,
                  borderLeft: "3px solid var(--accent)",
                  paddingLeft: 16,
                }}
              >
                <strong
                  style={{
                    color: "var(--text)",
                    display: "block",
                    marginBottom: 6,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  선택 이유
                </strong>
                {project.techReason}
              </p>
            )}
          </div>

          {/* Features */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">주요 기능</h2>
            <div className="feature-list">
              {project.features.map((f) => (
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
              {project.contributions.map((c) => (
                <div key={c.title} className="contribution-item">
                  <div className="contribution-title">{c.title}</div>
                  <div className="contribution-points">
                    {c.items.map((item, i) => (
                      <div key={i} className="contribution-point">
                        {item}
                      </div>
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
              {project.troubleshooting.map((t) => (
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
            {project.screenshots && (
              <div className="screenshots-grid">
                {project.screenshots.map((shot) => (
                  <div key={shot.title} className="screenshot-card">
                    <div className="screenshot-media">
                      <img src={shot.image} alt={shot.title} />
                      <button
                        type="button"
                        className="screenshot-expand-btn"
                        aria-label="이미지 전체화면으로 보기"
                        onClick={() =>
                          setLightbox({ src: shot.image, alt: shot.title })
                        }
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                        </svg>
                      </button>
                    </div>
                    <h4>{shot.title}</h4>
                    <p>{shot.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Demo Video */}
          {project.demoVideo && (
            <div className="detail-section reveal">
              <h2 className="detail-section-title">시연 영상</h2>

              <div className="project-video">
                <video
                  src={project.demoVideo}
                  controls
                  preload="metadata"
                  playsInline
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            className="detail-section reveal"
            style={{ borderBottom: "none" }}
          >
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  🐙 GitHub에서 코드 보기
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🚀 배포 링크 방문
                </a>
              )}
              <button
                onClick={() => navigate("/projects")}
                className="btn btn-ghost"
              >
                ← 목록으로
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="screenshot-lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="screenshot-lightbox-close"
            aria-label="닫기"
            onClick={() => setLightbox(null)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
