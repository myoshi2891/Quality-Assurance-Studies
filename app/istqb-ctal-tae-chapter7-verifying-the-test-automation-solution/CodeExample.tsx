import React from 'react';

// Precomputed with the source highlight.js 11.10.0 engine and its original four grammars.
// Numeric newline entities and inline code-line wrappers preserve exact clipboard text.
export default function CodeExample({ index }: { index: number }) {
    switch (index) {
        case 0:
            return <pre className="code-block"><code className="language-python hljs">
                <div className="code-line"><span className="hljs-comment">{"# conftest.py — 本実行の前に一度だけ実行する事前チェックの例"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" os"}&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" pathlib"}&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" pytest"}&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" requests"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">{"REPORT_DIR = pathlib.Path(os.environ.get("}<span className="hljs-string">{"\"REPORT_DIR\""}</span>{", "}<span className="hljs-string">{"\"reports\""}</span>{"))"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-meta">{"@pytest.fixture("}</span><span className="hljs-meta"><span className="hljs-params">{"scope="}</span></span><span className="hljs-meta"><span className="hljs-params"><span className="hljs-string">{"\"session\""}</span></span></span><span className="hljs-meta"><span className="hljs-params">{", autouse="}</span></span><span className="hljs-meta"><span className="hljs-params"><span className="hljs-literal">{"True"}</span></span></span><span className="hljs-meta">{")"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"preflight_check"}</span>{"():"}&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-string">{"\"\"\"接続性と権限を確認し、失敗したら本実行を中止する。\"\"\""}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-comment">{"# 1. 必須の環境変数（接続を試みる前に確認する）"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-keyword">{"for"}</span>{" name "}<span className="hljs-keyword">{"in"}</span>{" ("}<span className="hljs-string">{"\"SUT_BASE_URL\""}</span>{", "}<span className="hljs-string">{"\"TEST_USER\""}</span>{"):"}&#10;</div>
                <div className="code-line">{"        "}<span className="hljs-keyword">{"assert"}</span>{" os.environ.get(name), "}<span className="hljs-string">{"f\"環境変数 "}</span><span className="hljs-string"><span className="hljs-subst">{"{name}"}</span></span><span className="hljs-string">{" が未設定です\""}</span>&#10;</div>
                <div className="code-line">{"    base_url = os.environ["}<span className="hljs-string">{"\"SUT_BASE_URL\""}</span>{"]   "}<span className="hljs-comment">{"# 環境ごとに切り替える"}</span>&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-comment">{"# 2. SUT への到達性（ヘルスチェック用エンドポイントを想定）"}</span>&#10;</div>
                <div className="code-line">{"    res = requests.get("}<span className="hljs-string">{"f\""}</span><span className="hljs-string"><span className="hljs-subst">{"{base_url}"}</span></span><span className="hljs-string">{"/health\""}</span>{", timeout="}<span className="hljs-number">{"10"}</span>{")"}&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-keyword">{"assert"}</span>{" res.status_code == "}<span className="hljs-number">{"200"}</span>{", "}<span className="hljs-string">{"\"SUT に到達できません\""}</span>&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-comment">{"# 3. ログ・レポートの書き込み権限"}</span>&#10;</div>
                <div className="code-line">{"    REPORT_DIR.mkdir(parents="}<span className="hljs-literal">{"True"}</span>{", exist_ok="}<span className="hljs-literal">{"True"}</span>{")"}&#10;</div>
                <div className="code-line">{"    probe = REPORT_DIR / "}<span className="hljs-string">{"\".write_probe\""}</span>&#10;</div>
                <div className="code-line">{"    probe.write_text("}<span className="hljs-string">{"\"ok\""}</span>{")"}&#10;</div>
                <div className="code-line">{"    probe.unlink()"}</div>
            </code></pre>;
        case 1:
            return <pre className="code-block"><code className="language-yaml hljs">
                <div className="code-line"><span className="hljs-comment">{"# .github/workflows/e2e.yml（抜粋）"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-attr">{"jobs:"}</span>&#10;</div>
                <div className="code-line">{"  "}<span className="hljs-attr">{"preflight:"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-attr">{"runs-on:"}</span>{" "}<span className="hljs-string">{"ubuntu-latest"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-attr">{"steps:"}</span>&#10;</div>
                <div className="code-line">{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"uses:"}</span>{" "}<span className="hljs-string">{"actions/checkout@v4"}</span>&#10;</div>
                <div className="code-line">{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"run:"}</span>{" "}<span className="hljs-string">{"pytest"}</span>{" "}<span className="hljs-string">{"tests/preflight"}</span>{" "}<span className="hljs-string">{"-q"}</span>{"     "}<span className="hljs-comment">{"# 接続性・設定の確認のみ"}</span>&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">{"  "}<span className="hljs-attr">{"e2e:"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-attr">{"needs:"}</span>{" "}<span className="hljs-string">{"preflight"}</span>{"                        "}<span className="hljs-comment">{"# 事前チェックが通ったときだけ本実行"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-attr">{"runs-on:"}</span>{" "}<span className="hljs-string">{"ubuntu-latest"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-attr">{"steps:"}</span>&#10;</div>
                <div className="code-line">{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"uses:"}</span>{" "}<span className="hljs-string">{"actions/checkout@v4"}</span>&#10;</div>
                <div className="code-line">{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"run:"}</span>{" "}<span className="hljs-string">{"pytest"}</span>{" "}<span className="hljs-string">{"tests/e2e"}</span></div>
            </code></pre>;
        case 2:
            return <pre className="code-block"><code className="language-ini hljs">
                <div className="code-line"><span className="hljs-comment">{"# pytest.ini"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-section">{"[pytest]"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-attr">{"markers"}</span>{" ="}&#10;</div>
                <div className="code-line">{"    quarantine: 不安定で原因調査中のテスト（通常のスイートから除外する）"}</div>
            </code></pre>;
        case 3:
            return <pre className="code-block"><code className="language-python hljs">
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" pytest"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-meta">{"@pytest.mark.quarantine   "}</span><span className="hljs-comment">{"# 原因調査中。チケット番号などを理由に書く"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_order_status_updates_after_payment"}</span>{"():"}&#10;</div>
                <div className="code-line">{"    ..."}</div>
            </code></pre>;
        case 4:
            return <pre className="code-block"><code className="language-bash hljs">
                <div className="code-line"><span className="hljs-comment">{"# 通常のパイプライン：隔離したテストを除外して実行"}</span>&#10;</div>
                <div className="code-line">{"pytest -m "}<span className="hljs-string">{"\"not quarantine\""}</span>&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-comment">{"# 調査用：隔離したテストだけを繰り返し実行して再現条件を探る"}</span>&#10;</div>
                <div className="code-line">{"pytest -m quarantine --count=20   "}<span className="hljs-comment">{"# 繰り返し実行するプラグインが必要"}</span></div>
            </code></pre>;
        case 5:
            return <pre className="code-block"><code className="language-python hljs">
                <div className="code-line"><span className="hljs-comment">{"# NG: 例外が起きなければ「成功」になる。何も検証していない"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_create_user_bad"}</span>{"("}<span className="hljs-params">{"api"}</span>{"):"}&#10;</div>
                <div className="code-line">{"    api.post("}<span className="hljs-string">{"\"/users\""}</span>{", json={"}<span className="hljs-string">{"\"name\""}</span>{": "}<span className="hljs-string">{"\"alice\""}</span>{"})"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-comment">{"# OK: 期待結果を明示的に検証している"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_create_user_good"}</span>{"("}<span className="hljs-params">{"api"}</span>{"):"}&#10;</div>
                <div className="code-line">{"    res = api.post("}<span className="hljs-string">{"\"/users\""}</span>{", json={"}<span className="hljs-string">{"\"name\""}</span>{": "}<span className="hljs-string">{"\"alice\""}</span>{"})"}&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-keyword">{"assert"}</span>{" res.status_code == "}<span className="hljs-number">{"201"}</span>&#10;</div>
                <div className="code-line">{"    "}<span className="hljs-keyword">{"assert"}</span>{" res.json()["}<span className="hljs-string">{"\"name\""}</span>{"] == "}<span className="hljs-string">{"\"alice\""}</span></div>
            </code></pre>;
        case 6:
            return <pre className="code-block"><code className="language-python hljs">
                <div className="code-line"><span className="hljs-comment">{"# NG: パスワードの平文をコードに埋め込んでいる（静的解析や秘密情報スキャンで検出したい）"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"login_bad"}</span>{"("}<span className="hljs-params">{"driver"}</span>{"):"}&#10;</div>
                <div className="code-line">{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"user\""}</span>{").send_keys("}<span className="hljs-string">{"\"test_admin\""}</span>{")"}&#10;</div>
                <div className="code-line">{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"password\""}</span>{").send_keys("}<span className="hljs-string">{"\"P@ssw0rd-1234\""}</span>{")"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-comment">{"# OK: 実行環境から取得する（CI のシークレットや環境変数）"}</span>&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"import"}</span>{" os"}&#10;</div>
                <div className="code-line">&#10;</div>
                <div className="code-line"><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"login_good"}</span>{"("}<span className="hljs-params">{"driver"}</span>{"):"}&#10;</div>
                <div className="code-line">{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"user\""}</span>{").send_keys(os.environ["}<span className="hljs-string">{"\"TEST_USER\""}</span>{"])"}&#10;</div>
                <div className="code-line">{"    driver.find_element("}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"password\""}</span>{").send_keys(os.environ["}<span className="hljs-string">{"\"TEST_PASSWORD\""}</span>{"])"}</div>
            </code></pre>;
        default:
            throw new RangeError('Unknown chapter 7 code example');
    }
}
