import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects, smallProjects } from '../data/projects';
import { experiences } from '../data/experience';
import { extras } from '../data/extras';
import { ProjectGrid } from '../components/ProjectGrid';
import { Icon } from '../components/Icon';

export default function Home() {
  const experience = experiences[0];
  return (
    <>
      <title>안현석 — 개발자 포트폴리오</title>
      <section className="intro container" aria-labelledby="hero-title">
        <div className="intro__layout">
          <div>
            <p className="intro__name">안현석 · 개발자</p>
            <h1 id="hero-title">익숙함에 안주하지 않고<br /><em>도전하는 개발자</em></h1>
            <p className="intro__summary">서비스를 개발하고 운영하면서 동시성, 성능, AI 연동 문제를 해결해 왔습니다.</p>
            <div className="hero__actions">
              <Link to="/projects" className="button button--primary button--lg">프로젝트 보기 <Icon name="arrow-right" size={18} /></Link>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button--lg">GitHub <Icon name="arrow-up-right" size={16} /><span className="sr-only"> (새 창)</span></a>
              <Link to="/about" className="button button--ghost button--lg">About</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" aria-labelledby="home-projects">
        <header className="section__head">
          <div><h2 className="section__title" id="home-projects">대표 프로젝트</h2></div>
          <Link to="/projects" className="link-arrow">전체 프로젝트 <Icon name="arrow-right" size={16} /></Link>
        </header>
        <ProjectGrid projects={projects} />
      </section>
      <section className="operation container section" aria-labelledby="home-experience">
        <div className="operation__inner">
          <div><h2 id="home-experience">실무 경험</h2><Link to="/experience" className="button button--primary">실무 경험 보기 <Icon name="arrow-right" size={16} /></Link></div>
          <div className="operation__story"><p className="operation__meta">{experience.org} · {experience.employment}<br />{experience.period}</p><h3>{experience.title}</h3><p>{experience.summary}</p><p className="operation__incident">{experience.incident.title}</p><p>로그 확인 → 원인 특정 → 서버 순차 변경 → 재암호화 → 데이터 정합성 검증</p></div>
        </div>
      </section>
      <section className="section container" aria-labelledby="home-more">
        <header className="section__head"><div><h2 className="section__title" id="home-more">그 밖에 만든 것들</h2></div></header>
        <div className="side-notes">
          <Link to="/projects#small-projects" className="side-note"><span className="kicker">개인 프로젝트</span><h3>{smallProjects[0].name} <Icon name="arrow-up-right" size={22} /></h3><p>{smallProjects[0].tagline}</p></Link>
          <Link to="/extras" className="side-note"><span className="kicker">프로젝트 외 자잘한 것들</span><h3>{extras[0].title} <Icon name="arrow-up-right" size={22} /></h3><p>ChatGPT와 Notion으로 채용공고 탐색·분류·저장을 자동화했습니다.</p></Link>
        </div>
      </section>
    </>
  );
}

