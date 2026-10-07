import React from 'react';

export default function Practice2() {
  return (
    <div className="practice-block" id="practice-2">
      <h3>
        {"プラクティス2: 小さなバッチで作る"}
      </h3>
      <div className="prose">
        <p>
          {" 大きな作業をひとまとめに進めると、フィードバックが得られるまでの時間が長くなり、認識のズレが手遅れになってから発覚します。バッチサイズを小さくすることで、フィードバックサイクルを短縮し、ビルドを高速化し、スコープを管理しやすくすることが狙いです。ストーリーをタスクに分解し、バックログとして管理する考え方もここに含まれます。 "}
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                {"バッチサイズ"}
              </th>
              <th>
                {"フィードバックまでの時間"}
              </th>
              <th>
                {"リスクの発見"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"大きい(数週間〜数か月)"}
              </td>
              <td>
                {"遅い"}
              </td>
              <td>
                {"手遅れになってから発覚しやすい"}
              </td>
            </tr>
            <tr>
              <td>
                {"小さい(数時間〜数日)"}
              </td>
              <td>
                {"速い"}
              </td>
              <td>
                {"早期に軌道修正できる"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
