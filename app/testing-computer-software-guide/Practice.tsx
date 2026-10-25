import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
import Checklist from './Checklist';
export default function Practice() {return <>
    <section className="section" id="sec15">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-map-2">

                </i>
            </div>
            <h2>
                {"15. 初心者のための実践ステップバイステップガイド"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" ここまでの内容を踏まえ、実際に手を動かしてテストを始めるための8ステップを示します。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-9"><Mermaid chart={DIAGRAMS["diag-9"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図9: 初心者のための実践8ステップ"}
                </div>
            </div>
            <ol className="step-list">
                <li>
                    <b>
                        {"テスト対象の仕様を理解する"}
                    </b>
                    {": 何が「正しい動作」なのかを、要件やユーザーストーリーから明確にする。仕様が曖昧なら、実装前に確認する。 "}
                </li>
                <li>
                    <b>
                        {"テストの観点を洗い出す"}
                    </b>
                    {": 正常系だけでなく、異常系(不正な入力、権限のない操作、ネットワーク切断など)の観点もリストアップする。 "}
                </li>
                <li>
                    <b>
                        {"同値分割・境界値分析でケースを絞る"}
                    </b>
                    {": すべての入力を試すのは不可能なので、第8章の技法を使って「意味のある代表的なケース」に絞り込む。 "}
                </li>
                <li>
                    <b>
                        {"簡単なテスト計画メモを書く"}
                    </b>
                    {": 何をテストし、何をテストしないのかを短くまとめ、チームで認識を合わせる。 "}
                </li>
                <li>
                    <b>
                        {"単体テストから自動化する"}
                    </b>
                    {": まずは最も粒度の細かい単体テストから自動化し、TDD(第9章)のリズムに慣れていく。 "}
                </li>
                <li>
                    <b>
                        {"CIにテストを組み込む"}
                    </b>
                    {": コミットやプルリクエストのたびにテストが自動実行される仕組み(第13章)を整える。 "}
                </li>
                <li>
                    <b>
                        {"手動での探索的テストを行う"}
                    </b>
                    {": 自動テストではカバーしきれない「使い勝手」や「想定外の操作」を、探索的テスト(第10章)で補う。 "}
                </li>
                <li>
                    <b>
                        {"見つかった不具合を正しく報告する"}
                    </b>
                    {": 第11章の要素を踏まえた、再現可能で事実に基づいたバグレポートを書く。 "}
                </li>
            </ol>
        </div>
    </section>
    <section className="section" id="sec16">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-checklist">

                </i>
            </div>
            <h2>
                {"16. チェックリスト"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 実務に取りかかる前に、以下の項目を確認してみましょう。クリックしてチェックできます。 "}
            </p>
            <Checklist />
        </div>
    </section>
    <section className="section" id="sec17">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-sparkles">

                </i>
            </div>
            <h2>
                {"17. まとめ"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" ソフトウェアテストは、単なる「バグ探し」ではなく、リスクを可視化し、関係者が自信を持って意思決定できるようにするための継続的な活動です。『Testing Computer Software』が1993年に築いた「テストの目的を理解し、体系的に設計し、正確に報告する」という基本姿勢は、テストピラミッド、テストトロフィー、テスト駆動開発、探索的テスト、シフトレフト、そして2026年のAIエージェントによるテスト自動化に至るまで、形を変えながら現在も受け継がれています。初学者はまず本ガイドのステップバイステップガイド(第15章)から着手し、少しずつ第7章～第14章で紹介した各手法を取り入れていくことをおすすめします。 "}
            </p>
        </div>
    </section>
</>;}
