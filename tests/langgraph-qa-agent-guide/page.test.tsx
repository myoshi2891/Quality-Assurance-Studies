import { afterAll, beforeAll, afterEach, describe, expect, it } from 'bun:test';
import React from 'react';
import mermaid from 'mermaid';
let originalRender: typeof mermaid.render;
beforeAll(() => {
    originalRender = mermaid.render;
    mermaid.render = async () => ({
        svg: '<svg></svg>',
        diagramType: 'flowchart',
        bindFunctions: undefined,
    });
});
afterAll(() => {
    mermaid.render = originalRender;
});
import { cleanup, render } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/langgraph-qa-agent-guide.json';
import { source, signature } from './source';
afterEach(cleanup);
async function page() {
    const { default: Page } = await import('../../app/langgraph-qa-agent-guide/page');
    return render(<Page />);
}
describe('foundation', () => {
    it('preserves the complete ordered source inventory', () => {
        for (const selector of [
            'h1,h2,h3,h4',
            '.sidebar nav a',
            '.diagram-wrap',
            'table',
            'pre code',
            '.callout,.summary-card,blockquote',
            '.ref-item',
        ])
            expect(
                [...source.querySelectorAll(selector)].map((el) => ({
                    tag: el.tagName.toLowerCase(),
                    id: el.id,
                    class: el.getAttribute('class') ?? '',
                    href: el.getAttribute('href') ?? '',
                    text: (el.textContent ?? '').replace(/\s+/g, ''),
                })),
            ).toEqual(inventory[selector as keyof typeof inventory]);
    });
    it('preserves hero and introductory content structure and text', async () => {
        const { container } = await page();
        const main = container.querySelector('main')!;
        const actual = [...main.children].filter((el) => el.tagName !== 'SECTION');
        const expected = [...source.querySelector('main')!.children].filter(
            (el) => el.tagName !== 'SECTION',
        );
        expect(actual.map(signature)).toEqual(expected.map(signature));
    });
    it('imports scoped CSS and preserves every source declaration including media rules', async () => {
        await page();
        expect(readFileSync('app/langgraph-qa-agent-guide/page.tsx', 'utf8')).toContain(
            "import './langgraph-qa-agent-guide.css'",
        );
        const css = postcss.parse(
            readFileSync('app/langgraph-qa-agent-guide/langgraph-qa-agent-guide.css', 'utf8'),
        );
        const rules: { selector: string; media: string; declarations: string[][] }[] = [];
        css.walkRules((rule) => {
            rules.push({
                selector: rule.selector.split(',').map(s => s.trim()).join(', '),
                media: rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : '',
                declarations: rule.nodes
                    .filter((n) => n.type === 'decl')
                    .map((n) => [
                        (n as postcss.Declaration).prop,
                        (n as postcss.Declaration).value.replace(/\s+/g, ' ').trim(),
                    ]),
            });
        });
        for (const rule of inventory.css) {
            const selector = rule.selector
                .split(',')
                .map((s) =>
                    [':root', 'body', 'html'].includes(s.trim())
                        ? '.lgqa-page'
                        : '.lgqa-page ' + s.trim(),
                )
                .join(', ');
            expect(
                rules
                    .filter((r) => r.selector === selector && r.media === rule.media)
                    .map((r) => r.declarations),
                rule.selector,
            ).toContainEqual(rule.declarations.map(([property, value]) => [property, value.replace(/\s+/g, ' ').trim()]));
        }
    });
});

describe('overview', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#overview');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#overview')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview h2, #overview h3, #overview h4')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['0.全体像：なぜ「LangGraphでQAエージェント」なのか']);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#overview')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#overview')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            'コンポーネント役割Streamlit（フロントエンド）チャット形式のUIでユーザーの質問と、グラフ上でのノード選択を受け取るQuestionProcessingInterfaceLangGraphパイプラインの実行をイベントストリームとして外部に公開する橋渡し役ConfigurationProviderプロンプトテンプレート、Few-shot例、ドメイン固有の注記を一元管理するSchemaProviderNeo4jの技術的なスキーマ情報を取得し、余計な要素を除去してLLMが読みやすい形に整形する',
        ]);
    });
    it('preserves table item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#overview')?.querySelectorAll('table')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#overview')!.querySelectorAll('table')[0]!),
        );
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview .callout, #overview .summary-card')].map(
                (el) => (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['図1:システム全体のアーキテクチャ']);
    });
    it('preserves .diagram-caption item 1', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#overview')
            ?.querySelectorAll('.diagram-caption')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#overview')!.querySelectorAll('.diagram-caption')[0]!),
        );
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#overview .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('fundamentals', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#fundamentals h2, #fundamentals h3, #fundamentals h4',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([
            '1.前提知識のおさらい：LangGraphとは何か',
            '1-1.ChainからGraphへ',
            '1-2.LangGraphの3要素：State/Node/Edge',
            '1-3.LangGraphとLangChainの違い',
            '1-4.2026年時点の採用状況',
        ]);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves h2,h3,h4 item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('h2,h3,h4')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('h2,h3,h4')[1]!),
        );
    });
    it('preserves h2,h3,h4 item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('h2,h3,h4')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('h2,h3,h4')[2]!),
        );
    });
    it('preserves h2,h3,h4 item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('h2,h3,h4')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('h2,h3,h4')[3]!),
        );
    });
    it('preserves h2,h3,h4 item 5', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('h2,h3,h4')[4];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('h2,h3,h4')[4]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#fundamentals table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            '要素役割たとえるならState（状態）グラフ全体で共有される、読み書き可能なデータ構造。すべてのノードがこれを介して情報をやり取りする会議で参加者全員が見ている「共有ホワイトボード」Node（ノード）1つの処理単位を表す関数。Stateを受け取り、更新差分を返すホワイトボードに情報を書き加える「担当者」Edge（エッジ）ノード間の実行順序を定義する。固定のEdgeと、実行結果に応じて分岐するConditionalEdgeがある「次は誰に発言してもらうか」を決める司会進行',
        ]);
    });
    it('preserves table item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#fundamentals')?.querySelectorAll('table')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#fundamentals')!.querySelectorAll('table')[0]!),
        );
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#fundamentals pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#fundamentals .callout, #fundamentals .summary-card',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#fundamentals .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#fundamentals .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('pipeline-graph', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#pipeline-graph');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#pipeline-graph')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#pipeline-graph h2, #pipeline-graph h3, #pipeline-graph h4',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual(['2.パイプライン全体のグラフ構造']);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#pipeline-graph')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#pipeline-graph')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#pipeline-graph table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#pipeline-graph pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#pipeline-graph .callout, #pipeline-graph .summary-card',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#pipeline-graph .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['図2:パイプラインのノード構成と条件分岐ルーティング（点線がConditionalEdge）']);
    });
    it('preserves .diagram-caption item 1', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#pipeline-graph')
            ?.querySelectorAll('.diagram-caption')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source.querySelector('#pipeline-graph')!.querySelectorAll('.diagram-caption')[0]!,
            ),
        );
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#pipeline-graph .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('implementation', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#implementation')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#implementation h2, #implementation h3, #implementation h4',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([
            '3.ステップバイステップ実装',
            'Step1.環境を準備する',
            'Step2.AgentState（共有状態）を設計する',
            'Step3.ConfigurationProvider—プロンプトを一元管理する',
            'Step4.SchemaProvider—Neo4jのスキーマをLLM向けに変換する',
            'Step5.IntentDetectionノード—質問の意図を判定する',
            'Step6.Text-to-Cypherノード—自然言語をCypherに変換する',
            'Step7.QueryExecutionノード—実行してエラーを捕捉する',
            'Step8.条件分岐ルーティング—リトライ・要約・終了を切り替える',
            'Step9.Summarizationノード—結果を人間向けの文章にする',
            'Step10.グラフを組み立ててコンパイルする',
            'Step11.Streamlitと統合する（イベントストリーミング）',
        ]);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves h2,h3,h4 item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[1]!),
        );
    });
    it('preserves h2,h3,h4 item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[2]!),
        );
    });
    it('preserves h2,h3,h4 item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[3]!),
        );
    });
    it('preserves h2,h3,h4 item 5', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[4];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[4]!),
        );
    });
    it('preserves h2,h3,h4 item 6', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[5];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[5]!),
        );
    });
    it('preserves h2,h3,h4 item 7', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[6];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[6]!),
        );
    });
    it('preserves h2,h3,h4 item 8', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[7];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[7]!),
        );
    });
    it('preserves h2,h3,h4 item 9', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[8];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[8]!),
        );
    });
    it('preserves h2,h3,h4 item 10', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[9];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[9]!),
        );
    });
    it('preserves h2,h3,h4 item 11', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[10];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[10]!),
        );
    });
    it('preserves h2,h3,h4 item 12', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('h2,h3,h4')[11];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('h2,h3,h4')[11]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#implementation table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            'フィールド用途question/user_selectionユーザー入力。user_selectionがあることで「選択中の事件」のような文脈参照が可能になるoutput_type/intent_reasoning結果をテーブル・グラフ・地図のどれで見せるかの判定結果と、その理由llm_schemaNeo4jスキーマをLLM向けに整形した文字列（後述）cypher_query/cypher_reasoning/raw_llm_response生成されたCypher、生成理由、デバッグ用の生レスポンスresults/summary_results/results_truncated/results_error/retries実行結果、要約用に機微な値を伏せた実行結果、上限件数での切り捨て有無、エラー内容、リトライ回数summary/needs_analysis最終的な要約テキストと、追加の分析が必要かどうかのフラグ',
            '観点対策書き込み拒否ensure_read_only()がCypherの句とプロシージャ名を字句解析し、CREATE/MERGE/DELETEなどを実行前に拒否するDB側の最終防御driverにはreaderロールのみを持つ読み取り専用ユーザーを使う。アプリ側の検証とDB側の権限の二重防御にする通信の暗号化接続URIはneo4j+s://（TLS+証明書検証あり）を使う。暗号化しないneo4j://や検証省略のneo4j+ssc://は使わないマルチテナント利用者ごとに参照範囲が異なる場合は、認証済みの利用者情報をStateとは別経路で渡し、driver.session(impersonated_user=...)やロールベースのアクセス制御で範囲を強制する（プロンプト内の指示だけに頼らない）SSRF対策apoc.load.*は外部URLを読み込めるため、dbms.security.procedures.allowlistで許可するAPOCを最小限に絞り、ネットワーク制御も併用する結果のシリアライズto_dto()でノードのラベル・IDやリレーションシップの始点終点を保持したまま辞書に変換し、checkpointに安全に保存できる形にする実行時間と件数の上限QUERY_TIMEOUT_SECONDSとMAX_RESULT_ROWSをコード側で強制し、超過分はresults_truncatedで明示する。行数の上限内でも集計値の中身が大きすぎる場合はensure_payload_within_limits()がResultTooLargeErrorを送出し、LLMにLIMITやcollect(x)[..100]で絞ったCypherを再生成させる',
            '条件遷移先意味エラーありかつリトライ回数<3text_to_cypherへ戻るエラー内容をプロンプトに含めて再生成を試みる成功かつoutput_typeがgraph／mapsummarizeへ進む可視化結果を人間向けの文章に要約する成功かつoutput_typeがtable終了表はそのまま表示すれば十分なので要約をスキップエラーが解消せずリトライ上限に到達終了（エラー表示）ユーザーに再質問を促す',
            'エラーの種類対応方針一時的な障害（ネットワーク瞬断など）ノードにRetryPolicyを付けるLLMが回復可能な失敗（Cypher構文ミスなど）エラー内容をStateに載せてtext_to_cypherへ戻すユーザー側で修正が必要な情報不足interrupt()で処理を一時停止し、ユーザーに確認を求める想定外のバグあえて再試行させず、そのまま例外を上げてデバッグに回す',
        ]);
    });
    it('preserves table item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('table')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('table')[0]!),
        );
    });
    it('preserves table item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('table')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('table')[1]!),
        );
    });
    it('preserves table item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('table')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('table')[2]!),
        );
    });
    it('preserves table item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('table')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('table')[3]!),
        );
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#implementation pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            'pipinstalllanggraphlangchainlangchain-neo4jlangchain-openaineo4jstreamlitjinja2',
            'fromtypingimportTypedDict,Literal,Optional,AnyclassAgentState(TypedDict,total=False):#入力question:struser_selection:Optional[dict]#グラフUI上でユーザーが選択中のノード#intent_detectionの出力output_type:Literal["table","graph","map"]intent_reasoning:str#schema_extractionの出力llm_schema:str#text_to_cypherの出力cypher_query:strcypher_reasoning:strraw_llm_response:str#execute_queryの出力#チェックポイントに保存されるため、出力形式によらずシリアライズ可能なレコードのリストで持つresults:Optional[list[dict[str,Any]]]summary_results:Optional[list[dict[str,Any]]]#要約LLMへ渡す、機微な値を伏せた結果results_truncated:bool#MAX_RESULT_ROWSを超えて切り捨てたかresults_error:Optional[str]retries:int#summarizeの出力summary:strneeds_analysis:bool',
            'fromjinja2importEnvironment,FileSystemLoaderclassConfigurationProvider:def__init__(self,template_dir:str):self.env=Environment(loader=FileSystemLoader(template_dir))defrender(self,template_name:str,**kwargs)->str:template=self.env.get_template(template_name)returntemplate.render(**kwargs)',
            'importosfromlangchain_openaiimportChatOpenAI#prompts/配下にintent_detection.jinja2/text_to_cypher.jinja2/summarize.jinja2を置くprompt_config=ConfigurationProvider("prompts")#モデル名とAPIキーは環境変数から読み込み、コードに直接書かない（ChatOpenAIはOPENAI_API_KEYを自動で参照する）。#Cypher生成と意図判定は再現性を優先し、temperature=0にするllm=ChatOpenAI(model=os.environ["OPENAI_MODEL"],temperature=0)',
            'SCHEMA_QUERY="CALLapoc.meta.schema()YIELDvalueRETURNvalue"defextract_raw_schema(driver)->dict:withdriver.session()assession:record=session.run(SCHEMA_QUERY).single()returnrecord["value"]defto_llm_friendly_schema(raw_schema:dict,skip_labels:set[str],business_notes:dict[str,str],)->str:lines:list[str]=[]forlabel,metainraw_schema.items():#apoc.meta.schema()はリレーションシップ型も同じマップに返すため、ノードのエントリだけを扱うifmeta.get("type")!="node"orlabelinskip_labels:continuenote=business_notes.get(label,"")lines.append(f"-{label}:{note}")forprop,prop_metainmeta.get("properties",{}).items():lines.append(f"-{prop}({prop_meta.get(\'type\')})")#リレーションシップの向きと接続先ラベルも渡し、LLMがパターンの向きを誤らないようにするforrel_type,rel_metainmeta.get("relationships",{}).items():#ラベルと同名の型には"(RELATIONSHIP)"が付くため、Cypherで使える型名に戻すrel_name=rel_type.removesuffix("(RELATIONSHIP)")arrow="->"ifrel_meta.get("direction")=="out"else"<-"targets=",".join(rel_meta.get("labels",[]))lines.append(f"-{arrow}[:{rel_name}]{targets}")return"\\n".join(lines)',
            'SKIP_LABELS={"_Migration","_Bloom_Perspective_"}#内部管理用ラベルの例BUSINESS_NOTES={"ANPRCamera":"自動車のナンバープレートを自動認識するカメラ"}defschema_extraction(state:AgentState)->dict:raw_schema=extract_raw_schema(driver)llm_schema=to_llm_friendly_schema(raw_schema,SKIP_LABELS,BUSINESS_NOTES)return{"llm_schema":llm_schema}',
            'importjsonOUTPUT_TYPES=("table","graph","map")defparse_json_object(text:str)->dict:#intent_detection.jinja2/text_to_cypher.jinja2ではJSONオブジェクトだけを返すよう指示する。#コードフェンス付きで返された場合に備え、最初の{から最後の}までを取り出して解析するstart,end=text.find("{"),text.rfind("}")ifstart<0orend<start:raiseValueError(f"LLMの応答にJSONオブジェクトがありません:{text[:200]}")data=json.loads(text[start:end+1])ifnotisinstance(data,dict):raiseValueError("LLMの応答がJSONオブジェクトではありません")returndatadefparse_intent_response(text:str)->tuple[str,str]:#期待する形式:{"output_type":"table"|"graph"|"map","reasoning":"..."}data=parse_json_object(text)output_type=data.get("output_type")ifoutput_typenotinOUTPUT_TYPES:raiseValueError(f"未知のoutput_typeです:{output_type!r}")returnoutput_type,str(data.get("reasoning",""))defintent_detection(state:AgentState)->dict:prompt=prompt_config.render("intent_detection.jinja2",question=state["question"],)response=llm.invoke(prompt)output_type,reasoning=parse_intent_response(response.content)return{"output_type":output_type,"intent_reasoning":reasoning,}',
            'defparse_cypher_response(text:str)->tuple[str,str]:#期待する形式:{"cypher":"MATCH...","reasoning":"..."}（parse_json_objectはStep5で定義）data=parse_json_object(text)query=data.get("cypher")ifnotisinstance(query,str)ornotquery.strip():raiseValueError("LLMの応答にcypherがありません")returnquery.strip(),str(data.get("reasoning",""))deftext_to_cypher(state:AgentState)->dict:prompt=prompt_config.render("text_to_cypher.jinja2",question=state["question"],schema=state["llm_schema"],selection=state.get("user_selection"),previous_error=state.get("results_error"),)response=llm.invoke(prompt)query,reasoning=parse_cypher_response(response.content)return{"cypher_query":query,"cypher_reasoning":reasoning,"raw_llm_response":response.content,}',
            'importrefromcollections.abcimportIteratorfromitertoolsimportchainfromtypingimportAnyfromneo4jimportunit_of_workfromneo4j.exceptionsimportClientErrorfromneo4j.graphimportNode,Path,Relationshipfromneo4j.spatialimportPointfromneo4j.timeimportDate,DateTime,Duration,Time#プロンプトの指示に頼らず、実行時間と返却件数をコード側で強制的に制限するQUERY_TIMEOUT_SECONDS=10MAX_RESULT_ROWS=1000#行数の上限だけではcollect()などの集計が1行に巨大なリストを詰めた結果を防げないため、#行の中身（リスト・マップ・プロパティの要素数と文字列の長さ）の合計にも上限を設けるMAX_RESULT_ELEMENTS=50_000MAX_RESULT_TEXT_CHARS=2_000_000#to_dto()は入れ子1段ごとに数フレーム再帰するため、Pythonの再帰上限（既定1000）より十分小さい深さで拒否するMAX_RESULT_DEPTH=100#LLMが生成したCypherは信頼できない入力として扱い、書き込み操作を実行前に拒否するWRITE_CLAUSE_RE=re.compile(r"\\b(CREATE|MERGE|DELETE|DETACH|SET|REMOVE|DROP|FOREACH|LOAD\\s+CSV)\\b",re.IGNORECASE,)#プロシージャ名は`apoc`.`load`のようにバッククォートで分割して書けるため、句の検査とは別の字句解析結果で検査するWRITE_PROCEDURE_RE=re.compile(r"\\bCALL\\s+(dbms\\s*\\.|db\\s*\\.\\s*create|apoc\\s*\\.\\s*(create|merge|refactor|periodic|load))",re.IGNORECASE,)#Cypherを字句として先頭から走査し、文字列リテラル・コメント・バッククォート識別子を区別する。#交互パターンは最左一致で消費されるため、文字列内の//やコメント内の引用符を誤って境界と見なさないCYPHER_LEXEME_RE=re.compile(r"\'(?:[^\'\\\\]|\\\\.)*\'"#単引用符の文字列リテラルr\'|"(?:[^"\\\\]|\\\\.)*"\'#二重引用符の文字列リテラルr"|`((?:[^`]|``)*)`"#バッククォート識別子（中身はグループ1）r"|//[^\\n]*"#行コメントr"|/\\*.*?\\*/",#ブロックコメントre.DOTALL,)defstrip_non_clause_text(cypher:str)->str:#文字列とコメントは句になり得ないので空白へ置き換える。#バッククォート識別子（`Create`のようなラベル名など）も句にはならないため、中身を残さず中立なプレースホルダーへ置き換えるreturnCYPHER_LEXEME_RE.sub(lambdam:"_ident_"ifm.group(1)isnotNoneelse"",cypher,)defunquote_identifiers(cypher:str)->str:#プロシージャ名の検査用。文字列とコメントは空白へ置き換え、バッククォート識別子は中身を展開して#`apoc`.`load`.jsonのように分割された名前もapoc.load.jsonとして検査できるようにするreturnCYPHER_LEXEME_RE.sub(lambdam:m.group(1).replace("``","`")ifm.group(1)isnotNoneelse"",cypher,)classCypherValidationError(Exception):passclassResultTooLargeError(CypherValidationError):#LIMITやcollect(x)[..100]のように結果を絞れば解消するため、LLMに再生成させる対象として扱うpass_EXHAUSTED=object()defensure_payload_within_limits(records:list)->None:#to_dto()の再帰変換より前に、明示的なスタックで結果全体を1回だけ走査して上限を強制する。#コンテナの中身は一括でリスト化せず反復子として積み、1要素ずつ取り出すため、#巨大なcollect()結果でも上限を超えた時点で走査を打ち切り、中身の複製を確保しない。#列名・マップのキー・ラベル・型名・element_idもto_dto()の出力に残るため、値と同じく文字数に数えるelements=0text_chars=0stack:list[Iterator[Any]]=[chain.from_iterable(chain.from_iterable(r.items())forrinrecords)]whilestack:value=next(stack[-1],_EXHAUSTED)ifvalueis_EXHAUSTED:stack.pop()continueelements+=1ifisinstance(value,str):text_chars+=len(value)elifisinstance(value,(bytes,bytearray)):#バイト列もto_dto()の出力サイズに効くため、長さを文字数の上限に合算するtext_chars+=len(value)elifisinstance(value,Path):stack.append(chain(value.nodes,value.relationships))elifisinstance(value,(DateTime,Date,Time,Duration)):#to_dto()は時間型をISO8601文字列へ変換するため、その長さを文字数に数える。#Durationはtupleのサブクラスなので、tuple判定より前に処理するtext_chars+=len(value.iso_format())elifisinstance(value,Node):stack.append(chain([value.element_id],value.labels,chain.from_iterable(value.items())))elifisinstance(value,Relationship):endpoints=[n.element_idfornin(value.start_node,value.end_node)ifnisnotNone]stack.append(chain([value.element_id,value.type],endpoints,chain.from_iterable(value.items())))elifisinstance(value,(list,tuple)):stack.append(iter(value))elifisinstance(value,dict):stack.append(chain.from_iterable(value.items()))#先頭の反復子（行の集合）を除いたスタックの長さが、現在の値の入れ子の深さに等しいiflen(stack)-1>MAX_RESULT_DEPTH:raiseResultTooLargeError("クエリ結果の入れ子が深すぎます。リストやマップを入れ子にせず、平坦な形で返すようCypherを書き直してください")ifelements>MAX_RESULT_ELEMENTSortext_chars>MAX_RESULT_TEXT_CHARS:raiseResultTooLargeError("クエリ結果が大きすぎます。LIMITを付けるか、collect()の結果をcollect(x)[..100]のようにスライスして件数を絞ってください")#LLMがCypherを書き直せば解消し得るClientErrorのコード接頭辞（構文・意味の誤りと実行タイムアウト）REPAIRABLE_ERROR_PREFIXES=("Neo.ClientError.Statement.","Neo.ClientError.Transaction.TransactionTimedOut",)defensure_read_only(cypher:str)->None:#未終端の文字列・コメントはどの字句にも一致せず走査対象に残るため、判定は拒否側に倒れるifWRITE_CLAUSE_RE.search(strip_non_clause_text(cypher))orWRITE_PROCEDURE_RE.search(unquote_identifiers(cypher)):raiseCypherValidationError("書き込み操作を含むCypherは実行できません")defto_dto(value:Any)->Any:#Record.data()はノードをプロパティの辞書に潰してラベルやIDを失うため、グラフ描画に必要な情報を明示的に残すifisinstance(value,Node):return{"kind":"node","element_id":value.element_id,"labels":sorted(value.labels),"properties":to_dto(dict(value)),}ifisinstance(value,Relationship):return{"kind":"relationship","element_id":value.element_id,"type":value.type,"start":value.start_node.element_idifvalue.start_nodeelseNone,"end":value.end_node.element_idifvalue.end_nodeelseNone,"properties":to_dto(dict(value)),}ifisinstance(value,Path):return{"kind":"path","nodes":[to_dto(n)forninvalue.nodes],"relationships":[to_dto(r)forrinvalue.relationships],}#neo4jの時間型・空間型はチェックポイントのシリアライザが扱えないため、ISO8601文字列と座標の辞書へ変換するifisinstance(value,(DateTime,Date,Time,Duration)):returnvalue.iso_format()#Pointはtupleのサブクラスなので、list判定より前に処理してSRIDを失わないようにするifisinstance(value,Point):return{"kind":"point","srid":value.srid,"coordinates":list(value)}ifisinstance(value,list):return[to_dto(v)forvinvalue]ifisinstance(value,dict):return{k:to_dto(v)fork,vinvalue.items()}returnvalue#要約に不要な機微プロパティ。データモデルに合わせて定義し、スキーマ変更時に見直すSENSITIVE_KEYS=frozenset({"name","phone","address","date_of_birth","plate_number"})REDACTED="[REDACTED]"defto_summary_dto(value:Any,*,trusted_origin:bool=False)->Any:#要約LLMへ渡す値を、DTOではなくドライバが返した実際の型から作る。#列名やマップのキーはCypherのASやマップ射影（RETURNp.nameASsuspectなど）で自由に付け替えられ、#{kind:\'node\',...}のようなマップでDTOの形も偽装できるため、キー名によるマスキングの根拠にしない。#trusted_originは「値がノード・リレーションシップの機微でないプロパティ由来である」ことが分かっている場合だけTrueになるifisinstance(value,(Node,Relationship)):#ノード・リレーションシップのプロパティ名だけはスキーマ由来で付け替えられないため、SENSITIVE_KEYSで判定するprops={k:REDACTEDifkinSENSITIVE_KEYSelseto_summary_dto(v,trusted_origin=True)fork,vindict(value).items()}ifisinstance(value,Node):return{"kind":"node","labels":sorted(value.labels),"properties":props}return{"kind":"relationship","type":value.type,"properties":props}ifisinstance(value,Path):return{"kind":"path","nodes":[to_summary_dto(n)forninvalue.nodes],"relationships":[to_summary_dto(r)forrinvalue.relationships],}#真偽値とnullは残す（boolはintのサブクラスなので数値判定より前に処理する）ifvalueisNoneorisinstance(value,bool):returnvalue#数値は出所が分かる場合だけ残す。列やマップの値として返った数値は、RETURNp.phoneASnのように#数値型の機微なプロパティがエイリアス経由で投影されたものか、count(*)などの集計値かを区別できないため、#件数などの集計値も含めて要約ペイロードから除外する（表示用のresultsには残る）ifisinstance(value,(int,float)):returnvalueiftrusted_originelseREDACTED#文字列・時間型・空間型はエイリアス経由で機微なプロパティが投影され得るため、出所が分からなければキー名によらず伏せる。#機微でないプロパティ由来と分かっている場合だけ、to_dtoでISO8601文字列や座標の辞書へ変換して残すifisinstance(value,(str,DateTime,Date,Time,Duration,Point)):returnto_dto(value)iftrusted_originelseREDACTEDifisinstance(value,list):return[to_summary_dto(v,trusted_origin=trusted_origin)forvinvalue]ifisinstance(value,dict):#マップのキーはマップ射影（p{n:p.phone}など）で付け替えられるため出所の根拠にせず、値は常に未信頼として扱う。#元のプロパティ名を保つ射影（p{.phone}）への多層防御としてSENSITIVE_KEYSでも伏せるreturn{k:REDACTEDifkinSENSITIVE_KEYSelseto_summary_dto(v)fork,vinvalue.items()}returnREDACTED@unit_of_work(timeout=QUERY_TIMEOUT_SECONDS)defrun_read_query(tx,cypher:str)->tuple[list[dict],list[dict],bool]:#fetchは指定件数までしか取り出さないため、大規模な結果をすべてメモリへ読み込まない。#上限より1件多く取り出し、超過の有無で「上限ちょうど」と「切り捨て」を区別するrecords=tx.run(cypher).fetch(MAX_RESULT_ROWS+1)kept=records[:MAX_RESULT_ROWS]#行数の上限内でも、集計値の中身が大きすぎる結果は変換・State保存・LLM送信の前に拒否するensure_payload_within_limits(kept)rows=[{key:to_dto(value)forkey,valueinr.items()}forrinkept]#変換前の検査はto_dto()の出力サイズの見積もりのため、Stateに保存する実際のペイロードでも上限を確認するensure_payload_within_limits(rows)#列名はエイリアスで付け替えられるため、列の値ごとに実際の型から要約用の値を作るsummary_rows=[{key:to_summary_dto(value)forkey,valueinr.items()}forrinkept]#要約用の値もState保存・LLM送信の対象になるため、変換後の実際のペイロードで上限を確認するensure_payload_within_limits(summary_rows)returnrows,summary_rows,len(records)>MAX_RESULT_ROWSdefexecute_query(state:AgentState)->dict:retries=state.get("retries",0)try:ensure_read_only(state["cypher_query"])withdriver.session()assession:#execute_readは読み取りモードのトランザクションを選ぶ（クラスタでは読み取りレプリカへ振り分ける）だけで、#書き込みを防ぐ境界ではない。書き込みの最終的な防止は、下記のreaderロールのみを持つユーザーで担保するrecords,summary_records,truncated=session.execute_read(run_read_query,state["cypher_query"])exceptCypherValidationErrorasexc:#アプリ側の検証で拒否した書き込み操作は、エラー内容を渡してLLMに再生成させるreturn{"results_error":str(exc),"retries":retries+1}exceptClientErrorasexc:#認証・権限（Neo.ClientError.Security.*）などはCypherを直しても解消しないため、再生成させずに送出するifnot(exc.codeor"").startswith(REPAIRABLE_ERROR_PREFIXES):raise#Cypher自体の誤り（構文・意味）とタイムアウトは、エラー内容を渡してLLMに再生成させるreturn{"results_error":str(exc),"retries":retries+1}#ServiceUnavailableやTransientErrorなどの一時障害は捕捉せず、Step10のRetryPolicyに再試行させるreturn{"results":records,"summary_results":summary_records,"results_truncated":truncated,"results_error":None,}',
            'importosfromneo4jimportGraphDatabase#neo4j+s://はTLS暗号化とサーバー証明書の検証を行う。認証情報は環境変数から読み込み、コードに直接書かないdriver=GraphDatabase.driver(os.environ["NEO4J_URI"],#例:neo4j+s://xxxx.databases.neo4j.ioauth=(os.environ["NEO4J_READER_USER"],os.environ["NEO4J_READER_PASSWORD"]),)',
            'fromtypingimportLiteralMAX_RETRIES=3defroute_after_execution(state:AgentState)->Literal["retry","summarize","end"]:ifstate.get("results_error"):#上限未満なら再生成、上限に達したらエラーのまま終了（要約には進ませない）return"retry"ifstate.get("retries",0)<MAX_RETRIESelse"end"ifstate.get("output_type")in("graph","map"):return"summarize"return"end"',
            'defsummarize(state:AgentState)->dict:prompt=prompt_config.render("summarize.jinja2",question=state["question"],#Step7のto_summary_dtoで伏せた結果だけをプロンプトに含め、表示用のresultsは渡さないresults=state.get("summary_results")or[],#Trueなら「上限件数までの部分結果である」ことを要約文に明記するようテンプレートで指示するresults_truncated=state.get("results_truncated",False),needs_analysis=state.get("needs_analysis",False),)response=llm.invoke(prompt)return{"summary":response.content}',
            'importstreamlitasstfromlanggraph.checkpoint.memoryimportInMemorySaverfromlanggraph.graphimportStateGraph,START,ENDfromlanggraph.typesimportRetryPolicygraph=StateGraph(AgentState)graph.add_node("intent_detection",intent_detection)graph.add_node("schema_extraction",schema_extraction)graph.add_node("text_to_cypher",text_to_cypher)graph.add_node("execute_query",execute_query,retry_policy=RetryPolicy(max_attempts=3,initial_interval=0.5,backoff_factor=2.0),)graph.add_node("summarize",summarize)graph.add_edge(START,"intent_detection")graph.add_edge("intent_detection","schema_extraction")graph.add_edge("schema_extraction","text_to_cypher")graph.add_edge("text_to_cypher","execute_query")graph.add_conditional_edges("execute_query",route_after_execution,{"retry":"text_to_cypher","summarize":"summarize","end":END,},)graph.add_edge("summarize",END)#Step11のget_stateで最終状態を取得するため、チェックポインタを付けてコンパイルする。#Streamlitは操作のたびにスクリプト全体を再実行するため、ここで毎回InMemorySaver()を作ると#保存済みのcheckpointが失われ、同じthread_idでもinterrupt/一時障害からの再開ができない。#st.cache_resourceでコンパイル済みapp（とチェックポインタ）をプロセス内で1つだけ保持する。#複数プロセス構成や再起動をまたぐ場合は、SqliteSaver/PostgresSaverなどの永続チェックポインタを使う@st.cache_resourcedefget_app():returngraph.compile(checkpointer=InMemorySaver())app=get_app()',
            'fromtypingimportAnyfromlanggraph.typesimportCommanddefprocess_question(question:str,selection:dict|None,config:dict,resume:Any|None=None,retry_from_checkpoint:bool=False,):ifretry_from_checkpoint:#一時障害で止まったスレッドは入力にNoneを渡し、最後に保存されたcheckpointから続きを実行する#（新しい入力辞書を渡すと、途中まで進んだ状態に入力が上書きされ最初からやり直しになる）graph_input=NoneelifresumeisnotNone:#interrupt()で中断中のスレッドはCommand(resume=...)で同じconfigのまま再開するgraph_input=Command(resume=resume)else:graph_input={"question":question,"user_selection":selection,"retries":0}foreventinapp.stream(graph_input,config,stream_mode="updates"):node_name,update=next(iter(event.items()))ifnode_name=="__interrupt__":#interrupt()で一時停止した。checkpointは再開に必要なので残したまま呼び出し側へ返すyield{"type":"interrupt","payload":update}returnyield{"type":"update","node":node_name,"payload":update}final_state=app.get_state(config).valuesyield{"type":"result","payload":final_state}',
            'importuuidimportpandasaspdimportstreamlitasstfromneo4j.exceptionsimportServiceUnavailable,SessionExpired,TransientError#RetryPolicyを使い切っても解消しなかった一時障害。checkpointから再開できるのでUIで再実行を提示するTRANSIENT_ERRORS=(ServiceUnavailable,SessionExpired,TransientError)defrender_result(payload:dict)->None:#最終State（resultsはtableならDataFrame、それ以外はto_dto()形式のレコードのリスト）を描画する。#graph/mapの本格的な描画は外部の可視化コンポーネントに委ねる。差し替える場合も#「to_dto()形式のレコードのリストを受け取り、node/relationship/path/pointを描く」というインターフェースを守るifpayload.get("results_error"):#リトライ上限に達しても解消しなかったCypherエラー。再質問を促すst.error(f"クエリを生成できませんでした。質問を言い換えてください。（{payload[\'results_error\']}）")returnifpayload.get("summary"):st.markdown(payload["summary"])output_type=payload.get("output_type")ifoutput_type=="table":st.dataframe(payload["results"])elifoutput_typein("graph","map"):#最小実装:可視化コンポーネントを組み込むまでは、構造を確認できるようJSONとして表示するst.json(payload.get("results")or[])#チェックポインタはthread_id単位で状態を保存する。interrupt()からの再開を含め、1つの質問が#完了するまでは同じthread_idを使い続ける。Streamlitは操作のたびにスクリプトを再実行するためsession_stateに保持するif"thread_id"notinst.session_state:st.session_state.thread_id=str(uuid.uuid4())config={"configurable":{"thread_id":st.session_state.thread_id}}defclose_thread()->None:#完了またはキャンセルした時点でだけcheckpointを削除し、次の質問では新しいthread_idを使うapp.checkpointer.delete_thread(st.session_state.thread_id)forkeyin("thread_id","pending_interrupt","failed_transient"):st.session_state.pop(key,None)resume=Noneretry_from_checkpoint=Falseifst.session_state.get("failed_transient"):#一時障害で中断したスレッド。checkpointは残っているので、同じconfigで入力なしの再開を選べるst.error("一時的な障害で処理が中断しました。途中から再実行できます。")ifst.button("キャンセル",key="cancel_failed"):close_thread()st.rerun()ifnotst.button("再実行"):st.stop()st.session_state.pop("failed_transient")retry_from_checkpoint=Truepending=st.session_state.get("pending_interrupt")ifpendingisnotNone:st.warning(pending[0].value)#interrupt()に渡した確認内容ifst.button("キャンセル",key="cancel_interrupt"):close_thread()st.rerun()answer=st.text_input("確認事項への回答")ifnotanswer:st.stop()#回答を待つ間もcheckpointは残しておくst.session_state.pop("pending_interrupt")resume=answerifresumeisNoneandnotretry_from_checkpoint:#新しい質問はUIから受け取る。st.chat_inputは送信した回の再実行でだけ値を返すため、#結果表示後の再実行で同じ質問が二重に処理されないquestion=st.chat_input("質問を入力してください")ifnotquestion:st.stop()else:#再開時はcheckpointのStateを使うため、新しい質問はgraph_inputに使われないquestion=""#グラフ上で選択中のノード。可視化コンポーネントが選択時にsession_stateへ保存する想定（未選択ならNone）selection=st.session_state.get("selection")placeholder=st.empty()events=process_question(question,selection,config,resume=resume,retry_from_checkpoint=retry_from_checkpoint)try:foreventinevents:ifevent["type"]=="update":placeholder.info(f"処理中:{event[\'node\']}")elifevent["type"]=="interrupt":#一時停止中はcheckpointを削除せず、ユーザーの回答後に同じconfigで再開するst.session_state.pending_interrupt=event["payload"]st.rerun()elifevent["type"]=="result":payload=event["payload"]ifpayload.get("results_truncated"):#部分結果を全件と誤解させないよう、描画前に切り捨てを通知するst.warning(f"結果が上限の{MAX_RESULT_ROWS}件を超えたため、先頭{MAX_RESULT_ROWS}件のみ表示しています。")#Stateにはレコードのリストを保存し、table表示用のDataFrameはグラフの外で作るifpayload.get("output_type")=="table"andpayload.get("results")isnotNone:payload={**payload,"results":pd.DataFrame(payload["results"])}render_result(payload)#graph/map/tableを描画（results_truncatedもペイロードに含まれる）close_thread()exceptTRANSIENT_ERRORS:#checkpointは削除せず残し、次回の再実行で入力なしのapp.stream(None,config)として再開するst.session_state.failed_transient=Truest.rerun()',
        ]);
    });
    it('preserves pre code item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[0]!),
        );
    });
    it('preserves pre code item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[1]!),
        );
    });
    it('preserves pre code item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[2]!),
        );
    });
    it('preserves pre code item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[3]!),
        );
    });
    it('preserves pre code item 5', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[4];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[4]!),
        );
    });
    it('preserves pre code item 6', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[5];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[5]!),
        );
    });
    it('preserves pre code item 7', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[6];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[6]!),
        );
    });
    it('preserves pre code item 8', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[7];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[7]!),
        );
    });
    it('preserves pre code item 9', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[8];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[8]!),
        );
    });
    it('preserves pre code item 10', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[9];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[9]!),
        );
    });
    it('preserves pre code item 11', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[10];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[10]!),
        );
    });
    it('preserves pre code item 12', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[11];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[11]!),
        );
    });
    it('preserves pre code item 13', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[12];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[12]!),
        );
    });
    it('preserves pre code item 14', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[13];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[13]!),
        );
    });
    it('preserves pre code item 15', async () => {
        const { container } = await page();
        const actual = container.querySelector('#implementation')?.querySelectorAll('pre code')[14];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#implementation')!.querySelectorAll('pre code')[14]!),
        );
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#implementation .callout, #implementation .summary-card',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([
            '補足Step4のSCHEMA_QUERYが呼び出すapoc.meta.schema()はAPOCCoreのプロシージャです。オンプレミスのNeo4jでは、APOCCoreのjarをpluginsディレクトリへ導入したうえで、neo4j.confのdbms.security.procedures.allowlist（必要に応じてdbms.security.procedures.unrestricted）にapoc.meta.*を含めて明示的に実行を許可し、再起動しておく必要があります（Neo4jAuraではAPOCCoreが標準で利用可能です）。',
            '実務Tips2026年の実務では、State定義にPydanticv2を使い、実行時バリデーションとIDE補完を効かせる構成も広く採用されています。TypedDictはシンプルさ重視、Pydanticモデルは型安全性重視という使い分けが一般的です。',
            'セキュリティ上の注意apoc.load.*は外部URLやファイルを読み込めるため、生成されたCypher経由で社内の未承認URLへアクセスされる（SSRF）おそれがあります。正規表現での拒否に加えて、dbms.security.procedures.allowlistで許可するAPOCを必要なもの（本ガイドではapoc.meta.*）だけに絞り、apoc.confのapoc.import.file.enabled=false設定と、Neo4jサーバーからの外向き通信を許可リストやファイアウォールで制限するネットワーク制御を併用してください。',
            '2026年の更新点ここで使っているstream_mode="updates"は安定版のAPIです。Pythonのstream_events()は、version="v1"/"v2"ではイベント辞書（StreamEvent）を順に返すイテレータで、呼び出し側がイベント種別で分岐して組み立て直す必要があります。LangGraphv1.2で追加されたstream_events(version="v3")は、代わりにGraphRunStream（非同期版はAsyncGraphRunStream）というハンドルを返します。このハンドルのrun.values（スーパーステップごとの状態スナップショット）やrun.messages（メッセージ）などの型付きprojection（射影）を個別に反復でき、実行後はrun.output（最終状態）やrun.interrupted/run.interrupts（human-in-the-loopの一時停止）を参照できます。ただしv3はexperimentalと明記されており、仕様が変わる可能性があります。本番用途では、当面は本ガイドのstream()を使い、v3はAPIが安定してから採用を検討するのが安全です。',
        ]);
    });
    it('preserves .callout,.summary-card item 1', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#implementation')
            ?.querySelectorAll('.callout,.summary-card')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source
                    .querySelector('#implementation')!
                    .querySelectorAll('.callout,.summary-card')[0]!,
            ),
        );
    });
    it('preserves .callout,.summary-card item 2', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#implementation')
            ?.querySelectorAll('.callout,.summary-card')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source
                    .querySelector('#implementation')!
                    .querySelectorAll('.callout,.summary-card')[1]!,
            ),
        );
    });
    it('preserves .callout,.summary-card item 3', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#implementation')
            ?.querySelectorAll('.callout,.summary-card')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source
                    .querySelector('#implementation')!
                    .querySelectorAll('.callout,.summary-card')[2]!,
            ),
        );
    });
    it('preserves .callout,.summary-card item 4', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#implementation')
            ?.querySelectorAll('.callout,.summary-card')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source
                    .querySelector('#implementation')!
                    .querySelectorAll('.callout,.summary-card')[3]!,
            ),
        );
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#implementation .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['図3:Streamlitとのイベントストリーミング連携']);
    });
    it('preserves .diagram-caption item 1', async () => {
        const { container } = await page();
        const actual = container
            .querySelector('#implementation')
            ?.querySelectorAll('.diagram-caption')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(
                source.querySelector('#implementation')!.querySelectorAll('.diagram-caption')[0]!,
            ),
        );
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#implementation .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('walkthrough', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#walkthrough');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#walkthrough')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll('#walkthrough h2, #walkthrough h3, #walkthrough h4'),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual(['4.実践ウォークスルー：捜査支援QAエージェントの例']);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#walkthrough')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#walkthrough')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#walkthrough table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#walkthrough pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll('#walkthrough .callout, #walkthrough .summary-card'),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#walkthrough .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#walkthrough .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('best-practices', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#best-practices')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#best-practices h2, #best-practices h3, #best-practices h4',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([
            '5.2026年のベストプラクティスと落とし穴',
            '5-1.スキーマは「渡しすぎない」',
            '5-2.リトライは「2種類ある」ことを意識する',
            '5-3.Human-in-the-Loopを要所に入れる',
            '5-4.トレース可能性を最初から組み込む',
            '5-5.今後の発展方向',
        ]);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves h2,h3,h4 item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[1]!),
        );
    });
    it('preserves h2,h3,h4 item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[2]!),
        );
    });
    it('preserves h2,h3,h4 item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[3]!),
        );
    });
    it('preserves h2,h3,h4 item 5', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[4];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[4]!),
        );
    });
    it('preserves h2,h3,h4 item 6', async () => {
        const { container } = await page();
        const actual = container.querySelector('#best-practices')?.querySelectorAll('h2,h3,h4')[5];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#best-practices')!.querySelectorAll('h2,h3,h4')[5]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#best-practices table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#best-practices pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [
                ...container.querySelectorAll(
                    '#best-practices .callout, #best-practices .summary-card',
                ),
            ].map((el) => (el.textContent ?? '').replace(/\s+/g, '')),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#best-practices .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#best-practices .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('summary', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#summary');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#summary')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary h2, #summary h3, #summary h4')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['6.まとめ']);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#summary')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#summary')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            'ステップ目的使われる仕組みIntentDetection表示形式を決めるLLM呼び出し+State更新SchemaExtractionLLMが理解できるスキーマを用意するapoc.meta.schema()+フィルタリングText-to-Cypher質問をクエリに変換するConfigurationProviderとStateの文脈を統合したプロンプトQueryExecution実行してエラーを捕捉する書き込み拒否検証+RetryPolicy+例外ハンドリングルーティング次の行き先を決めるadd_conditional_edgesSummarization人間向けに要約する追加コンテキストを注入したプロンプトフロントエンド連携リアルタイムに進捗を見せるイベントストリーミング+チェックポイントからの再開',
        ]);
    });
    it('preserves table item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#summary')?.querySelectorAll('table')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#summary')!.querySelectorAll('table')[0]!),
        );
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary .callout, #summary .summary-card')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#summary .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
});

describe('references', () => {
    it('preserves section structure and full text', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references');
        expect(actual).not.toBeNull();
        expect(signature(actual!)).toEqual(signature(source.querySelector('#references')!));
    });
    it('preserves ordered h2,h3,h4 inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references h2, #references h3, #references h4')].map(
                (el) => (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual(['参考文献・情報源']);
    });
    it('preserves h2,h3,h4 item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('h2,h3,h4')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('h2,h3,h4')[0]!),
        );
    });
    it('preserves ordered table inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references table')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered pre code inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references pre code')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .callout,.summary-card inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references .callout, #references .summary-card')].map(
                (el) => (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .diagram-caption inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references .diagram-caption')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([]);
    });
    it('preserves ordered .ref-item inventory', async () => {
        const { container } = await page();
        expect(
            [...container.querySelectorAll('#references .ref-item')].map((el) =>
                (el.textContent ?? '').replace(/\s+/g, ''),
            ),
        ).toEqual([
            '1LangGraph公式ドキュメント（概要）docs.langchain.com',
            '2LangGraph公式ドキュメント（GraphAPI）docs.langchain.com',
            '3StateGraphAPIリファレンスreference.langchain.com',
            '4add_conditional_edgesAPIリファレンスreference.langchain.com',
            '5LangGraphストリーミング（stream_mode）公式ドキュメントdocs.langchain.com',
            '6LangGraphEventStreaming（v1.2〜、推奨API）公式ドキュメントdocs.langchain.com',
            '7LangGraphのConditionalEdge/Retryのトレース解説（2026年8月）futureagi.com',
            '8LangGraph本番運用ガイド（2026年6月）reactify-solutions.com',
            '9LangGraph2026年版実践ガイド（AIwithAish）aishwaryasrinivasan.substack.com',
            '10LangGraphでのAIエージェント構築2026年版（LoreVanOudenhove,AIAdvances）ai.gopubby.com',
            '11LangGraphのState管理とLangChain「StateofAIAgents」調査結果の紹介（2026年4月）eastondev.com',
            '12LangChain「StateofAIAgents」2026年レポートの要点まとめlyzr.ai',
            '13TomazBratanic（Neo4j,GraphML&GenAIResearch）「ImplementingGraphReaderwithNeo4jandLangGraph」medium.com',
            '14TomazBratanic「IntroducingNeo4jAgentSkills」（Neo4jDeveloperBlog,2026年5月）medium.com',
            '15Neo4j公式「Text2Cypherguide」（2026年）neo4j.com',
            '16apoc.meta.schemaAPOCCore公式ドキュメントneo4j.com',
            '17CyVerACT:AnAgenticCypherTranslationWorkflowoverKnowledgeGraphs（2026年4月）sciencedirect.com',
            '18PromptingLLMsbasedonsemanticschemafortext-to-Cypher（T2CSS）sciencedirect.com',
            '19EnhancingText2CypherwithSchemaFiltering（MakbuleGulcinOzsoy,Neo4j）arxiv.org',
            '20KnowledgeGraphsandLLMsinAction（書籍本体）manning.com',
            '21第15章プレビューmanning.com',
            '22書籍サンプルコードリポジトリgithub.com',
        ]);
    });
    it('preserves .ref-item item 1', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[0];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[0]!),
        );
    });
    it('preserves .ref-item item 2', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[1];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[1]!),
        );
    });
    it('preserves .ref-item item 3', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[2];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[2]!),
        );
    });
    it('preserves .ref-item item 4', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[3];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[3]!),
        );
    });
    it('preserves .ref-item item 5', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[4];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[4]!),
        );
    });
    it('preserves .ref-item item 6', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[5];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[5]!),
        );
    });
    it('preserves .ref-item item 7', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[6];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[6]!),
        );
    });
    it('preserves .ref-item item 8', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[7];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[7]!),
        );
    });
    it('preserves .ref-item item 9', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[8];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[8]!),
        );
    });
    it('preserves .ref-item item 10', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[9];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[9]!),
        );
    });
    it('preserves .ref-item item 11', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[10];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[10]!),
        );
    });
    it('preserves .ref-item item 12', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[11];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[11]!),
        );
    });
    it('preserves .ref-item item 13', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[12];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[12]!),
        );
    });
    it('preserves .ref-item item 14', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[13];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[13]!),
        );
    });
    it('preserves .ref-item item 15', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[14];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[14]!),
        );
    });
    it('preserves .ref-item item 16', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[15];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[15]!),
        );
    });
    it('preserves .ref-item item 17', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[16];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[16]!),
        );
    });
    it('preserves .ref-item item 18', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[17];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[17]!),
        );
    });
    it('preserves .ref-item item 19', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[18];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[18]!),
        );
    });
    it('preserves .ref-item item 20', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[19];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[19]!),
        );
    });
    it('preserves .ref-item item 21', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[20];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[20]!),
        );
    });
    it('preserves .ref-item item 22', async () => {
        const { container } = await page();
        const actual = container.querySelector('#references')?.querySelectorAll('.ref-item')[21];
        expect(actual).toBeDefined();
        expect(signature(actual!)).toEqual(
            signature(source.querySelector('#references')!.querySelectorAll('.ref-item')[21]!),
        );
    });
});

describe('navigation and completed migration', () => {
 it('preserves all eight section IDs in source order with no extras', async () => {
 const {container}=await page(); expect([...container.querySelectorAll('section[id]')].map(el=>el.id)).toEqual(inventory.sections);
 });
 it('preserves sidebar content and all TOC targets', async () => {
 const {container}=await page(); const sidebar=container.querySelector('.sidebar'); expect(sidebar).not.toBeNull();
 expect(signature(sidebar!)).toEqual(signature(source.querySelector('.sidebar')!));
 for(const link of sidebar!.querySelectorAll('a')) expect(container.querySelector(link.getAttribute('href')!)).not.toBeNull();
 });
 it('registers the guide in navigation and smoke E2E', async () => {
 const {NAV_ITEMS}=await import('../../lib/navigation'); const {PAGES,EXPECTED_PAGE_COUNT}=await import('../../e2e/pages');
 expect(NAV_ITEMS.find(item=>item.href==='/langgraph-qa-agent-guide')?.category).toBe('books-practices');
 expect(PAGES.find(item=>item.path==='/langgraph-qa-agent-guide')?.h1.test('LangGraphによるQAエージェント構築ガイド')).toBe(true);
 expect(EXPECTED_PAGE_COUNT).toBe(89);
 });
 it('uses the original Mermaid source and explicit original dark palette for every diagram', async () => {
 const {DIAGRAMS}=await import('../../app/langgraph-qa-agent-guide/diagrams');
 const literal = /window.DIAGRAMS = (\{[\s\S]*?\n            \});/.exec((await import('./source')).html)![1]!;
 const original=Function('return ('+literal+')')() as Record<string,string>;
 expect(Object.keys(DIAGRAMS)).toEqual(Object.keys(original));
 for(const [id,chart] of Object.entries(DIAGRAMS)){
 const directive=/^%%\{init: (.*?)\}%%\n/.exec(chart)!;
 expect(directive).not.toBeNull(); const config=JSON.parse(directive[1]!);
 expect(config.theme).toBe('dark'); expect(config.themeVariables.background).toBe('#07111e');
 expect(config.themeVariables.actorTextColor).toBe('#f3f5fa'); expect(directive[0]).not.toContain("'");
 expect(chart.slice(directive[0].length)).toBe(original[id]);
 const real = (await import('mermaid/dist/mermaid.esm.mjs')).default as unknown as {parse: (chart: string) => Promise<unknown>};
 await real.parse(chart);
 }
 });
});
