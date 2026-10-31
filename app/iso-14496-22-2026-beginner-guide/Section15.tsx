import React from 'react';

export default function Section15() {
  return (
    <section className="chapter" id="ch15">
      <h2 id="ch15-h">15. 根拠ソース一覧（URL）</h2>
      <p>
        このガイドで使った情報源です。基準日
        2026年10月13日までに確認できたものを挙げています。
      </p>
      <h3 id="15-1-規格の公式情報">15-1. 規格の公式情報</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>用途</th>
              <th>ソース</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>規格ページ（版・日付・要約・ライフサイクル）</td>
              <td>ISO</td>
              <td>
                <a
                  href="https://www.iso.org/standard/14496-22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.iso.org/standard/14496-22
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>試し読み（目次の一部）</td>
              <td>ANSI Webstore のプレビュー</td>
              <td>
                <a
                  href="https://webstore.ansi.org/standards/iso/isoiec14496222026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://webstore.ansi.org/standards/iso/isoiec14496222026
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>Microsoft OpenType 1.9.1 仕様書</td>
              <td>Microsoft Learn</td>
              <td>
                <a
                  href="https://learn.microsoft.com/en-us/typography/opentype/spec/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://learn.microsoft.com/en-us/typography/opentype/spec/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="15-2-実装関連の一次情報chrome・rust・harfbuzz">
        15-2. 実装関連の一次情報（Chrome・Rust・HarfBuzz）
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>用途</th>
              <th>ソース</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Chrome 98（COLRv1 の導入と狙い）</td>
              <td>developer.chrome.com</td>
              <td>
                <a
                  href="https://developer.chrome.com/blog/colrv1-fonts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developer.chrome.com/blog/colrv1-fonts
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>Chrome 128（Fontations の実験的導入）</td>
              <td>developer.chrome.com</td>
              <td>
                <a
                  href="https://developer.chrome.com/blog/chrome-128-beta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developer.chrome.com/blog/chrome-128-beta
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>Chrome 133（Web フォントでの有効化）</td>
              <td>developer.chrome.com</td>
              <td>
                <a
                  href="https://developer.chrome.com/blog/chrome-133-beta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developer.chrome.com/blog/chrome-133-beta
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>Chrome 136（システムフォントでの有効化）</td>
              <td>Chromium bugs / commits</td>
              <td>
                <a
                  href="https://issues.chromium.org/issues/40228383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://issues.chromium.org/issues/40228383
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>Chrome 145（FreeType の削除計画）</td>
              <td>Chromium source tree</td>
              <td>
                <a
                  href="https://chromium.googlesource.com/chromium/src/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://chromium.googlesource.com/chromium/src/
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>Fontations（Google Fonts の Rust 製フォント基盤）</td>
              <td>GitHub（googlefonts/fontations）</td>
              <td>
                <a
                  href="https://github.com/googlefonts/fontations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/googlefonts/fontations
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>fontc（Rust 製フォントコンパイラ）</td>
              <td>Google Fonts</td>
              <td>
                <a
                  href="https://pypi.org/project/fontc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pypi.org/project/fontc/
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>HarfBuzz（README・2026年の資料への案内）</td>
              <td>Behdad Esfahbod、Khaled Hosny ほか</td>
              <td>
                <a
                  href="https://github.com/harfbuzz/harfbuzz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/harfbuzz/harfbuzz
                </a>
              </td>
            </tr>
            <tr className="odd">
              <td>HarfBuzz とは何か（ユーザーマニュアル）</td>
              <td>HarfBuzz プロジェクト</td>
              <td>
                <a
                  href="https://harfbuzz.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://harfbuzz.github.io
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>HarfBuzz の解説記事（Behdad Esfahbod の見解を紹介）</td>
              <td>LWN.net</td>
              <td>
                <a
                  href="https://lwn.net/Articles/741722/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://lwn.net/Articles/741722/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="15-3-参考二次情報">15-3. 参考（二次情報）</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>内容</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>HarfBuzz 13.0.1 の更新（Pillow の PR）</td>
              <td>
                <a
                  href="https://github.com/python-pillow/Pillow/pull/9453"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/python-pillow/Pillow/pull/9453
                </a>
              </td>
            </tr>
            <tr className="even">
              <td>SkiaSharp 4.150.0（HarfBuzz 14.2.1 を同梱）</td>
              <td>
                <a
                  href="https://mono.github.io/SkiaSharp/staging/4372/docs/releases/4.150.0.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://mono.github.io/SkiaSharp/staging/4372/docs/releases/4.150.0.html
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="15-4-未確認事項再掲">15-4. 未確認事項（再掲）</h3>
      <ul>
        <li>第5版の最終本文と OpenType 1.9.1 の差分の一覧</li>
        <li>
          第5版で新たに加わった具体的な条項（公開情報からは特定できていません）
        </li>
        <li>ISO ストアの最新の価格表示</li>
      </ul>
      <p>厳密な内容が必要な場合は、ISO から規格本文を入手して確認してください。</p>
    </section>
  );
}

