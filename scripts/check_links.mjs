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
 * Markdown テキストから HTTP/HTTPS URL を抽出します。
 * Markdownリンク `[text](url)` および裸URL を対象とします。
 * @param {string} text
 * @returns {string[]}
 */
function extractUrls(text) {
  const urlSet = new Set();
  // Markdownリンク: [label](url)
  const mdLinkRe = /\[.*?\]\((https?:\/\/[^)\s]+)\)/g;
  // テーブルや裸URL: https://...
  const bareUrlRe = /https?:\/\/[^\s|)<>"]+/g;

  for (const re of [mdLinkRe, bareUrlRe]) {
    let m;
    while ((m = re.exec(text)) !== null) {
      const url = (m[1] ?? m[0]).replace(/[.,;:!]$/, ""); // 末尾記号を除去
      urlSet.add(url);
    }
  }
  return [...urlSet];
}

// ─── HTTP チェック ─────────────────────────────────────────────────────────────

/**
 * @param {string} url
 * @returns {Promise<{url: string, status: number|null, ok: boolean, error?: string}>}
 */
async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; link-checker/1.0; +https://github.com/QA-Studies)",
      },
    });
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
 * 最大 CONCURRENCY 件を並列実行するプールで URL を検査します。
 */
async function checkAllUrls(urls) {
  const results = [];
  const queue = [...urls];

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

  for (const file of targetFiles) {
    let text;
    try {
      text = readFileSync(file, "utf-8");
    } catch {
      console.warn(`⚠️  Cannot read: ${file}`);
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
  } else {
    console.log("\n✅ All links are healthy.");
  }
})();
