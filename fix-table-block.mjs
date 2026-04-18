import fs from 'fs';

let mdContent = fs.readFileSync('archive/istqb-ctfl-at-complete-guide.md', 'utf8');

const oldBlock = `\`\`\`
2001年、ソフトウェア開発の主要な軽量メソドロジーを代表する17人のエキスパートが
共通の価値観と原則に合意し、「アジャイルソフトウェア開発マニフェスト」を発表した。

アジャイルマニフェストの4つの価値（試験頻出！）：

| 重要なもの（左） | | 価値があるもの（右） |
| :--- | :---: | :--- |
| **個人と対話**<br>(Individuals and interactions) | over | **プロセスとツール**<br>(processes and tools) |
| **動くソフトウェア**<br>(Working software) | over | **包括的なドキュメント**<br>(comprehensive documentation) |
| **顧客との協調**<br>(Customer collaboration) | over | **契約交渉**<br>(contract negotiation) |
| **変化への対応**<br>(Responding to change) | over | **計画に従うこと**<br>(following a plan) |

⚠️ 重要：「右側のものも価値があるが、左側のものをより高く評価する」
\`\`\``;

const newBlock = `2001年、ソフトウェア開発の主要な軽量メソドロジーを代表する17人のエキスパートが
共通の価値観と原則に合意し、「アジャイルソフトウェア開発マニフェスト」を発表した。

アジャイルマニフェストの4つの価値（試験頻出！）：

| 重要なもの（左） | | 価値があるもの（右） |
| :--- | :---: | :--- |
| **個人と対話**<br>(Individuals and interactions) | over | **プロセスとツール**<br>(processes and tools) |
| **動くソフトウェア**<br>(Working software) | over | **包括的なドキュメント**<br>(comprehensive documentation) |
| **顧客との協調**<br>(Customer collaboration) | over | **契約交渉**<br>(contract negotiation) |
| **変化への対応**<br>(Responding to change) | over | **計画に従うこと**<br>(following a plan) |

⚠️ 重要：「右側のものも価値があるが、左側のものをより高く評価する」`;

mdContent = mdContent.replace(oldBlock, newBlock);

fs.writeFileSync('archive/istqb-ctfl-at-complete-guide.md', mdContent);
console.log('Done replacing agile manifesto block.');
