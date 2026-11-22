import type { DataTable } from '../data/types';

/** "4,000" → 4000, "76.9%" → 76.9, "5,373회" → 5373 */
export function toNumber(text: string): number | null {
  const match = text.replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

/** 표가 [지표, 개선 전, 개선 후] 형태이고 숫자를 읽을 수 있으면 덤벨 차트로 그린다. */
export function canCompare(table: DataTable) {
  return (
    table.columns.length === 3 &&
    Boolean(table.emphasizeLast) &&
    table.rows.every((row) => toNumber(row[1]) !== null && toNumber(row[2]) !== null)
  );
}
