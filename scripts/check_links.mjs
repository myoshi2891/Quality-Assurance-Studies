#!/usr/bin/env node
/**
 * check_links.mjs
 *
 * Markdownファイル内のすべてのURLを抽出し、HTTPリクエストを送って
 * 非2xxレスポンスを検出・報告します。
 *
 * 使い方:
 *   bun scripts/check_links.mjs [files...] [--timeout=<ms>] [--concurrency=<n>]
 *
 * 例:
 *   bun scripts/check_links.mjs istqb-ctal-ta-complete-guide.md
 *   bun scripts/check_links.mjs *.md --timeout=10000 --concurrency=5
 *
 * CI/CDでの利用 (link-check ジョブ):
 *   - 非2xxまたはタイムアウトとなったURLがある場合は exit code 1 で終了します
 *   - ?sdm_process_download=... 形式のURLはISTQB®サイト改訂で変わることがあります
 *     アラートが出た場合はISTQB®公式サイトで最新URLを確認し、テーブルを更新してください
 */

import { readFileSync, readdirSync } from "fs";
import { resolve, extname } from "path";

/**
 * Sanitize Markdown by removing fenced code blocks and inline code.
 * @param {string} text - Input Markdown text.
 * @returns {string} The text with fenced code blocks and inline code removed.
 */
function stripCodeRegions(text) {
  return text
    .replace(/^(?:>\s*)*\s*(```|~~~)[^]*?\1/gm, "")
    .replace(/`[^`]*`/g, "");
}

// ─── CLI 引数パース ────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flags = {};
const fileArgs = [];

for (const arg of args) {
  const m = arg.match(/^--(\w+)=(.+)$/);
  if (m) {
    flags[m[1]] = m[2];
  } else if (!arg.startsWith("--")) {
    fileArgs.push(arg);
  }
}

const TIMEOUT_MS = parseInt(flags.timeout ?? "10000", 10);
const CONCURRENCY = parseInt(flags.concurrency ?? "5", 10);

if (!Number.isInteger(TIMEOUT_MS) || TIMEOUT_MS <= 0) {
  console.error("Error: timeout must be a positive integer.");
  process.exit(1);
}
if (!Number.isInteger(CONCURRENCY) || CONCURRENCY <= 0) {
  console.error("Error: concurrency must be a positive integer.");
  process.exit(1);
}

// 引数がなければカレントディレクトリの *.md を対象にする
const targetFiles =
  fileArgs.length > 0
    ? fileArgs.map((f) => resolve(f))
    : readdirSync(".")
        .filter((f) => extname(f) === ".md")
        .map((f) => resolve(f));

if (targetFiles.length === 0) {
  console.error("No Markdown files found.");
  process.exit(1);
}

// ─── URL 抽出 ─────────────────────────────────────────────────────────────────

/**
 * Extract HTTP/HTTPS URLs from Markdown text, ignoring fenced code blocks and inline code.
 * Targets Markdown link destinations and bare URLs; trailing punctuation such as .,;:! is removed and results are deduplicated.
 * @param {string} text - The Markdown content to scan.
 * @returns {string[]} An array of unique HTTP/HTTPS URLs found in the text.
 */
function extractUrls(text) {
  const urlSet = new Set();
  
  // コードブロックとインラインコードを除去してサニタイズ
  const sanitized = stripCodeRegions(text);

  // Markdownリンク: [label](url)
  const mdLinkRe = /\[.*?\]\((https?:\/\/[^)\s]+)\)/g;
  // テーブルや裸URL: https://...
  const bareUrlRe = /https?:\/\/[^\s|)<>"]+/g;

  for (const re of [mdLinkRe, bareUrlRe]) {
    let m;
    while ((m = re.exec(sanitized)) !== null) {
      const url = (m[1] ?? m[0]).replace(/[.,;:!]$/, ""); // 末尾記号を除去
      urlSet.add(url);
    }
  }
  return [...urlSet];
}

// ─── HTTP チェック ─────────────────────────────────────────────────────────────

/**
 * Check a single HTTP/HTTPS URL for HTTP-level reachability.
 *
 * Attempts a `HEAD` request and retries with `GET` if the server responds with
 * 405 or 501; the request is aborted after `TIMEOUT_MS` milliseconds.
 *
 * @param {string} url - The URL to check.
 * @returns {Promise<{url: string, status: number|null, ok: boolean, error?: string}>}
 *   An object describing the result:
 *   - `url`: the checked URL.
 *   - `status`: the HTTP status code received, or `null` if no response was obtained.
 *   - `ok`: `true` if the status is in the 200–299 range, `false` otherwise.
 *   - `error` (optional): a text description when the check failed (e.g. `TIMEOUT (>${TIMEOUT_MS}ms)` or the fetch error message).
 */
async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; link-checker/1.0; +https://github.com/QA-Studies)",
      },
    });
    
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        redirect: "follow",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; link-checker/1.0; +https://github.com/QA-Studies)",
        },
      });
    }

    clearTimeout(timer);
    const ok = res.status >= 200 && res.status < 300;
    return { url, status: res.status, ok };
  } catch (err) {
    clearTimeout(timer);
    const isTimeout = err.name === "AbortError";
    return {
      url,
      status: null,
      ok: false,
      error: isTimeout ? `TIMEOUT (>${TIMEOUT_MS}ms)` : String(err.message),
    };
  }
}

/**
 * Check a list of URLs using a worker pool limited to CONCURRENCY concurrent checks.
 *
 * @param {string[]} urls - The URLs to check.
 * @returns {Array<{url: string, status: number|null, ok: boolean, error?: string}>} An array of per-URL result objects containing `url`; `status` (HTTP status code or `null` if unavailable); `ok` (`true` for 2xx responses, `false` otherwise); and an optional `error` message for timeouts or fetch failures.
 */
async function checkAllUrls(urls) {
  const results = [];
  const queue = [...urls];

  /**
   * Continuously takes URLs from the shared `queue`, performs an HTTP reachability check for each,
   * appends the check result to the shared `results` array, and logs a line summarizing the outcome.
   *
   * The worker runs until the `queue` is empty. Side effects: mutates `results` and writes status lines to console.
   */
  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      const result = await checkUrl(url);
      results.push(result);
      const icon = result.ok ? "✅" : "❌";
      const statusStr = result.status != null ? String(result.status) : "---";
      const errStr = result.error ? ` (${result.error})` : "";
      console.log(`  ${icon} [${statusStr}] ${url}${errStr}`);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
  return results;
}

// ─── メイン ───────────────────────────────────────────────────────────────────

(async () => {
  /** @type {Map<string, string[]>} url -> [files] */
  const urlToFiles = new Map();
  let hadReadErrors = false;

  for (const file of targetFiles) {
    let text;
    try {
      text = readFileSync(file, "utf-8");
    } catch {
      console.warn(`⚠️  Cannot read: ${file}`);
      hadReadErrors = true;
      continue;
    }
    const urls = extractUrls(text);
    for (const url of urls) {
      if (!urlToFiles.has(url)) urlToFiles.set(url, []);
      urlToFiles.get(url).push(file);
    }
  }

  const allUrls = [...urlToFiles.keys()];
  console.log(
    `\n🔍 Checking ${allUrls.length} unique URLs across ${targetFiles.length} file(s)...\n`
  );

  const results = await checkAllUrls(allUrls);

  const broken = results.filter((r) => !r.ok);

  console.log("\n─────────────────────────────────────────────");
  console.log(`Summary: ${results.length - broken.length}/${results.length} OK`);

  if (broken.length > 0) {
    console.log(`\n❌ ${broken.length} broken link(s) detected:\n`);
    for (const r of broken) {
      const files = (urlToFiles.get(r.url) ?? []).join(", ");
      const statusStr = r.status != null ? `HTTP ${r.status}` : r.error;
      console.log(`  ${r.url}`);
      console.log(`    Status : ${statusStr}`);
      console.log(`    File(s): ${files}`);
      console.log();
    }
    console.log(
      "ℹ️  ?sdm_process_download=... URLが壊れている場合はISTQB®公式サイトで最新IDを確認してください。"
    );
    process.exit(1);
  } else if (hadReadErrors) {
    console.log("\n❌ Read errors occurred during checking.");
    process.exit(1);
  } else {
    console.log("\n✅ All links are healthy.");
  }
})();
