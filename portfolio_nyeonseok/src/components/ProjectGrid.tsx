import { Link } from 'react-router-dom';
import type { Project } from '../data/types';
import { getCover } from '../lib/media';
import { Icon } from './Icon';

interface ProjectGridProps { projects: Project[]; headingLevel?: 'h2' | 'h3' }

export function ProjectGrid({ projects, headingLevel = 'h3' }: ProjectGridProps) {
  const Heading = headingLevel;
  return <ul className="work-list">{projects.map((project) => {
    const cover = getCover(project.slug);
    return <li key={project.slug} className="work-row">
      <div className="work-row__body">
        <p className="work-row__context">{project.context} · {project.period.slice(0, 4)}</p>
        <Heading className="work-row__title"><Link to={`/projects/${project.slug}`} className="stretched-link">{project.name}</Link></Heading>
        <p className="work-row__description">{project.tagline}</p>
        <p className="work-row__role">{project.card.role}</p>
        <ul className="work-row__stack" aria-label="핵심 기술">{project.card.stack.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
      {cover && <img className="work-row__cover" src={cover.src} alt={`${project.name} 대표 화면`} width={cover.width} height={cover.height} loading="lazy" decoding="async" />}
      <div className="work-row__result"><strong>{project.card.metric.value}</strong><p>{project.card.metric.label}</p></div>
      <span className="work-row__arrow" aria-hidden="true"><Icon name="arrow-up-right" size={24} /></span>
    </li>;
  })}</ul>;
}

