'use client';

import React, { useState } from 'react';

export default function Section12() {
    const [checked, setChecked] = useState<boolean[]>(Array(11).fill(false));
    const toggle = (index: number, value: boolean) => setChecked(values => values.map((old, i) => i === index ? value : old));
    const completed = checked.filter(Boolean).length;
    return <section id="sec12">
        <div className="sec-head">
            <i className="ti ti-square-check">

            </i>
            <h2>
                {"12. 実践チェックリスト"}
            </h2>
        </div>
        <p>
            {" チームの現状と照らし合わせながら、実際にチェックを入れて進捗を確認してください。 "}
        </p>
        <span className="checklist-counter">
            <span id="checkCount" aria-live="polite">{completed}</span>
            {" / 11 完了"}
        </span>
        <ul className="checklist" id="qifChecklist">
            <li className={checked[0] ? "done" : undefined}>
                <input type="checkbox" id="cl1" checked={checked[0]} onChange={event => toggle(0, event.currentTarget.checked)} />
                <label htmlFor="cl1">
                    {"品質改善に対する経営層・プロダクトオーナーの合意を得た"}
                </label>
            </li>
            <li className={checked[1] ? "done" : undefined}>
                <input type="checkbox" id="cl2" checked={checked[1]} onChange={event => toggle(1, event.currentTarget.checked)} />
                <label htmlFor="cl2">
                    {"品質改善のための横断チームを結成した"}
                </label>
            </li>
            <li className={checked[2] ? "done" : undefined}>
                <input type="checkbox" id="cl3" checked={checked[2]} onChange={event => toggle(2, event.currentTarget.checked)} />
                <label htmlFor="cl3">
                    {"過去のバグ・インシデントを「予防／評価／内部失敗／外部失敗」の4分類で可視化した"}
                </label>
            </li>
            <li className={checked[3] ? "done" : undefined}>
                <input type="checkbox" id="cl4" checked={checked[3]} onChange={event => toggle(3, event.currentTarget.checked)} />
                <label htmlFor="cl4">
                    {"繰り返し発生している不具合の根本原因を分析した"}
                </label>
            </li>
            <li className={checked[4] ? "done" : undefined}>
                <input type="checkbox" id="cl5" checked={checked[4]} onChange={event => toggle(4, event.currentTarget.checked)} />
                <label htmlFor="cl5">
                    {"チームが目指すべき具体的な品質目標を設定した"}
                </label>
            </li>
            <li className={checked[5] ? "done" : undefined}>
                <input type="checkbox" id="cl6" checked={checked[5]} onChange={event => toggle(5, event.currentTarget.checked)} />
                <label htmlFor="cl6">
                    {"コードレビュー・テスト設計に関する教育の機会を設けた"}
                </label>
            </li>
            <li className={checked[6] ? "done" : undefined}>
                <input type="checkbox" id="cl7" checked={checked[6]} onChange={event => toggle(6, event.currentTarget.checked)} />
                <label htmlFor="cl7">
                    {"現場のエンジニアが「目標達成の障害」を報告できる仕組みを作った"}
                </label>
            </li>
            <li className={checked[7] ? "done" : undefined}>
                <input type="checkbox" id="cl8" checked={checked[7]} onChange={event => toggle(7, event.currentTarget.checked)} />
                <label htmlFor="cl8">
                    {"品質改善への貢献を公の場で称賛する仕組みを作った"}
                </label>
            </li>
            <li className={checked[8] ? "done" : undefined}>
                <input type="checkbox" id="cl9" checked={checked[8]} onChange={event => toggle(8, event.currentTarget.checked)} />
                <label htmlFor="cl9">
                    {"品質に関わる知見を共有する定例の場を設けた"}
                </label>
            </li>
            <li className={checked[9] ? "done" : undefined}>
                <input type="checkbox" id="cl10" checked={checked[9]} onChange={event => toggle(9, event.currentTarget.checked)} />
                <label htmlFor="cl10">
                    {"一度きりで終わらせず、次のサイクルの計画を立てた"}
                </label>
            </li>
            <li className={checked[10] ? "done" : undefined}>
                <input type="checkbox" id="cl11" checked={checked[10]} onChange={event => toggle(10, event.currentTarget.checked)} />
                <label htmlFor="cl11">
                    {"「後工程ほどコストがN倍」という数字を鵜呑みにせず、自分たちのチームの実データで検証している"}
                </label>
            </li>
        </ul>
    </section>;
}
