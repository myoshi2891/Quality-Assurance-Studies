import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const tempFilePath = resolve("./temp_validate.md");
const scriptPath = resolve("./scripts/validate-fences.mjs");

let importCounter = 0;
const getImportUrl = () => `${scriptPath}?t=${importCounter++}`;

afterEach(() => {
  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }
});

describe("validate-fences.mjs", () => {
  it("passes with correct language-specified code blocks", async () => {
    const content = `# Title\n\n\`\`\`ts\nconst a = 1;\n\`\`\`\n`;
    writeFileSync(tempFilePath, content, "utf8");
    
    const testState = { exitCode: null as number | null };
    const originalExit = process.exit;
    // @ts-expect-error process.exit is read-only in typical typings but writable in runtime
    process.exit = (code?: number) => {
      testState.exitCode = code ?? 0;
      if (testState.exitCode !== 0) {
        throw new Error(`process.exit: ${testState.exitCode}`);
      }
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
    
    expect(testState.exitCode).toBe(0);
    expect(logOutput).toContain("No language-unspecified code blocks found");
  });

  it("fails with language-unspecified code blocks", async () => {
    const content = `# Title\n\n\`\`\`\nconst a = 1;\n\`\`\`\n`;
    writeFileSync(tempFilePath, content, "utf8");
    
    const testState = { exitCode: null as number | null };
    const originalExit = process.exit;
    // @ts-expect-error process.exit is read-only in typical typings but writable in runtime
    process.exit = (code?: number) => {
      testState.exitCode = code ?? 0;
      if (testState.exitCode !== 0) {
        throw new Error("process.exit: Found 1 language-unspecified code blocks");
      }
    };

    let logOutput = "";
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logOutput += args.join(" ") + "\n";
    };

    const errorOutput: string[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      errorOutput.push(args.join(" "));
    };

    const originalArgv = process.argv;
    process.argv = ["bun", scriptPath, tempFilePath];

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
      console.error = originalError;
      process.argv = originalArgv;
    }
    
    expect(testState.exitCode).toBe(1);
    expect(logOutput).toContain("Found 1 language-unspecified code blocks");
    expect(errorOutput.join("\n")).toContain("Found 1 language-unspecified code blocks");
  });

  it("fails with unclosed code blocks", async () => {
    const content = `# Title\n\n\`\`\`ts\nconst a = 1;\n`;
    writeFileSync(tempFilePath, content, "utf8");
    
    const testState = { exitCode: null as number | null };
    const originalExit = process.exit;
    // @ts-expect-error process.exit is read-only in typical typings but writable in runtime
    process.exit = (code?: number) => {
      testState.exitCode = code ?? 0;
      if (testState.exitCode !== 0) {
        throw new Error(`process.exit: ${testState.exitCode}`);
      }
    };

    let errorOutput = "";
    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      errorOutput += args.join(" ") + "\n";
    };

    const originalArgv = process.argv;
    process.argv = ["bun", scriptPath, tempFilePath];

    try {
      await import(getImportUrl());
    } catch (e) {
      const err = e as Error;
      if (!err.message || !err.message.startsWith("process.exit:")) {
        throw e;
      }
    } finally {
      process.exit = originalExit;
      console.error = originalError;
      process.argv = originalArgv;
    }
    
    expect(testState.exitCode).toBe(1);
    expect(errorOutput).toContain("Unclosed code block starting at line 3");
  });
});
