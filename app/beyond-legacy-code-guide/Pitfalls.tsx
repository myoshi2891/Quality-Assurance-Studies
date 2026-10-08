import React from 'react';

export default function Pitfalls() {
  return (
    <section id="pitfalls">
      <p className="section-eyebrow">
        <i className="ti ti-alert-triangle">
        </i>
        {"COMMON MISTAKES "}
      </p>
      <h2>
        {"初学者がつまずきやすいポイント"}
      </h2>
      <div className="table-wrap">
        <table aria-label="よくあるつまずき">
          <thead>
            <tr>
              <th>
                {"つまずきポイント"}
              </th>
              <th>
                {"起こりがちな誤解"}
              </th>
              <th>
                {"対処のヒント"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"CLEANやTDDを一度に完璧に適用しようとする"}
              </td>
              <td>
                {"最初から高品質でなければ意味がないと考えてしまう"}
              </td>
              <td>
                {" 守破離の「守」から始め、小さく試して徐々に習慣化する "}
              </td>
            </tr>
            <tr>
              <td>
                {"テストを後回しにする"}
              </td>
              <td>
                {"動くコードができてからテストを書けば十分だと考える"}
              </td>
              <td>
                {" テストを先に書くことで設計自体が整理されることを体感する "}
              </td>
            </tr>
            <tr>
              <td>
                {"バッチサイズを小さくすることに抵抗を感じる"}
              </td>
              <td>
                {"小さく分けると非効率に見える"}
              </td>
              <td>
                {" 統合の痛みとフィードバック遅延のコストの方が大きいことを意識する "}
              </td>
            </tr>
            <tr>
              <td>
                {"リファクタリングと機能追加を同時に行う"}
              </td>
              <td>
                {"「ついでに直しておこう」と混在させてしまう"}
              </td>
              <td>
                {" 変更の種類(振る舞いを変えない整理か、機能追加か)を明確に分けてコミットする "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
