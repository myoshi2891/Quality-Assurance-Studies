import React from 'react';

export default function Practice7() {
  return (
    <div className="practice-block" id="practice-7">
      <h3>
        {"プラクティス7: テストで振る舞いを明示する"}
      </h3>
      <div className="prose">
        <p>
          {" テストを単なる動作確認の手段ではなく、"}
          <strong>
            {"仕様書(Specification)"}
          </strong>
          {"として扱う考え方です。テスト名は実装の詳細ではなく期待される振る舞いを表すべきであり、テストは網羅的かつ一意であるべきだとされています。「バグが見つかる」ということは、その振る舞いを保証するテストが存在しなかったことの裏返しである、という捉え方も紹介されています。 "}
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                {"悪いテスト名の例"}
              </th>
              <th>
                {"良いテスト名の例"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"test_constructor"}
              </td>
              <td>
                {"生成直後は初期値が0になっていることを確認する"}
              </td>
            </tr>
            <tr>
              <td>
                {"test_case1"}
              </td>
              <td>
                {"在庫が0のとき注文を拒否することを確認する"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
