import { Link } from 'react-router-dom';
import { projects, smallProjects } from '../data/projects';
import { extras } from '../data/extras';
import { ProjectGrid } from '../components/ProjectGrid';
import { SmallProjectCard } from '../components/SmallProjectCard';
import { Icon } from '../components/Icon';

export default function Projects() {
  const extra = extras[0];

  return (
    <>
      <title>Projects — 안현석</title>

      <header className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">프로젝트</h1>
          <p className="page-hero__lead">
            주요 프로젝트 다섯 개와 작은 프로젝트 하나입니다. 각 프로젝트는 문제 → 판단 → 해결 → 결과 순서로
            정리했습니다.
          </p>
        </div>
      </header>

      <section className="section section--tight container" aria-label="주요 프로젝트">
        <ProjectGrid projects={projects} headingLevel="h2" />
      </section>

      <section className="section container" id="small-projects" aria-labelledby="small-projects-title">
        <header className="section__head">
          <div>
            <h2 className="section__title" id="small-projects-title">
              작은 프로젝트
            </h2>
          </div>
        </header>
        {smallProjects.map((p) => (
          <SmallProjectCard key={p.slug} project={p} />
        ))}
      </section>

      <section className="section container">
        <Link to="/extras" className="aside-link" data-tone={extra.tone}>
          <span>
            <span className="aside-link__label">프로젝트 외 자잘한 것들</span>
            <span className="aside-link__title">{extra.title}</span>
          </span>
          <Icon name="arrow-right" size={20} />
        </Link>
      </section>
    </>
  );
}

