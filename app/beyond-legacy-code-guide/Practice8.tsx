import React from 'react';

export default function Practice8() {
  return (
    <div className="practice-block" id="practice-8">
      <h3>
        {"プラクティス8: 設計は最後に実装する"}
      </h3>
      <div className="prose">
        <p>
          {" 大規模な設計を最初にすべて固定してしまうと、要求の変化に対応できず、かえって変更コストが増大します。本書では、意図が伝わるコードを書くこと(Program by Intention)、循環的複雑度を下げること、オブジェクトの生成と利用を分離すること、そして小さなサイクルを積み重ねながら設計を発展させる「創発的設計(Emergent Design)」が紹介されています。ソフトウェアは書かれるよりも読まれる回数の方が多いため、読みやすさを優先する姿勢も強調されています。 "}
        </p>
      </div>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" 「あとで使うかもしれない」という理由だけで抽象化や汎用化を先取りしない(YAGNI原則) "}
          </li>
          <li>
            {" 意味のある名前をつけ、コメントに頼らずコード自体で意図を語らせる "}
          </li>
          <li>
            {" 設計に行き詰まったら、まず小さくリファクタリングして状況を整理してから次に進む "}
          </li>
        </ul>
      </div>
    </div>
  );
}
