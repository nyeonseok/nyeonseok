import type { DataTable } from '../data/types';
import { toNumber } from '../lib/compare';

/**
 * 개선 전 → 개선 후 덤벨 차트.
 * 지표마다 단위가 달라서 행마다 0 ~ 그 행의 최댓값을 축으로 쓴다(행끼리 길이를 비교하지 않는다).
 * 값은 항상 텍스트로 함께 보여주므로 색이나 위치만으로 정보를 전달하지 않는다.
 */
export function CompareChart({ table }: { table: DataTable }) {
  const [, beforeLabel, afterLabel] = table.columns;

  return (
    <figure className="compare">
      <div className="compare__head">
        <figcaption className="compare__caption">{table.caption}</figcaption>
        <div className="compare__legend" aria-hidden="true">
          <span className="compare__key">
            <span className="compare__swatch compare__swatch--before" />
            {beforeLabel}
          </span>
          <span className="compare__key">
            <span className="compare__swatch compare__swatch--after" />
            {afterLabel}
          </span>
        </div>
      </div>

      <ul className="compare__rows">
        {table.rows.map(([label, before, after]) => {
          const b = toNumber(before) ?? 0;
          const a = toNumber(after) ?? 0;
          const max = Math.max(b, a) || 1;
          const bPos = (b / max) * 100;
          const aPos = (a / max) * 100;
          const summary = `${label}: ${beforeLabel} ${before}, ${afterLabel} ${after}`;

          return (
            <li key={label} className="compare__row" title={summary}>
              <span className="compare__label">{label}</span>
              <span className="compare__track" aria-hidden="true">
                <span
                  className="compare__span"
                  style={{ left: `${Math.min(bPos, aPos)}%`, width: `${Math.abs(bPos - aPos)}%` }}
                />
                <span className="compare__dot compare__dot--before" style={{ left: `${bPos}%` }} />
                <span className="compare__dot compare__dot--after" style={{ left: `${aPos}%` }} />
              </span>
              <span className="compare__values">
                <span className="sr-only">{beforeLabel} </span>
                <span className="compare__before">{before}</span>
                <span aria-hidden="true"> → </span>
                <span className="sr-only">, {afterLabel} </span>
                <strong className="compare__after">{after}</strong>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="compare__note">지표마다 단위가 달라 행마다 0부터 그 행의 큰 값까지를 기준으로 그렸습니다.</p>
    </figure>
  );
}
