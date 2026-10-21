import React from 'react';

// Precomputed with the source highlight.js 11.9.0 engine and its original Python and YAML grammars.
// Construct LF text at runtime: Next.js/SWC trims numeric LF entities in JSX.
// Keep the existing line wrappers and exact clipboard text, including empty lines.
function CodeLine({ children, newline = false }: { children?: React.ReactNode; newline?: boolean }) {
    return React.createElement('div', { className: 'code-line' }, children, newline ? '\n' : null);
}
export default function CodeExample({ index }: { index: number }) {
    switch (index) {
        case 0:
            return <div className="code-block"><pre><code className="language-python hljs">
                <CodeLine newline><span className="hljs-comment">{"# 要素ごとに手書きで検証（増えるほど長く、抜け漏れも起きやすい）"}</span></CodeLine>
                <CodeLine newline>{"body = response.json()"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"id\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"id\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"name\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"name\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"email\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"email\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"status\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"status\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"role\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"role\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
                <CodeLine><span className="hljs-keyword">{"assert"}</span>{" "}<span className="hljs-built_in">{"isinstance"}</span>{"(body["}<span className="hljs-string">{"\"createdAt\""}</span>{"], "}<span className="hljs-built_in">{"str"}</span>{") "}<span className="hljs-keyword">{"and"}</span>{" body["}<span className="hljs-string">{"\"createdAt\""}</span>{"] "}<span className="hljs-keyword">{"is"}</span>{" "}<span className="hljs-keyword">{"not"}</span>{" "}<span className="hljs-literal">{"None"}</span></CodeLine>
            </code></pre></div>;
        case 1:
            return <div className="code-block"><pre><code className="language-python hljs">
                <CodeLine newline><span className="hljs-keyword">{"from"}</span>{" jsonschema "}<span className="hljs-keyword">{"import"}</span>{" validate"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline>{"user_schema = {"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"object\""}</span>{","}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-string">{"\"required\""}</span>{": ["}<span className="hljs-string">{"\"id\""}</span>{", "}<span className="hljs-string">{"\"name\""}</span>{", "}<span className="hljs-string">{"\"email\""}</span>{", "}<span className="hljs-string">{"\"status\""}</span>{", "}<span className="hljs-string">{"\"role\""}</span>{", "}<span className="hljs-string">{"\"createdAt\""}</span>{"],"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-string">{"\"properties\""}</span>{": {"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"id\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"name\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"email\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"status\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"role\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-string">{"\"createdAt\""}</span>{": {"}<span className="hljs-string">{"\"type\""}</span>{": "}<span className="hljs-string">{"\"string\""}</span>{"},"}</CodeLine>
                <CodeLine newline>{"    },"}</CodeLine>
                <CodeLine newline>{"}"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine>{"validate(instance=response.json(), schema=user_schema)  "}<span className="hljs-comment">{"# 違反があれば具体的な理由付きで例外"}</span></CodeLine>
            </code></pre></div>;
        case 2:
            return <div className="code-block"><pre><code className="language-python hljs">
                <CodeLine newline><span className="hljs-keyword">{"from"}</span>{" selenium.webdriver.support.ui "}<span className="hljs-keyword">{"import"}</span>{" WebDriverWait"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"from"}</span>{" selenium.webdriver.support "}<span className="hljs-keyword">{"import"}</span>{" expected_conditions "}<span className="hljs-keyword">{"as"}</span>{" EC"}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"from"}</span>{" selenium.webdriver.common.by "}<span className="hljs-keyword">{"import"}</span>{" By"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# ダメな例：固定待機"}</span></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# time.sleep(5)"}</span></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# 良い例：条件が成立するまで待つ（最大 10 秒＝タイムアウト付き）"}</span></CodeLine>
                <CodeLine newline>{"button = WebDriverWait(driver, timeout="}<span className="hljs-number">{"10"}</span>{").until("}</CodeLine>
                <CodeLine newline>{"    EC.element_to_be_clickable((By.ID, "}<span className="hljs-string">{"\"submit\""}</span>{"))"}</CodeLine>
                <CodeLine newline>{")"}</CodeLine>
                <CodeLine>{"button.click()"}</CodeLine>
            </code></pre></div>;
        case 3:
            return <div className="code-block"><pre><code className="language-yaml hljs">
                <CodeLine newline><span className="hljs-attr">{"name:"}</span>{" "}<span className="hljs-string">{"regression"}</span></CodeLine>
                <CodeLine newline><span className="hljs-attr">{"on:"}</span></CodeLine>
                <CodeLine newline>{"  "}<span className="hljs-attr">{"schedule:"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"cron:"}</span>{" "}<span className="hljs-string">{"\"0 17 * * *\""}</span>{"   "}<span className="hljs-comment">{"# 毎日定時に実行（UTC 基準）"}</span></CodeLine>
                <CodeLine newline>{"  "}<span className="hljs-attr">{"workflow_dispatch:"}</span>{"        "}<span className="hljs-comment">{"# 手動実行も可能"}</span></CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-attr">{"jobs:"}</span></CodeLine>
                <CodeLine newline>{"  "}<span className="hljs-attr">{"test:"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"runs-on:"}</span>{" "}<span className="hljs-string">{"ubuntu-latest"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"strategy:"}</span></CodeLine>
                <CodeLine newline>{"      "}<span className="hljs-attr">{"matrix:"}</span></CodeLine>
                <CodeLine newline>{"        "}<span className="hljs-attr">{"suite:"}</span>{" ["}<span className="hljs-string">{"smoke"}</span>{", "}<span className="hljs-string">{"api"}</span>{", "}<span className="hljs-string">{"ui-part1"}</span>{", "}<span className="hljs-string">{"ui-part2"}</span>{"]   "}<span className="hljs-comment">{"# スイートを分割して並列実行"}</span></CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-attr">{"steps:"}</span></CodeLine>
                <CodeLine newline>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"uses:"}</span>{" "}<span className="hljs-string">{"actions/checkout@v4"}</span></CodeLine>
                <CodeLine>{"      "}<span className="hljs-bullet">{"-"}</span>{" "}<span className="hljs-attr">{"run:"}</span>{" "}<span className="hljs-string">{"./run-tests.sh"}</span>{" "}<span className="hljs-string">{"${{"}</span>{" "}<span className="hljs-string">{"matrix.suite"}</span>{" "}<span className="hljs-string">{"}}"}</span></CodeLine>
            </code></pre></div>;
        case 4:
            return <div className="code-block"><pre><code className="language-python hljs">
                <CodeLine newline><span className="hljs-keyword">{"import"}</span>{" pytest"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-meta">{"@pytest.fixture"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"registered_user"}</span>{"("}<span className="hljs-params">{"api_client"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-comment">{"# setup：UI を操作せず API でユーザーを作成（速く安定する）"}</span></CodeLine>
                <CodeLine newline>{"    user = api_client.post("}<span className="hljs-string">{"\"/users\""}</span>{", json={"}<span className="hljs-string">{"\"name\""}</span>{": "}<span className="hljs-string">{"\"tester\""}</span>{"}).json()"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"yield"}</span>{" user"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-comment">{"# teardown：テスト後に API で後始末"}</span></CodeLine>
                <CodeLine newline>{"    api_client.delete("}<span className="hljs-string">{"f\"/users/"}</span><span className="hljs-string"><span className="hljs-subst">{"{user["}</span></span><span className="hljs-string"><span className="hljs-subst"><span className="hljs-string">{"'id'"}</span></span></span><span className="hljs-string"><span className="hljs-subst">{"]}"}</span></span><span className="hljs-string">{"\""}</span>{")"}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"test_login_ui"}</span>{"("}<span className="hljs-params">{"browser, registered_user"}</span>{"):"}</CodeLine>
                <CodeLine newline>{"    browser.login(registered_user["}<span className="hljs-string">{"\"name\""}</span>{"])"}</CodeLine>
                <CodeLine>{"    "}<span className="hljs-keyword">{"assert"}</span>{" browser.is_logged_in()"}</CodeLine>
            </code></pre></div>;
        case 5:
            return <div className="code-block"><pre><code className="language-python hljs">
                <CodeLine newline><span className="hljs-comment">{"# Before：種類ごとに別関数"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"select_dropdown"}</span>{"("}<span className="hljs-params">{"el, value"}</span>{"): ..."}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"type_into_field"}</span>{"("}<span className="hljs-params">{"el, value"}</span>{"): ..."}</CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"read_field"}</span>{"("}<span className="hljs-params">{"el"}</span>{"): ..."}</CodeLine>
                <CodeLine newline></CodeLine>
                <CodeLine newline><span className="hljs-comment">{"# After：操作を引数にした共通関数（考え方の例）"}</span></CodeLine>
                <CodeLine newline><span className="hljs-keyword">{"def"}</span>{" "}<span className="hljs-title function_">{"act_on_control"}</span>{"("}<span className="hljs-params">{"el, action, value="}</span><span className="hljs-params"><span className="hljs-literal">{"None"}</span></span>{"):"}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"if"}</span>{" action == "}<span className="hljs-string">{"\"select\""}</span>{": ..."}</CodeLine>
                <CodeLine newline>{"    "}<span className="hljs-keyword">{"elif"}</span>{" action == "}<span className="hljs-string">{"\"type\""}</span>{": ..."}</CodeLine>
                <CodeLine>{"    "}<span className="hljs-keyword">{"elif"}</span>{" action == "}<span className="hljs-string">{"\"read\""}</span>{": ..."}</CodeLine>
            </code></pre></div>;
        default:
            throw new RangeError('Unknown chapter 8 code example');
    }
}
