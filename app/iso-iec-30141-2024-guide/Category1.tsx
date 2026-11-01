import React from 'react';
export default function Category1() { return <>
<h2 id="1-この規格を一言でいうと">{"1. この規格を一言でいうと"}</h2>

<p><strong>{"ISO/IEC 30141:2024 は、「IoTシステムを設計するときに共通で使える設計図の\"ひな形\"」を定めた国際規格です。"}</strong></p>

<p>{" ISOの公式概要によると、この規格は「共通の語彙」「再利用できる設計」「業界のベストプラクティス」を使ったIoT参照アーキテクチャを提供します。進め方は"}<strong>{"トップダウン"}</strong>{"です。 "}</p>

<ol type="1"><li>{"IoTの最も重要な特徴を集める"}</li><li>{"それを「基礎となるビュー」として抽象化する"}</li><li>{"さらに5つのビュー（構築ビューを含む）を示す"}</li><li>{" 構築ビューでは、IoTシステムを作るためのアーキテクチャ／設計パターンを提供する "}</li></ol>

<p>{" つまり「IoTって何？」から「実際にどう作る？」までを、"}<strong>{"1本の筋道でつなぐ"}</strong>{"のがこの規格の役割です。 "}</p>

<h3 id="この規格がやらないこと">{"この規格が\"やらないこと\""}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"やること"}</th><th>{"やらないこと"}</th></tr></thead><tbody><tr className="odd"><td>{"IoTの共通語彙・考え方・構造のひな形を示す"}</td><td>{"特定製品・特定ベンダーの実装方法を決める"}</td></tr><tr className="even"><td>{"設計者が参考にする抽象的な機能や構造を示す"}</td><td>{"認証（適合性証明）を発行する（※後述）"}</td></tr><tr className="odd"><td>{"領域別の参照アーキテクチャ（DSRA）の土台になる"}</td><td>{"個々のユースケースの詳細設計を網羅する"}</td></tr></tbody></table></div>

<hr />
</>; }
