import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import type { Flow as FlowData, FlowStep } from '../data/types';
import { Icon } from './Icon';

const stepText = (step: FlowStep) => (typeof step === 'string' ? step : step.text);
const stepTag = (step: FlowStep) => (typeof step === 'string' ? undefined : step.tag);

/** 곡선이 지나는 띠의 높이(px). 단계 점은 이 띠의 위쪽/아래쪽 끝에 번갈아 놓인다. */
const BAND = 76;
/** 단계 점 지름(px) */
const NODE = 36;
/** 가로 배치에 필요한 단계당 최소 너비(px). 모자라면 세로 목록으로 바꾼다. */
const MIN_COL = 80;
/** 양 끝 여백(단계 너비 대비). 첫·마지막 라벨이 상자 밖으로 넘치지 않게 한다. */
const EDGE = 0.4;

const Y_UP = NODE / 2;
const Y_DOWN = BAND - NODE / 2;

/** 이 단계의 점에서 다음 단계의 점까지 잇는 S자 곡선 한 구간 */
function FlowLink({ fromUp }: { fromUp: boolean }) {
  const y1 = fromUp ? Y_UP : Y_DOWN;
  const y2 = fromUp ? Y_DOWN : Y_UP;
  return (
    <svg className="fflow__link" viewBox={`0 0 100 ${BAND}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={`M0 ${y1} C50 ${y1} 50 ${y2} 100 ${y2}`} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/**
 * 단계를 가로 곡선 흐름으로 보여준다. 화면에 들어오면 곡선이 왼쪽부터 그려지며 단계가 순서대로 나타난다.
 * 레이아웃(data-layout)과 애니메이션 상태(data-anim)는 React 상태가 아니라 DOM 속성으로 바꿔
 * 크기 변화나 스크롤 때 다시 렌더링하지 않는다.
 */
export function FlowSteps({ steps, label }: { steps: FlowStep[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const n = steps.length;

  // 첫 페인트 전에 너비를 재서 가로/세로를 정한다.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.dataset.layout = el.clientWidth < MIN_COL * (n + EDGE * 2) ? 'vertical' : 'horizontal';
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  // 모션을 줄이는 설정이면 처음부터 모두 보여준다.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.dataset.anim = 'waiting';
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.dataset.anim = 'shown';
        io.disconnect();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="fflow" style={{ '--n': n, '--band': `${BAND}px`, '--node': `${NODE}px` } as CSSProperties}>
      <ol className="fflow__steps" aria-label={label}>
        {steps.map((step, i) => {
          const tag = stepTag(step);
          const up = i % 2 === 0;
          return (
            <li
              key={i}
              className={`fflow__step fflow__step--${up ? 'up' : 'down'}${tag ? ' is-marked' : ''}`}
              style={{ '--i': i, '--col': i + 2 } as CSSProperties}
            >
              {i < n - 1 && <FlowLink fromUp={up} />}
              <span className="fflow__node" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="fflow__label">
                <span className="fflow__text">{stepText(step)}</span>
                {tag && (
                  <span className="fflow__tag">
                    <Icon name="check" size={12} />
                    {tag}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** 흐름이 2개면 '기존 / 변경 후'처럼 위아래로 쌓아 같은 가로 흐름끼리 비교한다. */
export function FlowGroup({ flows }: { flows: FlowData[] }) {
  if (flows.length === 0) return null;

  return (
    <div className="flow-group">
      {flows.map((flow) => (
        <div key={flow.title} className="flow">
          <p className="flow__title">{flow.title}</p>
          <FlowSteps steps={flow.steps} label={flow.title} />
          {flow.note && <p className="flow__note">{flow.note}</p>}
        </div>
      ))}
    </div>
  );
}
