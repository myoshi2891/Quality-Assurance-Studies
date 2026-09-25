import * as fs from 'fs';
import * as path from 'path';

const newStmtRe = /^(?:\w+\s*-[->.>]|Note\b|participant\b|actor\b|alt\b|else\b|opt\b|loop\b|rect\b|par\b|end\b|%%|activate\b|deactivate\b|subgraph\b|style\b|classDef\b|linkStyle\b)/i;
const seqFragRe = /^(?:Note\s+(?:over|left\s+of|right\s+of)\b|participant\b|actor\b|alt\b|loop\b|rect\b)/i;
const INDENT_SENSITIVE_TYPES = ['mindmap', 'kanban', 'treemap-beta', 'treemap'];
// TSX のテンプレートリテラル先頭で共通設定を差し込む補間（この完全一致のみ接頭辞として扱う）
const MERMAID_CONFIG_PREFIX = '${MERMAID_CONFIG}';

/**
 * Split a leading Mermaid v11 YAML frontmatter block (`---` ... `---`) from the diagram body.
 *
 * @param lines - Mermaid content split into lines
 * @returns `frontmatter` (leading blank lines through the closing `---`, empty if absent) and the remaining `body`
 */
function splitFrontmatter(lines: string[]): { frontmatter: string[]; body: string[] } {
  const start = lines.findIndex(line => line.trim());
  if (start < 0 || lines[start]?.trim() !== '---') {
    return { frontmatter: [], body: lines };
  }
  const closeOffset = lines.slice(start + 1).findIndex(line => line.trim() === '---');
  if (closeOffset < 0) {
    return { frontmatter: [], body: lines };
  }
  const end = start + 1 + closeOffset;
  return { frontmatter: lines.slice(0, end + 1), body: lines.slice(end + 1) };
}

/**
 * Remove the indentation shared by all non-empty lines, keeping relative (nested) indentation.
 */
function stripCommonIndent(lines: string[]): string[] {
  const indents = lines.filter(line => line.trim()).map(line => line.length - line.trimStart().length);
  const commonIndent = indents.length > 0 ? Math.min(...indents) : 0;
  return lines.map(line => line.slice(commonIndent));
}

/**
 * Find the line that declares the diagram type.
 *
 * Skips blank lines, `%%` comments and `%%{ ... }%%` directives, including multiline directives
 * whose inner configuration lines (e.g. `"theme": "base",`) do not start with `%%`.
 *
 * @param lines - Mermaid content split into lines (frontmatter already removed)
 * @returns The diagram declaration line, or an empty string if none is found
 */
function findDiagramTypeLine(lines: string[]): string {
  let inDirective = false;
  let seenContent = false;
  for (const line of lines) {
    const trimmed = line.trim();
    // 先頭の非空行が ${MERMAID_CONFIG} 補間そのものである場合に限り、設定の接頭辞として読み飛ばす
    const isConfigPrefix = !seenContent && trimmed === MERMAID_CONFIG_PREFIX;
    if (trimmed) {
      seenContent = true;
    }
    if (isConfigPrefix) {
      continue;
    }
    if (inDirective) {
      // 複数行ディレクティブは閉じの }%% を含む行まで読み飛ばす
      if (trimmed.includes('}%%')) {
        inDirective = false;
      }
      continue;
    }
    if (!trimmed) {
      continue;
    }
    if (trimmed.startsWith('%%{')) {
      inDirective = !trimmed.includes('}%%', 3);
      continue;
    }
    if (trimmed.startsWith('%%')) {
      continue;
    }
    return line;
  }
  return '';
}

/**
 * Determine the diagram type from a block of Mermaid content.
 *
 * Returns the first whitespace-delimited token of the diagram declaration line (see `findDiagramTypeLine`).
 *
 * @param inner - Mermaid diagram content
 * @returns The diagram type token (e.g., `graph`, `sequenceDiagram`, `mindmap`), or `"unknown"` if no suitable line is found
 */
function getDiagramType(inner: string): string {
  const { body: rawLines } = splitFrontmatter(inner.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n'));
  return findDiagramTypeLine(rawLines).trim().split(/\s+/)[0] || 'unknown';
}

/**
 * Fixes indentation and broken statement lines inside a Mermaid diagram block.
 *
 * Normalizes newlines, repairs mindmap/kanban/treemap indentation or merges incorrectly broken lines
 * for other diagram types, and returns the corrected content along with a count
 * of modified lines.
 *
 * @param inner - The raw content of a Mermaid diagram block
 * @param report - Optional array that will be appended with a summary line when changes are made.
 *                 Each appended entry has the form `[<diagramType>]: <N> line(s) modified`.
 * @returns An object containing `fixedContent` (the corrected diagram text) and `fixedCount` (the number of lines modified)
 */
export function fixMermaidContent(inner: string, report?: string[]): { fixedContent: string; fixedCount: number } {
  // YAML frontmatter は入れ子のインデントを保ったまま共通インデントのみ除去し、本文とは別に扱う
  const { frontmatter, body: rawLines } = splitFrontmatter(
    inner.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  );
  const fixedFrontmatter = stripCommonIndent(frontmatter);

  // frontmatter と %%{init}%% ディレクティブ（複数行を含む）を除いた最初の宣言行でダイアグラム種別を判定
  const diagramKeyword = findDiagramTypeLine(rawLines).trim().split(/\s+/)[0]?.toLowerCase() ?? '';
  // mindmap / kanban / treemap はインデントが階層そのものなので、共通インデントの除去のみ行う
  const preservesIndent = INDENT_SENSITIVE_TYPES.includes(diagramKeyword);
  // stateDiagram の複数行 note は本文をそのまま保つため、継続行の結合を行わない
  const isStateDiagram = diagramKeyword.startsWith('statediagram');

  const fixed: string[] = [...fixedFrontmatter];
  let fixedCount = fixedFrontmatter.filter((line, idx) => line !== frontmatter[idx]).length;

  let i = 0;
  while (i < rawLines.length) {
    const ln = rawLines[i];
    const stripped = ln.trimStart();
    const leading = ln.length - stripped.length;

    if (preservesIndent) {
      let commonIndent = Infinity;
      for (let j = i; j < rawLines.length; j++) {
        const line = rawLines[j];
        if (line.trim()) {
          const indent = line.length - line.trimStart().length;
          if (indent < commonIndent) {
            commonIndent = indent;
          }
        }
      }
      if (commonIndent === Infinity) {
        commonIndent = 0;
      }

      let localFixedCount = 0;
      for (let j = i; j < rawLines.length; j++) {
        const line = rawLines[j];
        const sliced = line.slice(commonIndent);
        if (sliced !== line) {
          localFixedCount++;
        }
        fixed.push(sliced);
      }
      fixedCount += localFixedCount;
      i = rawLines.length;
      break;
    }

    if (leading > 0 && stripped) {
      const prev = fixed.length > 0 ? fixed[fixed.length - 1].trimEnd() : '';
      const fragMatch = seqFragRe.test(prev);
      const isIncompleteFrag = fragMatch && !/:\s*\S/.test(prev);
      const isCont = !isStateDiagram && (prev.endsWith(':') || isIncompleteFrag) && !newStmtRe.test(stripped);

      if (isCont && fixed.length > 0) {
        fixed[fixed.length - 1] = prev + ' ' + stripped;
        fixedCount++;
      } else {
        fixed.push(stripped);
        fixedCount++;
      }
    } else {
      fixed.push(ln);
    }
    i++;
  }

  if (fixedCount > 0 && report) {
    report.push(`[${getDiagramType(inner)}]: ${fixedCount} line(s) modified`);
  }

  return {
    fixedContent: fixed.join('\n'),
    fixedCount,
  };
}

/**
 * Fixes Mermaid diagram blocks found inside an HTML string.
 *
 * Searches for <div> elements whose class attribute contains "mermaid", repairs
 * the inner Mermaid content, and returns the updated HTML along with a report
 * of modifications performed.
 *
 * @param html - The HTML document text to scan and fix
 * @returns An object with `fixed` containing the HTML with corrected Mermaid blocks, and `report` containing per-diagram modification messages
 */
export function fixHtmlMermaid(html: string): { fixed: string; report: string[] } {
  const report: string[] = [];
  const pattern = /(<div\b[^>]*\bclass\s*=\s*(?:"[^"]*\bmermaid\b[^"]*"|'[^']*\bmermaid\b[^']*'|[^\s>]*\bmermaid\b[^\s>]*)[^>]*>)([\s\S]*?)(<\/div>)/gi;

  const fixed = html.replace(pattern, (match, openTag, inner, closeTag) => {
    const { fixedContent } = fixMermaidContent(inner, report);
    return openTag + fixedContent + closeTag;
  });

  return { fixed, report };
}

/**
 * Fixes Mermaid code blocks inside a Markdown string.
 *
 * @param markdown - The Markdown source to scan for fenced ```mermaid blocks.
 * @returns An object with `fixed` containing the Markdown where each Mermaid block has been corrected, and `report` listing short messages for each diagram that was modified.
 */
export function fixMarkdownMermaid(markdown: string): { fixed: string; report: string[] } {
  const report: string[] = [];
  const pattern = /(```mermaid\r?\n)([\s\S]*?)(\r?\n```)/gi;

  const fixed = markdown.replace(pattern, (match, openTag, inner, closeTag) => {
    const { fixedContent } = fixMermaidContent(inner, report);
    return openTag + fixedContent + closeTag;
  });

  return { fixed, report };
}

/**
 * Fixes Mermaid diagram code contained in template literals within TS/TSX source text.
 *
 * Scans the provided file content for backtick-delimited template literals whose inner text begins with
 * `graph <word>`, `flowchart <word>`, `sequenceDiagram`, or `mindmap`, repairs malformed Mermaid blocks,
 * and returns the updated source and a list of modification summaries.
 *
 * @param content - The TS/TSX source text to scan and fix
 * @returns An object with `fixed` containing the updated source text and `report` containing per-diagram
 * modification messages (e.g. "[sequenceDiagram]: 3 line(s) modified")
 */
export function fixTsxMermaid(content: string): { fixed: string; report: string[] } {
  const report: string[] = [];
  // バッククォート ` で囲まれたテンプレートリテラルで、
  // 内部が graph/flowchart/sequenceDiagram/mindmap で始まるものを検出
  const pattern = /`(\s*(?:graph\s+\w+|flowchart\s+\w+|sequenceDiagram|mindmap\b)[\s\S]*?)`/gi;

  const fixed = content.replace(pattern, (match, inner) => {
    const { fixedContent } = fixMermaidContent(inner, report);
    return '`' + fixedContent + '`';
  });

  return { fixed, report };
}

// Bun/Node 環境での直接実行エントリポイント
if (typeof require !== 'undefined' && require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log("Usage: bun run fix_mermaid.ts <file-path>");
    process.exit(1);
  }

  const filePath = args[0];
  try {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }

    const content = fs.readFileSync(absolutePath, 'utf8');
    const ext = path.extname(absolutePath).toLowerCase();

    let result: { fixed: string; report: string[] };

    if (ext === '.html' || ext === '.htm') {
      result = fixHtmlMermaid(content);
    } else if (ext === '.md' || ext === '.markdown') {
      result = fixMarkdownMermaid(content);
    } else if (['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs'].includes(ext)) {
      result = fixTsxMermaid(content);
    } else {
      console.error(`❌ Unsupported file type: ${ext}`);
      process.exit(1);
    }

    if (result.report.length > 0) {
      result.report.forEach(line => console.log(line));
      fs.writeFileSync(absolutePath, result.fixed, 'utf8');
      console.log(`\n✅ Fixed and saved: ${filePath}`);
    } else {
      console.log("✅ No Mermaid formatting issues found.");
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    process.exit(1);
  }
}
