// レビュー修正: 原本（インベントリ・アーカイブHTML）へ重ねる検証済みの訂正。
// 原本の記録とハッシュは変更せず、意図した差分だけをここで明示する（ユニットとレイアウトE2Eで共用）。
export const corrections: ReadonlyArray<readonly [string, string]> = [
    ['https://www.iso.org/ru/standard/33987.html', 'https://www.iso.org/standard/57385.html'],
    ['V3.2.1（2021年3月）がWCAG 2.1 AAを取り込む。V4.1.1 でWCAG 2.2 に更新予定', 'V3.2.1（2021年3月）がWCAG 2.1 AAを取り込む。WCAG 2.2 に更新した V4.1.1 は2026年9月にETSIが公表した。EU官報（Official Journal）への引用は公表とは別の手続きで、2026年11月2日時点では確認できていない'],
    ['注：EN 301 549 V4.1.1 の公表時期については、「2026年10月に公報掲載の見込み」とする情報があります（accessible.org）。2026年10月13日時点で実際に公表されたかは、今回は確認できていません。使う前にETSIや欧州委員会の公式情報で確認してください。', '注：EN 301 549 V4.1.1 は、2026年9月にETSIから公表されました。ETSIによる公表と、EU官報（Official Journal）への引用は別の段階です。官報に引用されるまでは、EU法令上の整合規格としての効力を持ちません。2026年11月2日時点で引用は確認できていないため、使う前にETSIや欧州委員会の公式情報で確認してください。'],
    ['EN 301 549 V4.1.1 の公表状況は、2026年10月13日時点で未確認です', 'EN 301 549 V4.1.1 は2026年9月に公表済みです。EU官報への引用は、2026年11月2日時点で未確認です'],
    ['規格の全文は有償で、読めたのは無料サンプルの範囲です。', '読めたのは無料サンプルの範囲です（全文のPDFは、ISO公式ページから無償で入手できます）。'],
    // V4.1.1 自体は公表済み。未確認なのはEU官報への引用だけ
    ['# V4.1.1 の状況が未確認のため、確認が要る', '# V4.1.1 のEU官報への引用が未確認のため、確認が要る'],
    // 29138-3:2022 が意図しないのは「規格・ガイドラインそのもの」の評価・認証。製品の評価を妨げるものではない
    ['29138-3:2022 は、対応付けを認証や評価に使うことは意図していないと述べている', '29138-3:2022 は、対応付けを使って規格やガイドラインそのものを評価・認証することは意図していないと述べている（製品の評価に使うことまで否定するものではない）'],
    // WCAG 3.0 の最新 Working Draft は 2026年9月10日。出典は日付を確認できる W3C の公開履歴へ
    ['2026年3月3日にWorking Draftが更新された', '2026年9月10日にWorking Draftが更新された'],
    ['WCAG 3.0 ドラフトの最新状況（2026年3月）', 'WCAG 3.0 ドラフトの最新状況（2026年9月）'],
    ['https://www.w3.org/WAI/Technical/Activity', 'https://www.w3.org/standards/history/wcag-3.0/'],
    // 調査時点（10月13日）と、後から再確認した一部の状況（11月2日）を区別して、本文の日付と矛盾させない
    // 無料サンプルはWebプレビュー（4.3.1の途中まで）とPDF（4.2.2の途中まで）で収録範囲が異なる
    ['目次、前付け、第1〜3章、第4章の前半（第3〜6章の説明の根拠）', 'Webプレビュー：目次、前付け、第1〜3章、第4章の4.3.1（途中）まで（第3〜6章の説明の根拠）'],
    ['同サンプルのPDF（iTeh のページに掲載されているリンク）', '同サンプルのPDF（iTeh のページに掲載されているリンク。収録は第4章の4.2.2（途中）までで、Webプレビューより短い）'],
    // 2008年の投票は、ISOの履歴ではDIS、JTC 1の履歴ではDTR ballotとして記録されている。2009-03-18は「最終文書受領またはFDIS登録」
    ['「CD」「DIS」「FDIS」：文書の完成度が上がるごとの名前。投票や意見募集を経て次へ進む', '「CD」「DIS」「FDIS」：ISOの履歴で使われる文書段階。なお、JTC 1の2008年7月〜10月の投票はDTRとして記録されている'],
    ['「2008-10-22」：DISの投票の結果が各国に配布され、次の段階へ進むことが承認された日', '「2008-10-22」：ISOの履歴では、DISをFDISとして登録することが承認された日。JTC 1の履歴では、同時期の投票はDTRとして記録されている'],
    ['CD / DIS / FDIS：ISO/IEC で文書が国際規格になるまでの段階（委員会原案、国際規格案、最終国際規格案）', 'CD / DIS / FDIS：ISOの履歴で使われる文書段階（委員会原案、国際規格案、最終国際規格案）。2008年のJTC 1投票はDTR ballotとして記録されている'],
    ['2008-07-12 DIS 登録 12週間の投票開始', '2008-07-12 ISO: DIS登録・DIS投票開始 / JTC 1: DTR投票'],
    ['2009-03-18 FDIS 登録 後に8週間の投票', '2009-03-18 最終文書受領 または FDIS登録 後に8週間の投票'],
    ['本ガイドは2026年10月13日時点の公開情報をもとにした学習用の解説です。','本ガイドは2026年10月13日時点の公開情報をもとにした学習用の解説です（EN 301 549 V4.1.1 の公表状況など、一部は2026年11月2日時点で再確認しています）。'],
];
/** 外部リンク（http/https）には新しいタブで開くための target と rel を付ける（プロジェクトの外部リンク規約） */
export function withExternalLinkAttrs<T>(value: T): T {
    if (Array.isArray(value)) return value.map(withExternalLinkAttrs) as T;
    if (value === null || typeof value !== 'object') return value;
    const node = Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withExternalLinkAttrs(v)])) as Record<string, unknown>;
    const attrs = node.attrs as Record<string, unknown> | undefined;
    if (node.tag === 'a' && attrs && typeof attrs.href === 'string' && /^https?:/.test(attrs.href)) node.attrs = { ...attrs, target: '_blank', rel: 'noopener noreferrer' };
    return node as T;
}
export function correct<T>(value: T): T {
    if (typeof value === 'string') return corrections.reduce((text, [from, to]) => text.split(from).join(to), value as string) as T;
    if (Array.isArray(value)) return value.map(correct) as T;
    if (value !== null && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, correct(v)])) as T;
    return value;
}

/** 空白を正規化した文字列で訂正を適用する（HTML原本の改行・字下げに依存しない） */
export function correctNormalized(text: string): string {
    // 原文のまま訂正できる場合は空白を保つ（YAMLなど white-space: pre の本文を崩さない）
    const direct = correct(text);
    if (direct !== text) return direct;
    const normalized = text.replace(/\s+/g, ' ');
    const fixed = correct(normalized);
    return fixed === normalized ? text : fixed;
}
