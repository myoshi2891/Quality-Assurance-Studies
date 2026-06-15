'use client';

import React, { useState, useCallback, useRef } from 'react';

/**
 * Applies syntax highlighting to Python code for HTML rendering.
 *
 * Escapes HTML special characters and wraps Python syntax elements (keywords, strings, numbers, class/function definitions, comments, phase labels, and pass/fail markers) in styled `<span>` elements.
 *
 * @returns HTML-escaped code with Python syntax elements wrapped in styled spans.
 */
function highlightPython(code: string): string {
    const escape = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const lines = code.split('\n');
    return lines
        .map((line) => {
            // コメント行
            if (/^\s*#/.test(line)) {
                return `<span class="hl-comment">${escape(line)}</span>`;
            }
            // フェーズラベル行（===...RED...=== 等）
            if (/={3,}\s*(RED|赤)\s*フェーズ/.test(line)) {
                return `<span class="hl-phase-red">${escape(line)}</span>`;
            }
            if (/={3,}\s*(GREEN|緑)\s*フェーズ/.test(line)) {
                return `<span class="hl-phase-green">${escape(line)}</span>`;
            }
            if (/={3,}\s*(REFACTOR)\s*フェーズ/.test(line)) {
                return `<span class="hl-phase-refactor">${escape(line)}</span>`;
            }
            // PASS / FAIL マーカー
            if (/→\s*(PASS|パス)\s*✅/.test(line) || /テスト再実行/.test(line)) {
                return `<span class="hl-pass">${escape(line)}</span>`;
            }
            // def / class / return / if / else / assert / print等 のキーワードを処理
            let escaped = escape(line);
            // キーワード
            escaped = escaped.replace(
                /\b(def|class|return|if|else|elif|assert|import|from|and|or|not|in|is|print|self|True|False|None)\b/g,
                '<span class="hl-keyword">$1</span>'
            );
            // クラス名（class の後）
            escaped = escaped.replace(
                /(<span class="hl-keyword">class<\/span>\s+)([A-Za-z_][A-Za-z0-9_]*)/g,
                '$1<span class="hl-class">$2</span>'
            );
            // 関数定義（def の後）
            escaped = escaped.replace(
                /(<span class="hl-keyword">def<\/span>\s+)([A-Za-z_][A-Za-z0-9_]*)/g,
                '$1<span class="hl-function">$2</span>'
            );
            // 文字列（ダブルクォート）
            escaped = escaped.replace(
                /&quot;([^&]*)&quot;/g,
                '<span class="hl-string">&quot;$1&quot;</span>'
            );
            // 数値
            escaped = escaped.replace(
                /\b(\d+(?:\.\d+)?)\b/g,
                '<span class="hl-number">$1</span>'
            );
            // ✓ ✗ マーカー
            escaped = escaped.replace(/✓/g, '<span class="hl-pass">✓</span>');
            escaped = escaped.replace(/✗/g, '<span class="hl-fail">✗</span>');
            return escaped;
        })
        .join('\n');
}

/**
 * Applies syntax highlighting to Gherkin-formatted code.
 *
 * @returns The input code with HTML syntax highlighting applied.
 */
function highlightGherkin(code: string): string {
    const escape = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const lines = code.split('\n');
    return lines
        .map((line) => {
            const escaped = escape(line);
            // コメント
            if (/^\s*#/.test(line)) {
                return `<span class="hl-comment">${escaped}</span>`;
            }
            // Feature / Scenario / Scenario Outline / Examples
            if (/^\s*(Feature:|Background:|Examples:)/.test(line)) {
                return escaped.replace(
                    /(Feature:|Background:|Examples:)/,
                    '<span class="hl-gherkin-section">$1</span>'
                );
            }
            if (/^\s*(Scenario Outline:|Scenario:)/.test(line)) {
                return escaped.replace(
                    /(Scenario Outline:|Scenario:)/,
                    '<span class="hl-gherkin-section">$1</span>'
                );
            }
            // Given / When / Then / And / But
            if (/^\s*(Given|When|Then|And|But)\s/.test(line)) {
                return escaped.replace(
                    /^(\s*)(Given|When|Then|And|But)(\s)/,
                    '$1<span class="hl-gherkin-key">$2</span>$3'
                );
            }
            // テーブル行（| ... |）
            if (/^\s*\|/.test(line)) {
                return `<span class="hl-gherkin-table-sep">${escaped}</span>`;
            }
            // &lt;...&gt; パラメータ
            if (/&lt;[^&]+&gt;/.test(escaped)) {
                return escaped.replace(
                    /(&lt;[^&]+&gt;)/g,
                    '<span class="hl-gherkin-param">$1</span>'
                );
            }
            return escaped;
        })
        .join('\n');
}

/* ── CodeWindow コンポーネント ── */
export interface CodeWindowProps {
    lang: 'python' | 'gherkin' | 'text';
    filename?: string;
    code: string;
}

/**
 * Displays code with language-specific syntax highlighting and copy functionality.
 */
export default function CodeWindow({ lang, filename, code }: CodeWindowProps) {
    const [copied, setCopied] = useState(false);
    const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
            copyTimeoutRef.current = setTimeout(() => {
                setCopied(false);
                copyTimeoutRef.current = null;
            }, 2000);
        } catch {
            // フォールバック不要
        }
    }, [code]);

    const highlighted =
        lang === 'python'
            ? highlightPython(code)
            : lang === 'gherkin'
              ? highlightGherkin(code)
              : code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const langLabel =
        lang === 'python' ? 'Python' : lang === 'gherkin' ? 'Gherkin' : 'text';

    return (
        <div className="code-window">
            <div className="code-window-header">
                <div className="code-dots" aria-hidden="true">
                    <span /><span /><span />
                </div>
                <span className="code-lang">{langLabel}</span>
                {filename && <span className="code-filename">{filename}</span>}
                <button
                    className={`code-copy-btn${copied ? ' copied' : ''}`}
                    onClick={handleCopy}
                    aria-label="コードをコピー"
                    type="button"
                >
                    {copied ? '✓ copied' : '⎘ copy'}
                </button>
            </div>
            <pre
                className="code-block"
                dangerouslySetInnerHTML={{ __html: highlighted }}
            />
        </div>
    );
}
