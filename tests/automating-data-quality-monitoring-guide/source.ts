import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * 移行元 HTML を「仕様」として読み込むためのテスト用ヘルパー。
 * archive/ は git 管理外のため、CI でも読めるよう追跡対象のフィクスチャを正とする。
 */
const SOURCE_PATH = join('tests', 'fixtures', 'source-html', 'Automating-data-quality-monitoring-guide.html');

let cachedHtml: string | null = null;

function readSourceHtml(): string {
  if (cachedHtml !== null) return cachedHtml;
  cachedHtml = readFileSync(join(process.cwd(), SOURCE_PATH), 'utf-8');
  return cachedHtml;
}

export function loadSourceDocument(): Document {
  return new DOMParser().parseFromString(readSourceHtml(), 'text/html');
}

/** 空白（改行・全角スペース含む）をすべて除去してテキスト比較を整形差分に強くする */
export function normalizeText(text: string): string {
  return text.replace(/\s+/g, '');
}

/** 図の読み込みプレースホルダー等、描画方式の違いで差が出る要素 */
const VOLATILE_SELECTOR = '.diagram-loading, .mermaid-wrapper';

function withoutVolatile(el: Element): Element {
  const clone = el.cloneNode(true);
  if (!(clone instanceof Element)) throw new Error('clone is not an Element');
  clone.querySelectorAll(VOLATILE_SELECTOR).forEach((node) => node.remove());
  return clone;
}

/** セクション全体のテキスト（空白無視）。脱落の最終検出網 */
export function sectionText(el: Element): string {
  return normalizeText(withoutVolatile(el).textContent ?? '');
}

const TEXT_BLOCK_SELECTOR = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'li',
  'td',
  'th',
  '.hero-kicker',
  '.table-title',
  '.cover-title',
  '.cover-author',
  '.diagram-caption',
  '.step-badge',
  '.checklist-counter',
  '.ref-group-title',
  '.ref-num',
  '.ref-title',
  '.ref-source',
  '.ref-note',
  '.ref-url',
  'footer',
].join(',');

/** ブロック単位のテキスト一覧。どの段落が欠けたかを差分で特定できる */
export function textBlocks(el: Element): string[] {
  const clean = withoutVolatile(el);
  const blocks = Array.from(clean.querySelectorAll(TEXT_BLOCK_SELECTOR));
  if (clean.matches(TEXT_BLOCK_SELECTOR)) blocks.unshift(clean);
  return blocks.map((block) => normalizeText(block.textContent ?? ''));
}

const STRUCTURE_SELECTOR = [
  'section',
  'header',
  'footer',
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'br',
  'ul',
  'ol',
  'li',
  'strong',
  'sup',
  'a',
  'code',
  'i',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
  'label',
  'input',
  'span',
  'div',
].join(',');

function describeElement(el: Element): string {
  const tag = el.tagName.toLowerCase();
  const classes = Array.from(el.classList)
    .filter((name) => name !== 'active')
    .sort();
  const id = el.getAttribute('id');
  const parts = [`${tag}${classes.length > 0 ? `.${classes.join('.')}` : ''}${id ? `#${id}` : ''}`];
  if (tag === 'a') {
    parts.push(
      `href=${el.getAttribute('href') ?? ''}`,
      `target=${el.getAttribute('target') ?? ''}`,
      `rel=${el.getAttribute('rel') ?? ''}`
    );
  }
  if (tag === 'input') parts.push(`type=${el.getAttribute('type') ?? ''}`);
  return parts.join(' ');
}

/**
 * DOM 構造のシグネチャ（タグ + クラス + id + リンク属性を出現順に列挙）。
 * デザイン用クラスの欠落・順序違い・余剰要素を検出する。
 */
export function structureSignature(el: Element): string[] {
  const clean = withoutVolatile(el);
  const nodes = Array.from(clean.querySelectorAll(STRUCTURE_SELECTOR));
  if (clean.matches(STRUCTURE_SELECTOR)) nodes.unshift(clean);
  return nodes.map(describeElement);
}

/** 目次（サイドバー）のシグネチャ。グループ見出しとリンクを文書順に並べる */
export function navSignature(root: Element): string[] {
  const nodes = Array.from(root.querySelectorAll('.nav-group-label, .nav-a'));
  return nodes.map((node) => {
    if (node.classList.contains('nav-group-label')) {
      return `group:${normalizeText(node.textContent ?? '')}`;
    }
    const num = node.querySelector('.n-num');
    const icon = node.querySelector('i');
    const lead = num
      ? `num:${normalizeText(num.textContent ?? '')}`
      : `icon:${Array.from(icon?.classList ?? []).join(' ')}`;
    return `link:${node.getAttribute('href') ?? ''}|${lead}|${normalizeText(node.textContent ?? '')}`;
  });
}

/** 元スクリプト内のテンプレートリテラルと同じ規則でインデントを除去する */
export function dedent(source: string): string {
  const lines = source.replace(/^\n/, '').split('\n');
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length === 0) continue;
    const indent = line.match(/^(\s*)/)?.[1]?.length ?? 0;
    minIndent = Math.min(minIndent, indent);
  }
  if (!Number.isFinite(minIndent)) minIndent = 0;
  return lines
    .map((line) => line.slice(minIndent))
    .join('\n')
    .trim();
}

/** 元スクリプトの DIAGRAMS（dwrap-N → Mermaid ソース）を出現順に抽出する */
export function extractSourceDiagrams(): Array<{ id: string; source: string }> {
  const html = readSourceHtml();
  const pattern = /'(dwrap-\d+)':\s*`([\s\S]*?)`,/g;
  const found: Array<{ id: string; source: string }> = [];
  for (const match of html.matchAll(pattern)) {
    const [, id, source] = match;
    if (id === undefined || source === undefined) continue;
    found.push({ id, source: dedent(source) });
  }
  return found;
}
