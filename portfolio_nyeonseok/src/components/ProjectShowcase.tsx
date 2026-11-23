import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getCover } from '../lib/media';
import { Icon } from './Icon';

export function ProjectShowcase() {
  return <ul className="showcase">{projects.map((project, index) => {
    const cover = getCover(project.slug);
    return <li key={project.slug} className="showcase__item">
      <article>
        <div className={`showcase__panel${cover ? ' showcase__panel--image' : ''}`}>
          {cover ? <img src={cover.src} alt={`${project.name} 대표 이미지`} width={cover.width} height={cover.height} loading="lazy" decoding="async" /> : <>
            <div className="showcase__top"><span>{project.card.role}</span><span>0{index + 1}</span></div>
            <h3 className="showcase__name"><Link className="stretched-link" to={`/projects/${project.slug}`}>{project.name}</Link></h3>
            <p className="showcase__metric">{project.card.metric.value}<span>{project.card.metric.label}</span></p>
          </>}
          <span className="showcase__arrow" aria-hidden="true"><Icon name="arrow-up-right" size={21} /></span>
        </div>
        <div className="showcase__caption">
          {cover ? <h3><Link className="stretched-link" to={`/projects/${project.slug}`}>{project.name}</Link></h3> : <p className="showcase__caption-name">{project.name}</p>}
          <p>{project.tagline}</p>
        </div>
        {cover && <p className="showcase__highlight">{project.card.highlight}</p>}
        <p className="showcase__stack">{project.card.stack.slice(0, 3).join(' / ')}</p>
      </article>
    </li>;
  })}</ul>;
}

