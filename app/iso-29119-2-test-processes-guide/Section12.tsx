import React from 'react';
import Diagram from './Diagram';
/** 第11章 学習ロードマップとチェックリスト — preserve the complete source order and inline text. */
export default function Section12() {
    return (
        <>
            <h2 id="第11章-学習ロードマップとチェックリスト">
                {'第11章　学習ロードマップとチェックリスト'}
            </h2>
            {'\n'}
            <p className="callout">
                {
                    '💡\nこの章では、ここまでの内容を実際の学習にどうつなげるかを整理します。自分の理解度を確認する材料としても使ってください。'
                }
            </p>
            {'\n'}
            <h3 id="11-1-学習ロードマップ">{'11-1　学習ロードマップ'}</h3>
            {'\n'}
            <p>{'この図は、初学者が29119-2を身につけるまでのステップを表しています。'}</p>
            {'\n'}
            <div
                className="mermaid-diagram"
                id="mmd17"
                tabIndex={0}
                role="region"
                aria-label="図17（横スクロール可能）"
            >
                <Diagram index={16} />
            </div>
            {'\n'}
            <p>{'各ノードの意味：'}</p>
            {'\n'}
            <ul>
                {'\n'}
                <li>{'ステップ1：細かい略号を覚える前に、3層の分担を頭に入れる'}</li>
                {'\n'}
                <li>
                    {
                        'ステップ2：現場の朝会、テスト計画書、障害票などが、どの層のどのプロセスにあたるかを書き出す'
                    }
                </li>
                {'\n'}
                <li>
                    {
                        'ステップ3：第7章のように、自分の担当機能で、モデル・カバレッジ項目・ケース・手順に分解してみる'
                    }
                </li>
                {'\n'}
                <li>{'ステップ4：書式はPart 3、技法はPart 4で補う'}</li>
                {'\n'}
                <li>{'ステップ5：🔎マークの項目を、規格本文で確認して、本書の記述を修正する'}</li>
                {'\n'}
            </ul>
            {'\n'}
            <h3 id="11-2-理解度チェックリスト">{'11-2　理解度チェックリスト'}</h3>
            {'\n'}
            <ul className="task-list">
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'3層（組織・マネジメント・動的）の役割を、たとえ話で説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'8つのプロセス（6.2、7.2、7.3、7.4、8.2、8.3、8.4、8.5）の名前を言える'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'2021年版で、テスト条件がテストモデルに置き換わったことを説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'TD1〜TD4の流れを、旅行の例えで説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'ED（環境とデータ）が、2021年版で拡張されたことを説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'テスト実行の結果は、合格でも不合格でも記録する理由を説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'差異が必ずしも不具合ではない理由と、IR1の役割を説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'完了プロセスの教訓が、組織テストプロセスへ戻る経路を説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'29119-3と29119-4が、29119-2とどう関係するかを説明できる'}
                    </label>
                </li>
                {'\n'}
                <li>
                    <label>
                        <input type="checkbox" />
                        {'29119への批判と、その背景を、中立的に説明できる'}
                    </label>
                </li>
                {'\n'}
            </ul>
            {'\n'}
            <div className="glossary">
                <p>{'📖 この章で登場した用語'}</p>
                <ul>
                    {'\n'}
                    <li>{'分類：現場の活動を、規格のプロセスに当てはめて整理すること'}</li>
                    {'\n'}
                    <li>
                        {
                            '現場の言葉への置き換え：規格の用語を、自分のチームが使う言葉に対応づけること'
                        }
                    </li>
                    {'\n'}
                </ul>
            </div>
            {'\n\n'}
            <hr />
            {'\n'}
        </>
    );
}
