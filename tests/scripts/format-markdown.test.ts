import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";

const tempFilePath = resolve("./temp_format.md");
const scriptPath = resolve("./scripts/format-markdown.mjs");

let importCounter = 0;
const getImportUrl = () => `${scriptPath}?t=${importCounter++}`;

afterEach(() => {
  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }
});

describe("format-markdown.mjs", () => {
  it("formats Markdown links, headings, consecutive newlines, and trailing newline", async () => {
    const content = `---
title: Front Matter
---
# Main Title
Some text with [Link 1](url1)[Link 2](url2).
## Sub Heading
Text here.



## Another Heading
End text`;
    writeFileSync(tempFilePath, content, "utf8");

    let exitCode: number | null = null;
    const originalExit = process.exit;
    // @ts-expect-error process.exit is read-only in typical typings but writable in runtime
    process.exit = (code?: number) => {
      exitCode = code ?? 0;
      throw new Error(`process.exit: ${exitCode}`);
    };

    let logOutput = "";
    let resolvePromise: () => void;
    const donePromise = new Promise<void>((r) => {
      resolvePromise = r;
    });

    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logOutput += args.join(" ") + "\n";
      if (logOutput.includes("Successfully formatted")) {
        resolvePromise();
      }
    };

    const originalArgv = process.argv;
    process.argv = ["bun", scriptPath, tempFilePath];

    try {
      await import(getImportUrl());
      await donePromise;
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
    expect(logOutput).toContain("Successfully formatted");

    const formattedContent = readFileSync(tempFilePath, "utf8");

    // Check link split
    expect(formattedContent).toContain("[Link 1](url1)\n[Link 2](url2)");

    // Check MD022: Ensure blank line before headings
    expect(formattedContent).toContain("Text here.\n\n## Another Heading");
    expect(formattedContent).toContain("Some text with [Link 1](url1)\n[Link 2](url2).\n\n## Sub Heading");

    // Check MD012: Collapse consecutive blank lines
    expect(formattedContent).not.toContain("\n\n\n\n");

    // Check MD047: Single trailing newline
    expect(formattedContent.endsWith("\n")).toBe(true);
    expect(formattedContent.endsWith("\n\n")).toBe(false);
  });
});
