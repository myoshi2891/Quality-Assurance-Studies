import React from 'react';

export default function Section10() {
    return <section id="sec10">
        <div className="sec-head">
            <i className="ti ti-robot">

            </i>
            <h2>
                {"10. 2026年の現在地"}
            </h2>
        </div>
        <p>
            {" 2026年9月現在、Crosbyが説いた「品質コスト」の考え方は、AIによるコード生成が普及した開発現場で新しい形の再評価を受けています。 "}
        </p>
        <p>
            {" DevOps Research and Assessment（DORA）チームの公式レポート「"}
            <a href="https://dora.dev/research/2025/dora-report/" target="_blank" rel="noopener noreferrer">
                {"2025 DORA State of AI-assisted Software Development report"}
            </a>
            {"」（"}
            <em>
                {"Accelerate"}
            </em>
            {"の著者であるDr. Nicole Forsgren、Jez Humble、Gene Kimらが創始したプロジェクト、現在はGoogleが運営）では、AI支援開発の普及によってデリバリのスループットが増大する一方で、デリバリの不安定性もあわせて増大するという関係が示されています。この現象をより踏み込んで論じたのが、DORAチームの2026年3月10日付の公式記事「"}
            <a href="https://dora.dev/insights/balancing-ai-tensions/" target="_blank" rel="noopener noreferrer">
                {"Balancing AI tensions: Moving from AI adoption to effective SDLC use"}
            </a>
            {"」です。同記事は、コードを書く時間が短縮されても、その分の時間がAI生成コードの信頼性・セキュリティ・アーキテクチャ整合性を確認する監査作業に再配分される——"}
            <strong>
                {"「検証税（verification tax）」"}
            </strong>
            {"と呼ばれる負担——という構造を指摘し、その負荷がとりわけコードレビュー担当者に集中すると述べています。また、AI導入の投資対効果そのものについては「"}
            <a href="https://dora.dev/ai/roi/report/" target="_blank" rel="noopener noreferrer">
                {"ROI of AI-assisted Software Development report"}
            </a>
            {"」で別途分析されています。 "}
        </p>
        <p>
            {" なお、プルリクエストのレビュー時間の中央値の大幅な増加や、レビューなしでマージされるPR割合の増加といった具体的な開発メトリクスの変化は、"}
            <a href="https://www.faros.ai/blog/key-takeaways-from-the-dora-report-2025" target="_blank" rel="noopener noreferrer">
                {"Faros AIの分析"}
            </a>
            {"や"}
            <a href="https://kodus.io/en/dora-accelerate-state-of-devops/" target="_blank" rel="noopener noreferrer">
                {"Kodusの二次資料"}
            </a>
            {"に基づく報告・考察として示されています。 "}
        </p>
        <p>
            {" これはまさに、Crosbyが1979年に定義した「評価コスト（appraisal cost）」が、AIコーディングという新しい変数によって形を変えて再浮上している状況だと読むことができます。コード生成という「予防（=最初から正しく書く）」の一部をAIに委譲した結果、「評価（=それが本当に正しいかを確認する）」の負荷がむしろ増大している、というのが2026年時点での業界の実感です。Crosby流に言えば、"}
            <strong>
                {"予防コストの内訳が変化しただけであり、「品質コストの総和を最小化する」という命題自体は今も有効"}
            </strong>
            {"だと言えるでしょう。 "}
        </p>
        <blockquote>
            {" 出典：本セクションの「検証税（verification tax）」の概念はDORAの公式記事「Balancing AI tensions」（2026年3月10日）に基づき、AI導入の投資対効果に関する記述は「ROI of AI-assisted Software Development report」に基づいています。また、レビュー時間中央値やマージ割合等の周辺数値はFaros AIおよびKodusの二次資料（2025/2026年）を参照しています。詳細情報は下記参考文献のリンクから直接ご確認ください。 "}
        </blockquote>
    </section>;
}
