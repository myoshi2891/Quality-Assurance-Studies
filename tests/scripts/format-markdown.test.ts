import { describe, it, expect, afterEach } from "bun:test";
import { unlinkSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";

const tempFilePath = resolve("./temp_format.md");
const scriptUrl = pathToFileURL(resolve("./scripts/format-markdown.mjs")).href;

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

    const { default: formatMarkdown } = (await import(scriptUrl)) as {
      default: (filePath: string) => Promise<void>;
    };
    await formatMarkdown(tempFilePath);

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
