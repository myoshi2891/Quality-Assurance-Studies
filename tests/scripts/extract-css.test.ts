import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";

const tempHtmlPath = resolve("./temp_extract.html");
const tempCssPath = resolve("./temp_extracted.css");
const scriptPath = resolve("./scripts/extract-css.mjs");

let importCounter = 0;
const getImportUrl = () => `${scriptPath}?t=${importCounter++}`;

afterEach(() => {
  if (existsSync(tempHtmlPath)) {
    unlinkSync(tempHtmlPath);
  }
  if (existsSync(tempCssPath)) {
    unlinkSync(tempCssPath);
  }
});

describe("extract-css.mjs", () => {
  it("extracts CSS from HTML style tags, replaces design variables/classes, and removes global rules", async () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --forest: #0b1a0e;
      --gold: #ffd700;
    }
    html {
      margin: 0;
    }
    body {
      background: #000;
    }
    .my-custom-class {
      background: var(--forest);
      color: var(--gold);
    }
    .sh-num {
      font-size: 1.2rem;
    }
    .b-sky {
      background: var(--sky);
    }
    .b-green {
      color: green;
    }
    @keyframes fadeUp {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .fade-in {
      animation: fadeUp 1s;
    }
  </style>
</head>
<body></body>
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
let resolvePromise: () => void;
const donePromise = new Promise<void>((r) => {
  resolvePromise = r;
});

const originalLog = console.log;
console.log = (...args: unknown[]) => {
  logOutput += args.join(" ") + "\n";
  if (logOutput.includes("CSS extracted")) {
    resolvePromise();
  }
};

const originalArgv = process.argv;
process.argv = ["bun", scriptPath, tempHtmlPath, tempCssPath];

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
    expect(logOutput).toContain("CSS extracted");

    const extractedCss = readFileSync(tempCssPath, "utf8");

    // Check mapping variable replacements
    expect(extractedCss).toContain("var(--color-bg-primary)");
    expect(extractedCss).not.toContain("var(--forest)");

    // Check class replacements
    expect(extractedCss).toContain(".section-header-num {");
    expect(extractedCss).toContain(".badge-int {");
    expect(extractedCss).not.toContain(".sh-num {");

    // Check :root definition removal
    expect(extractedCss).not.toContain(":root");

    // Check html/body style rule removal
    expect(extractedCss).not.toContain("html {");
    expect(extractedCss).not.toContain("body {");

    // Check orphaned .b-green rule removal
    expect(extractedCss).not.toContain(".b-green");

    // Check keyframe kebab-case renaming
    expect(extractedCss).toContain("@keyframes fade-up");
    expect(extractedCss).toContain("animation: fade-up 1s");
  });
});
