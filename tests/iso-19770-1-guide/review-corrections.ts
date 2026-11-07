// レビューで承認した原本の補正。インベントリとアーカイブは変えず原本側だけへ適用し、未修正のページが比較で失敗するようにする。
const REPLACEMENTS: readonly (readonly [RegExp, string])[] = [
    // STEP 7: 原本の入れ子の strong を解消し、適用宣言書と15のプロセス領域だけを強調する。
    [/<strong>(適用宣言書（Statement of Applicability）)<strong>([\s\S]*?)<\/strong>(15のプロセス領域)<\/strong>/, '<strong>$1</strong>$2<strong>$3</strong>'],
    // Q1: 原本に残った Markdown の ** を strong へ置き換える。
    [/\*\*(IT資産全般のマネジメントシステム（ITAMS）)\*\*/, '<strong>$1</strong>'],
];
export const applyReviewCorrections = (html: string) => REPLACEMENTS.reduce<string>((text, [from, to]) => text.replace(from, to), html);
