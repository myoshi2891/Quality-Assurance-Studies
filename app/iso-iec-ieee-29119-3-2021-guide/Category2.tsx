import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1 } from './diagrams';

export default function Category2() {
    return <>
<h2 id="step-1-規格の基本情報">{"Step 1: 規格の基本情報"}</h2>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th><th>{"根拠"}</th></tr></thead><tbody><tr className="odd"><td>{"正式名称"}</td><td>{" Software and systems engineering — Software testing — Part 3: Test documentation "}</td><td>{"ISO ページ"}</td></tr><tr className="even"><td>{"版"}</td><td>{"第2版（Edition 2）"}</td><td>{"ISO ページ"}</td></tr><tr className="odd"><td>{"発行日"}</td><td>{"2021年10月28日（ISO ステージ 60.60: 発行済み）"}</td><td>{"ISO ページ"}</td></tr><tr className="even"><td>{"ページ数"}</td><td>{"84ページ"}</td><td>{"ISO ページ"}</td></tr><tr className="odd"><td>{"策定組織"}</td><td>{" ISO/IEC JTC 1/SC 7（ソフトウェア及びシステムエンジニアリング）＋ IEEE Computer Society（C/S2ESC） "}</td><td>{"ISO / IEEE ページ"}</td></tr><tr className="even"><td>{"IEEE 側の名称"}</td><td>{"IEEE/ISO/IEC 29119-3-2021（ステータス: Active Standard）"}</td><td>{"IEEE ページ"}</td></tr><tr className="odd"><td>{"IEEE 標準委員会承認"}</td><td>{"2021年9月23日"}</td><td>{"IEEE ページ"}</td></tr><tr className="even"><td>{"前の版"}</td><td>{"ISO/IEC/IEEE 29119-3:2013（置き換え済み）"}</td><td>{"ISO / IEEE ページ"}</td></tr><tr className="odd"><td>{"ワーキンググループ議長（IEEE 側の記載）"}</td><td>{"Jon Hagar"}</td><td>{"IEEE ページ"}</td></tr><tr className="even"><td>{"対象"}</td><td>{" あらゆる組織・プロジェクト・テスト活動、あらゆるライフサイクルモデル "}</td><td>{"ISO ページ"}</td></tr><tr className="odd"><td>{"想定読者"}</td><td>{" テスター、テストマネージャ、開発者、プロジェクトマネージャ（特にテストの統制・管理・実施の責任者） "}</td><td>{"ISO ページ"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="版の変遷">{"版の変遷"}</h3>
{" "}
<div className="mermaid-container" data-key="mm2" id="mermaid-diagram-2"><Mermaid chart={DIAGRAM_1} /></div>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"時期"}</th><th>{"出来事"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td>{"2013年"}</td><td>{"第1版 発行"}</td><td>{"シリーズ初のテスト文書化標準（IEEE 829 の後継的位置づけ）"}</td></tr><tr className="even"><td>{"2019年"}</td><td>{"IEEE PAR 承認"}</td><td>{"IEEE 側で改訂作業が正式に始まる"}</td></tr><tr className="odd"><td>{"2020年"}</td><td>{"ISO で改訂プロジェクト承認、DIS 投票"}</td><td>{"ISO 側で改訂案の国際投票が行われる"}</td></tr><tr className="even"><td>{"2021年9月23日"}</td><td>{"IEEE 標準委員会承認"}</td><td>{"IEEE 側の承認完了"}</td></tr><tr className="odd"><td>{"2021年10月28日"}</td><td>{"第2版 発行"}</td><td>{"現行版。テスト条件の概念がテストモデルに置き換わる"}</td></tr></tbody></table>{" "}</div>
{" "}
<blockquote>{" "}<p>{" 補足: 2013年版から2021年版へのおもな変更は「"}<strong>{"テスト条件（test condition）の概念をテストモデル（test model）に置き換えた"}</strong>{"」ことと、規格の前付けに明記されています。詳しくは "}<a href="#step-9-2021年版の最大の変更点テストモデル">{"Step 9"}</a>{" で解説します。 "}</p>{" "}</blockquote>
{" "}
    </>;
}
