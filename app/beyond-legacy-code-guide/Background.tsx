import React from 'react';

export default function Background() {
  return (
    <section id="background">
      <p className="section-eyebrow">
        <i className="ti ti-history">
        </i>
        {"BACKGROUND"}
      </p>
      <h2>
        {"この本が生まれた背景"}
      </h2>
      <div className="prose">
        <p>
          {" 書籍の第I部では、ソフトウェア業界が抱える構造的な問題が描かれています。Standish Groupの「CHAOSレポート」など業界調査を引き合いに出しながら、要求を厳密に固めてから作り始めるウォーターフォール型の進め方が、変化の速いソフトウェア開発には適合しにくいことを説明しています。O'Reilly / Pragmatic Bookshelfの公式紹介文でも、壊れたソフトウェアによって年間数百億ドル規模の損失が生まれていると述べられており、著者はアジャイルやスクラムを導入しただけでは根本的な解決にならず、技術面のプラクティスが伴わなければ「レガシーコード」を量産し続けてしまうと指摘しています。 "}
        </p>
        <p>
          {"つまりこの本の主題は、次の2点にあります。"}
        </p>
        <ul>
          <li>
            {" 主として「そもそもレガシーコードを生み出さないためにどう開発するか」 "}
          </li>
          <li>
            {" あわせて「できあがってしまったレガシーコードをどう改善するか」(プラクティス9で扱われる、テストと継ぎ目づくりを土台にしたリファクタリング) "}
          </li>
        </ul>
        <p>
          {" タイトルの「脱却」は、悪くなったコードとの戦い方だけを指すのではなく、悪くなる土壌そのものを断つための考え方に重心を置いたものです。 "}
        </p>
      </div>
      <div className="callout source">
        <p className="callout-title">
          <i className="ti ti-link">
          </i>
          {"出典"}
        </p>
        <p>
          {" CHAOSレポートの発行元である The Standish Group の情報は公式サイトで公開されています。書籍の出版情報は Pragmatic Bookshelf および O'Reilly の公式ページで確認できます(URLは本ガイド末尾の参考情報源を参照)。 "}
        </p>
      </div>
    </section>
  );
}
