import React from 'react';

export default function Practice5() {
  return (
    <div className="practice-block" id="practice-5">
      <h3>
        {"プラクティス5: CLEANなコードを作る"}
      </h3>
      <div className="prose">
        <p>
          {" このプラクティスは、Robert C. Martin(Uncle Bob)の『Clean Code』や Miško Hevery の「Clean Code Talks」といった考え方へのオマージュとして、著者が独自に提唱した"}
          <strong>
            {"CLEAN"}
          </strong>
          {"という頭字語で語られています。 "}
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                {"頭文字"}
              </th>
              <th>
                {"英語"}
              </th>
              <th>
                {"意味するコードの性質"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"C"}
              </td>
              <td>
                {"Cohesive(凝集度が高い)"}
              </td>
              <td>
                {"1つのクラス・関数が1つの明確な責務だけを持つ"}
              </td>
            </tr>
            <tr>
              <td>
                {"L"}
              </td>
              <td>
                {"Loosely Coupled(疎結合)"}
              </td>
              <td>
                {" モジュール同士の依存が最小限で、変更の影響範囲が狭い "}
              </td>
            </tr>
            <tr>
              <td>
                {"E"}
              </td>
              <td>
                {"Encapsulated(カプセル化されている)"}
              </td>
              <td>
                {"内部の実装詳細が外部から隠蔽されている"}
              </td>
            </tr>
            <tr>
              <td>
                {"A"}
              </td>
              <td>
                {"Assertive(自己主張がある)"}
              </td>
              <td>
                {" オブジェクトが自分の責務を自分で果たし、他者に状態を晒しすぎない "}
              </td>
            </tr>
            <tr>
              <td>
                {"N"}
              </td>
              <td>
                {"Nonredundant(重複がない)"}
              </td>
              <td>
                {"同じ意図のロジックが複数箇所に存在しない"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" 1つの関数・クラスが「1つの理由でしか変更されない」状態を意識する "}
          </li>
          <li>
            {" 他のオブジェクトの内部状態を取得して外部で判断するのではなく、振る舞いをそのオブジェクトに委譲する "}
          </li>
          <li>
            {" コピー&ペーストでコードを増やす前に、共通化できないか一度立ち止まる "}
          </li>
        </ul>
      </div>
    </div>
  );
}
