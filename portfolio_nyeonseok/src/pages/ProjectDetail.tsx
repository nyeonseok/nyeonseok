import { Link, Navigate, useParams } from 'react-router-dom';
import { getProject, legacyProjectRedirects, projects } from '../data/projects';
import type { MediaFolder, Project } from '../data/types';
import { getAssets, getCover } from '../lib/media';
import { useActiveSection } from '../hooks/useActiveSection';
import { CaseStudy } from '../components/CaseStudy';
import { FlowGroup } from '../components/Flow';
import { Gallery, MediaItem } from '../components/Media';
import { ExternalLinks } from '../components/ExternalLinks';
import { Icon } from '../components/Icon';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    const legacy = slug ? legacyProjectRedirects[slug] : undefined;
    return legacy ? <Navigate to={legacy} replace /> : <NotFound />;
  }
  // key: 다른 프로젝트로 이동하면 목차 상태를 새로 시작한다.
  return <ProjectArticle key={project.slug} project={project} />;
}

function ProjectArticle({ project }: { project: Project }) {
  const captions = project.captions ?? {};
  const cover = getCover(project.slug);

  const galleriesAt = (placement: MediaFolder['placement']) =>
    project.media
      .filter((m) => m.placement === placement)
      .map((m) => ({ ...m, assets: getAssets(project.slug, m.dir) }))
      .filter((m) => m.assets.length > 0);

  const screens = galleriesAt('screens');
  const caseMedia = galleriesAt('cases');
  const resultMedia = galleriesAt('results');
  const flowMedia = galleriesAt('flow');
  const retro = (project.retrospective ?? []).filter((r) => r.body?.trim());

  const hasResults = Boolean(project.outcomes?.length) || resultMedia.length > 0;
  const hasFlow = Boolean(project.flows?.length) || flowMedia.length > 0;

  const toc = [
    { id: 'overview', label: '개요', show: true },
    { id: 'screens', label: screens[0]?.label ?? '서비스 화면', show: screens.length > 0 },
    { id: 'contribution', label: '내가 맡은 부분', show: true },
    { id: 'cases', label: '문제 해결', show: project.cases.length > 0 },
    { id: 'results', label: '결과', show: hasResults },
    { id: 'architecture', label: 'Architecture · Flow', show: hasFlow },
    { id: 'retrospective', label: '회고', show: retro.length > 0 },
    { id: 'links', label: '링크', show: Boolean(project.links?.length) },
  ].filter((t) => t.show);
  const active = useActiveSection(toc.map((t) => t.id));

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const renderGalleries = (items: ReturnType<typeof galleriesAt>, showLabel = true) =>
    items.map((m) => (
      <div key={m.dir} className="detail-media">
        {showLabel && <h3 className="subhead">{m.label}</h3>}
        <Gallery assets={m.assets} label={m.label} projectName={project.name} captions={captions} />
      </div>
    ));

  return (
    <article className="detail" data-tone={project.tone} aria-labelledby="project-title">
      <title>{`${project.name} — 안현석`}</title>

      <header className="dhero">
        <div className="container">
          <Link to="/projects" className="back-link">
            <Icon name="arrow-left" size={16} /> Projects
          </Link>
          <p className="pill dhero__pill">{project.context}</p>
          <h1 className="dhero__title" id="project-title">
            {project.name}
          </h1>
          <p className="dhero__tagline">{project.tagline}</p>

          <dl className="dmeta">
            <div>
              <dt>기간</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>역할</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>기관</dt>
              <dd>{project.org}</dd>
            </div>
            {project.team && (
              <div>
                <dt>구성</dt>
                <dd>{project.team}</dd>
              </div>
            )}
          </dl>

          <ul className="chips chips--surface dhero__stack" aria-label="핵심 기술">
            {project.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>

          {project.keyResults && (
            <>
              <dl className="kpis">
                {project.keyResults.map((r) => (
                  <div key={r.label} className="kpi">
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))}
              </dl>
              {project.keyResultsNote && (
                <p className="note note--icon">
                  <Icon name="info" size={16} />
                  {project.keyResultsNote}
                </p>
              )}
            </>
          )}

          {cover && (
            <div className="dhero__cover">
              <MediaItem asset={cover} alt={captions[cover.key] ?? `${project.name} 대표 화면`} priority />
            </div>
          )}
        </div>
      </header>

      <div className="container dlayout">
        <nav className="dtoc" aria-label="이 페이지의 목차">
          <p className="dtoc__title">목차</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <Link
                  to={`#${t.id}`}
                  className={active === t.id ? 'is-active' : undefined}
                  aria-current={active === t.id ? 'location' : undefined}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="dcontent">
          <section id="overview" className="dsection" aria-labelledby="overview-title">
            <h2 className="dsection__title" id="overview-title">
              개요
            </h2>
            <div className="prose">
              {project.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {project.team && (
              <p className="note note--icon">
                <Icon name="info" size={16} />
                서비스 소개는 팀 전체 기준입니다. 개인 기여는 아래 ‘내가 맡은 부분’부터 정리했습니다.
              </p>
            )}
          </section>

          {screens.length > 0 && (
            <section id="screens" className="dsection" aria-labelledby="screens-title">
              <h2 className="dsection__title" id="screens-title">
                {screens[0].label}
              </h2>
              {renderGalleries(screens, false)}
            </section>
          )}

          <section id="contribution" className="dsection" aria-labelledby="contribution-title">
            <h2 className="dsection__title" id="contribution-title">
              내가 맡은 부분
            </h2>
            {project.focus && <p className="focus-lead">{project.focus}</p>}
            <div className="contrib-grid">
              {project.contributions.map((group) => (
                <div key={group.title} className="contrib">
                  <h3 className="contrib__title">{group.title}</h3>
                  <ul className="list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {project.cases.length > 0 && (
            <section id="cases" className="dsection" aria-labelledby="cases-title">
              <h2 className="dsection__title" id="cases-title">
                문제 해결
              </h2>
              <div className="cases">
                {project.cases.map((c, i) => {
                  const assets = c.media ? getAssets(project.slug, c.media) : [];
                  return (
                    <CaseStudy key={c.id} data={c} index={i}>
                      <Gallery assets={assets} label={c.title} projectName={project.name} captions={captions} />
                    </CaseStudy>
                  );
                })}
              </div>
              {renderGalleries(caseMedia)}
              {project.takeaway && (
                <blockquote className="takeaway">
                  <p>{project.takeaway}</p>
                </blockquote>
              )}
            </section>
          )}

          {hasResults && (
            <section id="results" className="dsection" aria-labelledby="results-title">
              <h2 className="dsection__title" id="results-title">
                결과
              </h2>
              {project.outcomes && (
                <ul className="list">
                  {project.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              )}
              {renderGalleries(resultMedia, false)}
            </section>
          )}

          {hasFlow && (
            <section id="architecture" className="dsection" aria-labelledby="architecture-title">
              <h2 className="dsection__title" id="architecture-title">
                Architecture · Flow
              </h2>
              {project.flows && <FlowGroup flows={project.flows} />}
              {renderGalleries(flowMedia)}
            </section>
          )}

          {retro.length > 0 && (
            <section id="retrospective" className="dsection" aria-labelledby="retro-title">
              <h2 className="dsection__title" id="retro-title">
                회고
              </h2>
              <dl className="retro">
                {retro.map((r) => (
                  <div key={r.label} className="retro__item">
                    <dt>{r.label}</dt>
                    <dd>{r.body}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section id="links" className="dsection" aria-labelledby="links-title">
              <h2 className="dsection__title" id="links-title">
                링크
              </h2>
              <ExternalLinks links={project.links} />
            </section>
          )}
        </div>
      </div>

      <nav className="container pager" aria-label="다른 프로젝트">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="pager__link" data-tone={prev.tone}>
            <span className="pager__dir">
              <Icon name="arrow-left" size={14} /> 이전 프로젝트
            </span>
            <span className="pager__name">{prev.name}</span>
            <span className="pager__tagline">{prev.tagline}</span>
          </Link>
        ) : (
          <span className="pager__spacer" />
        )}
        {next ? (
          <Link to={`/projects/${next.slug}`} className="pager__link pager__link--next" data-tone={next.tone}>
            <span className="pager__dir">
              다음 프로젝트 <Icon name="arrow-right" size={14} />
            </span>
            <span className="pager__name">{next.name}</span>
            <span className="pager__tagline">{next.tagline}</span>
          </Link>
        ) : (
          <Link to="/projects" className="pager__link pager__link--next">
            <span className="pager__dir">
              목록 <Icon name="arrow-right" size={14} />
            </span>
            <span className="pager__name">전체 프로젝트</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
