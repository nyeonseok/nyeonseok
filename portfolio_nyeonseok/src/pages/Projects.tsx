import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

type FilterType = 'all' | 'team' | 'toy' | 'pwa';

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'team', label: '팀 프로젝트' },
  { key: 'toy', label: '토이 프로젝트' },
  { key: 'pwa', label: 'PWA' },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.id}`} className="card">
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
          {!project.teamSize && (
            <span className="tag tag-toy">개인</span>
          )}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.subtitle}</p>
        <div className="card-techs">
          {project.techStack.slice(0, 4).map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-tag">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
      <div className="card-footer">
        <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>{project.role}</span>
        <span className="card-arrow">→</span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const [active, setActive] = useState<FilterType>('all');
  useScrollReveal();

  const filtered = active === 'all' ? projects : projects.filter(p => p.type === active);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header reveal">
            <span className="section-label">Portfolio</span>
            <h1 className="section-title">프로젝트</h1>
            <p className="section-desc">
              팀 프로젝트부터 개인 토이 프로젝트까지, 다양한 경험을 쌓아왔습니다.
            </p>
          </div>

          <div className="filter-bar reveal">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
                {f.key !== 'all' && (
                  <span style={{ marginLeft: 6, opacity: 0.7 }}>
                    ({projects.filter(p => p.type === f.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-tertiary)' }}>
              해당 유형의 프로젝트가 없습니다.
            </div>
          ) : (
            <div className="grid-3">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
