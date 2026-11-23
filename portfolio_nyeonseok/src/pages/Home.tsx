import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { Icon } from '../components/Icon';
import { HeroDock } from '../components/HeroDock';
import portrait from '../assets/profile-cutout.webp';

export default function Home() {
  return <>
    <title>안현석 — 개발자 포트폴리오</title>
    <section className="portrait-hero" aria-labelledby="home-title">
      <img className="portrait-hero__image" src={portrait} alt="안현석 프로필" width="898" height="1200" fetchPriority="high" />
      <div className="container portrait-hero__top"><span>안현석 · 개발자</span><span>Backend / AI / Service operation</span></div>
      <div className="container portrait-hero__body">
        <a className="portrait-hero__down" href="#selected-work" aria-label="대표 프로젝트로 이동"><Icon name="arrow-right" size={22} /></a>
      </div>
      {/* 얼굴 아래(가슴 높이)에 고정. 모바일에서는 첫 구절이 줄바꿈된다. */}
      <h1 id="home-title" className="portrait-hero__title"><span>익숙함을 넘어,</span> 도전하는 개발자</h1>
      <div className="container portrait-hero__bottom"><span>{profile.nameEn}</span><HeroDock /><span>개발 · 운영 · 문제 해결</span></div>
    </section>
    <div className="paper-surface">
      <section className="container studio-intro" aria-label="소개">
        <p>서비스를 만들고,<br />운영하면서 생기는 문제를 해결합니다.</p>
        <div><p>{profile.summary}</p><Link to="/about">조금 더 알아보기 <Icon name="arrow-up-right" size={16} /></Link></div>
      </section>
      <section className="container studio-work" id="selected-work" aria-labelledby="work-title">
        <header className="studio-section-head"><h2 id="work-title">Selected projects<span>05</span></h2><Link to="/projects">전체 프로젝트 <Icon name="arrow-up-right" size={16} /></Link></header>
        <ProjectShowcase />
      </section>
      <section className="container studio-experience" aria-labelledby="work-experience"><div><p>실무 경험</p><h2 id="work-experience">운영 환경에서<br />직접 마주한 문제들.</h2></div><div><p className="studio-experience__meta">{experiences[0].org} · {experiences[0].period}</p><h3>{experiences[0].title}</h3><p>{experiences[0].summary}</p><Link to="/experience">실무 경험 보기 <Icon name="arrow-up-right" size={18} /></Link></div></section>
    </div>
  </>;
}
