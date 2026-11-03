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
    // 12-2 の表はログイン機能の例なのに、パスワード登録の同値分割が混在し、ロックがログイン中から遷移していた
    const loginTable = $('main table').filter((_, el) => $(el).find('thead th').first().text().trim() === 'テストモデル');
    loginTable.find('tbody tr').each((row, tr) => {
        $(tr).find('td').each((col, td) => { $(td).text(LOGIN_TEST_CASES[row]![col]!); });
    });
}

export const LOGIN_TEST_CASES = [
    ['状態遷移図（未ログイン→ログイン中／未ログイン→ロック）', '遷移「未ログイン→ロック（認証失敗が5回）」', '未ログイン状態で誤パスワードを5回連続入力', 'アカウントがロックされる'],
    ['同値分割（ログイン時のパスワード）', '登録済みパスワードと一致（有効）', '正しいIDとパスワードでログイン', 'ログイン成功（ログイン中へ遷移）'],
    ['同値分割（ログイン時のパスワード）', '登録済みパスワードと不一致（無効）', '誤ったパスワードでログイン', '認証エラー表示（未ログインのまま、失敗回数+1）'],
] as const;
