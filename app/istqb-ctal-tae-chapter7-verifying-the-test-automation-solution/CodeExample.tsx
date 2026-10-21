import React from 'react';

// Precomputed with the source highlight.js 11.10.0 engine and its original four grammars.
// Construct LF text at runtime: Next.js/SWC trims numeric LF entities in JSX.
// Keep the existing line wrappers and exact clipboard text, including empty lines.
function CodeLine({ children, newline = false }: { children?: React.ReactNode; newline?: boolean }) {
    return React.createElement('div', { className: 'code-line' }, children, newline ? '\n' : null);
}
export default function CodeExample({ index }: { index: number }) {
    switch (index) {
        case 0:
            return <pre className="code-block"><code className="language-python hljs">
                <CodeLine newline><span className="hljs-comment">{"# conftest.py — 本実行の前に一度だけ実行する事前チェックの例"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" os"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" pathlib"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" pytest"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" requests"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline>{"REPORT_DIR = pathlib.Path(os.environ.get("}<span className="hljs-string">{"\"REPORT_DIR\""}</span>{", "}<span className="hljs-string">{"\"reports\""}</span>{"))"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-meta">{"@pytest.fixture("}</span><span className="hljs-meta"><span className="hljs-params">{"scope="}</span></span><span className="hljs-meta"><span className="hljs-params"><span className="hljs-string">{"\"session\""}</span></span></span><span className="hljs-meta"><span className="hljs-params">{", autouse="}</span></span><span className="hljs-meta"><span className="hljs-params"><span className="hljs-literal">{"True"}</span></span></span><span className="hljs-meta">{")"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"preflight_check"}</span>{"():"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-string">{"\"\"\"接続性と権限を確認し、失敗したら本実行を中止する。\"\"\""}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"try"}</span>{":"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-comment">{"# 1. 必須の環境変数（接続を試みる前に確認する）"}</span></CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-keyword">{"for"}</span>{" name "}<span className="hljs-keyword">{"in"}</span>{" ("}<span className="hljs-string">{"\"SUT_BASE_URL\""}</span>{", "}<span className="hljs-string">{"\"TEST_USER\""}</span>{"):"}</CodeLine>
                <CodeLine newline>{"            "}<span className="hljs-keyword">{"if"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" os.environ.get(name):"}</CodeLine>
                <CodeLine newline>{"                "}<span className="hljs-keyword">{"raise"}</span>{" RuntimeError("}<span className="hljs-string">{"f\"環境変数 "}</span><span className="hljs-string"><span className="hljs-subst">{"{name}"}</span></span><span className="hljs-string">{" が未設定です\""}</span>{")"}</CodeLine>
                <CodeLine newline>{"        base_url = os.environ["}<span className="hljs-string">{"\"SUT_BASE_URL\""}</span>{"]   "}<span className="hljs-comment">{"# 環境ごとに切り替える"}</span></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-comment">{"# 2. SUT への到達性（ヘルスチェック用エンドポイントを想定）"}</span></CodeLine>
                <CodeLine newline>{"        res = requests.get("}<span className="hljs-string">{"f\""}</span><span className="hljs-string"><span className="hljs-subst">{"{base_url}"}</span></span><span className="hljs-string">{"/health\""}</span>{", timeout="}<span className="hljs-number">{"10"}</span>{")"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-keyword">{"if"}</span>{" res.status_code != "}<span className="hljs-number">{"200"}</span>{":"}</CodeLine>
                <CodeLine newline>{"            "}<span className="hljs-keyword">{"raise"}</span>{" RuntimeError("}<span className="hljs-string">{"f\"SUT に到達できません（HTTP "}</span><span className="hljs-string"><span className="hljs-subst">{"{res.status_code}"}</span></span><span className="hljs-string">{"）\""}</span>{")"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-comment">{"# 3. ログ・レポートの書き込み権限"}</span></CodeLine>
                <CodeLine newline>{"        REPORT_DIR.mkdir(parents="}<span className="hljs-literal">{"True"}</span>{", exist_ok="}<span className="hljs-literal">{"True"}</span>{")"}</CodeLine>
                <CodeLine newline>{"        probe = REPORT_DIR / "}<span className="hljs-string">{"\".write_probe\""}</span></CodeLine>
                <CodeLine newline>{"        probe.write_text("}<span className="hljs-string">{"\"ok\""}</span>{")"}</CodeLine>
                <CodeLine newline>{"        probe.unlink()"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"except"}</span>{" (RuntimeError, requests.RequestException, OSError) "}<span className="hljs-keyword">{"as"}</span>{" exc:"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-comment">{"# assert で失敗させると各テストの setup error として繰り返し報告されるため、"}</span></CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-comment">{"# 理由を添えて実行全体を一度だけ終了する"}</span></CodeLine>
                <CodeLine>{"        pytest.exit("}<span className="hljs-string">{"f\"事前チェックに失敗したため実行を中止します: "}</span><span className="hljs-string"><span className="hljs-subst">{"{exc}"}</span></span><span className="hljs-string">{"\""}</span>{")"}</CodeLine>
            </code></pre>;
        case 1:
            return <pre className="code-block"><code className="language-yaml hljs">
                <CodeLine newline><span className="hljs-comment">{"# .github/workflows/e2e.yml（抜粋）"}</span></CodeLine>
                <CodeLine newline><span className="hljs-attr">{"jobs:"}</span></CodeLine>
                <CodeLine newline>{"  "}<span className="hljs-attr">{"preflight:"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"runs-on:"}</span>{" "}<span className="hljs-string">{"ubuntu-latest"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"steps:"}</span></CodeLine>
                <CodeLine newline>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"uses:"}</span>{" "}<span className="hljs-string">{"actions/checkout@v4"}</span></CodeLine>
                <CodeLine newline>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"run:"}</span>{" "}<span className="hljs-string">{"pytest"}</span>{" "}<span className="hljs-string">{"tests/preflight"}</span>{" "}<span className="hljs-string">{"-q"}</span>{"     "}<span className="hljs-comment">{"# 接続性・設定の確認のみ"}</span></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline>{"  "}<span className="hljs-attr">{"e2e:"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"needs:"}</span>{" "}<span className="hljs-string">{"preflight"}</span>{"                        "}<span className="hljs-comment">{"# 事前チェックが通ったときだけ本実行"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"runs-on:"}</span>{" "}<span className="hljs-string">{"ubuntu-latest"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"steps:"}</span></CodeLine>
                <CodeLine newline>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"uses:"}</span>{" "}<span className="hljs-string">{"actions/checkout@v4"}</span></CodeLine>
                <CodeLine>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"run:"}</span>{" "}<span className="hljs-string">{"pytest"}</span>{" "}<span className="hljs-string">{"tests/e2e"}</span></CodeLine>
            </code></pre>;
        case 2:
            return <pre className="code-block"><code className="language-ini hljs">
                <CodeLine newline><span className="hljs-comment">{"# pytest.ini"}</span></CodeLine>
                <CodeLine newline><span className="hljs-section">{"[pytest]"}</span></CodeLine>
                <CodeLine newline><span className="hljs-attr">{"markers"}</span>{" ="}</CodeLine>
                <CodeLine>{"    quarantine: 不安定で原因調査中のテスト（通常のスイートから除外する）"}</CodeLine>
            </code></pre>;
        case 3:
            return <pre className="code-block"><code className="language-python hljs">
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" pytest"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-meta">{"@pytest.mark.quarantine   "}</span><span className="hljs-comment">{"# 原因調査中。チケット番号などを理由に書く"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_order_status_updates_after_payment"}</span>{"():"}</CodeLine>
                <CodeLine>{"    ..."}</CodeLine>
            </code></pre>;
        case 4:
            return <pre className="code-block"><code className="language-bash hljs">
                <CodeLine newline><span className="hljs-comment">{"# 通常のパイプライン：隔離したテストを除外して実行"}</span></CodeLine>
                <CodeLine newline>{"pytest -m "}<span className="hljs-string">{"\"not quarantine\""}</span></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# 調査用：隔離したテストだけを繰り返し実行して再現条件を探る"}</span></CodeLine>
                <CodeLine>{"pytest -m quarantine --count=20   "}<span className="hljs-comment">{"# 繰り返し実行するプラグインが必要"}</span></CodeLine>
            </code></pre>;
        case 5:
            return <pre className="code-block"><code className="language-python hljs">
                <CodeLine newline><span className="hljs-comment">{"# NG: 例外が起きなければ「成功」になる。何も検証していない"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_create_user_bad"}</span>{"("}<span className="hljs-params">{"api"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    api.post("}<span className="hljs-string">{"\"/users\""}</span>{", json={"}<span className="hljs-string">{"\"name\""}</span>{": "}<span className="hljs-string">{"\"alice\""}</span>{"})"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# OK: 期待結果を明示的に検証している"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_create_user_good"}</span>{"("}<span className="hljs-params">{"api"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    res = api.post("}<span className="hljs-string">{"\"/users\""}</span>{", json={"}<span className="hljs-string">{"\"name\""}</span>{": "}<span className="hljs-string">{"\"alice\""}</span>{"})"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"assert"}</span>{" res.status_code == "}<span className="hljs-number">{"201"}</span></CodeLine>
                <CodeLine>{"    "}<span className="hljs-keyword">{"assert"}</span>{" res.json()["}<span className="hljs-string">{"\"name\""}</span>{"] == "}<span className="hljs-string">{"\"alice\""}</span></CodeLine>
            </code></pre>;
        case 6:
            return <pre className="code-block"><code className="language-python hljs">
                <CodeLine newline><span className="hljs-comment">{"# NG: パスワードの平文をコードに埋め込んでいる（静的解析や秘密情報スキャンで検出したい）"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"login_bad"}</span>{"("}<span className="hljs-params">{"driver"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"user\""}</span>{").send_keys("}<span className="hljs-string">{"\"test_admin\""}</span>{")"}</CodeLine>
                <CodeLine newline>{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"password\""}</span>{").send_keys("}<span className="hljs-string">{"\"P@ssw0rd-1234\""}</span>{")"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# OK: 実行環境から取得する（CI のシークレットや環境変数）"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" os"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"login_good"}</span>{"("}<span className="hljs-params">{"driver"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"user\""}</span>{").send_keys(os.environ["}<span className="hljs-string">{"\"TEST_USER\""}</span>{"])"}</CodeLine>
                <CodeLine>{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"password\""}</span>{").send_keys(os.environ["}<span className="hljs-string">{"\"TEST_PASSWORD\""}</span>{"])"}</CodeLine>
            </code></pre>;
        default:
            throw new RangeError('Unknown chapter 7 code example');
    }
}
