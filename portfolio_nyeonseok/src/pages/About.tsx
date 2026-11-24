import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { awards } from '../data/awards';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from '../components/Icon';
import { skillIcon } from '../data/skillIcons';
import profileImg from '../assets/profile.webp';

const sections = [
  { id: 'strengths', label: '일하는 방식' },
  { id: 'awards', label: '수상' },
  { id: 'education', label: '교육 · 활동' },
  { id: 'skills', label: '기술' },
  { id: 'certifications', label: '자격' },
];

export default function About() {
  // 앵커 이동 시 섹션이 멈추는 위치(헤더 + 탭 ≈ 144px)보다 조금 아래에서 판정한다.
  const active = useActiveSection(
    sections.map((s) => s.id),
    156,
  );

  return (
    <>
      <title>About — 안현석</title>

      <header className="ahero">
        <div className="container ahero__inner">
          <img className="ahero__photo" src={profileImg} alt="안현석 프로필 사진" width={720} height={962} />
          <div>
            <h1 className="ahero__name">
              {profile.name}
              <span className="ahero__en" lang="en">
                {profile.nameEn}
              </span>
            </h1>
            <p className="ahero__lead">{profile.method}</p>
            <ul className="chips chips--surface ahero__facts">
              <li className="chip">{profile.education}</li>
              <li className="chip">학점 {profile.gpa}</li>
            </ul>
            <div className="ahero__actions">
              <a href={`mailto:${profile.email}`} className="button button--primary">
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button">
                GitHub <Icon name="arrow-up-right" size={16} />
                <span className="sr-only"> (새 창)</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="tabs" aria-label="About 섹션">
        <ul className="container">
          {sections.map((s) => (
            <li key={s.id}>
              <Link
                to={`#${s.id}`}
                className={active === s.id ? 'is-active' : undefined}
                aria-current={active === s.id ? 'location' : undefined}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container about-body">
        <section className="about-section" id="strengths" aria-labelledby="strengths-title">
          <h2 className="dsection__title" id="strengths-title">
            일하는 방식
          </h2>
          <ol className="strengths">
            {profile.strengths.map((s, i) => (
              <li key={s} className="strength">
                <span className="strength__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-section" id="awards" aria-labelledby="awards-title">
          <h2 className="dsection__title" id="awards-title">
            수상
          </h2>
          <ul className="awards">
            {awards.map((a) => (
              <li key={a.title} className="award" data-tone="amber">
                <span className="award__icon" aria-hidden="true">
                  <Icon name="medal" size={24} />
                </span>
                <div>
                  <p className="award__date">{a.date}</p>
                  <p className="award__title">{a.title}</p>
                  <p className="award__meta">{a.org}</p>
                  {a.related && (
                    <Link to={a.related.to} className="award__link">
                      {a.related.label} 보기 <Icon name="arrow-right" size={14} />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section" id="education" aria-labelledby="education-title">
          <h2 className="dsection__title" id="education-title">
            교육 · 활동
          </h2>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.title} className="tl-item">
                <p className="tl-item__date">{e.period}</p>
                <h3 className="tl-item__title">{e.title}</h3>
                <p className="tl-item__meta">
                  {e.org}
                  {e.role && ` · ${e.role}`}
                </p>
                {e.highlights && (
                  <ul className="chips tl-item__highlights" aria-label="성과">
                    {e.highlights.map((h) => (
                      <li key={h} className="chip chip--accent">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="list list--compact">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

      </div>

      {/* 기술은 컨테이너를 벗어나 화면 전체 너비를 쓴다. */}
      <section className="about-section skills-band" id="skills" aria-labelledby="skills-title">
        <h2 className="dsection__title" id="skills-title">
          기술
        </h2>
        <div className="skill-board">
          {profile.skills.map((s) => {
            const logos = s.items.filter((item) => skillIcon(item));
            const texts = s.items.filter((item) => !skillIcon(item));
            return (
              <article key={s.area} className="skill-card">
                <h3 className="skill-card__title">{s.area}</h3>
                <p className="skill-card__desc">{s.desc}</p>
                <ul className="skill-card__stack" aria-label={`${s.area} 기술`}>
                  {logos.map((item) => (
                    <li key={item} className="skill-logo">
                      <img src={skillIcon(item)} alt="" width={26} height={26} loading="lazy" />
                      {/* 화면에서는 hover 툴팁, 스크린리더에서는 기술 이름 */}
                      <span className="skill-logo__label">{item}</span>
                    </li>
                  ))}
                  {texts.map((item) => (
                    <li key={item} className="skill-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <div className="container about-body">
        <section className="about-section" id="certifications" aria-labelledby="cert-title">
          <h2 className="dsection__title" id="cert-title">
            자격
          </h2>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name} className="cert">
                <span className="cert__name">{c.name}</span>
                <span className="cert__issuer">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

