// レビュー修正: 原本（インベントリ・アーカイブHTML）へ重ねる検証済みの訂正。
// 原本の記録とハッシュは変更せず、意図した差分だけをここで明示する（ユニットとレイアウトE2Eで共用）。
export const corrections: ReadonlyArray<readonly [string, string]> = [
    // 図3は序文0.4の Figure 1 そのものではなく、箇条5.1（IoT RA Context）に基づく本ガイドの説明図
    ['3.2 規格の使われ方（序文（Introduction）0.4 の Figure 1 の趣旨）', '3.2 規格の使われ方（箇条5.1に基づく本ガイドの説明図）'],
    // 信頼性（Trustworthiness）は現行の ISO/IEC 20924:2024（3.1.33）の定義に合わせる
    ['システムが期待どおりに動くという信頼の度合い。セキュリティ、プライバシー、安全などを含む', 'ステークホルダーの期待に、実証でき、検証でき、測定できる形で応えられる能力（ISO/IEC 20924:2024）。セキュリティ、プライバシー、安全などを含む'],
    // 第1版での説明（歴史的経緯）は残し、現行の定義を併記する
    ['という趣旨で説明されています。セキュリティ', 'という趣旨で説明されています。現行の ISO/IEC 20924:2024 では、「ステークホルダーの期待に、実証でき、検証でき、測定できる形で応えられる能力」と定義されています。セキュリティ'],
];
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
