import { useEffect, useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  SiReact, SiRemix, SiTypescript, SiVite, SiCssmodules, SiHtml5, SiJavascript,
  SiReactrouter, SiPwa, SiAxios, SiSpring, SiVercel,
  SiGit, SiGithub, SiJira, SiFigma, SiGitlab, SiNotion,
  SiOpenai, SiKakao, SiMysql, SiPulumi, SiGooglegemini,
  SiPython, SiOpenjdk, SiNginx, SiLinux,
} from 'react-icons/si';
import { BiLogoAws, BiLogoVisualStudio } from 'react-icons/bi';
import { FaBolt, FaDatabase, FaServer, FaShieldAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillDef {
  Icon: IconType;
  color: string;
  name: string;
  level: number;
  levelLabel: string;
}

interface CategoryDef {
  Icon: IconType;
  categoryColor: string;
  title: string;
  skills: SkillDef[];
}

const categories: CategoryDef[] = [
  {
    Icon: SiReact,
    categoryColor: '#61DAFB',
    title: 'Frontend',
    skills: [
      { Icon: SiReact,        color: '#61DAFB', name: 'React',           level: 80, levelLabel: '숙련' },
      { Icon: SiRemix,        color: '#E1E1E1', name: 'Remix',           level: 65, levelLabel: '중급' },
      { Icon: SiTypescript,   color: '#3178C6', name: 'TypeScript',      level: 75, levelLabel: '능숙' },
      { Icon: FaBolt,         color: '#FF9F43', name: 'Zustand',         level: 70, levelLabel: '능숙' },
      { Icon: SiCssmodules,   color: '#000BFF', name: 'CSS Modules',     level: 80, levelLabel: '숙련' },
      { Icon: SiHtml5,        color: '#E34F26', name: 'HTML / CSS',      level: 85, levelLabel: '숙련' },
      { Icon: SiJavascript,   color: '#F7DF1E', name: 'JavaScript',      level: 80, levelLabel: '숙련' },
      { Icon: SiPwa,          color: '#5A0FC8', name: 'PWA',             level: 65, levelLabel: '중급' },
      { Icon: SiReactrouter,  color: '#CA4245', name: 'React Router',    level: 75, levelLabel: '능숙' },
      { Icon: SiVite,         color: '#646CFF', name: 'Vite',            level: 70, levelLabel: '능숙' },
      { Icon: SiAxios,        color: '#5A29E4', name: 'Axios',           level: 75, levelLabel: '능숙' },
    ],
  },
  {
    Icon: BiLogoAws,
    categoryColor: '#FF9900',
    title: 'Backend / Infra',
    skills: [
      { Icon: BiLogoAws,           color: '#FF9900', name: 'AWS EC2',       level: 55, levelLabel: '기초' },
      { Icon: BiLogoAws,           color: '#FF9900', name: 'AWS Lambda',     level: 55, levelLabel: '기초' },
      { Icon: BiLogoAws,           color: '#FF9900', name: 'AWS S3',         level: 55, levelLabel: '기초' },
      { Icon: SiPulumi,            color: '#8A3391', name: 'Pulumi',         level: 50, levelLabel: '기초' },
      { Icon: SiSpring,            color: '#6DB33F', name: 'Spring Boot',    level: 40, levelLabel: '입문' },
      { Icon: SiVercel,            color: '#C8C8C8', name: 'Vercel',         level: 65, levelLabel: '중급' },
      { Icon: SiOpenjdk,           color: '#437291', name: 'Java',           level: 45, levelLabel: '입문' },
      { Icon: SiPython,            color: '#3776AB', name: 'Python',         level: 45, levelLabel: '입문' },
      { Icon: SiNginx,             color: '#009639', name: 'Nginx',          level: 45, levelLabel: '입문' },
      { Icon: SiLinux,             color: '#FCC624', name: 'Linux',          level: 50, levelLabel: '기초' },
    ],
  },
  {
    Icon: SiGit,
    categoryColor: '#F05032',
    title: 'Tools',
    skills: [
      { Icon: SiGit,               color: '#F05032', name: 'Git',            level: 80, levelLabel: '숙련' },
      { Icon: SiGithub,            color: '#C8C8C8', name: 'GitHub',         level: 80, levelLabel: '숙련' },
      { Icon: SiGitlab,            color: '#FC6D26', name: 'GitLab',         level: 60, levelLabel: '중급' },
      { Icon: SiJira,              color: '#0052CC', name: 'Jira',           level: 70, levelLabel: '능숙' },
      { Icon: SiNotion,            color: '#C8C8C8', name: 'Notion',         level: 70, levelLabel: '능숙' },
      { Icon: BiLogoVisualStudio,  color: '#007ACC', name: 'VS Code',        level: 85, levelLabel: '숙련' },
      { Icon: SiFigma,             color: '#F24E1E', name: 'Figma',          level: 50, levelLabel: '기초' },
    ],
  },
  {
    Icon: SiOpenai,
    categoryColor: '#74AA9C',
    title: 'APIs',
    skills: [
      { Icon: SiOpenai,       color: '#74AA9C', name: 'OpenAI API',      level: 65, levelLabel: '중급' },
      { Icon: SiGooglegemini, color: '#4285F4', name: 'Gemini API',      level: 60, levelLabel: '중급' },
      { Icon: SiKakao,        color: '#FEE500', name: 'Kakao API',       level: 65, levelLabel: '중급' },
    ],
  },
  {
    Icon: FaDatabase,
    categoryColor: '#4479A1',
    title: 'Database',
    skills: [
      { Icon: SiMysql,        color: '#4479A1', name: 'MySQL',           level: 70, levelLabel: '능숙' },
      { Icon: FaDatabase,     color: '#336791', name: 'Tibero',          level: 50, levelLabel: '기초' },
      { Icon: FaDatabase,     color: '#000000', name: 'DataGrip',        level: 55, levelLabel: '기초' },
    ],
  },
  {
    Icon: FaServer,
    categoryColor: '#43e97b',
    title: '공공 시스템 인프라',
    skills: [
      { Icon: FaServer,       color: '#43e97b', name: 'WebtoB',          level: 45, levelLabel: '입문' },
      { Icon: FaServer,       color: '#38f9d7', name: 'JEUS',            level: 45, levelLabel: '입문' },
      { Icon: FaShieldAlt,    color: '#F05032', name: 'SG Client',       level: 45, levelLabel: '입문' },
      { Icon: FaShieldAlt,    color: '#4facfe', name: 'CHAKRA',          level: 45, levelLabel: '입문' },
      { Icon: FaShieldAlt,    color: '#00f2fe', name: 'HIWARE',          level: 40, levelLabel: '입문' },
    ],
  },
];

function SkillCard({ skill }: { skill: SkillDef }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${skill.level}%`;
          observer.unobserve(bar);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon" style={{ color: skill.color, display: 'flex', alignItems: 'center' }}>
          <skill.Icon size={22} />
        </span>
        <div>
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level-text">{skill.levelLabel}</div>
        </div>
      </div>
      <div className="skill-bar-bg">
        <div ref={barRef} className="skill-bar-fill" style={{ width: '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header reveal">
            <span className="section-label">Tech Stack</span>
            <h1 className="section-title">기술 스택</h1>
            <p className="section-desc">
              다양한 프로젝트와 실무를 통해 경험한 기술들입니다.
              숙련도는 실제 프로젝트 활용 경험을 기반으로 표시했습니다.
            </p>
          </div>

          <div className="skills-page">
            {categories.map(cat => (
              <div key={cat.title} className="skills-category reveal">
                <h2 className="skills-category-title">
                  <span style={{ color: cat.categoryColor, display: 'flex', alignItems: 'center' }}>
                    <cat.Icon size={20} />
                  </span>
                  {cat.title}
                </h2>
                <div className="skills-grid">
                  {cat.skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 숙련도 범례 */}
          <div
            className="reveal"
            style={{
              marginTop: 48,
              padding: '20px 28px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>숙련도 기준</span>
            {[
              { label: '입문', range: '~40%', color: 'rgba(242, 95, 92, 0.7)' },
              { label: '기초', range: '~55%', color: 'rgba(240, 180, 41, 0.8)' },
              { label: '중급', range: '~65%', color: 'rgba(79, 172, 254, 0.8)' },
              { label: '능숙', range: '~75%', color: 'rgba(91, 138, 240, 0.9)' },
              { label: '숙련', range: '~90%', color: 'var(--accent)' },
            ].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {l.label} ({l.range})
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
