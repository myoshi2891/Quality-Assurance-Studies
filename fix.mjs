import fs from 'fs';

// 1. Fix scripts/md-to-tsx.mjs
let scriptContent = fs.readFileSync('scripts/md-to-tsx.mjs', 'utf8');
scriptContent = scriptContent.replace(
    /const rawText = \$\(codeEl\)\.text\(\);\n    \/\/ Use JSON\.stringify to safely escape quotes, newlines, etc\., and wrap it in \{\} for JSX\.\n    \$\(codeEl\)\.text\(`\{(.*)\}`\);/g,
    `const rawText = $(codeEl).text().replace(/&#123;/g, '{').replace(/&#125;/g, '}');
    // Use JSON.stringify to safely escape quotes, newlines, etc., and wrap it in {} for JSX.
    $(codeEl).text(\`{\${JSON.stringify(rawText)}}\`);`
);
fs.writeFileSync('scripts/md-to-tsx.mjs', scriptContent);

// 2. Fix archive/istqb-ctfl-at-complete-guide.md
let mdContent = fs.readFileSync('archive/istqb-ctfl-at-complete-guide.md', 'utf8');

// Replace ASCII Art
const asciiArt = `  ┌──────────────────────────────────────────────────────────┐
  │          重要なもの（左）      vs    価値があるもの（右）  │
  ├──────────────────────────────────────────────────────────┤
  │  個人と対話       over  プロセスとツール                  │
  │  (Individuals and interactions over processes and tools) │
  │                                                          │
  │  動くソフトウェア  over  包括的なドキュメント              │
  │  (Working software over comprehensive documentation)     │
  │                                                          │
  │  顧客との協調     over  契約交渉                          │
  │  (Customer collaboration over contract negotiation)      │
  │                                                          │
  │  変化への対応     over  計画に従うこと                    │
  │  (Responding to change over following a plan)            │
  └──────────────────────────────────────────────────────────┘`;

const newTable = `| 重要なもの（左） | | 価値があるもの（右） |
| :--- | :---: | :--- |
| **個人と対話**<br>(Individuals and interactions) | over | **プロセスとツール**<br>(processes and tools) |
| **動くソフトウェア**<br>(Working software) | over | **包括的なドキュメント**<br>(comprehensive documentation) |
| **顧客との協調**<br>(Customer collaboration) | over | **契約交渉**<br>(contract negotiation) |
| **変化への対応**<br>(Responding to change) | over | **計画に従うこと**<br>(following a plan) |`;

mdContent = mdContent.replace(asciiArt, newTable);

// Fix the XP vs Scrum vs Kanban table wrapped in code blocks
const oldTableBlock = `\`\`\`
CTFL-AT で扱う3つの代表的なアジャイルアプローチ：

**XP vs Scrum vs Kanban の比較（試験頻出！）**

| 比較項目 | XP (eXtreme Programming) | Scrum | Kanban |
| :--- | :--- | :--- | :--- |
| **基本構成** | 5つの価値<br>（通信・シンプルさ・フィードバック・勇気・尊重） | 3つの役割<br>（Scrum Master・Product Owner・開発チーム） | 3つの機器<br>（カンバンボード・WIP制限・リードタイム） |
| **作業単位** | 13のプラクティス<br>（ペアプロ・TDD・継続的インテグレーション等） | スプリント<br>（2〜4週間固定のタイムボックス） | イテレーションは任意<br>（アイテム単位で随時リリース） |
| **技術的規定** | 開発技術を明確に規定する<br>（テストファースト等） | 開発技術は規定しない | フローを可視化・最適化する<br>（WIP制限によるプル方式） |

**Scrum の詳細（試験頻出！）：**

\`\`\``;

const newTableBlock = `CTFL-AT で扱う3つの代表的なアジャイルアプローチ：

**XP vs Scrum vs Kanban の比較（試験頻出！）**

| 比較項目 | XP (eXtreme Programming) | Scrum | Kanban |
| :--- | :--- | :--- | :--- |
| **基本構成** | 5つの価値<br>（通信・シンプルさ・フィードバック・勇気・尊重） | 3つの役割<br>（Scrum Master・Product Owner・開発チーム） | 3つの機器<br>（カンバンボード・WIP制限・リードタイム） |
| **作業単位** | 13のプラクティス<br>（ペアプロ・TDD・継続的インテグレーション等） | スプリント<br>（2〜4週間固定のタイムボックス） | イテレーションは任意<br>（アイテム単位で随時リリース） |
| **技術的規定** | 開発技術を明確に規定する<br>（テストファースト等） | 開発技術は規定しない | フローを可視化・最適化する<br>（WIP制限によるプル方式） |

**Scrum の詳細（試験頻出！）：**`;

mdContent = mdContent.replace(oldTableBlock, newTableBlock);

fs.writeFileSync('archive/istqb-ctfl-at-complete-guide.md', mdContent);
console.log('Done fixing.');
