import { expect, test, describe } from "bun:test";
import { fixHtmlMermaid, fixMarkdownMermaid, fixTsxMermaid } from "./fix_mermaid";

describe("fixHtmlMermaid", () => {
  test("HTML フォーマッターで分割された sequenceDiagram 行が結合される", () => {
    const html = `<div class="mermaid">
    sequenceDiagram
    participant A
    Note over A,B:
        some message
    A->B: hello
</div>`;
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toContain("Note over A,B: some message");
    expect(fixed).not.toContain("    sequenceDiagram");
    expect(fixed).toContain("sequenceDiagram");
    expect(report.length).toBe(1);
    expect(report[0]).toContain("modified");
    expect(report[0]).toContain("sequenceDiagram");
  });

  test("mindmap のインデントが保持され、不正な結合が起きない", () => {
    const html = `<div class="mermaid">
    mindmap
      root((Title))
        Child1
          Grandchild1
        Child2
</div>`;
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toMatch(/^mindmap$/m);
    expect(fixed).toContain("  root((Title))");
    expect(fixed).toContain("    Child1");
    expect(fixed).toContain("      Grandchild1");
    expect(fixed).toContain("    Child2");
    expect(fixed).not.toContain("root((Title))Child1");
    expect(report).toEqual(["[mindmap]: 5 line(s) modified"]);
  });

  test("kanban の列とカードの階層インデントが保持され、不正な結合が起きない", () => {
    const html = `<div class="mermaid">
    kanban
      Todo
        [Write docs]
        id2[Review PR]
      Done
        [Ship]
</div>`;
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toMatch(/^kanban$/m);
    expect(fixed).toMatch(/^  Todo$/m);
    expect(fixed).toMatch(/^    \[Write docs\]$/m);
    expect(fixed).toMatch(/^    id2\[Review PR\]$/m);
    expect(fixed).toMatch(/^  Done$/m);
    expect(fixed).toMatch(/^    \[Ship\]$/m);
    expect(report).toEqual(["[kanban]: 6 line(s) modified"]);
  });

  test("class 属性に追加トークンがあってもブロックが検出・処理される", () => {
    const html = `<div class="foo mermaid bar">
    graph TD
    A --> B
</div>`;
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toContain("graph TD");
    expect(fixed).not.toContain("    graph TD");
    expect(fixed).toContain("A --> B");
    expect(fixed).not.toContain("    A --> B");
    expect(report.length).toBe(1);
  });
});

describe("fixHtmlMermaid のクラストークン判定", () => {
  test.each(["mermaid-wrapper", "my-mermaid", "mermaid_box"])("class=\"%s\" は Mermaid ブロックとして扱わない", (cls) => {
    const html = `<div class="${cls}">\n    graph TD\n    A --> B\n</div>`;
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toBe(html);
    expect(report).toEqual([]);
  });
});

describe("YAML frontmatter", () => {
  test("入れ子の config を持つ mindmap で frontmatter の階層と mindmap のインデントを保持する", () => {
    const html = [
      '<div class="mermaid">',
      "    ---",
      "    config:",
      "      mindmap:",
      "        padding: 10",
      "    ---",
      "    mindmap",
      "      root((Title))",
      "        Child",
      "</div>",
    ].join("\n");
    const { fixed, report } = fixHtmlMermaid(html);
    expect(fixed).toContain(
      ["---", "config:", "  mindmap:", "    padding: 10", "---", "mindmap", "  root((Title))", "    Child"].join("\n")
    );
    expect(report).toEqual(["[mindmap]: 8 line(s) modified"]);
  });

  test("Markdown の frontmatter 付き flowchart で config の入れ子を崩さない", () => {
    const md = ["```mermaid", "  ---", "  config:", "    theme: base", "  ---", "  flowchart TD", "  A --> B", "```"].join("\n");
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toBe(["```mermaid", "---", "config:", "  theme: base", "---", "flowchart TD", "A --> B", "```"].join("\n"));
    expect(report).toEqual(["[flowchart]: 6 line(s) modified"]);
  });
});

describe("fixMarkdownMermaid", () => {
  test("Markdown 内の ```mermaid ブロックのインデントが正規化される", () => {
    const md = `Some text here.
\`\`\`mermaid
  graph TD
    A --> B
\`\`\`
Other text here.`;
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toContain("graph TD\nA --> B");
    expect(fixed).not.toContain("  graph TD");
    expect(report.length).toBe(1);
  });

  test("開始フェンスより長い閉じフェンスで閉じ、末尾に文字がある ``` 行では閉じない", () => {
    const md = [
      "````mermaid",
      "  graph TD",
      "  ```not-a-close",
      "    A --> B",
      "`````",
      "  indented text after block",
    ].join("\n");
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toContain("graph TD\n```not-a-close\nA --> B\n`````");
    // ブロック外の行は変更しない
    expect(fixed).toContain("\n  indented text after block");
    expect(report).toEqual(["[graph]: 3 line(s) modified"]);
  });

  test("開始フェンスより短い閉じフェンスではブロックを閉じない", () => {
    const md = ["````mermaid", "  graph TD", "```", "  A --> B", "````"].join("\n");
    const { fixed } = fixMarkdownMermaid(md);
    expect(fixed).toBe(["````mermaid", "graph TD", "```", "A --> B", "````"].join("\n"));
  });

  test("mermaid 以外のフェンス内にある ```mermaid 例は変更しない", () => {
    const md = ["````markdown", "```mermaid", "  graph TD", "```", "````"].join("\n");
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toBe(md);
    expect(report).toEqual([]);
  });

  test("info 文字列にバッククォートを含む行はフェンスとして扱わない", () => {
    const md = ["```a`b", "```mermaid", "  graph TD", "```"].join("\n");
    const { fixed } = fixMarkdownMermaid(md);
    expect(fixed).toBe(["```a`b", "```mermaid", "graph TD", "```"].join("\n"));
  });

  test("CRLF の Markdown でも行数を増やさず、各行の CRLF を保持する", () => {
    const md = ["```mermaid", "  graph TD", "    A --> B", "```", ""].join("\r\n");
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toBe(["```mermaid", "graph TD", "A --> B", "```", ""].join("\r\n"));
    expect(report).toEqual(["[graph]: 2 line(s) modified"]);
  });

  test("リスト項目内の mermaid ブロックは開始フェンスのインデントを保持する", () => {
    const md = ["- 手順", "  ```mermaid", "  graph TD", "      A --> B", "", "  ```", "- 次の項目"].join("\n");
    const { fixed, report } = fixMarkdownMermaid(md);
    expect(fixed).toBe(["- 手順", "  ```mermaid", "  graph TD", "  A --> B", "", "  ```", "- 次の項目"].join("\n"));
    expect(report).toEqual(["[graph]: 1 line(s) modified"]);
  });
});

describe("sequenceDiagram の文開始判定", () => {
  test.each([
    "A-)B: async",
    "A--)B: async",
    "A-xB: lost",
    "A--xB: lost",
    "autonumber",
    "break when failed",
    "critical section",
    "and branch",
    "box Group",
    "create participant C",
    "destroy C",
  ])("不完全なフラグメント直後の %s は前行に結合されない", (stmt) => {
    const html = `<div class="mermaid">\nsequenceDiagram\nparticipant A\n    ${stmt}\n</div>`;
    const { fixed } = fixHtmlMermaid(html);
    expect(fixed).toContain(`participant A\n${stmt}`);
  });
});

describe("Note の継続行", () => {
  test.each(["Note over A,B:", "Note left of A:", "Note right of A:"])(
    "%s の直後でキーワードから始まる継続行はノートに結合される",
    (note) => {
      const html = `<div class="mermaid">\nsequenceDiagram\n${note}\n    end of session\n    and retry\nA->>B: hi\n</div>`;
      const { fixed } = fixHtmlMermaid(html);
      expect(fixed).toContain(`${note} end of session\nand retry\nA->>B: hi`);
    }
  );

  test("本文がコロンで終わる Note の直後のメッセージは結合されず別行のまま残る", () => {
    // Arrange
    const html = `<div class="mermaid">\nsequenceDiagram\nNote over A: 注意:\n    A->>B: hi\n</div>`;

    // Act
    const { fixed } = fixHtmlMermaid(html);

    // Assert
    expect(fixed).toContain("Note over A: 注意:\nA->>B: hi");
  });

  test("stateDiagram-v2 の複数行ノートは sequenceDiagram の継続行として結合されない", () => {
    // Arrange
    const html = `<div class="mermaid">\nstateDiagram-v2\nnote right of S1\n    first line\n    second line\nend note\n</div>`;

    // Act
    const { fixed } = fixHtmlMermaid(html);

    // Assert
    expect(fixed).toContain("note right of S1\nfirst line\nsecond line\nend note");
  });
});

describe("fixTsxMermaid", () => {
  test("TSX 内のテンプレートリテラルの Mermaid コードのインデントが正規化される", () => {
    const tsx = `import Mermaid from '../../components/Mermaid';
export default function Page() {
  return (
    <Mermaid chart={\`graph TD
      A --> B
      B --> C
    \`} />
  );
}`;
    const { fixed, report } = fixTsxMermaid(tsx);
    expect(fixed).toContain("graph TD\nA --> B\nB --> C");
    expect(fixed).not.toContain("      A --> B");
    expect(report.length).toBe(1);
  });

  test("TSX 内のテンプレートリテラルでバッククォートの直後に改行がある場合も Mermaid コードが検出されて修正される", () => {
    const tsx = `import Mermaid from '../../components/Mermaid';
export default function Page() {
  return (
    <Mermaid chart={\`
      graph TD
      A --> B
      B --> C
    \`} />
  );
}`;
    const { fixed, report } = fixTsxMermaid(tsx);
    expect(fixed).toContain("graph TD\nA --> B\nB --> C");
    expect(report.length).toBe(1);
  });

  test("ラベル内のエスケープされたバッククォートで途中終了せず、ブロック全体が処理される", () => {
    const tsx = `<Mermaid chart={\`graph TD
      A["\\\`code\\\`"] --> B
      B --> C
    \`} />`;
    const { fixed, report } = fixTsxMermaid(tsx);
    expect(fixed).toContain('graph TD\nA["\\`code\\`"] --> B\nB --> C');
    expect(fixed).not.toContain("      B --> C");
    expect(report).toEqual(["[graph]: 2 line(s) modified"]);
  });
});
