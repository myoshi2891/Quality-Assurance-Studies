import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section03() {
    return <section id="sec3">
        <div className="sec-head">
            <i className="ti ti-list-tree">

            </i>
            <h2>
                {"3. 本書の構成"}
            </h2>
        </div>
        <p>
            {"本書は3部・13章構成になっています。"}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {" 図1: Quality Is Free の全体構成（Part One〜Three） "}
            </div>
            <ChapterDiagram id="dg-structure" />
        </div>
        <p>
            {" Part One「The Understanding」では、品質の定義から成熟度グリッド、品質コスト、14ステップの改善プログラムまで、Crosbyの理論と手法が体系的に提示されます。Part Two「The Doing」は、架空の企業「HPA Corporation」を舞台に、その改善プログラムがどのように導入され、どのような抵抗にあい、どう定着していくかを、プロジェクトの経緯（第10章）と実施の記録（第11章）という物語形式で追体験させるパートです。Part Three「The Tools」は、そのHPA社ケーススタディを研修教材として使うためのインストラクターガイド（第12章）と、読者が自組織で実践するためのツール「Make Certain」（第13章）で構成されています。この「理論→ケーススタディ→実践のための道具立て」という三段構えの構成自体が、多くの現代的な技術書に踏襲されている定番パターンです。 "}
        </p>
    </section>;
}
