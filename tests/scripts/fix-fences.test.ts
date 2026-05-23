import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";

const tempFilePath = resolve("./temp_fix.md");
const scriptUrl = pathToFileURL(resolve("./scripts/fix-fences.mjs")).href;

afterEach(() => {
  if (existsSync(tempFilePath)) {
    unlinkSync(tempFilePath);
  }
});

describe("fix-fences.mjs", () => {
  it("automatically adds 'text' to language-unspecified code blocks", async () => {
    const content = `# Title\n\n\`\`\`\nplain text code block\n\`\`\`\n`;
    writeFileSync(tempFilePath, content, "utf8");

    const { default: fixFences } = (await import(scriptUrl)) as {
      default: (filePath: string) => Promise<void>;
    };
    await fixFences(tempFilePath);

    const updatedContent = readFileSync(tempFilePath, "utf8");
    expect(updatedContent).toContain("```text");
    expect(updatedContent).not.toContain("```\nplain");
  });
});
