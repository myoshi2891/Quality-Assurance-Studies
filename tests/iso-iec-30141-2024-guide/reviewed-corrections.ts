// レビュー修正: 原本（インベントリ・アーカイブHTML）へ重ねる検証済みの訂正。
// 原本の記録とハッシュは変更せず、意図した差分だけをここで明示する（ユニットとレイアウトE2Eで共用）。
export const corrections: ReadonlyArray<readonly [string, string]> = [
    // 図3は序文0.4の Figure 1 そのものではなく、箇条5.1（IoT RA Context）に基づく本ガイドの説明図
    ['3.2 規格の使われ方（序文（Introduction）0.4 の Figure 1 の趣旨）', '3.2 規格の使われ方（箇条5.1に基づく本ガイドの説明図）'],
    // 信頼性（Trustworthiness）は現行の ISO/IEC 20924:2024（3.1.33）の定義に合わせる
    ['システムが期待どおりに動くという信頼の度合い。セキュリティ、プライバシー、安全などを含む', 'ステークホルダーの期待に、実証でき、検証でき、測定できる形で応えられる能力（ISO/IEC 20924:2024）。セキュリティ、プライバシー、安全などを含む'],
    // 第1版での説明（歴史的経緯）は残し、現行の定義を併記する
    ['という趣旨で説明されています。セキュリティ', 'という趣旨で説明されています。現行の ISO/IEC 20924:2024 では、「ステークホルダーの期待に、実証でき、検証でき、測定できる形で応えられる能力」と定義されています。セキュリティ'],
    // 42010:2022 への適合は、序文0.1（9.2で引用）のとおりアスペクト・パースペクティブ・決定事項・根拠を除く。要約側も同じ限定を付ける
    ['に準拠しています。次の4語', 'に、アスペクト、パースペクティブ、決定事項、根拠を除き準拠しています。次の4語'],
    ['① ISO/IEC/IEEE 42010:2022 への準拠', '① ISO/IEC/IEEE 42010:2022 に準拠（アスペクト、パースペクティブ、決定事項、根拠を除く）'],
    ['本規格が準拠するアーキテクチャ記述規格', '本規格が、アスペクト、パースペクティブ、決定事項、根拠を除き準拠するアーキテクチャ記述規格'],
    ['42010:2022への準拠、使いやすさ', '42010:2022への準拠（アスペクト、パースペクティブ、決定事項、根拠を除く）、使いやすさ'],
    // 利用ビューポイントの2つ目の関心事は「IoTシステムが」物理的な実体とどう関わるか（利用者ではない）
    ['。対象の物理的な実体とどう関わるか。', '。IoTシステムは対象の物理的な実体とどう関わるか。'],
    ['どう関わり、物理的な実体', 'どう関わり、IoTシステムが物理的な実体'],
    // 附属書Aは規格の中では「規範」だが、実際に適用される適合要求は規格の使い方で決まる。全IoT設計に5パターンすべての実装を求めるものではない
    ['という位置づけです。目次から次の5つが確認できます。', 'という位置づけです。ただし、実際にどの適合要求が当てはまるかは、規格をどう使うか（何について適合を主張するか）によって決まります。すべてのIoT設計が附属書Aの5つのパターンをすべて実装しなければならない、という意味ではありません。目次から次の5つが確認できます。'],
];
// 原本に Markdown の太字記法（**…**）が文字のまま残っていた語句。移行先では <strong> で強調する
export const boldPhrases: ReadonlyArray<string> = ['アーキテクチャを設計する人（アーキテクト）', '90.92（改訂予定）'];
const BOLD_PATTERN = new RegExp('\\*\\*(' + boldPhrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\*\\*');
/** インベントリの木構造へ太字の構造訂正を重ねる（children 内の文字列は strong 要素へ分割し、それ以外の文字列は記号だけ除く） */
export function emphasize<T>(value: T): T {
    if (typeof value === 'string') return value.split(BOLD_PATTERN).join('') as T;
    if (Array.isArray(value)) return value.map(emphasize) as T;
    if (value === null || typeof value !== 'object') return value;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => {
        if (k !== 'children' || !Array.isArray(v)) return [k, emphasize(v)];
        return [k, v.flatMap((child: unknown) => typeof child !== 'string' ? [emphasize(child)] : child.split(BOLD_PATTERN).map((part, i) => i % 2 === 1 ? { tag: 'strong', attrs: {}, children: [part] } : part.trim()).filter(part => part !== ''))];
    })) as T;
}
/** 比較用の原本HTMLへ同じ太字の構造訂正を重ねる（レイアウトE2Eで使用） */
export function emphasizeHtml(html: string): string {
    return html.split(BOLD_PATTERN).map((part, i) => i % 2 === 1 ? '<strong>' + part + '</strong>' : part).join('');
}
export function correct<T>(value: T): T {
    if (typeof value === 'string') return corrections.reduce((text, [from, to]) => text.split(from).join(to), value as string) as T;
    if (Array.isArray(value)) return value.map(correct) as T;
    if (value !== null && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, correct(v)])) as T;
    return value;
}

/** 原文のまま訂正できればそれを使い、できなければ空白を正規化して訂正する（HTML原本の改行・字下げに依存しない） */
export function correctNormalized(text: string): string {
    const direct = correct(text);
    if (direct !== text) return direct;
    const normalized = text.replace(/\s+/g, ' ');
    const fixed = correct(normalized);
    return fixed === normalized ? text : fixed;
}
