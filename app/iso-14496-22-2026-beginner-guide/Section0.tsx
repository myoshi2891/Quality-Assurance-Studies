import React from 'react';

export default function Section0() {
  return (
    <section className="chapter" id="ch0">
      <h2 id="ch0-h">
        0. このガイドの読み方と、調査の限界（先に必ず読んでください）
      </h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、このガイドが「何を根拠に」「どこまで確認できているか」を最初に示します。規格の解説では、根拠の範囲を知っておくと、後の説明を正しく受け取れます。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ最初に書くのか：</strong>ISO
        規格の本文は有料で、著作権上の制約もあります。私が直接読めたのは ISO
        の公式ページ、試し読み（プレビュー）の目次、そして規格と内容がほぼ連動している
        Microsoft の OpenType 仕様書（OpenType 1.9.1）です。
        <strong>規格本文の全文は確認できていません。</strong>
        そのため、条項番号を引用するような書き方は避け、「公開情報から確認できる事実」と「そこからの解説」を分けて書いています。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>区分</th>
              <th>このガイドでの扱い</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ISO 公式ページの記載（版・日付・ページ数・要約）</td>
              <td>事実として記載</td>
            </tr>
            <tr className="even">
              <td>Microsoft OpenType 1.9.1 仕様書の記載</td>
              <td>
                事実として記載（ISO
                第5版の「作業草案」を取り込んだ版と明記されている）
              </td>
            </tr>
            <tr className="odd">
              <td>Chrome・HarfBuzz・Fontations 関連の公開記事</td>
              <td>実装の現状として記載</td>
            </tr>
            <tr className="even">
              <td>第5版の最終本文と OpenType 1.9.1 の差分</td>
              <td><strong>未確認</strong>（購入して照合が必要）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>章</th>
              <th>内容</th>
              <th>読み方の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>1〜3</td>
              <td>全体像と規格の位置づけ</td>
              <td>まずここだけでも読む</td>
            </tr>
            <tr className="even">
              <td>4〜8</td>
              <td>ファイルの中身と表示までの流れ</td>
              <td>仕組みの理解</td>
            </tr>
            <tr className="odd">
              <td>9〜11</td>
              <td>可変フォント・カラー・日本語</td>
              <td>応用機能</td>
            </tr>
            <tr className="even">
              <td>12〜15</td>
              <td>実装・テスト・まとめ・根拠URL</td>
              <td>実務への接続</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>OpenType</dt>
            <dd>
              Microsoft と Adobe が作ったフォント形式の名前。ISO 14496-22
              と中身がほぼ対応している
            </dd>
          </div>
          <div className="g">
            <dt>プレビュー</dt>
            <dd>
              ISO が無料で公開している、規格の表紙と目次などの試し読み
            </dd>
          </div>
          <div className="g">
            <dt>作業草案（Working Draft）</dt>
            <dd>正式発行の前に作られる、まだ確定していない文書</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
