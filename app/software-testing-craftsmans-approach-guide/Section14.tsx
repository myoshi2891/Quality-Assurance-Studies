import React from 'react';

export default function Section14() {
    return (<section className="section" id="summary"><h2>{"まとめ"}</h2><div className="prose"><p>{"\n                            Jorgensenの『Software Testing: A Craftsman's\n                            Approach』は、境界値分析や同値分割といった「手を動かす技法」と、グラフ理論・集合論という「技法を支える理論」を同じ本の中で往復させることで、テスト設計を「勘と経験の職人芸」から「説明可能な工学」に引き上げようとする一冊です。\n                        "}</p><p>{"\n                            一方で、テストピラミッドやミューテーションテスト、AI支援開発時代の品質保証の課題など、2026年現在の実務は書籍の初版が想定していなかった環境変化（クラウドネイティブ、CI/CD、生成AIによるコード生成）の中で進化を続けています。書籍が提供する「技法の原理」と、本ガイドで補足した「現在の実務動向」を両輪として学ぶことで、単なる技法の暗記ではなく、状況に応じて技法を選び取れる"}<strong>{"テストの職人（Craftsman）"}</strong>{"へと近づくことができるはずです。\n                        "}</p></div></section>);
}
