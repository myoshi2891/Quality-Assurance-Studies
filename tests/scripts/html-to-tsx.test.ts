import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync, rmSync } from "fs";
import { resolve, join } from "path";

const tempHtmlPath = resolve("./temp_input.html");
const targetPageName = "temp-test-page";
const generatedDir = resolve("./app", targetPageName);
const generatedPagePath = join(generatedDir, "page.tsx");
const scriptPath = resolve("./scripts/html-to-tsx.mjs");

let importCounter = 0;
const getImportUrl = () => `${scriptPath}?t=${importCounter++}`;

afterEach(() => {
  if (existsSync(tempHtmlPath)) {
    unlinkSync(tempHtmlPath);
  }
  if (existsSync(generatedDir)) {
    rmSync(generatedDir, { recursive: true, force: true });
  }
});

describe("html-to-tsx.mjs", () => {
  it("converts HTML structure to React TSX with proper class mapping and markup replacements", async () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<body>
  <main>
    <h1 class="sh">Main Title</h1>
    <p>Some text</p>
    <pre class="code-hdr">const code = 1;</pre>
    <table>
      <tr>
        <td colspan="2">Merged Cell</td>
      </tr>
    </table>
  </main>
</body>
</html>
    `;
    writeFileSync(tempHtmlPath, htmlContent, "utf8");

    let exitCode: number | null = null;
    const originalExit = process.exit;
    process.exit = (code?: number) => {
      exitCode = code ?? 0;
      throw new Error(`process.exit: ${exitCode}`);
    };

    let logOutput = "";
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logOutput += args.join(" ") + "\n";
    };

    const originalArgv = process.argv;
    process.argv = ["bun", scriptPath, tempHtmlPath, targetPageName];

    try {
      await import(getImportUrl());
    } catch (e) {
      const err = e as Error;
      if (!err.message || !err.message.startsWith("process.exit:")) {
        throw e;
      }
    } finally {
      process.exit = originalExit;
      console.log = originalLog;
      process.argv = originalArgv;
    }

    expect(exitCode).toBeNull();
    expect(logOutput).toContain("Successfully converted");

    expect(existsSync(generatedPagePath)).toBe(true);
    const tsxContent = readFileSync(generatedPagePath, "utf8");

    // Check component wrapper
    expect(tsxContent).toContain("export default function TempTestPage() {");

    // Check class mapping (.sh -> section-header)
    expect(tsxContent).toContain('className="section-header"');

    // Check colspan -> colSpan
    expect(tsxContent).toContain("colSpan={2}");

    // Check pre block extraction & dangerouslySetInnerHTML (retains code-hdr and includes a space)
    expect(tsxContent).toContain("<pre className=\"code-hdr\" dangerouslySetInnerHTML={{ __html: \"const code = 1;\" }} />");
  });
});
