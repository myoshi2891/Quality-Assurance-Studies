import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";

const tempFilePath = resolve("./temp_fix.md");
const scriptPath = resolve("./scripts/fix-fences.mjs");

let importCounter = 0;
const getImportUrl = () => `${scriptPath}?t=${importCounter++}`;

afterEach(() => {
  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }
});

describe("fix-fences.mjs", () => {
  it("automatically adds 'text' to language-unspecified code blocks", async () => {
    const content = `# Title\n\n\`\`\`\nplain text code block\n\`\`\`\n`;
    writeFileSync(tempFilePath, content, "utf8");

    let exitCode: number | null = null;
    const originalExit = process.exit;
    // @ts-expect-error process.exit is read-only in typical typings but writable in runtime
    process.exit = (code?: number) => {
      exitCode = code ?? 0;
    };

    let logOutput = "";
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logOutput += args.join(" ") + "\n";
    };

    const originalArgv = process.argv;
    process.argv = ["bun", scriptPath, tempFilePath];

    try {
      await import(getImportUrl());
    } finally {
      process.exit = originalExit;
      console.log = originalLog;
      process.argv = originalArgv;
    }

    expect(exitCode).toBeNull();
    expect(logOutput).toContain("Successfully fixed fences");

    const updatedContent = readFileSync(tempFilePath, "utf8");
    expect(updatedContent).toContain("```text");
    expect(updatedContent).not.toContain("```\nplain");
  });
});
