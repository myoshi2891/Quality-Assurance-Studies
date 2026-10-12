import React from 'react';

export default function Section7() {
  return (
    <section>
      <h2 id="7-出典参考ソース">7. 出典・参考ソース</h2>
      <div className="table-scroll">
        <table className="data-table">
          <caption>出典・参考ソース一覧</caption>
          <thead>
            <tr className="header">
              <th>資料名</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ISTQB CTAL-TAE v2.0 認定試験ページ（公式）</td>
              <td>
                <a
                  href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>
                ISTQB CTAL-TAE Syllabus v2.0（シラバスPDF・第3章 Test Automation Architecture,
                p.22-28 が本ガイドの主な出典）
              </td>
              <td>
                <a
                  href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                Robert C. Martin,{' '}
                <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>
                （クリーンコード原則の引用元としてシラバス内で言及）
              </td>
              <td>
                <a
                  href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.oreilly.com/library/view/clean-code-a/9780136083238/
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>
                ISO/IEC/IEEE 29119-5（キーワード駆動テストに関する標準。シラバスが参照するのは2016年版、リンク先は現行の2024年版）
              </td>
              <td>
                <a
                  href="https://www.iso.org/standard/87233.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.iso.org/standard/87233.html
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                ISTQB Certified Tester Model-Based Testing (CT-MBT)
                Syllabus（テスト生成・モデルベーステストの詳細）
              </td>
              <td>
                <a
                  href="https://istqb.org/certifications/model-based-tester/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://istqb.org/certifications/model-based-tester/
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>ISTQB Glossary（gTAA・TAF・TAS等の用語定義の一次情報）</td>
              <td>
                <a
                  href="https://glossary.istqb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://glossary.istqb.org/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
