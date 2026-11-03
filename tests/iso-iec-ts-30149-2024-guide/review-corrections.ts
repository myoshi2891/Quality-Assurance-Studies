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
    // 本文全体は有料で未確認のため、「適合性評価の要求事項を定めない」との断定を公開プレビューの範囲での確認に改める
    $('main td').contents().each((_, node) => {
        if (node.type !== 'text') return;
        for (const [before, after] of CONFORMITY_CLAIMS) node.data = node.data.replace(before, after);
    });
    // 横スクロールする表をキーボードで操作できるよう、名前付きのフォーカス可能な領域にする（原本は属性なし）
    $('main h3[id="61-5特性の早見表"]').nextAll('.table-scroll').first().attr({ 'aria-label': '表：6.1 5特性の早見表', role: 'region', tabindex: '0' });
    // 箇条5・箇条8の表も同じ形式の名前付きフォーカス可能領域にする（見出し行の組で表を特定する）
    for (const [headers, label] of TABLE_SCROLL_REGIONS) {
        $('main .table-scroll')
            .filter((_, el) => $(el).find('th').toArray().map(th => $(th).text().trim()).join('|') === headers.join('|'))
            .attr({ 'aria-label': label, role: 'region', tabindex: '0' });
    }
}

export const TABLE_SCROLL_REGIONS = [
    [['箇条', 'タイトル', '内容の概要', '本ガイドの対応Step'], '表：5 規格の全体構成マップ（箇条）'],
    [['図表', 'タイトル', '読む目的'], '表：5 規格の全体構成マップ（図表）'],
    [['節', '視点', '対応する図', '問い'], '表：8 箇条8の3つの視点'],
    [['悪い例（根拠のない主張）', '良い例（証拠に裏づけられた主張）'], '表：8.1 根拠のない主張と証拠に裏づけられた主張'],
] as const;

export const CONFORMITY_CLAIMS = [
    ['TSは規範的規定（要求事項等）を含み得る文書区分だが、本書は信頼に足る性質の原則・要素と構築パターンを整理し、適合性評価の要求事項を定めるものではない', 'TSは規範的規定（要求事項等）を含み得る文書区分。本書は信頼に足る性質の原則・要素と構築パターンを整理した文書で、公開プレビュー（目次・序文・Scope）の範囲では適合性評価の要求事項は確認できなかった（本文全体は未確認）'],
    ['を示し、適合性評価用の要求事項は定めない', 'を示す。公開プレビューの範囲では適合性評価用の要求事項は確認できなかった（本文全体は未確認）'],
    ['を示す文書であり、適合性評価用の要求事項を定めていない（またISO/IEC自身は認証を行わない）', 'を示す文書。公開プレビューの範囲では適合性評価用の要求事項は確認できなかった（本文全体は未確認）。なおISO/IEC自身は認証を行わない'],
] as const;
