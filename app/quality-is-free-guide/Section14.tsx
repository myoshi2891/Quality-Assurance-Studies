import React from 'react';

export default function Section14() {
    return <section id="sec14">
        <div className="sec-head">
            <i className="ti ti-flag-3">

            </i>
            <h2>
                {"14. まとめ"}
            </h2>
        </div>
        <p>
            {" Crosbyの『Quality Is Free』が半世紀近く読み継がれている理由は、その主張がシンプルで、かつ現代のソフトウェア開発の実践——シフトレフト、CI/CDの品質ゲート、TDD、DevOpsの継続的改善——のほぼすべてに、理論的な骨格を提供しているからです。 "}
        </p>
        <p>
            {" 初学者がこの本、そして本ガイドから持ち帰るべき教訓は次の3点に集約できます。 "}
        </p>
        <ol>
            <li>
                <strong>
                    {"品質とは曖昧な感覚ではなく、「要求への適合」という測定可能な事柄である。"}
                </strong>
            </li>
            <li>
                <strong>
                    {"不良を後工程で見つけるより、最初から作り込まない（予防する）方が、総合的なコストは小さくなる。"}
                </strong>
            </li>
            <li>
                <strong>
                    {"ただし、その根拠として引用される具体的な数字は、必ず自分の頭とチームの実データで検証する。"}
                </strong>
                {"これはCrosby自身が説いた「品質は測定せよ」という精神の、最も誠実な実践です。 "}
            </li>
        </ol>
    </section>;
}
