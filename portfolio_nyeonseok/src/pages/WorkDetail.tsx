import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { workProjects } from '../data/work';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const work = workProjects.find(w => w.id === id);
  useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!work) {
    return (
      <div className="not-found">
        <div className="not-found-number">404</div>
        <h2>프로젝트를 찾을 수 없습니다</h2>
        <button onClick={() => navigate('/work')} className="btn btn-primary" style={{ marginTop: 8 }}>
          실무 프로젝트 목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ background: work.gradient }} />
        <div className="container detail-hero-content">
          <button className="detail-back" onClick={() => navigate('/work')}>
            ← 실무 프로젝트 목록
          </button>
          <div className="reveal">
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className="tag tag-work">실무 프로젝트</span>
              <span className="tag tag-accent">{work.period}</span>
            </div>
            <h1 className="detail-title">{work.title}</h1>
            <p className="detail-subtitle">{work.subtitle}</p>
            <div className="detail-meta">
              <div className="detail-meta-item">
                <span>역할</span>
                <strong>{work.role}</strong>
              </div>
              <div className="detail-meta-item">
                <span>기간</span>
                <strong>{work.period}</strong>
              </div>
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
              {work.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">사용 기술</h2>
            <div className="tech-stack-display">
              {work.techStack.map(tech => (
                <span key={tech} className="tech-tag" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">성과 및 비즈니스 임팩트</h2>
            <div className="achievement-grid">
              {work.achievements.map(a => (
                <div key={a.title} className="achievement-card">
                  {a.metric && <div className="achievement-metric">{a.metric}</div>}
                  <div className="achievement-title">{a.title}</div>
                  <div className="achievement-desc">{a.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="detail-section reveal">
            <h2 className="detail-section-title">담당 역할</h2>
            <div className="responsibility-list">
              {work.responsibilities.map((r, i) => (
                <div key={i} className="responsibility-item">{r}</div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="detail-section reveal" style={{ borderBottom: 'none' }}>
            <button onClick={() => navigate('/work')} className="btn btn-secondary">
              ← 실무 프로젝트 목록으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
