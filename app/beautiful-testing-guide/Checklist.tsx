'use client';
import React, { useState } from 'react';
export default function Checklist(){
 const [checked,setChecked]=useState<boolean[]>(Array(11).fill(false));
 const done=checked.filter(Boolean).length;
 const toggle=(index:number)=>setChecked(previous=>previous.map((value,i)=>i===index?!value:value));
 return (
    <section className="section" id="sec-14">
        <h2>
            {"14. ベストプラクティス・チェックリスト"}
        </h2>
        <div className="prose">
            <p>
                {"初学者が「美しいテスト」を実践するための総まとめです。"}
            </p>
        </div>
        <p className="checklist-progress" id="checklistProgress" role="status" aria-live="polite">
            {" 進捗: "}
            <strong>
                <span id="checklistDone">{done}</span>
                {" / "}
                <span id="checklistTotal">
                    {"11"}
                </span>
            </strong>
            {" 完了 "}
        </p>
        <ul className="checklist" id="checklist">
            <li className={checked[0] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[0]} onChange={() => toggle(0)} />
                    <span className="check-text">
                        {"テストを書く前に「誰のためのテストか」「何を満足とみなすか」を言語化した"}
                    </span>
                </label>
            </li>
            <li className={checked[1] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[1]} onChange={() => toggle(1)} />
                    <span className="check-text">
                        {"テストの配分（ピラミッド／トロフィー）と、CIでの実行制御（Small／Medium／Largeのテストサイズ）を分けて意識している"}
                    </span>
                </label>
            </li>
            <li className={checked[2] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[2]} onChange={() => toggle(2)} />
                    <span className="check-text">
                        {"Red → Green → Refactorのサイクルで小さくTDDを回している"}
                    </span>
                </label>
            </li>
            <li className={checked[3] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[3]} onChange={() => toggle(3)} />
                    <span className="check-text">
                        {"ストーリーレベルの受け入れテストとユニットレベルのTDDテストの役割の違いを理解している"}
                    </span>
                </label>
            </li>
            <li className={checked[4] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[4]} onChange={() => toggle(4)} />
                    <span className="check-text">
                        {"自動化できる部分と、探索的テストで人が判断すべき部分を区別している（アジャイルテストの4象限）"}
                    </span>
                </label>
            </li>
            <li className={checked[5] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[5]} onChange={() => toggle(5)} />
                    <span className="check-text">
                        {"バグには重要度（Severity）と優先度（Priority）を分けて記録している"}
                    </span>
                </label>
            </li>
            <li className={checked[6] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[6]} onChange={() => toggle(6)} />
                    <span className="check-text">
                        {"テストをすり抜けたバグについて、テストスイート側の改善点を振り返っている"}
                    </span>
                </label>
            </li>
            <li className={checked[7] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[7]} onChange={() => toggle(7)} />
                    <span className="check-text">
                        {"コミット時はSmall、プルリクエスト時はMediumまで、リリース前・ナイトリーでLargeを実行するようゲーティングしている"}
                    </span>
                </label>
            </li>
            <li className={checked[8] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[8]} onChange={() => toggle(8)} />
                    <span className="check-text">
                        {"パフォーマンステストの結果は関係者と協働で解釈し、犯人探しで終わらせていない"}
                    </span>
                </label>
            </li>
            <li className={checked[9] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[9]} onChange={() => toggle(9)} />
                    <span className="check-text">
                        {"テストの基準やプロセスをチームで共有し、属人化させていない"}
                    </span>
                </label>
            </li>
            <li className={checked[10] ? "done" : undefined}>
                <label className="check-label">
                    <input type="checkbox" className="check-input" checked={checked[10]} onChange={() => toggle(10)} />
                    <span className="check-text">
                        {"LLM/AIエージェントを含む機能については、決定的な部分と非決定的な部分を切り分けてテスト戦略を設計している"}
                    </span>
                </label>
            </li>
        </ul>
    </section>
 );
}
