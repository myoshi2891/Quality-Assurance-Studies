import React from 'react';
import Diagram from './Diagram';

/** 5. Step 1：生体認証の基礎を押さえる — preserve the complete original category. */
export default function Section06() {
  return <>
<h2 id={"s9"}>{"5. Step 1：生体認証の基礎を押さえる"}</h2>
{"\n"}
<h3 id={"s10"}>{"5.1 生体認証とは"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"生体認証（biometric recognition）は、人の"}<strong>{"身体的・行動的特徴"}</strong>{"から個人を自動的に認識する仕組みです。パスワードやIDカードのように「覚える・持ち歩く」必要がない点が利点として挙げられています。"}</p>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"利用場面の例として、国境管理、有権者認証、法執行、各種アクセス制御（コンピュータ、個人デバイス、建物、イベント会場）が挙げられています。"}</p>
{"\n"}
<h3 id={"s11"}>{"5.2 本編の用語（3.1節の主要用語）"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"用語は ISO/IEC 2382-37:2022 や ISO/IEC 19795-1:2021 を出典としています。以下は初学者向けに言い換えたものです。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s11"}><table><thead><tr className={"header"}><th>{"用語"}</th><th>{"初学者向けの意味"}</th><th>{"具体例"}<span className={"tag tag-ex"}>{"例示"}</span></th></tr></thead><tbody><tr className={"odd"}><td>{"biometric characteristic（生体特性）"}</td><td>{"識別に使える身体・行動の特徴"}</td><td>{"指紋、顔、虹彩、静脈、署名の動き"}</td></tr><tr className={"even"}><td>{"biometric sample（生体サンプル）"}</td><td>{"特徴抽出の前の画像・音声などの記録"}</td><td>{"指の画像ファイル"}</td></tr><tr className={"odd"}><td>{"biometric feature（生体特徴量）"}</td><td>{"サンプルから取り出した、比較に使う数値・ラベル"}</td><td>{"指紋の特徴点の集合"}</td></tr><tr className={"even"}><td>{"biometric template（テンプレート）"}</td><td>{"比較用に保存された特徴量の集合"}</td><td>{"登録済みの特徴点データ"}</td></tr><tr className={"odd"}><td>{"biometric reference（登録データ）"}</td><td>{"登録時に保存されるサンプル・テンプレート・モデル"}</td><td>{"パスポートのICチップ内の顔画像"}</td></tr><tr className={"even"}><td>{"biometric probe（照合データ）"}</td><td>{"今回の照合で入力される側のデータ"}</td><td>{"ゲートで撮った顔画像"}</td></tr><tr className={"odd"}><td>{"comparison（比較）"}</td><td>{"probeとreferenceの間の類似度または非類似度を推定・計算・測定すること"}</td><td>{"類似度スコアまたは距離スコアの算出"}</td></tr><tr className={"even"}><td>{"decision policy（判定ポリシー）"}</td><td>{"比較結果を「一致／不一致／判定不能」にするルール。しきい値を含むことが多い"}</td><td>{"スコア ≥ 0.80 なら一致"}</td></tr><tr className={"odd"}><td>{"verification（検証／1:1）"}</td><td>{"「私はAです」という申告をreferenceと照合して確認する"}</td><td>{"スマホの顔ロック解除"}</td></tr><tr className={"even"}><td>{"identification（識別／1:N）"}</td><td>{"データベース全体から該当者を探す"}</td><td>{"犯罪捜査の照合"}</td></tr><tr className={"odd"}><td>{"multi-modal system（ISO/IEC 2382-37 の定義）"}</td><td>{"生体特性・センサ・処理方法の3つの観点のうち、少なくとも2つで複数の種類を使うシステム"}</td><td>{"顔＋指紋"}</td></tr><tr className={"even"}><td>{"multi-modal biometric system（TR 29119-13 3.1.31）"}</td><td>{"複数の生体特性を使う生体認証システム"}</td><td>{"顔と指紋の両方で照合する入退室ゲート"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p><strong>{"用語の注意点:"}</strong>{" "}<span className={"tag tag-tr"}>{"TR確認済"}</span>{"非推奨とされるのは、「比較する」「判定する」という意味で使う"}<strong>{"動詞の「match（マッチさせる）」"}</strong>{" です。この意味では "}<strong>{"compare（比較する）"}</strong>{" を使うのが推奨です。一方、"}<strong>{"名詞の「match」"}</strong>{" は「比較の結果、一致と判定されたこと（肯定的な比較結果）」を表す用語として使われます。また verification の旧称 authentication も非推奨扱いです。会話では「マッチング」と言いがちですが、規格文書を読むときはこの用語の違いに注意してください。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s12"}>{"5.3 生体認証システムの基本フロー"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-gen"}>{"一般知識"}</span>{"多くの生体認証システムは「登録（enrolment）」と「認識（recognition）」の2つのフェーズで動きます。TRの6.2.2節にも「Biometric enrolment and recognition」という節があります。"}</p>
{"\n"}
<figure className={"diagram"}><Diagram index={3} />{"\n"}</figure>
{"\n"}
<hr />
{"\n"}
  </>;
}
