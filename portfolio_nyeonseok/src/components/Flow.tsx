import type { Flow as FlowData, FlowStep } from '../data/types';
import { Icon } from './Icon';

const stepText = (step: FlowStep) => (typeof step === 'string' ? step : step.text);
const stepTag = (step: FlowStep) => (typeof step === 'string' ? undefined : step.tag);

interface FlowStepsProps {
  steps: FlowStep[];
  label: string;
  /** grid: 번호 카드 격자 / list: 세로 목록 */
  layout?: 'grid' | 'list';
}

export function FlowSteps({ steps, label, layout = 'grid' }: FlowStepsProps) {
  return (
    <ol className={`fsteps fsteps--${layout}`} aria-label={label}>
      {steps.map((step, i) => {
        const tag = stepTag(step);
        return (
          <li key={i} className={`fstep${tag ? ' fstep--marked' : ''}`}>
            <span className="fstep__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="fstep__text">{stepText(step)}</span>
            {tag && (
              <span className="fstep__tag">
                <Icon name="check" size={12} />
                {tag}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** 흐름 1개는 번호 카드 격자로, 2개는 '기존 / 변경 후'처럼 나란히 세로 목록으로 보여준다. */
export function FlowGroup({ flows }: { flows: FlowData[] }) {
  if (flows.length === 0) return null;
  const compare = flows.length > 1;

  return (
    <div className={`flow-group${compare ? ' flow-group--compare' : ''}`}>
      {flows.map((flow) => (
        <div key={flow.title} className="flow">
          <p className="flow__title">{flow.title}</p>
          <FlowSteps steps={flow.steps} label={flow.title} layout={compare ? 'list' : 'grid'} />
          {flow.note && <p className="flow__note">{flow.note}</p>}
        </div>
      ))}
    </div>
  );
}
