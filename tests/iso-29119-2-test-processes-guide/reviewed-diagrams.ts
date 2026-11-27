/** Corrected branch expectations; archived source and inventory remain unchanged. */
export function reviewedSource(index: number, source: string): string {
  if (index === 10) return source.replace('EV3 -->|いいえ| EV1', 'EV3 -->|環境不備| EV1\nEV3 -->|データ不備| EV2');
  if (index === 12) return source.replace('IC5 --> IC6\nIC6 --> IC7', 'IC5 -->|修正後に再テスト| IC7');
  return source;
}
export function reviewedEdges<T extends { from: string; to: string; label: string; dotted: boolean }>(index: number, edges: T[]): T[] {
  if (index === 10) return edges.flatMap(e => e.from === 'EV3' && e.to === 'EV1'
    ? [{ ...e, label: '環境不備' }, { ...e, to: 'EV2', label: 'データ不備' }] : [e]);
  if (index === 12) return edges.filter(e => e.from !== 'IC6').map(e => e.from === 'IC5' ? { ...e, to: 'IC7', label: '修正後に再テスト' } : e);
  return edges;
}
export function reviewedDescription(index: number, description: string): string {
  if (index === 10) return description.replace('環境とデータは使える状態か → ED1 テスト環境を構築する（いいえ）。', '環境とデータは使える状態か → ED1 テスト環境を構築する（環境不備）。環境とデータは使える状態か → ED2 テストデータを準備する（データ不備）。');
  if (index === 12) return description.replace('IR2 インシデント報告を作成する → 修正後に再テストする。修正後に再テストする → IR2 報告の状態を更新する。', '報告しない場合は再テストで終了し、報告の状態更新には進まない。IR2 インシデント報告を作成した場合のみ、修正後の再テストを経てIR2 報告の状態を更新する。');
  return description;
}
