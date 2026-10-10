import React from 'react';

export default function References() {
  return (
    <section id="references">
      <p className="section-eyebrow">
        <i className="ti ti-books">
        </i>
        {"SOURCES"}
      </p>
      <h2>
        {"参考情報源(URL付き)"}
      </h2>
      <div className="prose">
        <p>
          {" 本ガイドの作成にあたり参照した情報源です。原著の目次・書誌情報に加え、アジャイル・開発コミュニティの記事や、日本語版に関わる情報源をあわせて掲載しています。 "}
        </p>
      </div>
      <div className="ref-group">
        <h3>
          {"公式・出版元の情報"}
        </h3>
        <ul className="ref-list">
          <li>
            <a href="https://www.oreilly.com/library/view/beyond-legacy-code/9781680501827/" target="_blank" rel="noopener noreferrer">
              {"O'Reilly ― 原著の目次・概要ページ"}
            </a>
            <span className="ref-note">
              {"原著の詳細目次を確認できる。"}
            </span>
          </li>
          <li>
            <a href="https://pragprog.com/titles/dblegacy/beyond-legacy-code/" target="_blank" rel="noopener noreferrer">
              {"Pragmatic Bookshelf 公式ページ"}
            </a>
            <span className="ref-note">
              {"原著出版元。詳細目次と概要が掲載されている。"}
            </span>
          </li>
          <li>
            <a href="https://www.oreilly.com/library/view/9/9784873118864/" target="_blank" rel="noopener noreferrer">
              {"O'Reilly Japan 日本語版書誌ページ"}
            </a>
            <span className="ref-note">
              {"『レガシーコードからの脱却』日本語版の書誌情報。"}
            </span>
          </li>
          <li>
            <a href="https://www.standishgroup.com/" target="_blank" rel="noopener noreferrer">
              {"The Standish Group 公式サイト"}
            </a>
            <span className="ref-note">
              {"本文で言及したCHAOS Reportの発行元。"}
            </span>
          </li>
        </ul>
      </div>
      <div className="ref-group">
        <h3>
          {"コミュニティ・書評"}
        </h3>
        <ul className="ref-list">
          <li>
            <a href="https://agilealliance.org/resources/books/beyond-legacy-code/" target="_blank" rel="noopener noreferrer">
              {"Agile Alliance 書籍紹介ページ"}
            </a>
            <span className="ref-note">
              {"アジャイル団体による書籍紹介。"}
            </span>
          </li>
          <li>
            <a href="https://theagilerevolution.com/2019/10/07/episode-171-beyond-legacy-code-with-david-bernstein/" target="_blank" rel="noopener noreferrer">
              {"The Agile Revolution ポッドキャスト 第171回"}
            </a>
            <span className="ref-note">
              {"Craig Smith氏が著者David Bernstein本人にインタビュー。"}
            </span>
          </li>
          <li>
            <a href="https://christiantietze.de/posts/2015/09/clean-code/" target="_blank" rel="noopener noreferrer">
              {"Christian Tietze氏のブログ"}
            </a>
            <span className="ref-note">
              {"CLEANコード頭字語の紹介記事。"}
            </span>
          </li>
          <li>
            <a href="https://www.numerickly.com/2021/08/23/beyond-legacy-code-by-david-scott-bernstein-review-and-summary/" target="_blank" rel="noopener noreferrer">
              {"Numerickly ― 書評と要約記事"}
            </a>
          </li>
          <li>
            <a href="https://www.goodreads.com/author_blog_posts/18772891-share-common-quality-practices?tab=book" target="_blank" rel="noopener noreferrer">
              {"著者David Scott Bernstein自身によるCLEANコード解説記事"}
            </a>
            <span className="ref-note">
              {"Goodreads author blog。"}
            </span>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/26088456-beyond-legacy-code" target="_blank" rel="noopener noreferrer">
              {"Goodreads 書籍ページ"}
            </a>
            <span className="ref-note">
              {"読者による書評、CLEAN頭字語へのコメントを含む。"}
            </span>
          </li>
        </ul>
      </div>
      <div className="ref-group">
        <h3>
          {"日本語の情報源"}
        </h3>
        <ul className="ref-list">
          <li>
            <a href="https://www.attractor.co.jp/book/beyond-legacy-code/" target="_blank" rel="noopener noreferrer">
              {"株式会社アトラクタ ― 書籍紹介ページ"}
            </a>
            <span className="ref-note">
              {"日本語版訳者の一人 吉羽龍太郎氏が代表を務める会社による紹介。"}
            </span>
          </li>
          <li>
            <a href="https://irof.hateblo.jp/entry/2019/10/02/012433" target="_blank" rel="noopener noreferrer">
              {"irof氏のブログ ― 書評"}
            </a>
            <span className="ref-note">
              {"日本語コミュニティによる書評記事。"}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
