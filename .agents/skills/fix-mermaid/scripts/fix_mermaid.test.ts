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
