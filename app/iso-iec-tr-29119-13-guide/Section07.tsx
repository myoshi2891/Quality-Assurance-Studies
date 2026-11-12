import React from 'react';
import Diagram from './Diagram';

/** 6. Step 2：生体認証特有の性能指標を理解する — preserve the complete original category. */
export default function Section07() {
  return <>
<h2 id={"s13"}>{"6. Step 2：生体認証特有の性能指標を理解する"}</h2>
{"\n"}
<p>{"TRの本編6.1.3節は「Performance measures for biometric systems」を扱います。用語定義（3.1節）で確認できる主要指標を整理します。"}</p>
{"\n"}
<h3 id={"s14"}>{"6.1 誤りの種類と指標"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s14"}><table><thead><tr className={"header"}><th>{"指標"}</th><th>{"正式名称"}</th><th>{"意味（言い換え）"}</th><th>{"分母"}</th></tr></thead><tbody><tr className={"odd"}><td><strong>{"FMR"}</strong></td><td>{"False Match Rate（他人受入率・比較レベル）"}</td><td>{"本人でない組の比較のうち、誤って一致と判断された割合"}</td><td>{"完了した非同一人物（non-mated）比較の試行数"}</td></tr><tr className={"even"}><td><strong>{"FNMR"}</strong></td><td>{"False Non-Match Rate（本人拒否率・比較レベル）"}</td><td>{"同一人物（mated）の比較のうち、誤って不一致と判断された割合"}</td><td>{"完了した同一人物比較の試行数"}</td></tr><tr className={"odd"}><td><strong>{"FAR"}</strong></td><td>{"False Accept Rate"}</td><td>{"偽の本人申告（verification）が誤って受け入れられた割合"}</td><td>{"偽の申告のverification取引数"}</td></tr><tr className={"even"}><td><strong>{"FRR"}</strong></td><td>{"False Reject Rate"}</td><td>{"正しい本人申告が誤って拒否された割合"}</td><td>{"正しい申告のverification取引数"}</td></tr><tr className={"odd"}><td><strong>{"FNIR"}</strong></td><td>{"False-Negative Identification Rate"}</td><td>{"登録者がidentificationしたのに、正しい識別子が返らなかった割合"}</td><td>{"登録者のidentification取引数"}</td></tr><tr className={"even"}><td><strong>{"FPIR"}</strong></td><td>{"False-Positive Identification Rate"}</td><td>{"未登録者のidentificationで、何らかの識別子が返ってしまった割合"}</td><td>{"未登録者のidentification取引数"}</td></tr><tr className={"odd"}><td><strong>{"FTE"}</strong></td><td>{"Failure to Enrol"}</td><td>{"登録方針上の対象者について、生体登録データを作成・保存できなかった"}<strong>{"事象"}</strong>{"（登録対象外の人を登録しないことは含まない）"}</td><td>{"—"}</td></tr><tr className={"even"}><td><strong>{"FTER"}</strong></td><td>{"Failure-to-Enrol Rate"}</td><td>{"登録取引のうち FTE となった"}<strong>{"割合"}</strong></td><td>{"登録取引数"}</td></tr><tr className={"odd"}><td><strong>{"FTA"}</strong></td><td>{"Failure to Acquire"}</td><td>{"比較に使えるサンプルを取得できなかった"}<strong>{"事象"}</strong></td><td>{"—"}</td></tr><tr className={"even"}><td><strong>{"FTAR"}</strong></td><td>{"Failure-to-Acquire Rate"}</td><td>{"取得処理のうち FTA となった"}<strong>{"割合"}</strong></td><td>{"取得処理数"}</td></tr><tr className={"odd"}><td><strong>{"FTC"}</strong></td><td>{"Failure to Capture"}</td><td>{"キャプチャ処理自体がサンプルを出力できなかったこと"}</td><td>{"—"}</td></tr><tr className={"even"}><td><strong>{"Throughput rate"}</strong></td><td>{"スループット"}</td><td>{"単位時間に処理できる人数"}</td><td>{"—"}</td></tr><tr className={"odd"}><td><strong>{"DET"}</strong></td><td>{"Detection Error Trade-off"}</td><td>{"しきい値を動かしたときの誤拒否と誤受入のトレードオフ関係"}</td><td>{"—"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p><strong>{"FMR/FNMR と FAR/FRR の違い（初学者がつまずくポイント）"}</strong>{" FMR/FNMR は「"}<strong>{"1回の比較"}</strong>{"」レベルの誤り率、FAR/FRR は「"}<strong>{"取引（transaction）"}</strong>{"」レベルの誤り率です。取引は複数回のキャプチャ試行を含みうるため、両者は一致しません。さらに FTA/FTE の扱いによって値が変わります。"}<span className={"tag tag-tr"}>{"TR確認済"}</span>{"用語定義では「完了した（completed）比較」のみを分母とし、判定不能（failure to decide）は除外すると注記されています。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s15"}>{"6.2 しきい値のトレードオフ"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"FMRとFNMRの値は、しきい値や比較プロセスのパラメータ、試験プロトコルに依存します。"}</p>
{"\n"}
<blockquote>{"\n"}<p><strong>{"注:"}</strong>{" 次の図は、"}<strong>{"スコアが高いほど類似度が高い"}</strong>{"（類似度スコア）システムを前提にしています。距離スコア（値が小さいほど似ている）を使うシステムでは、しきい値を上げ下げしたときの FMR・FNMR への効果が逆になる場合があります。"}</p>{"\n"}</blockquote>
{"\n"}
<figure className={"diagram"}><Diagram index={4} />{"\n"}</figure>
{"\n"}
<h3 id={"s16"}>{"6.3 計算例"}<span className={"tag tag-ex"}>{"例示"}</span></h3>
{"\n"}
<p>{"ある顔認証システムの評価で、次の結果が得られたとします。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s16"}><table><thead><tr className={"header"}><th>{"項目"}</th><th>{"値"}</th></tr></thead><tbody><tr className={"odd"}><td>{"本人同士の比較（mated）回数"}</td><td>{"2,000"}</td></tr><tr className={"even"}><td>{"そのうち誤って不一致"}</td><td>{"30"}</td></tr><tr className={"odd"}><td>{"他人同士の比較（non-mated）回数"}</td><td>{"1,000,000"}</td></tr><tr className={"even"}><td>{"そのうち誤って一致"}</td><td>{"50"}</td></tr><tr className={"odd"}><td>{"登録試行"}</td><td>{"500"}</td></tr><tr className={"even"}><td>{"登録失敗"}</td><td>{"10"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<p>{"計算は次のとおりです。"}</p>
{"\n"}
<ul>{"\n"}<li><strong>{"FNMR"}</strong>{" = 30 ÷ 2,000 = "}<strong>{"1.5 %"}</strong></li>{"\n"}<li><strong>{"FMR"}</strong>{" = 50 ÷ 1,000,000 = "}<strong>{"0.005 %"}</strong>{"（= 5 × 10⁻⁵）"}</li>{"\n"}<li><strong>{"FTER"}</strong>{" = 10 ÷ 500 = "}<strong>{"2.0 %"}</strong></li>{"\n"}</ul>
{"\n"}
<p><strong>{"読み解き:"}</strong>{" この例ではFMRは低い（他人は通しにくい）ものの、FNMRが1.5%、FTERが2.0%あり、「本人が弾かれる」「そもそも登録できない」体験の悪さがリスクとして残ります。"}<strong>{"FMRだけを見て合格にすると、ユーザビリティや運用面のリスクを見逃します。"}</strong>{" これがこのTRの主張（性能だけでなく全品質特性を見る）につながります。"}</p>
{"\n"}
<h3 id={"s17"}>{"6.4 サンプルサイズの考え方"}<span className={"tag tag-gen"}>{"一般知識"}</span></h3>
{"\n"}
<p>{"誤り率を統計的に主張するには十分な試行数が必要です。有名な目安として「"}<strong>{"3の法則（rule of 3）"}</strong>{"」があります。N回の独立な試行でエラーが0件だった場合、95%信頼上限はおよそ 3/N です。たとえばFMRが 10⁻⁴ 以下であると95%信頼で主張したければ、独立な比較がおよそ30,000回必要です。ただし、同じ被験者由来の比較は独立でないため、実際は被験者数・被験者の多様性も重要になります。詳細な試験設計はISO/IEC 19795-1/-2に委ねられます。"}</p>
{"\n"}
<hr />
{"\n"}
  </>;
}
