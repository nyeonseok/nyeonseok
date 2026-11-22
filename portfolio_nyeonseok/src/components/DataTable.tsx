import type { DataTable as DataTableData } from '../data/types';

/**
 * 숫자 표는 모바일에서도 표 형태(필요하면 가로 스크롤)를 유지하고,
 * 문장형 표는 모바일에서 행 단위 블록으로 쌓인다.
 */
export function DataTable({ table }: { table: DataTableData }) {
  const isNumeric = Boolean(table.numeric?.some(Boolean));
  const lastIndex = table.columns.length - 1;

  return (
    <div className={`table-wrap${isNumeric ? '' : ' table-wrap--stack'}`}>
      <table className="table">
        <caption className="table__caption">{table.caption}</caption>
        <thead>
          <tr>
            {table.columns.map((col, i) => (
              <th key={col} scope="col" className={table.numeric?.[i] ? 'is-num' : undefined}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => {
                const classes = [
                  table.numeric?.[i] ? 'is-num' : '',
                  table.emphasizeLast && i === lastIndex ? 'is-after' : '',
                ]
                  .filter(Boolean)
                  .join(' ');
                return i === 0 ? (
                  <th key={i} scope="row" data-label={table.columns[i]} className={classes || undefined}>
                    {cell}
                  </th>
                ) : (
                  <td key={i} data-label={table.columns[i]} className={classes || undefined}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
