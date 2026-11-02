import type { CheerioAPI } from 'cheerio';

// レビューで承認した原本からの意図的な差分。原本 HTML と比較する検証では、比較前に原本側へ同じ補正を当てる。
export const PART8_STATUS = '29119-8-2026（Active）。ISO 側は別途発行準備中（under publication）';

export function applyReviewCorrections($: CheerioAPI): void {
    // 原本に Markdown の強調記法がそのまま残っていた箇所を <strong> として扱う
    $('main p, main li').each((_, el) => {
        const inner = $(el).html();
        if (inner?.includes('**')) $(el).html(inner.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'));
    });
    // Part 8 は IEEE SA で Active、ISO は発行準備中（2026-11 時点の確認結果）
    $('main td').filter((_, el) => $(el).text().trim() === 'ドラフト（P29119-8）').text(PART8_STATUS);
}
