import { Link } from 'react-router-dom';
import { smallProjects } from '../data/projects';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { SmallProjectCard } from '../components/SmallProjectCard';
export default function Projects() {
  return <div className="paper-surface projects-paper">
    <title>프로젝트 — 안현석</title>
    <header className="container studio-page-title"><p>프로젝트</p><h1>직접 만들고,<br />끝까지 고민한 것들.</h1><span>서비스 개발부터 성능 개선, AI 연동까지.</span></header>
    <section className="container" aria-label="대표 프로젝트"><ProjectShowcase /></section>
    <section className="container studio-small" id="small-projects" aria-labelledby="small-title"><h2 id="small-title">작은 프로젝트</h2>{smallProjects.map(project => <SmallProjectCard key={project.slug} project={project} />)}<Link className="studio-extra-link" to="/extras">프로젝트 외 자잘한 것들 ↗</Link></section>
  </div>;
}
