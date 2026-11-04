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
    // テスト戦略は論理的にはテスト計画の一部だが、文書の分割が認められるため別文書での管理も可能（原本は「独立文書ではない」と断定していた）
    $('main strong').filter((_, el) => $(el).text() === 'テスト戦略はテスト計画の一部').each((_, el) => {
        $(el).text(STRATEGY_EMPHASIS);
        const tail = el.next;
        if (tail?.type === 'text') tail.data = tail.data.replace('です（別の独立文書ではありません）。', STRATEGY_TAIL);
    });
    $('main details').contents().each((_, node) => {
        if (node.type === 'text') node.data = node.data.replace('いいえ。テスト計画の一部です。', STRATEGY_ANSWER);
    });
    // テーラード適合の要約に、理由だけでなく決定の記録とステークホルダーの合意も含める（Step 3・Q3 の説明と揃える）
    $('main td').filter((_, el) => $(el).text().trim() === TAILORED_ROW_BEFORE).text(TAILORED_ROW);
    // 答えの「別文書で管理してもよい」と矛盾しないよう、Q4 を別文書での管理が必須かどうかを問う形に改める
    $('main p').contents().each((_, node) => {
        if (node.type === 'text') node.data = node.data.replace(STRATEGY_QUESTION_BEFORE, STRATEGY_QUESTION);
    });
}

export const STRATEGY_EMPHASIS = 'テスト戦略は論理的にはテスト計画の一部';
export const STRATEGY_TAIL = 'です。ただし文書の形式としては複数文書への分割が認められるため、別の文書で管理してもかまいません。';
export const STRATEGY_ANSWER = 'いいえ。論理的にはテスト計画の一部ですが、別の文書として管理してもかまいません。';
export const STRATEGY_QUESTION_BEFORE = 'テスト戦略は独立した文書ですか？';
export const STRATEGY_QUESTION = 'テスト戦略は独立した文書として管理しなければなりませんか？';

export const LOGIN_TEST_CASES = [
    ['状態遷移図（未ログイン→ログイン中／未ログイン→ロック）', '遷移「未ログイン→ロック（認証失敗が5回）」', '未ログイン状態で誤パスワードを5回連続入力', 'アカウントがロックされる'],
    ['同値分割（ログイン時のパスワード）', '登録済みパスワードと一致（有効）', '正しいIDとパスワードでログイン', 'ログイン成功（ログイン中へ遷移）'],
    ['同値分割（ログイン時のパスワード）', '登録済みパスワードと不一致（無効）', '失敗回数0の状態で誤ったパスワードでログイン', '認証エラー表示（未ログインのまま、失敗回数+1）'],
] as const;

export const TAILORED_ROW_BEFORE = '使う文書を選び、外した理由を示す（テーラード適合）';
export const TAILORED_ROW = '使う文書を選び、外した理由を示し、すべてのテーラリング決定をリスクを考慮した根拠とともに記録して、関係するステークホルダーの合意を得る（テーラード適合）';
