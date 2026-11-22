import type { SmallProject } from '../data/types';
import { getAssets, getCover } from '../lib/media';
import { Gallery } from './Media';
import { ExternalLinks } from './ExternalLinks';

export function SmallProjectCard({ project }: { project: SmallProject }) {
  const cover = getCover(project.slug);
  const screens = getAssets(project.slug, 'screens');
  const performance = getAssets(project.slug, 'performance');
  const hasMore = screens.length > 0 || performance.length > 0;
  const captions = project.captions ?? {};

  return (
    <article
      className={`sp${cover ? ' sp--media' : ''}`}
      data-tone={project.tone}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="sp__body">
        <p className="pill">
          {project.org} · {project.period}
        </p>
        <h3 className="sp__name" id={`${project.slug}-title`}>
          {project.name}
        </h3>
        <p className="sp__tagline">{project.tagline}</p>
        <dl className="meta-rows">
          <div>
            <dt>역할</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>기술</dt>
            <dd>{project.stack.join(' · ')}</dd>
          </div>
        </dl>

        <p className="sp__problem">{project.problem}</p>
        <ul className="list list--compact">
          {project.actions.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <dl className="kpis kpis--compact">
          {project.results.map((r) => (
            <div key={r.label} className="kpi">
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        {project.note && <p className="note">{project.note}</p>}

        {project.links && <ExternalLinks links={project.links} />}

        {hasMore && (
          <details className="disclosure">
            <summary>화면 보기</summary>
            <Gallery assets={screens} label="화면" projectName={project.name} captions={captions} />
            <Gallery assets={performance} label="성능 측정" projectName={project.name} captions={captions} />
          </details>
        )}
      </div>

      {cover && (
        <div className="sp__visual">
          <img
            src={cover.src}
            alt={captions[cover.key] ?? `${project.name} 화면`}
            width={cover.width}
            height={cover.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </article>
  );
}
