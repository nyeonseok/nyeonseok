import { extras } from '../data/extras';
import { FlowSteps } from '../components/Flow';

export default function Extras() {
  return (
    <>
      <title>프로젝트 외 자잘한 것들 — 안현석</title>

      <header className="page-hero" data-tone={extras[0]?.tone}>
        <div className="container">
          <h1 className="page-hero__title">프로젝트 외 자잘한 것들</h1>
          <p className="page-hero__lead">
            정규 프로젝트로 분류하긴 애매하지만, 일상에서 불편했던 걸 직접 만들어서 쓰고 있는 것들입니다.
          </p>
        </div>
      </header>

      <div className="container section section--tight">
        {extras.map((item) => (
          <article key={item.id} id={item.id} className="extra" data-tone={item.tone} aria-labelledby={`${item.id}-title`}>
            <div className="extra__head">
              <div>
                <p className="pill">
                  {item.period} · {item.tools.join(' + ')}
                </p>
                <h2 className="extra__title" id={`${item.id}-title`}>
                  {item.title}
                </h2>
                <p className="extra__problem">{item.problem}</p>
              </div>
              <div className="kpi extra__kpi">
                <span className="extra__kpi-label">{item.metric.label}</span>
                <span className="extra__kpi-value">{item.metric.value}</span>
              </div>
            </div>

            <div className="flow">
              <p className="flow__title">Workflow</p>
              <FlowSteps steps={item.flow} label="채용공고 자동화 Workflow" />
            </div>

            <div className="extra__rules">
              <h3 className="subhead">규칙과 검증</h3>
              <ul className="list">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <p className="extra__result">{item.result}</p>
          </article>
        ))}
      </div>
    </>
  );
}

