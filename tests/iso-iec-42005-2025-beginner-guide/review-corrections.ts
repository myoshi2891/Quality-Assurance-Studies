/** Reviewed comparison correction; archived sources and fixed inventory remain unchanged.
 * Evidence: ISO/IEC 23894:2023, 6.4.2.6 and 6.4.3.2 (BBSQ public review copy):
 * https://bbsq.bs/wp-content/uploads/2026/03/DBNS-ISO_IEC-23894-with-Cover-Page-Final.pdf
 * ISO scope and purpose: https://www.iso.org/standard/77304.html
 * Impact-assessment focus: https://www.iso.org/standard/42005
 */
export function applyReviewCorrections(html: string): string {
    const corrections: readonly (readonly [string, string])[] = [
    [
        "この規格の本体は、2つの柱でできています。",
        "ISO/IEC 42005は、本体も附属書も影響評価を支援する手引きであり、必須の要求事項を定める規格ではありません。本体は、プロセスと文書化の2つの柱で構成されます。第5章は、組織がプロセスを設計・実施する際に検討できる要素を示しています。影響評価プロセスの確立や実施に関するISO/IEC 42001の要求事項とは区別してください。"
    ],
    [
        "たとえば、料理にたとえると、第5章は「レシピと台所のルール（誰が、いつ、どの手順で作るか）」、第6章は「出来上がった料理の成分表示ラベル」です。両方そろって、はじめて他人に説明できます。",
        "たとえば料理にたとえると、第5章は「レシピや台所の運用を考えるための手引き」、第6章は「料理の内容を説明する記録の手引き」です。組織の状況に合わせて両方を活用します。"
    ],
    [
        "第5章：プロセスの設計と運用に関する十二の節",
        "第5章：プロセスの設計と運用で検討できる要素を扱う十二の節"
    ],
    [
        "附属書：参考情報（informative）で、本体ほど拘束力のある位置づけではない",
        "附属書：参考情報（informative）として本体の手引きを補足する。本体も必須の要求事項ではない"
    ],
    [
        "normative（規定）：守るべき内容を定める部分",
        "normative（規定）：規格の適用に関係する規定を示す区分。ISO/IEC 42005の本体を必須の要求事項にするという意味ではない"
    ],
    [
        "【規格】LinkedIn上の実務者の投稿（2025年5月28日付）は、42001の6.1.4に、「影響評価の結果をリスク評価で考慮する」という趣旨の文があることを指摘し、影響評価はリスク評価の代わりにはならないと注意しています。また、A.5の管理策は、組織の適用宣言書（SoA）で採用するかどうかを選べる、と述べています。",
        "【規格】LinkedIn上の実務者の投稿（2025年5月28日付）は、42001の6.1.4に、「影響評価の結果をリスク評価で考慮する」という趣旨の文があることを指摘し、影響評価はリスク評価の代わりにはならないと注意しています。また、ISO/IEC 42001の6.1.3に従い、組織は選択したリスク対応に必要な管理策を決定し、附属書Aと照合して必要な管理策の見落としを確認します。適用宣言書（SoA）には必要な管理策を含め、管理策の採用・除外の理由を示す必要があります。A.5もこの判断の対象ですが、リスク対応に必要な管理策を任意に省略できるという意味ではありません。"
    ],
    [
        "Applicability（SoA）：採用する管理策と、その理由を宣言する書類",
        "Applicability（SoA）：必要な管理策と、管理策の採用・除外の理由を示す書類"
    ]
,
    [
        "23894：組織にとってのリスクを扱う",
        "23894：組織がAI関連のリスクを管理する。個人・集団・社会への結果も考慮する"
    ],
    [
        "42005：外向き（人と社会）の影響を扱う",
        "42005：個人・集団・社会への影響を具体的に調べ、評価して記録する"
    ],
    [
        "【解説】42001は、AIリスク評価（6.1.2）とAIシステム影響評価（6.1.4）を別々のプロセスとして置いています。公開されている実務者の解説では、リスク評価は「組織にとってのリスク」を内向きに見るもの、影響評価は「個人・集団・社会への影響」を外向きに見るもの、と整理されています。",
        "【解説】42001は、AIリスク評価（6.1.2）とAIシステム影響評価（6.1.4）を別々のプロセスとして置いています。区別する軸は評価の目的と焦点です。ISO/IEC 23894のリスク評価でも、組織への結果に加えて個人・集団・社会への結果を考慮します（6.4.2.6、6.4.3.2）。リスク評価はAI関連のリスクを特定・分析・評価して対応の判断につなげること、影響評価はAIシステムと予見可能な用途が人や社会にもたらす便益・害を具体的に把握・評価・記録することに重点を置きます。両者は対象が重なり、評価結果を相互に活用できます。"
    ],
    [
        "見る方向",
        "目的と焦点"
    ],
    [
        "内向き。組織への影響",
        "AI関連のリスクを特定・分析・評価し、対応を判断する。個人・集団・社会への結果も対象"
    ],
    [
        "外向き。人、集団、社会への影響",
        "AIシステムと予見可能な用途による人・集団・社会への便益・害を把握・評価・記録する"
    ],
    [
        "規制違反による罰金、評判の低下",
        "差別的な判定の可能性・重大性を評価し、対応の優先度を判断する"
    ],
    [
        "特定の属性の人が不利な判定を受けること",
        "不利な判定を受ける集団や生活への影響、便益の分配を調べて記録する"
    ],
    [
        "たとえ話をすると、リスク評価は「会社の健康診断」、影響評価は「商品が周りの人の健康に与える影響の調査」に近いです。",
        "たとえば同じ差別的な判定を扱う場合でも、リスク評価はリスクの大きさと対応の優先度の判断、影響評価は誰にどのような便益・害が及ぶかの把握と記録に焦点を当てます。「組織だけを見る評価」と「人や社会だけを見る評価」に切り分けるものではありません。"
    ],
    [
        "リスク評価と影響評価は、それぞれどちらの方向を見るか",
        "リスク評価と影響評価は、目的と焦点がどう異なり、対象がどこで重なるか"
    ]
];
    return corrections.reduce((text, [before, after]) => text.replace(before, after), html);
}

/** Restricted uses stop at the restriction outcome unless an exception is approved. */
export const ASSESSMENT_EDGES = [
    {from:'Q1',to:'Q3',label:'',dotted:false},
    {from:'Q3',to:'F2',label:'はい',dotted:false},
    {from:'F2',to:'Q2',label:'例外承認あり',dotted:false},
    {from:'Q3',to:'Q2',label:'いいえ',dotted:false},
    {from:'Q2',to:'F1',label:'はい',dotted:false},
    {from:'Q2',to:'Q4',label:'いいえ',dotted:false},
    {from:'Q4',to:'F1',label:'はい',dotted:false},
    {from:'Q4',to:'F3',label:'いいえ',dotted:false},
];
export function reviewedDiagram<T extends {renderSource:string;description:string;nodes:{id:string;text:string}[];edges:{from:string;to:string;label:string;dotted:boolean}[]}>(diagram:T,index:number) {
    if(index!==6)return diagram;
    const definitions=diagram.renderSource.split('\n').filter(line=>!line.includes(' -->'));
    return {...diagram,renderSource:[...definitions,...ASSESSMENT_EDGES.map(e=>`${e.from} -->${e.label?'|'+e.label+'|':''} ${e.to}`)].join('\n'),edges:ASSESSMENT_EDGES,
        description:ASSESSMENT_EDGES.map(e=>`${diagram.nodes.find(n=>n.id===e.from)!.text} → ${diagram.nodes.find(n=>n.id===e.to)!.text}${e.label?'（'+e.label+'）':''}。`).join('')};
}
