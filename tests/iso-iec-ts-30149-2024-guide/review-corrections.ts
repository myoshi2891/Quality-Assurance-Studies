import type { CheerioAPI } from 'cheerio';

// レビューで承認した原本からの意図的な差分。原本 HTML と比較する検証では、比較前に原本側へ同じ補正を当てる。
// 原本の参照表は「空の外部リンク + URL 表示用リンク」の 2 要素に分かれ、プレビューPDFは表示側の href が途中で切れていた。
// 1 参照 = 1 リンク（完全な URL を href と表示文字列に持つ）へ統合する。
export function applyReviewCorrections($: CheerioAPI): void {
    $('main a').each((_, el) => {
        const empty = $(el);
        const visible = empty.next('a');
        if (empty.text() !== '' || visible.length === 0) return;
        const href = empty.attr('href') ?? '';
        const tail = visible[0]!.next;
        if (tail?.type === 'text' && visible.text() + tail.data.trim() === href) tail.data = ' ';
        visible.remove();
        empty.text(href);
    });
    // 原本に Markdown の強調記法がそのまま残っていた段落（附属書A の導入文）を <strong> として扱う
    $('main p').each((_, el) => {
        const inner = $(el).html();
        if (inner?.includes('**')) $(el).html(inner.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'));
    });
    // 進捗件数の更新をスクリーンリーダーへ通知する（原本は aria-live なし）
    $('main .cp-count').attr('aria-live', 'polite');
}
