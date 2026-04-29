import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { workProjects } from '../data/work';
import type { WorkProject } from '../data/work';
import { useScrollReveal } from '../hooks/useScrollReveal';

function WorkCard({ work }: { work: WorkProject }) {
  return (
    <Link to={`/work/${work.id}`} className="card">
      <div className="card-thumbnail">
        <div className="card-thumbnail-inner" style={{ background: work.gradient }} />
        <span className="card-thumbnail-label" style={{ fontSize: '1.2rem', textAlign: 'center', padding: '0 16px' }}>
          {work.title}
        </span>
      </div>
      <div className="card-body">
        <div className="card-tags">
          <span className="tag tag-work">실무 프로젝트</span>
          <span className="tag tag-accent">{work.period}</span>
        </div>
        <h3 className="card-title">{work.title}</h3>
        <p className="card-desc">{work.subtitle}</p>
        <div className="card-techs">
          {work.techStack.slice(0, 4).map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>{work.role}</span>
        <span className="card-arrow">→</span>
      </div>
    </Link>
  );
}

export default function Work() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header reveal">
            <span className="section-label">Work Experience</span>
            <h1 className="section-title">실무 프로젝트</h1>
            <p className="section-desc">
              실제 서비스 운영 환경에서 쌓은 실무 경험입니다.
              성과와 비즈니스 임팩트를 중심으로 정리했습니다.
            </p>
          </div>

          {/* Impact Banner */}
          <div
            className="reveal"
            style={{
              background: 'linear-gradient(135deg, rgba(76, 175, 125, 0.08), rgba(56, 249, 215, 0.04))',
              border: '1px solid rgba(76, 175, 125, 0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 32px',
              marginBottom: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📈</span>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                실무 프로젝트 핵심 성과
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                대구경북 교통카드 민원 약 70% 감소 · 이용 금액 11.4% 증가 | LG SHOPTIME 서비스 안정적 운영 기여
              </div>
            </div>
          </div>

          <div className="grid-2">
            {workProjects.map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
