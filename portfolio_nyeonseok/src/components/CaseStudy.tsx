import type { ReactNode } from 'react';
import type { CaseStudy as CaseStudyData, DataTable as DataTableData } from '../data/types';
import { canCompare } from '../lib/compare';
import { CompareChart } from './CompareChart';
import { DataTable } from './DataTable';
import { FlowGroup } from './Flow';

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
}

function TableOrChart({ table }: { table: DataTableData }) {
  return canCompare(table) ? <CompareChart table={table} /> : <DataTable table={table} />;
}

interface CaseStudyProps {
  data: CaseStudyData;
  index?: number;
  headingLevel?: 'h2' | 'h3';
  /** 사례 아래에 붙일 이미지 등 */
  children?: ReactNode;
}

/** 문제 → 판단 → 해결 → 결과를 세로 단계로 보여준다. */
export function CaseStudy({ data, index, headingLevel = 'h3', children }: CaseStudyProps) {
  const Heading = headingLevel;
  const hasActions = Boolean(data.actions?.length || data.table);
  const hasResults = Boolean(data.results?.length || data.resultTable);

  return (
    <article className="case" id={data.id} aria-labelledby={`${data.id}-title`}>
      <header className="case__head">
        {index !== undefined && (
          <span className="case__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <Heading className="case__title" id={`${data.id}-title`}>
          {data.title}
        </Heading>
      </header>

      {data.flows && <FlowGroup flows={data.flows} />}

      <ol className="case__steps">
        {data.problem && (
          <li className="case__step case__step--problem">
            <span className="case__label">문제</span>
            <div className="case__content">
              <Paragraphs items={data.problem} />
            </div>
          </li>
        )}
        {data.decision && (
          <li className="case__step case__step--decision">
            <span className="case__label">판단</span>
            <div className="case__content">
              <Paragraphs items={data.decision} />
            </div>
          </li>
        )}
        {hasActions && (
          <li className="case__step case__step--action">
            <span className="case__label">해결</span>
            <div className="case__content">
              {data.table && <TableOrChart table={data.table} />}
              {data.actions && <List items={data.actions} />}
            </div>
          </li>
        )}
        {hasResults && (
          <li className="case__step case__step--result">
            <span className="case__label">결과</span>
            <div className="case__content">
              {data.resultTable && <TableOrChart table={data.resultTable} />}
              {data.results && <List items={data.results} />}
            </div>
          </li>
        )}
      </ol>

      {children}
    </article>
  );
}
