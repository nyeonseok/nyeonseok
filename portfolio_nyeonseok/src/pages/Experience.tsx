import { experiences } from '../data/experience';
import { CaseStudy } from '../components/CaseStudy';
import { Icon } from '../components/Icon';

export default function Experience() {
  return (
    <>
      <title>Experience — 안현석</title>

      {experiences.map((exp) => (
        <article key={exp.id} data-tone={exp.tone} aria-labelledby={`${exp.id}-title`}>
          <header className="dhero">
            <div className="container">
              <p className="kicker">실무 경험</p>
              <p className="pill dhero__pill">
                {exp.org} · {exp.employment}
              </p>
              <h1 className="dhero__title dhero__title--md" id={`${exp.id}-title`}>
                {exp.title}
              </h1>
              <p className="dhero__tagline">{exp.summary}</p>
              <dl className="dmeta">
                <div>
                  <dt>기간</dt>
                  <dd>{exp.period}</dd>
                </div>
                <div>
                  <dt>역할</dt>
                  <dd>{exp.role}</dd>
                </div>
                <div>
                  <dt>소속</dt>
                  <dd>
                    {exp.org} · {exp.employment}
                  </dd>
                </div>
              </dl>
              <ul className="chips chips--surface dhero__stack" aria-label="기술">
                {exp.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="container exp-body">
            <section className="dsection" aria-labelledby={`${exp.id}-incident`}>
              <h2 className="dsection__title" id={`${exp.id}-incident`}>
                대표 문제 해결
              </h2>
              <CaseStudy data={exp.incident} />
              <blockquote className="takeaway">
                <p>{exp.takeaway}</p>
              </blockquote>
            </section>

            <section className="dsection" aria-labelledby={`${exp.id}-duties`}>
              <h2 className="dsection__title" id={`${exp.id}-duties`}>
                담당 업무
              </h2>
              <ul className="checklist">
                {exp.duties.map((d) => (
                  <li key={d}>
                    <span className="checklist__icon" aria-hidden="true">
                      <Icon name="check" size={14} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            {exp.related && (
              <section className="dsection" aria-labelledby={`${exp.id}-related`}>
                <h2 className="dsection__title" id={`${exp.id}-related`}>
                  같은 기간의 다른 업무
                </h2>
                <ul className="related">
                  {exp.related.map((r) => (
                    <li key={r.title} className="related__item">
                      <p className="related__title">{r.title}</p>
                      <p className="related__meta">{r.period}</p>
                      <p className="related__text">{r.detail}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      ))}
    </>
  );
}

