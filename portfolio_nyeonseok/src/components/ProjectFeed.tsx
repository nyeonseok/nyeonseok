import { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects, smallProjects } from '../data/projects';
import { projectCategories, projectTopics } from '../data/projectTopics';
import { experiences } from '../data/experience';
import { extras } from '../data/extras';
import { ProjectGrid } from './ProjectGrid';
import profileImage from '../assets/profile.jpg';

export function ProjectFeed({ home = false }: { home?: boolean }) {
  const [category, setCategory] = useState('전체');
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLocaleLowerCase();
  const filtered = projects.filter(project => {
    const topic = projectTopics[project.slug];
    return (category === '전체' || topic?.categories.includes(category)) &&
      [project.name, project.tagline, topic?.title, project.focus, project.card.role, ...project.stack].join(' ').toLocaleLowerCase().includes(normalized);
  });
  const experience = experiences[0];
  return <div className="container blog-layout">
    <aside className="blog-sidebar" aria-label="프로필과 바로가기">
      <Link to="/about" className="blog-profile"><img src={profileImage} alt="안현석 프로필" width="88" height="88" /><strong>{profile.name}</strong><span>개발자</span></Link>
      <p className="blog-bio">{profile.headline.join(' ')}.<br />서비스 개발과 운영 과정에서 해결한 문제를 정리합니다.</p>
      <div className="blog-social"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (새 창)</span> ↗</a><a href={`mailto:${profile.email}`}>이메일 ↗</a></div>
      <nav className="blog-shortcuts" aria-label="포트폴리오 바로가기"><Link to="/experience">실무 경험 <span>1</span></Link><Link to="/about">소개 · 교육 · 자격</Link><Link to="/extras">프로젝트 외 자잘한 것들</Link></nav>
      <div className="blog-note"><span>실무 경험</span><Link to="/experience">{experience.org}</Link><p>공공 교통카드 시스템 운영</p><small>{experience.period}</small></div>
    </aside>
    <div className="blog-main">
      <header className="blog-heading"><h1>{home ? '안현석의 개발 포트폴리오' : '프로젝트'}</h1><p>직접 맡은 일과 문제를 해결한 과정을 담았습니다.</p></header>
      <div className="feed-tools">
        <div className="feed-tabs" role="group" aria-label="프로젝트 분야">{projectCategories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <label className="feed-search"><span className="sr-only">프로젝트 검색</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="프로젝트, 기술 검색" /></label>
      </div>
      <p className="feed-count" role="status">{category === '전체' ? '대표 프로젝트' : category} <strong>{filtered.length}</strong>{query && ` · “${query}” 검색 결과`}</p>
      {filtered.length > 0 ? <ProjectGrid projects={filtered} headingLevel="h2" /> : <div className="feed-empty"><h2>검색 결과가 없습니다.</h2><p>다른 프로젝트 이름이나 기술로 검색해 보세요.</p><button type="button" className="button" onClick={() => { setQuery(''); setCategory('전체'); }}>전체 프로젝트 보기</button></div>}
      <section className="blog-more" aria-labelledby="other-work"><h2 id="other-work">그 밖에 만든 것들</h2><Link to="/projects#small-projects"><strong>{smallProjects[0].name}</strong><span>{smallProjects[0].tagline}</span><span aria-hidden="true">→</span></Link><Link to="/extras"><strong>{extras[0].title}</strong><span>ChatGPT · Notion을 이용한 채용공고 탐색과 관리</span><span aria-hidden="true">→</span></Link></section>
    </div>
  </div>;
}
