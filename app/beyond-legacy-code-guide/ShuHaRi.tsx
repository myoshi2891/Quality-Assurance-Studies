import React from 'react';

export default function ShuHaRi() {
  return (
    <section id="shu-ha-ri">
      <p className="section-eyebrow">
        <i className="ti ti-sparkles">
        </i>
        {"MINDSET"}
      </p>
      <h2>
        {"学び方の姿勢: 守破離"}
      </h2>
      <div className="prose">
        <p>
          {" 書籍の第4章では、9つのプラクティスを身につける過程を、日本の武道・芸事に由来する「守破離(Shu-Ha-Ri)」という考え方になぞらえています。初学者はまずこの3段階を意識すると挫折しにくくなります。 "}
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                {"段階"}
              </th>
              <th>
                {"意味"}
              </th>
              <th>
                {"この本での位置づけ"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"守(Shu)"}
              </td>
              <td>
                {"決められた型を忠実に守る"}
              </td>
              <td>
                {"まずは9つのプラクティスを教科書どおりに実践してみる"}
              </td>
            </tr>
            <tr>
              <td>
                {"破(Ha)"}
              </td>
              <td>
                {"型の背景にある原則を理解し、応用し始める"}
              </td>
              <td>
                {" なぜそのプラクティスが有効なのかを理解し、状況に合わせて調整する "}
              </td>
            </tr>
            <tr>
              <td>
                {"離(Ri)"}
              </td>
              <td>
                {"型から離れ、自分たちに合った形を確立する"}
              </td>
              <td>
                {" チームやプロダクトの文脈に最適化された独自のプラクティスへ発展させる "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="callout note">
        <p className="callout-title">
          <i className="ti ti-bulb">
          </i>
          {"補足"}
        </p>
        <p>
          {" 初学者はまず「守」から始め、理由を理解しないままアレンジを加えないことが推奨されています。 "}
        </p>
      </div>
    </section>
  );
}
