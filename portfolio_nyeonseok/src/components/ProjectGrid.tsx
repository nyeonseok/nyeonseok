import { Link } from 'react-router-dom';
import type { Project } from '../data/types';
import { projectTopics } from '../data/projectTopics';
import { getCover } from '../lib/media';

interface ProjectGridProps { projects: Project[]; headingLevel?: 'h2' | 'h3' }

export function ProjectGrid({ projects, headingLevel = 'h3' }: ProjectGridProps) {
  const Heading = headingLevel;
  return <ul className="post-list">{projects.map(project => {
    const cover = getCover(project.slug);
    const topic = projectTopics[project.slug];
    return <li key={project.slug} className="post">
      <article>
        <div className="post__meta"><span>{project.name}</span><span>{project.period}</span></div>
        <Heading className="post__title"><Link to={`/projects/${project.slug}`} className="stretched-link">{topic?.title ?? project.tagline}</Link></Heading>
        <p className="post__service">{project.tagline}</p>
        <div className="post__preview">
          <p className="post__excerpt">{project.focus ?? project.overview[0]}</p>
          {cover && <img src={cover.src} alt={`${project.name} 서비스 화면`} width={cover.width} height={cover.height} loading="lazy" decoding="async" />}
        </div>
        <p className="post__result">{project.card.highlight}</p>
        <ul className="post__tags" aria-label="핵심 기술">{project.card.stack.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}</ul>
        <div className="post__footer"><span>{project.card.role}</span><span aria-hidden="true">자세히 읽기 →</span></div>
      </article>
    </li>;
  })}</ul>;
}
