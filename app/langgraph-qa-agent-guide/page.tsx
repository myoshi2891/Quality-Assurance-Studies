import SyntaxCode from './SyntaxCode';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
import React from 'react';
import type { Metadata } from 'next';
import './langgraph-qa-agent-guide.css';
export const metadata: Metadata = {
    title: 'LangGraphによるQAエージェント構築ガイド — Knowledge Graphs and LLMs in Action 第15章',
    description: 'LangGraphとNeo4jによるQAエージェントの構築を基礎から段階的に学ぶガイド。',
};
export default function Page() {
    return (
        <div className="lgqa-page"><NavBar />
            <main className="main">
                <div className="hero">
                    <div className="eyebrow">{'Knowledge Graphs and LLMs in Action — 第15章'}</div>
                    <h1>{'LangGraphによるQAエージェント構築ガイド'}</h1>
                    <p className="lead">
                        {
                            '\n                        ナレッジグラフに自然言語で質問できるシステムを、ゼロから理解する。State /\n                        Node / Edge の基礎から、Neo4j\n                        スキーマの取り扱い、Text-to-Cypher、条件分岐ルーティング、Streamlit\n                        とのイベントストリーミング連携までをステップバイステップで解説する。\n                    '
                        }
                    </p>
                    <div className="meta">
                        <span>{'初学者向け'}</span>
                        <span>{'2026年9月23日時点の情報'}</span>
                        <span>{'Python / LangGraph / Neo4j'}</span>
                    </div>
                </div>
                <blockquote>
                    <p>
                        {'\n                        本ガイドは '}
                        <em>{'Knowledge Graphs and LLMs in Action'}</em>
                        {
                            '（Alessandro Negro\n                        他, Manning, 2025）第15章「Building a QA agent with\n                        LangGraph」の構成をベースに、2026年9月時点の公式ドキュメントおよび著名な開発者の技術記事を調査してまとめた、初学者向けの解説ガイドです。書籍本文の引用ではなく、独自の言葉で概念とコード例を再構成しています。\n                    '
                        }
                    </p>
                </blockquote>
                <h3>{'この章で学べること'}</h3>
                <ul>
                    <li>
                        {
                            '\n                        LangGraph の基本概念（State / Node /\n                        Edge）と、なぜ「Chain」ではなく「Graph」で組むのかという設計思想\n                    '
                        }
                    </li>
                    <li>
                        {
                            '\n                        ナレッジグラフ（Neo4j）に対して自然言語で質問できるQAエージェントを、LangGraph\n                        で実装するステップバイステップの手順\n                    '
                        }
                    </li>
                    <li>
                        {
                            '\n                        Text-to-Cypher（自然言語からCypherクエリへの変換）における精度向上の実践的テクニックと、実行前の安全性検証\n                    '
                        }
                    </li>
                    <li>
                        {
                            '\n                        エラー時のリトライ・要約・終了を切り替える「条件分岐ルーティング」の組み方\n                    '
                        }
                    </li>
                    <li>
                        {
                            '\n                        Streamlit\n                        などのフロントエンドとリアルタイムに連携する方法（イベントストリーミング、human-in-the-loop、チェックポイントからの再開）\n                    '
                        }
                    </li>
                    <li>{'2026年時点でのベストプラクティスと、今後の発展方向'}</li>
                </ul>
                <section id="overview">
                    <h2>{'0. 全体像：なぜ「LangGraphでQAエージェント」なのか'}</h2>
                    <p>
                        {
                            '\n                        「ナレッジグラフに日本語や英語の自然文で質問すると、Cypherクエリが自動生成されて実行され、結果がグラフやテーブル、地図として返ってくる」——このようなシステムを組むには、単発のプロンプト1本では対応できません。\n                    '
                        }
                    </p>
                    <ul>
                        <li>
                            {'\n                            ユーザーの質問の'}
                            <strong>{'意図'}</strong>
                            {
                                '（表で見たいのか、グラフで見たいのか、地図で見たいのか）を判定する必要がある\n                        '
                            }
                        </li>
                        <li>
                            {
                                '\n                            Neo4j\n                            のスキーマ（ノードラベルやリレーションシップの型）を'
                            }
                            <strong>{'LLMが理解できる形'}</strong>
                            {'に変換する必要がある\n                        '}
                        </li>
                        <li>
                            {
                                '\n                            生成された Cypher\n                            クエリが'
                            }
                            <strong>{'失敗したら再試行'}</strong>
                            {'する必要がある\n                        '}
                        </li>
                        <li>
                            {'\n                            成功した結果を'}
                            <strong>{'人間が読みやすい要約'}</strong>
                            {'に変換する必要がある\n                        '}
                        </li>
                    </ul>
                    <p>
                        {
                            '\n                        これらは一つのプロンプトでは処理しきれない、複数ステップにまたがる「状態を持った」処理です。ここで登場するのが\n                        '
                        }
                        <strong>{'LangGraph'}</strong>
                        {
                            ' です。LangGraph\n                        は、こうした複数ステップの処理を「共有された状態（State）」を介してやり取りする「ノード（Node）」の集まりとしてグラフ構造で表現し、条件によって次に進むノードを動的に切り替える（Edge）ためのオーケストレーション（orchestration）フレームワークです。\n                    '
                        }
                    </p>
                    <p>{'下図は、本ガイドで組み立てるシステムの全体構成です。'}</p>
                    <div className="diagram-block">
                        <div className="diagram-wrap" id="diagram-architecture">
                            <Mermaid chart={DIAGRAMS['diagram-architecture']} />
                        </div>
                        <div className="diagram-caption">{'図1: システム全体のアーキテクチャ'}</div>
                    </div>
                    <p>{'この構成には4つの登場人物がいます。'}</p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'コンポーネント'}</th>
                                    <th>{'役割'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>{'Streamlit（フロントエンド）'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        チャット形式のUIでユーザーの質問と、グラフ上でのノード選択を受け取る\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>{'Question Processing Interface'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        LangGraphパイプラインの実行をイベントストリームとして外部に公開する橋渡し役\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>{'Configuration Provider'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        プロンプトテンプレート、Few-shot例、ドメイン固有の注記を一元管理する\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>{'Schema Provider'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        Neo4jの技術的なスキーマ情報を取得し、余計な要素を除去してLLMが読みやすい形に整形する\n                                    '
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="fundamentals">
                    <h2>{'1. 前提知識のおさらい：LangGraphとは何か'}</h2>
                    <h3>{'1-1. Chain から Graph へ'}</h3>
                    <p>
                        {
                            '\n                        LangChain\n                        が「Chain」（決まった順序で処理を直列につなぐ仕組み）を中心に据えていたのに対して、LangGraph\n                        はその名の通り「Graph」（グラフ構造）を中心に据えています。2024年に\n                        LangGraph\n                        が登場した背景には、「実際の業務プロセスは一直線には進まない」という現実があります。ユーザーは質問の途中で割り込んだり、確認を求めたり、話題を変えたりします。単純な直列パイプラインではこうした分岐や後戻り（サイクル）を表現できません。\n                    '
                        }
                    </p>
                    <p>
                        {
                            '\n                        筆者の見立てでは、この流れは「2024年がRAG、2025年がエージェントに注目が集まった年だとすれば、2026年は\n                        "Stateful\n                        Orchestration"（状態を持つオーケストレーション）が主題になる年」と整理できます。\n                    '
                        }
                    </p>
                    <h3>{'1-2. LangGraphの3要素：State / Node / Edge'}</h3>
                    <p>{'LangGraph を理解するために必要な概念はシンプルです。'}</p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'要素'}</th>
                                    <th>{'役割'}</th>
                                    <th>{'たとえるなら'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>{'State（状態）'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        グラフ全体で共有される、読み書き可能なデータ構造。すべてのノードがこれを介して情報をやり取りする\n                                    '
                                        }
                                    </td>
                                    <td>{'会議で参加者全員が見ている「共有ホワイトボード」'}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>{'Node（ノード）'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        1つの処理単位を表す関数。State を受け取り、更新差分を返す\n                                    '
                                        }
                                    </td>
                                    <td>{'ホワイトボードに情報を書き加える「担当者」'}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>{'Edge（エッジ）'}</strong>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        ノード間の実行順序を定義する。固定の Edge\n                                        と、実行結果に応じて分岐する Conditional Edge がある\n                                    '
                                        }
                                    </td>
                                    <td>{'「次は誰に発言してもらうか」を決める司会進行'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        {
                            '\n                        LangGraph 公式ドキュメントは、LangGraph\n                        を次のように位置づけています。LangGraph\n                        は低レベル（low-level）のオーケストレーション基盤であり、決定論的な手続き型のステップと、LLMによる自律的なステップを同じグラフの中で自由に混在させられる点が特徴です。Klarna\n                        や Uber、J.P. Morgan\n                        といった企業が採用していることも公式に紹介されています。\n                    '
                        }
                    </p>
                    <h3>{'1-3. LangGraphとLangChainの違い'}</h3>
                    <p>
                        {
                            '\n                        初学者が混同しやすいポイントとして、LangChain と LangGraph\n                        は別のライブラリであり、リリースサイクルもAPIも異なります。LangChain\n                        はプロンプトやモデル呼び出し、Retriever（検索器）などの「部品」を提供するツールキットであるのに対し、LangGraph\n                        はそれらの部品を組み合わせて「いつ・どの順で実行するか」を制御するワークフローエンジンです。実務では両方を組み合わせて使うのが一般的です。\n                    '
                        }
                    </p>
                    <h3>{'1-4. 2026年時点の採用状況'}</h3>
                    <p>
                        {
                            '\n                        2026年に入り、LangGraph\n                        は単なる実験的フレームワークから本番運用の標準的選択肢へと位置づけを変えています。LangChain\n                        が2025年11月18日〜12月2日に1,300人超のエンジニア・プロダクトマネージャー・経営層を対象に実施し、2026年6月12日に公開した調査（“State\n                        of Agent Engineering”\n                        レポート）では、57%の組織がすでに何らかのエージェントを本番稼働させている一方、デプロイの最大の障壁として「品質」を挙げた回答が32%を占めたと報告されています。つまり、動くものを作ること自体は簡単になった一方、'
                        }
                        <strong>{'信頼できる形で本番運用する難しさ'}</strong>
                        {
                            'が2026年の主要な論点になっているということです。本ガイドで扱うエラーハンドリングやリトライ設計は、まさにこの「品質」の壁に対応するための実践的な工夫です。\n                    '
                        }
                    </p>
                </section>
                <section id="pipeline-graph">
                    <h2>{'2. パイプライン全体のグラフ構造'}</h2>
                    <p>
                        {
                            '\n                        書籍が扱う事例（警察の捜査支援システム）を一般化すると、QAエージェントのパイプラインは次の5つのノードと、実行結果に応じた条件分岐で構成されます。\n                    '
                        }
                    </p>
                    <div className="diagram-block">
                        <div className="diagram-wrap" id="diagram-pipeline">
                            <Mermaid chart={DIAGRAMS['diagram-pipeline']} />
                        </div>
                        <div className="diagram-caption">
                            {
                                '\n                            図2: パイプラインのノード構成と条件分岐ルーティング（点線が Conditional\n                            Edge）\n                        '
                            }
                        </div>
                    </div>
                    <p>
                        {
                            '\n                        実線は「必ずこの順で進む」通常の\n                        Edge、点線は「実行結果に応じて動的に切り替わる」Conditional Edge\n                        を表しています。このように、正常系だけでなく'
                        }
                        <strong>{'失敗した場合にどこへ戻るか'}</strong>
                        {
                            'をグラフの構造そのもので表現できることが、LangGraph\n                        を使う最大のメリットです。ロジックがコードの奥深くに隠れず、グラフを一目見れば全体の制御フローが把握できます。\n                    '
                        }
                    </p>
                </section>
                <section id="implementation">
                    <h2>{'3. ステップバイステップ実装'}</h2>
                    <p>
                        {
                            '\n                        ここからは実際にコードを組み立てながら、各ステップの意味を理解していきます。\n                    '
                        }
                    </p>
                    <h3>{'Step 1. 環境を準備する'}</h3>
                    <div className="code-tag">{'bash'}</div>
                    <pre>
                        <SyntaxCode language="bash" code={'pip install langgraph langchain langchain-neo4j langchain-openai neo4j streamlit jinja2'} />
                    </pre>
                    <p>
                        {
                            '\n                        2026年時点でLangGraphが公式に対応を明示している Python は 3.10〜3.13\n                        で、3.11 または 3.12 の利用が推奨されています（3.9系は LangGraph 1.1\n                        でサポートが終了しました）。\n                    '
                        }
                    </p>
                    <div className="callout info">
                        <i className="ti ti-info-circle"></i>
                        <span className="callout-title">{'補足'}</span>
                        <p>
                            {'\n                            Step 4 の '}
                            <code>{'SCHEMA_QUERY'}</code>
                            {' が呼び出す\n                            '}
                            <code>{'apoc.meta.schema()'}</code>
                            {
                                ' は APOC Core\n                            のプロシージャです。オンプレミスの Neo4j では、APOC Core の jar を\n                            '
                            }
                            <code>{'plugins'}</code>
                            {' ディレクトリへ導入したうえで、'}
                            <code>{'neo4j.conf'}</code>
                            {'\n                            の '}
                            <code>{'dbms.security.procedures.allowlist'}</code>
                            {' と\n                            '}
                            <code>{'dbms.security.procedures.unrestricted'}</code>
                            {' の両方に\n                            '}
                            <code>{'apoc.meta.schema'}</code>
                            {
                                '\n                            を含めて明示的に実行を許可し、再起動しておく必要があります（Neo4j Aura\n                            では APOC Core が標準で利用可能です）。\n                        '
                            }
                        </p>
                    </div>
                    <h3>{'Step 2. AgentState（共有状態）を設計する'}</h3>
                    <p>
                        {
                            '\n                        State\n                        はパイプライン全体で共有される「記憶」です。ここに何を持たせるかが設計の要になります。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'from typing import TypedDict, Literal, Optional, Any\n\nclass AgentState(TypedDict, total=False):\n    # 入力\n    question: str\n    user_selection: Optional[dict]       # グラフUI上でユーザーが選択中のノード\n\n    # intent_detection の出力\n    output_type: Literal["table", "graph", "map"]\n    intent_reasoning: str\n\n    # schema_extraction の出力\n    llm_schema: str\n\n    # text_to_cypher の出力\n    cypher_query: str\n    cypher_reasoning: str\n    raw_llm_response: str\n\n    # execute_query の出力\n    # チェックポイントに保存されるため、出力形式によらずシリアライズ可能なレコードのリストで持つ\n    results: Optional[list[dict[str, Any]]]\n    summary_results: Optional[list[dict[str, Any]]]  # 要約 LLM へ渡す、機微な値を伏せた結果\n    results_truncated: bool             # MAX_RESULT_ROWS を超えて切り捨てたか\n    results_error: Optional[str]\n    retries: int\n\n    # summarize の出力\n    summary: str\n    needs_analysis: bool'} />
                    </pre>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'フィールド'}</th>
                                    <th>{'用途'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <code>{'question'}</code>
                                        {' / '}
                                        <code>{'user_selection'}</code>
                                    </td>
                                    <td>
                                        {'\n                                        ユーザー入力。'}
                                        <code>{'user_selection'}</code>
                                        {
                                            '\n                                        があることで「選択中の事件」のような文脈参照が可能になる\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>{'output_type'}</code>
                                        {' / '}
                                        <code>{'intent_reasoning'}</code>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        結果をテーブル・グラフ・地図のどれで見せるかの判定結果と、その理由\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>{'llm_schema'}</code>
                                    </td>
                                    <td>{'Neo4jスキーマをLLM向けに整形した文字列（後述）'}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>{'cypher_query'}</code>
                                        {' / '}
                                        <code>{'cypher_reasoning'}</code>
                                        {' /\n                                        '}
                                        <code>{'raw_llm_response'}</code>
                                    </td>
                                    <td>
                                        {'生成されたCypher、生成理由、デバッグ用の生レスポンス'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>{'results'}</code>
                                        {' / '}
                                        <code>{'summary_results'}</code>
                                        {' / '}
                                        <code>{'results_truncated'}</code>
                                        {' /\n                                        '}
                                        <code>{'results_error'}</code>
                                        {' / '}
                                        <code>{'retries'}</code>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        実行結果、要約用に機微な値を伏せた実行結果、上限件数での切り捨て有無、エラー内容、リトライ回数\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>{'summary'}</code>
                                        {' / '}
                                        <code>{'needs_analysis'}</code>
                                    </td>
                                    <td>
                                        {
                                            '\n                                        最終的な要約テキストと、追加の分析が必要かどうかのフラグ\n                                    '
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout note">
                        <i className="ti ti-bulb"></i>
                        <span className="callout-title">{'実務Tips'}</span>
                        <p>
                            {
                                '\n                            2026年の実務では、State定義に Pydantic v2\n                            を使い、実行時バリデーションとIDE補完を効かせる構成も広く採用されています。TypedDict\n                            はシンプルさ重視、Pydanticモデルは型安全性重視という使い分けが一般的です。\n                        '
                            }
                        </p>
                    </div>
                    <h3>{'Step 3. Configuration Provider — プロンプトを一元管理する'}</h3>
                    <p>
                        {
                            '\n                        プロンプト文字列をコードの中に埋め込んでしまうと、少し文言を変えたいだけでもデプロイが必要になります。Configuration\n                        Provider は、Jinja2\n                        のようなテンプレートエンジンを使ってプロンプト・Few-shot例・ドメイン固有の注記（「ANPRカメラとは自動車のナンバープレートを自動認識するカメラである」といった業務知識）を外部ファイルとして管理し、実行時に差し込む役割を担います。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'from jinja2 import Environment, FileSystemLoader\n\nclass ConfigurationProvider:\n    def __init__(self, template_dir: str):\n        self.env = Environment(loader=FileSystemLoader(template_dir))\n\n    def render(self, template_name: str, **kwargs) -> str:\n        template = self.env.get_template(template_name)\n        return template.render(**kwargs)'} />
                    </pre>
                    <p>
                        {
                            '\n                        各ノードが共有するプロンプト提供者と LLM\n                        クライアントは、モジュール読み込み時に1度だけ初期化します。Step 11 の\n                        Streamlit 側では LangGraph の実行設定を\n                        '
                        }
                        <code>{'config'}</code>
                        {' という名前で扱うため、プロンプト提供者は\n                        '}
                        <code>{'prompt_config'}</code>
                        {' と名付けて衝突を避けます。\n                    '}
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import os\n\nfrom langchain_openai import ChatOpenAI\n\n# prompts/ 配下に intent_detection.jinja2 / text_to_cypher.jinja2 / summarize.jinja2 を置く\nprompt_config = ConfigurationProvider("prompts")\n\n# モデル名と API キーは環境変数から読み込み、コードに直接書かない（ChatOpenAI は OPENAI_API_KEY を自動で参照する）。\n# Cypher 生成と意図判定は再現性を優先し、temperature=0 にする\nllm = ChatOpenAI(model=os.environ["OPENAI_MODEL"], temperature=0)'} />
                    </pre>
                    <p>
                        {
                            '\n                        以降のノードでは、LLM の応答を JSON\n                        で返すようテンプレート側で指示し、コード側でその形式を検証してから State\n                        に入れます。こうしておくことで、プロンプトのチューニングとアプリケーションコードの変更を分離でき、プロンプトエンジニアリングの試行錯誤を安全に繰り返せます。\n                    '
                        }
                    </p>
                    <h3>{'Step 4. Schema Provider — Neo4jのスキーマをLLM向けに変換する'}</h3>
                    <p>
                        {
                            '\n                        Text-to-Cypher\n                        の精度を左右する最大の要因は「LLMにどのようなスキーマ情報を渡すか」です。Neo4j\n                        はスキーマレスなグラフDBであるため、'
                        }
                        <code>{'apoc.meta.schema()'}</code>
                        {
                            '\n                        というAPOCプロシージャでノードラベル・リレーションシップ・プロパティをサンプリングして把握します。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'SCHEMA_QUERY = "CALL apoc.meta.schema() YIELD value RETURN value"\n\ndef extract_raw_schema(driver) -> dict:\n    with driver.session() as session:\n        record = session.run(SCHEMA_QUERY).single()\n        return record["value"]\n\ndef to_llm_friendly_schema(\n    raw_schema: dict,\n    skip_labels: set[str],\n    business_notes: dict[str, str],\n) -> str:\n    lines: list[str] = []\n    for label, meta in raw_schema.items():\n        # apoc.meta.schema() はリレーションシップ型も同じマップに返すため、ノードのエントリだけを扱う\n        if meta.get("type") != "node" or label in skip_labels:\n            continue\n        note = business_notes.get(label, "")\n        lines.append(f"- {label}: {note}")\n        for prop, prop_meta in meta.get("properties", {}).items():\n            lines.append(f"    - {prop} ({prop_meta.get(\'type\')})")\n        # リレーションシップの向きと接続先ラベルも渡し、LLM がパターンの向きを誤らないようにする\n        for rel_type, rel_meta in meta.get("relationships", {}).items():\n            # ラベルと同名の型には " (RELATIONSHIP)" が付くため、Cypher で使える型名に戻す\n            rel_name = rel_type.removesuffix(" (RELATIONSHIP)")\n            arrow = "->" if rel_meta.get("direction") == "out" else "<-"\n            targets = ", ".join(rel_meta.get("labels", []))\n            lines.append(f"    - {arrow} [:{rel_name}] {targets}")\n    return "\\n".join(lines)'} />
                    </pre>
                    <p>{'ここで重要な工夫が2つあります。'}</p>
                    <ol>
                        <li>
                            <strong>
                                <code>{'skip_labels'}</code>
                                {' によるフィルタリング'}
                            </strong>
                            {
                                '：内部管理用のラベルや無関係なノードをあらかじめ除外し、LLMに渡すスキーマを必要最小限にします。Neo4j社の公式エンジニアリングブログ（2026年）でも、「スキーマが大きすぎるとコンテキストを圧迫し、LLMを混乱させる可能性があるため、関連する構成要素だけを選んで渡すべきだ」と明確に述べられています。\n                        '
                            }
                        </li>
                        <li>
                            <strong>
                                <code>{'business_notes'}</code>
                                {' によるビジネス注釈の付加'}
                            </strong>
                            {'：'}
                            <code>{'ANPRCamera'}</code>
                            {
                                '\n                            のような技術的なラベル名だけでは意味が伝わらないため、「自動車のナンバープレートを自動認識するカメラ」のような一文を添えることで、LLMの解釈精度が上がります。\n                        '
                            }
                        </li>
                    </ol>
                    <p>
                        {
                            '\n                        この「スキーマフィルタリング」の効果は学術研究でも裏付けられています。2026年に発表された'
                        }
                        <strong>{'CyVerACT'}</strong>
                        {
                            '（Cypher検証を組み込んだエージェント型ワークフロー）の研究では、スキーマフィルタリングとエラー駆動の反復修正を組み合わせることで、構文妥当性で最大52.7%、完全一致精度で13.5%の改善が報告されています。また、スキーマ情報を意味的にフィルタリングして渡す'
                        }
                        <strong>{'T2CSS'}</strong>
                        {
                            'という手法では、GPT-4を用いた実験でCypher生成の正解率が86%に達したという結果も報告されています。\n                    '
                        }
                    </p>
                    <p>
                        {
                            '\n                        これらを組み合わせて、グラフに登録する\n                        '
                        }
                        <code>{'schema_extraction'}</code>
                        {
                            '\n                        ノードを定義します。スキーマはグラフ全体で変わらないため、実運用ではキャッシュしておくと毎回の\n                        '
                        }
                        <code>{'apoc.meta.schema()'}</code>
                        {' 呼び出しを避けられます。\n                    '}
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'SKIP_LABELS = {"_Migration", "_Bloom_Perspective_"}  # 内部管理用ラベルの例\nBUSINESS_NOTES = {"ANPRCamera": "自動車のナンバープレートを自動認識するカメラ"}\n\ndef schema_extraction(state: AgentState) -> dict:\n    raw_schema = extract_raw_schema(driver)\n    llm_schema = to_llm_friendly_schema(raw_schema, SKIP_LABELS, BUSINESS_NOTES)\n    return {"llm_schema": llm_schema}'} />
                    </pre>
                    <h3>{'Step 5. Intent Detection ノード — 質問の意図を判定する'}</h3>
                    <p>
                        {
                            '\n                        最初のノードは、ユーザーの質問が「表で見たいのか」「グラフで見たいのか」「地図で見たいのか」を判定します。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import json\n\nOUTPUT_TYPES = ("table", "graph", "map")\n\ndef parse_json_object(text: str) -> dict:\n    # intent_detection.jinja2 / text_to_cypher.jinja2 では JSON オブジェクトだけを返すよう指示する。\n    # コードフェンス付きで返された場合に備え、最初の { から最後の } までを取り出して解析する\n    start, end = text.find("{"), text.rfind("}")\n    if start < 0 or end < start:\n        raise ValueError(f"LLM の応答に JSON オブジェクトがありません: {text[:200]}")\n    data = json.loads(text[start : end + 1])\n    if not isinstance(data, dict):\n        raise ValueError("LLM の応答が JSON オブジェクトではありません")\n    return data\n\ndef parse_intent_response(text: str) -> tuple[str, str]:\n    # 期待する形式: {"output_type": "table" | "graph" | "map", "reasoning": "..."}\n    data = parse_json_object(text)\n    output_type = data.get("output_type")\n    if output_type not in OUTPUT_TYPES:\n        raise ValueError(f"未知の output_type です: {output_type!r}")\n    return output_type, str(data.get("reasoning", ""))\n\ndef intent_detection(state: AgentState) -> dict:\n    prompt = prompt_config.render(\n        "intent_detection.jinja2",\n        question=state["question"],\n    )\n    response = llm.invoke(prompt)\n    output_type, reasoning = parse_intent_response(response.content)\n    return {\n        "output_type": output_type,\n        "intent_reasoning": reasoning,\n    }'} />
                    </pre>
                    <p>
                        {'\n                        ここでのポイントは、'}
                        <strong>
                            {
                                'この判定結果が後続のルーティング（表なら要約をスキップして即終了、グラフ／地図なら要約ノードへ進む）を左右する'
                            }
                        </strong>
                        {
                            'ことです。判定を最初のノードで済ませておくことで、後段のロジックがシンプルになります。\n                    '
                        }
                    </p>
                    <h3>{'Step 6. Text-to-Cypher ノード — 自然言語をCypherに変換する'}</h3>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'def parse_cypher_response(text: str) -> tuple[str, str]:\n    # 期待する形式: {"cypher": "MATCH ...", "reasoning": "..."}（parse_json_object は Step 5 で定義）\n    data = parse_json_object(text)\n    query = data.get("cypher")\n    if not isinstance(query, str) or not query.strip():\n        raise ValueError("LLM の応答に cypher がありません")\n    return query.strip(), str(data.get("reasoning", ""))\n\ndef text_to_cypher(state: AgentState) -> dict:\n    prompt = prompt_config.render(\n        "text_to_cypher.jinja2",\n        question=state["question"],\n        schema=state["llm_schema"],\n        selection=state.get("user_selection"),\n        previous_error=state.get("results_error"),\n    )\n    response = llm.invoke(prompt)\n    query, reasoning = parse_cypher_response(response.content)\n    return {\n        "cypher_query": query,\n        "cypher_reasoning": reasoning,\n        "raw_llm_response": response.content,\n    }'} />
                    </pre>
                    <p>
                        {'\n                        このノードが「選択中のノード」（'}
                        <code>{'user_selection'}</code>
                        {'）と「前回のエラー内容」（'}
                        <code>{'previous_error'}</code>
                        {
                            '）の両方を\n                        State\n                        から読み取っている点に注目してください。これにより、ユーザーが「選択中の事件に関連する車両を教えて」のような'
                        }
                        <strong>{'文脈参照を含む質問'}</strong>
                        {
                            'をしても正しくCypherを組み立てられますし、リトライ時には前回の失敗理由をプロンプトに含めて再生成の精度を上げられます。\n                    '
                        }
                    </p>
                    <h3>{'Step 7. Query Execution ノード — 実行してエラーを捕捉する'}</h3>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import re\n\nfrom collections.abc import Iterator\nfrom itertools import chain\nfrom typing import Any\n\nfrom neo4j import unit_of_work\nfrom neo4j.exceptions import ClientError\nfrom neo4j.graph import Node, Path, Relationship\nfrom neo4j.spatial import Point\nfrom neo4j.time import Date, DateTime, Duration, Time\n\n# プロンプトの指示に頼らず、実行時間と返却件数をコード側で強制的に制限する\nQUERY_TIMEOUT_SECONDS = 10\nMAX_RESULT_ROWS = 1000\n# 行数の上限だけでは collect() などの集計が 1 行に巨大なリストを詰めた結果を防げないため、\n# 行の中身（リスト・マップ・プロパティの要素数と文字列の長さ）の合計にも上限を設ける\nMAX_RESULT_ELEMENTS = 50_000\nMAX_RESULT_TEXT_CHARS = 2_000_000\n# to_dto() は入れ子 1 段ごとに数フレーム再帰するため、Python の再帰上限（既定 1000）より十分小さい深さで拒否する\nMAX_RESULT_DEPTH = 100\n\n# LLM が生成した Cypher は信頼できない入力として扱い、書き込み操作を実行前に拒否する\nWRITE_CLAUSE_RE = re.compile(\n    r"\\b(CREATE|MERGE|DELETE|DETACH|SET|REMOVE|DROP|FOREACH|LOAD\\s+CSV)\\b",\n    re.IGNORECASE,\n)\n# プロシージャ名は `apoc`.`load` のようにバッククォートで分割して書けるため、句の検査とは別の字句解析結果で検査する\nWRITE_PROCEDURE_RE = re.compile(\n    r"\\bCALL\\s+(dbms\\s*\\.|db\\s*\\.\\s*create|apoc\\s*\\.\\s*(create|merge|refactor|periodic|load))",\n    re.IGNORECASE,\n)\n\n# Cypher を字句として先頭から走査し、文字列リテラル・コメント・バッククォート識別子を区別する。\n# 交互パターンは最左一致で消費されるため、文字列内の // やコメント内の引用符を誤って境界と見なさない\nCYPHER_LEXEME_RE = re.compile(\n    r"\'(?:[^\'\\\\]|\\\\.)*\'"      # 単引用符の文字列リテラル\n    r\'|"(?:[^"\\\\]|\\\\.)*"\'     # 二重引用符の文字列リテラル\n    r"|`((?:[^`]|``)*)`"      # バッククォート識別子（中身はグループ 1）\n    r"|//[^\\n]*"              # 行コメント\n    r"|/\\*.*?\\*/",            # ブロックコメント\n    re.DOTALL,\n)\n\ndef strip_non_clause_text(cypher: str) -> str:\n    # 文字列とコメントは句になり得ないので空白へ置き換える。\n    # バッククォート識別子（`Create` のようなラベル名など）も句にはならないため、中身を残さず中立なプレースホルダーへ置き換える\n    return CYPHER_LEXEME_RE.sub(\n        lambda m: "_ident_" if m.group(1) is not None else " ",\n        cypher,\n    )\n\ndef unquote_identifiers(cypher: str) -> str:\n    # プロシージャ名の検査用。文字列とコメントは空白へ置き換え、バッククォート識別子は中身を展開して\n    # `apoc`.`load`.json のように分割された名前も apoc.load.json として検査できるようにする\n    return CYPHER_LEXEME_RE.sub(\n        lambda m: m.group(1).replace("``", "`") if m.group(1) is not None else " ",\n        cypher,\n    )\n\nclass CypherValidationError(Exception):\n    pass\n\nclass ResultTooLargeError(CypherValidationError):\n    # LIMIT や collect(x)[..100] のように結果を絞れば解消するため、LLM に再生成させる対象として扱う\n    pass\n\n_EXHAUSTED = object()\n\ndef ensure_payload_within_limits(records: list) -> None:\n    # to_dto() の再帰変換より前に、明示的なスタックで結果全体を 1 回だけ走査して上限を強制する。\n    # コンテナの中身は一括でリスト化せず反復子として積み、1 要素ずつ取り出すため、\n    # 巨大な collect() 結果でも上限を超えた時点で走査を打ち切り、中身の複製を確保しない。\n    # 列名・マップのキー・ラベル・型名・element_id も to_dto() の出力に残るため、値と同じく文字数に数える\n    elements = 0\n    text_chars = 0\n    stack: list[Iterator[Any]] = [\n        chain.from_iterable(chain.from_iterable(r.items()) for r in records)\n    ]\n    while stack:\n        value = next(stack[-1], _EXHAUSTED)\n        if value is _EXHAUSTED:\n            stack.pop()\n            continue\n        elements += 1\n        if isinstance(value, str):\n            text_chars += len(value)\n        elif isinstance(value, (bytes, bytearray)):\n            # バイト列も to_dto() の出力サイズに効くため、長さを文字数の上限に合算する\n            text_chars += len(value)\n        elif isinstance(value, Path):\n            stack.append(chain(value.nodes, value.relationships))\n        elif isinstance(value, (DateTime, Date, Time, Duration)):\n            # to_dto() は時間型を ISO 8601 文字列へ変換するため、その長さを文字数に数える。\n            # Duration は tuple のサブクラスなので、tuple 判定より前に処理する\n            text_chars += len(value.iso_format())\n        elif isinstance(value, Node):\n            stack.append(chain([value.element_id], value.labels, chain.from_iterable(value.items())))\n        elif isinstance(value, Relationship):\n            endpoints = [n.element_id for n in (value.start_node, value.end_node) if n is not None]\n            stack.append(\n                chain([value.element_id, value.type], endpoints, chain.from_iterable(value.items()))\n            )\n        elif isinstance(value, (list, tuple)):\n            stack.append(iter(value))\n        elif isinstance(value, dict):\n            stack.append(chain.from_iterable(value.items()))\n        # 先頭の反復子（行の集合）を除いたスタックの長さが、現在の値の入れ子の深さに等しい\n        if len(stack) - 1 > MAX_RESULT_DEPTH:\n            raise ResultTooLargeError(\n                "クエリ結果の入れ子が深すぎます。リストやマップを入れ子にせず、平坦な形で返すよう Cypher を書き直してください"\n            )\n        if elements > MAX_RESULT_ELEMENTS or text_chars > MAX_RESULT_TEXT_CHARS:\n            raise ResultTooLargeError(\n                "クエリ結果が大きすぎます。LIMIT を付けるか、collect() の結果を collect(x)[..100] のようにスライスして件数を絞ってください"\n            )\n\n# LLM が Cypher を書き直せば解消し得る ClientError のコード接頭辞（構文・意味の誤りと実行タイムアウト）\nREPAIRABLE_ERROR_PREFIXES = (\n    "Neo.ClientError.Statement.",\n    "Neo.ClientError.Transaction.TransactionTimedOut",\n)\n\ndef ensure_read_only(cypher: str) -> None:\n    # 未終端の文字列・コメントはどの字句にも一致せず走査対象に残るため、判定は拒否側に倒れる\n    if WRITE_CLAUSE_RE.search(strip_non_clause_text(cypher)) or WRITE_PROCEDURE_RE.search(\n        unquote_identifiers(cypher)\n    ):\n        raise CypherValidationError("書き込み操作を含む Cypher は実行できません")\n\ndef to_dto(value: Any) -> Any:\n    # Record.data() はノードをプロパティの辞書に潰してラベルや ID を失うため、グラフ描画に必要な情報を明示的に残す\n    if isinstance(value, Node):\n        return {\n            "kind": "node",\n            "element_id": value.element_id,\n            "labels": sorted(value.labels),\n            "properties": to_dto(dict(value)),\n        }\n    if isinstance(value, Relationship):\n        return {\n            "kind": "relationship",\n            "element_id": value.element_id,\n            "type": value.type,\n            "start": value.start_node.element_id if value.start_node else None,\n            "end": value.end_node.element_id if value.end_node else None,\n            "properties": to_dto(dict(value)),\n        }\n    if isinstance(value, Path):\n        return {\n            "kind": "path",\n            "nodes": [to_dto(n) for n in value.nodes],\n            "relationships": [to_dto(r) for r in value.relationships],\n        }\n    # neo4j の時間型・空間型はチェックポイントのシリアライザが扱えないため、ISO 8601 文字列と座標の辞書へ変換する\n    if isinstance(value, (DateTime, Date, Time, Duration)):\n        return value.iso_format()\n    # Point は tuple のサブクラスなので、list 判定より前に処理して SRID を失わないようにする\n    if isinstance(value, Point):\n        return {"kind": "point", "srid": value.srid, "coordinates": list(value)}\n    if isinstance(value, list):\n        return [to_dto(v) for v in value]\n    if isinstance(value, dict):\n        return {k: to_dto(v) for k, v in value.items()}\n    return value\n\n# 要約に不要な機微プロパティ。データモデルに合わせて定義し、スキーマ変更時に見直す\nSENSITIVE_KEYS = frozenset({"name", "phone", "address", "date_of_birth", "plate_number", "is_flagged"})\nREDACTED = "[REDACTED]"\n\ndef to_summary_dto(value: Any, *, trusted_origin: bool = False) -> Any:\n    # 要約 LLM へ渡す値を、DTO ではなくドライバが返した実際の型から作る。\n    # 列名やマップのキーは Cypher の AS やマップ射影（RETURN p.name AS suspect など）で自由に付け替えられ、\n    # {kind: \'node\', ...} のようなマップで DTO の形も偽装できるため、キー名によるマスキングの根拠にしない。\n    # trusted_origin は「値がノード・リレーションシップの機微でないプロパティ由来である」ことが分かっている場合だけ True になる\n    if isinstance(value, (Node, Relationship)):\n        # ノード・リレーションシップのプロパティ名だけはスキーマ由来で付け替えられないため、SENSITIVE_KEYS で判定する\n        props = {\n            k: REDACTED if k in SENSITIVE_KEYS else to_summary_dto(v, trusted_origin=True)\n            for k, v in dict(value).items()\n        }\n        if isinstance(value, Node):\n            return {"kind": "node", "labels": sorted(value.labels), "properties": props}\n        return {"kind": "relationship", "type": value.type, "properties": props}\n    if isinstance(value, Path):\n        return {\n            "kind": "path",\n            "nodes": [to_summary_dto(n) for n in value.nodes],\n            "relationships": [to_summary_dto(r) for r in value.relationships],\n        }\n    # null は残す\n    if value is None:\n        return value\n    # 真偽値も RETURN p.is_flagged AS f のように機微なフラグがエイリアス経由で投影され得るため、出所が分かる場合だけ残す\n    # （bool は int のサブクラスなので数値判定より前に処理する）\n    if isinstance(value, bool):\n        return value if trusted_origin else REDACTED\n    # 数値は出所が分かる場合だけ残す。列やマップの値として返った数値は、RETURN p.phone AS n のように\n    # 数値型の機微なプロパティがエイリアス経由で投影されたものか、count(*) などの集計値かを区別できないため、\n    # 件数などの集計値も含めて要約ペイロードから除外する（表示用の results には残る）\n    if isinstance(value, (int, float)):\n        return value if trusted_origin else REDACTED\n    # 文字列・時間型・空間型はエイリアス経由で機微なプロパティが投影され得るため、出所が分からなければキー名によらず伏せる。\n    # 機微でないプロパティ由来と分かっている場合だけ、to_dto で ISO 8601 文字列や座標の辞書へ変換して残す\n    if isinstance(value, (str, DateTime, Date, Time, Duration, Point)):\n        return to_dto(value) if trusted_origin else REDACTED\n    if isinstance(value, list):\n        return [to_summary_dto(v, trusted_origin=trusted_origin) for v in value]\n    if isinstance(value, dict):\n        # マップのキーはマップ射影（p {n: p.phone} など）で付け替えられるため出所の根拠にせず、値は常に未信頼として扱う。\n        # 元のプロパティ名を保つ射影（p {.phone}）への多層防御として SENSITIVE_KEYS でも伏せる\n        return {k: REDACTED if k in SENSITIVE_KEYS else to_summary_dto(v) for k, v in value.items()}\n    return REDACTED\n\n@unit_of_work(timeout=QUERY_TIMEOUT_SECONDS)\ndef run_read_query(tx, cypher: str) -> tuple[list[dict], list[dict], bool]:\n    # fetch は指定件数までしか取り出さないため、大規模な結果をすべてメモリへ読み込まない。\n    # 上限より 1 件多く取り出し、超過の有無で「上限ちょうど」と「切り捨て」を区別する\n    records = tx.run(cypher).fetch(MAX_RESULT_ROWS + 1)\n    kept = records[:MAX_RESULT_ROWS]\n    # 行数の上限内でも、集計値の中身が大きすぎる結果は変換・State 保存・LLM 送信の前に拒否する\n    ensure_payload_within_limits(kept)\n    rows = [{key: to_dto(value) for key, value in r.items()} for r in kept]\n    # 変換前の検査は to_dto() の出力サイズの見積もりのため、State に保存する実際のペイロードでも上限を確認する\n    ensure_payload_within_limits(rows)\n    # 列名はエイリアスで付け替えられるため、列の値ごとに実際の型から要約用の値を作る\n    summary_rows = [{key: to_summary_dto(value) for key, value in r.items()} for r in kept]\n    # 要約用の値も State 保存・LLM 送信の対象になるため、変換後の実際のペイロードで上限を確認する\n    ensure_payload_within_limits(summary_rows)\n    return rows, summary_rows, len(records) > MAX_RESULT_ROWS\n\ndef execute_query(state: AgentState) -> dict:\n    retries = state.get("retries", 0)\n    try:\n        ensure_read_only(state["cypher_query"])\n        with driver.session() as session:\n            # execute_read は読み取りモードのトランザクションを選ぶ（クラスタでは読み取りレプリカへ振り分ける）だけで、\n            # 書き込みを防ぐ境界ではない。書き込みの最終的な防止は、下記の reader ロールのみを持つユーザーで担保する\n            records, summary_records, truncated = session.execute_read(run_read_query, state["cypher_query"])\n    except CypherValidationError as exc:\n        # アプリ側の検証で拒否した書き込み操作は、エラー内容を渡して LLM に再生成させる\n        return {"results_error": str(exc), "retries": retries + 1}\n    except ClientError as exc:\n        # 認証・権限（Neo.ClientError.Security.*）などは Cypher を直しても解消しないため、再生成させずに送出する\n        if not (exc.code or "").startswith(REPAIRABLE_ERROR_PREFIXES):\n            raise\n        # Cypher 自体の誤り（構文・意味）とタイムアウトは、エラー内容を渡して LLM に再生成させる\n        return {"results_error": str(exc), "retries": retries + 1}\n    # ServiceUnavailable や TransientError などの一時障害は捕捉せず、Step 10 の RetryPolicy に再試行させる\n\n    return {\n        "results": records,\n        "summary_results": summary_records,\n        "results_truncated": truncated,\n        "results_error": None,\n    }'} />
                    </pre>
                    <p>
                        <code>{'driver'}</code>
                        {' には、'}
                        <code>{'reader'}</code>
                        {'\n                        ロールのみを付与した'}
                        <strong>{'読み取り専用ユーザー'}</strong>
                        {
                            'の認証情報を使ってください。書き込みを実際に止める境界はこの\n                        DB\n                        側の権限です。アプリ側の検証とDB側の権限の二重防御にしておけば、プロンプトインジェクションなどで書き込みを含む\n                        Cypher が生成されても、データは改変されません。\n                    '
                        }
                    </p>
                    <p>
                        {
                            '\n                        接続経路は TLS で暗号化し、サーバー証明書の検証を必須にしてください。URI\n                        には '
                        }
                        <code>{'neo4j+s://'}</code>
                        {'（TLS + 証明書検証あり）を使い、暗号化しない\n                        '}
                        <code>{'neo4j://'}</code>
                        {' / '}
                        <code>{'bolt://'}</code>
                        {' や、証明書を検証しない\n                        '}
                        <code>{'neo4j+ssc://'}</code>
                        {' /\n                        '}
                        <code>{'bolt+ssc://'}</code>
                        {
                            '\n                        は使いません。認証情報とクエリ結果（捜査情報のような機微なデータを含む）が平文でネットワークに流れるのを防ぐためです。自己署名の社内\n                        CA を使う場合も検証は省略せず、その CA 証明書を信頼ストアに追加します。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import os\n\nfrom neo4j import GraphDatabase\n\n# neo4j+s:// は TLS 暗号化とサーバー証明書の検証を行う。認証情報は環境変数から読み込み、コードに直接書かない\nNEO4J_URI = os.environ["NEO4J_URI"]  # 例: neo4j+s://xxxx.databases.neo4j.io\n# 暗号化しない neo4j:// や証明書検証を省略する neo4j+ssc:// で接続しないよう、接続前にスキームを検証する\nif not NEO4J_URI.startswith("neo4j+s://"):\n    raise ValueError("NEO4J_URI は neo4j+s:// で始まる必要があります")\n\ndriver = GraphDatabase.driver(\n    NEO4J_URI,\n    auth=(os.environ["NEO4J_READER_USER"], os.environ["NEO4J_READER_PASSWORD"]),\n)'} />
                    </pre>
                    <p>
                        {'\n                        この共有\n                        '}
                        <code>{'driver'}</code>
                        {'\n                        構成は'}
                        <strong>{'単一テナント前提'}</strong>
                        {
                            'です。全利用者が同じ読み取り専用ユーザーの権限でクエリを実行するため、同じデータベース内の全データを参照できる利用者だけが使う環境に限ってください。利用者や組織ごとに参照範囲が異なる（マルチテナントの）場合は、認証済みの利用者・テナント情報を\n                        '
                        }
                        <code>{'question'}</code>
                        {' とは別の経路で '}
                        <code>{'AgentState'}</code>
                        {' と\n                        '}
                        <code>{'process_question'}</code>
                        {
                            ' に渡し、生成された Cypher\n                        の内容に依存しない形で Neo4j 側に認可を強制します。たとえば\n                        '
                        }
                        <code>{'driver.session(impersonated_user=...)'}</code>
                        {
                            ' で利用者ごとの Neo4j\n                        ユーザーに切り替え、ロールベースの細粒度アクセス制御で参照範囲を絞ります。「テナント\n                        ID で絞り込む WHERE 句を付けて」とプロンプトで LLM\n                        に指示するだけでは、生成結果に左右されるため認可の境界になりません。\n                    '
                        }
                    </p>
                    <div className="callout warning">
                        <i className="ti ti-alert-triangle"></i>
                        <span className="callout-title">{'セキュリティ上の注意'}</span>
                        <p>
                            <code>{'apoc.load.*'}</code>
                            {
                                ' は外部URLやファイルを読み込めるため、生成された\n                            Cypher\n                            経由で社内の未承認URLへアクセスされる（SSRF）おそれがあります。正規表現での拒否に加えて、'
                            }
                            <code>{'dbms.security.procedures.allowlist'}</code>
                            {
                                '\n                            で許可する APOC を必要なもの（本ガイドでは\n                            '
                            }
                            <code>{'apoc.meta.schema'}</code>
                            {'）だけに絞り、'}
                            <code>{'apoc.conf'}</code>
                            {' の\n                            '}
                            <code>{'apoc.import.file.enabled=false'}</code>
                            {
                                ' 設定と、Neo4j\n                            サーバーからの外向き通信を許可リストやファイアウォールで制限するネットワーク制御を併用してください。\n                        '
                            }
                        </p>
                    </div>
                    <p>
                        {'\n                        State はチェックポインタに保存されるため、'}
                        <code>{'results'}</code>
                        {'\n                        には出力形式によらずシリアライズ可能な'}
                        <strong>{'レコードのリスト'}</strong>
                        {'を格納します。'}
                        <code>{'Record.data()'}</code>
                        {
                            '\n                        はノードをプロパティの辞書に変換する際にラベルや\n                        '
                        }
                        <code>{'element_id'}</code>
                        {
                            '\n                        を捨ててしまい、リレーションシップも始点・終点が分からなくなります。そのため\n                        '
                        }
                        <code>{'to_dto()'}</code>
                        {' でノードのラベルと\n                        '}
                        <code>{'element_id'}</code>
                        {
                            '、リレーションシップの型・始点・終点を明示的に保持してから State\n                        に入れます。'
                        }
                        <code>{'Result.graph()'}</code>
                        {
                            '\n                        からグラフ表示用のデータを組み立てる場合も、neo4j\n                        ドライバのオブジェクトをそのまま State に置かず、checkpoint\n                        保存前に同じ形の辞書へ変換してください。テーブル表示用の DataFrame\n                        への変換は、Step 11 のようにグラフの外（描画直前）で行います。\n                    '
                        }
                    </p>
                    <p>
                        <code>{'QUERY_TIMEOUT_SECONDS'}</code>
                        {'\n                        を超えたクエリはサーバー側で打ち切られ、'}
                        <code>{'ClientError'}</code>
                        {' として LLM\n                        に再生成させる対象になります。'}
                        <code>{'MAX_RESULT_ROWS'}</code>
                        {
                            '\n                        を超える行は返さないため、可視化や要約に渡すデータ量も上限内に収まります。ただし黙って切り捨てると、利用者は一部の結果を全件と誤解します。そこで上限より\n                        1 件多く取得して超過を\n                        '
                        }
                        <code>{'results_truncated'}</code>
                        {
                            ' に記録し、要約プロンプト（Step\n                        9）と画面表示（Step 11）の両方で切り捨てを明示します。\n                    '
                        }
                    </p>
                    <p>
                        {'\n                        行数の上限は外側のレコード数しか制限しません。'}
                        <code>{'RETURN collect(p)'}</code>
                        {' のような集計は 1 行に任意の件数の要素を詰められるため、'}
                        <code>{'ensure_payload_within_limits()'}</code>
                        {' で行の中身の要素数（'}
                        <code>{'MAX_RESULT_ELEMENTS'}</code>
                        {'）とテキストの合計長（'}
                        <code>{'MAX_RESULT_TEXT_CHARS'}</code>
                        {
                            '。文字列・バイト列の長さと、時間型の ISO 8601 表現の長さを数える）も検査します。あわせて、'
                        }
                        <code>{'to_dto()'}</code>
                        {' が再帰で変換する入れ子の深さ（'}
                        <code>{'MAX_RESULT_DEPTH'}</code>
                        {'）も同じ走査で検査し、'}
                        <code>{'RecursionError'}</code>
                        {' になる前に拒否します。検査は 3 回行い、対象は '}
                        <code>{'kept'}</code>
                        {'・'}
                        <code>{'rows'}</code>
                        {'・'}
                        <code>{'summary_rows'}</code>
                        {' です。まず '}
                        <code>{'to_dto()'}</code>
                        {' の前に取得した値（'}
                        <code>{'kept'}</code>
                        {
                            '）を検査し、変換後の出力サイズを見積もって明らかな超過を変換前に拒否します。続いて '
                        }
                        <code>{'to_dto()'}</code>
                        {' で変換した行（'}
                        <code>{'rows'}</code>
                        {'。State に保存する実際のペイロード）を再検査します。最後に '}
                        <code>{'to_summary_dto()'}</code>
                        {' で作った要約用の行（'}
                        <code>{'summary_rows'}</code>
                        {
                            '。State 保存と LLM 送信の対象）も検査します。変換後の 2 回の検査で超過が見つかった場合は、その時点で拒否します。いずれの場合も '
                        }
                        <code>{'ResultTooLargeError'}</code>
                        {' を送出します。'}
                        <code>{'CypherValidationError'}</code>
                        {' のサブクラスなので、既存の分岐でエラー内容が LLM に渡り、'}
                        <code>{'LIMIT'}</code>
                        {' や '}
                        <code>{'collect(x)[..100]'}</code>
                        {
                            ' で絞った Cypher に再生成されます。なお、この検査はドライバがレコードを受信した後に行うため、State・チェックポイント・LLM に渡すペイロードは制限できますが、受信時のメモリ使用量までは制限しません。受信量そのものを抑えるには、上記のクエリタイムアウトに加えて、DB 側でトランザクションごとのメモリ上限（'
                        }
                        <code>{'db.memory.transaction.max'}</code>
                        {'）を設定してください。\n                    '}
                    </p>
                    <p>
                        {'ここまでの安全対策をまとめると、次の観点をカバーしていることになります。'}
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'観点'}</th>
                                    <th>{'対策'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'書き込み拒否'}</td>
                                    <td>
                                        <code>{'ensure_read_only()'}</code>
                                        {
                                            ' が Cypher\n                                        の句とプロシージャ名を字句解析し、CREATE / MERGE / DELETE\n                                        などを実行前に拒否する\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'DB側の最終防御'}</td>
                                    <td>
                                        <code>{'driver'}</code>
                                        {' には\n                                        '}
                                        <code>{'reader'}</code>
                                        {
                                            '\n                                        ロールのみを持つ読み取り専用ユーザーを使う。アプリ側の検証とDB側の権限の二重防御にする\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'通信の暗号化'}</td>
                                    <td>
                                        {'\n                                        接続URIは '}
                                        <code>{'neo4j+s://'}</code>
                                        {
                                            '（TLS +\n                                        証明書検証あり）を使う。暗号化しない\n                                        '
                                        }
                                        <code>{'neo4j://'}</code>
                                        {' や検証省略の\n                                        '}
                                        <code>{'neo4j+ssc://'}</code>
                                        {' は使わない\n                                    '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'マルチテナント'}</td>
                                    <td>
                                        {
                                            '\n                                        利用者ごとに参照範囲が異なる場合は、認証済みの利用者情報を\n                                        State とは別経路で渡し、'
                                        }
                                        <code>{'driver.session(impersonated_user=...)'}</code>
                                        {
                                            '\n                                        やロールベースのアクセス制御で範囲を強制する（プロンプト内の指示だけに頼らない）\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'SSRF対策'}</td>
                                    <td>
                                        <code>{'apoc.load.*'}</code>
                                        {' は外部URLを読み込めるため、'}
                                        <code>{'dbms.security.procedures.allowlist'}</code>
                                        {
                                            '\n                                        で許可するAPOCを最小限に絞り、ネットワーク制御も併用する\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'結果のシリアライズ'}</td>
                                    <td>
                                        <code>{'to_dto()'}</code>
                                        {
                                            '\n                                        でノードのラベル・IDやリレーションシップの始点終点を保持したまま辞書に変換し、checkpoint\n                                        に安全に保存できる形にする\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'実行時間と件数の上限'}</td>
                                    <td>
                                        <code>{'QUERY_TIMEOUT_SECONDS'}</code>
                                        {' と\n                                        '}
                                        <code>{'MAX_RESULT_ROWS'}</code>
                                        {
                                            ' をコード側で強制し、超過分は\n                                        '
                                        }
                                        <code>{'results_truncated'}</code>
                                        {
                                            ' で明示する。行数の上限内でも集計値の中身が大きすぎる場合は\n                                        '
                                        }
                                        <code>{'ensure_payload_within_limits()'}</code>
                                        {' が '}
                                        <code>{'ResultTooLargeError'}</code>
                                        {
                                            '\n                                        を送出し、LLM に '
                                        }
                                        <code>{'LIMIT'}</code>
                                        {' や '}
                                        <code>{'collect(x)[..100]'}</code>
                                        {
                                            ' で絞った Cypher を再生成させる\n                                    '
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>{'Step 8. 条件分岐ルーティング — リトライ・要約・終了を切り替える'}</h3>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'from typing import Literal\n\nMAX_RETRIES = 3\n\ndef route_after_execution(state: AgentState) -> Literal["retry", "summarize", "end"]:\n    if state.get("results_error"):\n        # 上限未満なら再生成、上限に達したらエラーのまま終了（要約には進ませない）\n        return "retry" if state.get("retries", 0) < MAX_RETRIES else "end"\n    if state.get("output_type") in ("graph", "map"):\n        return "summarize"\n    return "end"'} />
                    </pre>
                    <p>{'この1つの関数が、パイプライン全体の「賢さ」を決めます。'}</p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'条件'}</th>
                                    <th>{'遷移先'}</th>
                                    <th>{'意味'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'エラーあり かつ リトライ回数 < 3'}</td>
                                    <td>
                                        <code>{'text_to_cypher'}</code>
                                        {' へ戻る'}
                                    </td>
                                    <td>{'エラー内容をプロンプトに含めて再生成を試みる'}</td>
                                </tr>
                                <tr>
                                    <td>
                                        {'成功 かつ '}
                                        <code>{'output_type'}</code>
                                        {' が graph／map'}
                                    </td>
                                    <td>
                                        <code>{'summarize'}</code>
                                        {' へ進む'}
                                    </td>
                                    <td>{'可視化結果を人間向けの文章に要約する'}</td>
                                </tr>
                                <tr>
                                    <td>
                                        {'成功 かつ '}
                                        <code>{'output_type'}</code>
                                        {' が table'}
                                    </td>
                                    <td>{'終了'}</td>
                                    <td>{'表はそのまま表示すれば十分なので要約をスキップ'}</td>
                                </tr>
                                <tr>
                                    <td>{'エラーが解消せずリトライ上限に到達'}</td>
                                    <td>{'終了（エラー表示）'}</td>
                                    <td>{'ユーザーに再質問を促す'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>{'Step 9. Summarization ノード — 結果を人間向けの文章にする'}</h3>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import os\n\n# 承認済みエンドポイント・保持設定・テナントのデータ処理ポリシーはコードから検証できない。\n# 下記の運用上の前提条件を確認した環境でだけ、明示的に "true" を設定して外部 LLM への送信を許可する\nSUMMARY_LLM_TRANSFER_APPROVED = os.environ.get("SUMMARY_LLM_TRANSFER_APPROVED") == "true"\n\ndef summarize(state: AgentState) -> dict:\n    if not SUMMARY_LLM_TRANSFER_APPROVED:\n        # 送信条件を満たさない環境ではクエリ結果を LLM へ送らない。要約は空のまま終え、表・グラフ・地図の表示だけを行う\n        return {"summary": ""}\n    prompt = prompt_config.render(\n        "summarize.jinja2",\n        question=state["question"],\n        # Step 7 の to_summary_dto で伏せた結果だけをプロンプトに含め、表示用の results は渡さない\n        results=state.get("summary_results") or [],\n        # True なら「上限件数までの部分結果である」ことを要約文に明記するようテンプレートで指示する\n        results_truncated=state.get("results_truncated", False),\n        needs_analysis=state.get("needs_analysis", False),\n    )\n    response = llm.invoke(prompt)\n    return {"summary": response.content}'} />
                    </pre>
                    <p>
                        {
                            '\n                        書籍の事例では、同じ車両検出データであっても「捜査上の文脈」が追加されるだけで、要約が単なる事実列挙から「不審な時間パターンを指摘する分析」へと質が変わる様子が示されています。これは、要約プロンプトに'
                        }
                        <strong>{'ドメイン知識と追加コンテキストを注入できる設計'}</strong>
                        {'にしておくことの価値を示す好例です。\n                    '}
                    </p>
                    <h3>{'Step 10. グラフを組み立ててコンパイルする'}</h3>
                    <p>
                        {'\n                        すべてのノードを '}
                        <code>{'StateGraph'}</code>
                        {
                            ' に登録し、Edge と Conditional Edge\n                        を接続します。\n                    '
                        }
                    </p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import streamlit as st\nfrom langgraph.checkpoint.memory import InMemorySaver\nfrom langgraph.graph import StateGraph, START, END\nfrom langgraph.types import RetryPolicy\n\ngraph = StateGraph(AgentState)\n\ngraph.add_node("intent_detection", intent_detection)\ngraph.add_node("schema_extraction", schema_extraction)\ngraph.add_node("text_to_cypher", text_to_cypher)\ngraph.add_node(\n    "execute_query",\n    execute_query,\n    retry_policy=RetryPolicy(max_attempts=3, initial_interval=0.5, backoff_factor=2.0),\n)\ngraph.add_node("summarize", summarize)\n\ngraph.add_edge(START, "intent_detection")\ngraph.add_edge("intent_detection", "schema_extraction")\ngraph.add_edge("schema_extraction", "text_to_cypher")\ngraph.add_edge("text_to_cypher", "execute_query")\n\ngraph.add_conditional_edges(\n    "execute_query",\n    route_after_execution,\n    {\n        "retry": "text_to_cypher",\n        "summarize": "summarize",\n        "end": END,\n    },\n)\ngraph.add_edge("summarize", END)\n\n# Step 11 の get_state で最終状態を取得するため、チェックポインタを付けてコンパイルする。\n# Streamlit は操作のたびにスクリプト全体を再実行するため、ここで毎回 InMemorySaver() を作ると\n# 保存済みの checkpoint が失われ、同じ thread_id でも interrupt / 一時障害からの再開ができない。\n# st.cache_resource でコンパイル済み app（とチェックポインタ）をプロセス内で1つだけ保持する。\n# 複数プロセス構成や再起動をまたぐ場合は、SqliteSaver / PostgresSaver などの永続チェックポインタを使う\n@st.cache_resource\ndef get_app():\n    return graph.compile(checkpointer=InMemorySaver())\n\napp = get_app()'} />
                    </pre>
                    <p>
                        <code>{'RetryPolicy'}</code>
                        {' は LangGraph\n                        が提供する'}
                        <strong>{'ノード単位の自動リトライ機構'}</strong>
                        {'です。ここでの\n                        '}
                        <code>{'execute_query'}</code>
                        {' に対する\n                        '}
                        <code>{'retry_policy'}</code>
                        {'\n                        は、Neo4j接続の一時的な切断のような'}
                        <strong>{'予期しない例外'}</strong>
                        {
                            'に対する保険であり、Step\n                        8 で組んだ\n                        '
                        }
                        <code>{'route_after_execution'}</code>
                        {'\n                        による'}
                        <strong>{'業務ロジック上の再試行'}</strong>
                        {
                            '（Cypherの構文ミスなどをLLMに直してもらう）とは目的が異なります。両者を混同しないことが実務上の注意点です。LangGraph\n                        の '
                        }
                        <code>{'RetryPolicy'}</code>
                        {' は既定で\n                        '}
                        <code>{'max_attempts=3'}</code>
                        {'、'}
                        <code>{'initial_interval=0.5'}</code>
                        {'秒、'}
                        <code>{'backoff_factor=2.0'}</code>
                        {'\n                        の指数バックオフが設定されており、'}
                        <code>{'ValueError'}</code>
                        {' や\n                        '}
                        <code>{'TypeError'}</code>
                        {
                            '\n                        などの一部の例外を除き、ほとんどの例外を自動的にリトライ対象とします。\n                    '
                        }
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'エラーの種類'}</th>
                                    <th>{'対応方針'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'一時的な障害（ネットワーク瞬断など）'}</td>
                                    <td>
                                        {'ノードに '}
                                        <code>{'RetryPolicy'}</code>
                                        {' を付ける'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'LLMが回復可能な失敗（Cypher構文ミスなど）'}</td>
                                    <td>
                                        {
                                            '\n                                        エラー内容をStateに載せて '
                                        }
                                        <code>{'text_to_cypher'}</code>
                                        {' へ戻す\n                                    '}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'ユーザー側で修正が必要な情報不足'}</td>
                                    <td>
                                        <code>{'interrupt()'}</code>
                                        {
                                            '\n                                        で処理を一時停止し、ユーザーに確認を求める\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'想定外のバグ'}</td>
                                    <td>
                                        {'あえて再試行させず、そのまま例外を上げてデバッグに回す'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>{'Step 11. Streamlit と統合する（イベントストリーミング）'}</h3>
                    <p>
                        {
                            '\n                        最後に、このパイプラインをフロントエンドと接続します。書籍の事例では、パイプラインの実行を「型付きのイベントストリーム」として公開する\n                        Question Processing Interface が、Streamlit の\n                        '
                        }
                        <code>{'MessageHistory'}</code>
                        {
                            '\n                        と連携して会話履歴を保持しながらリアルタイムに進捗を表示します。\n                    '
                        }
                    </p>
                    <div className="diagram-block">
                        <div className="diagram-wrap" id="diagram-sequence">
                            <Mermaid chart={DIAGRAMS['diagram-sequence']} />
                        </div>
                        <div className="diagram-caption">
                            {
                                '\n                            図3: Streamlit とのイベントストリーミング連携\n                        '
                            }
                        </div>
                    </div>
                    <p>{'Python側の実装イメージは次のとおりです。'}</p>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'from typing import Any\n\nfrom langgraph.types import Command\n\ndef process_question(\n    question: str,\n    selection: dict | None,\n    config: dict,\n    resume: Any | None = None,\n    retry_from_checkpoint: bool = False,\n):\n    if retry_from_checkpoint:\n        # 一時障害で止まったスレッドは入力に None を渡し、最後に保存された checkpoint から続きを実行する\n        # （新しい入力辞書を渡すと、途中まで進んだ状態に入力が上書きされ最初からやり直しになる）\n        graph_input = None\n    elif resume is not None:\n        # interrupt() で中断中のスレッドは Command(resume=...) で同じ config のまま再開する\n        graph_input = Command(resume=resume)\n    else:\n        graph_input = {"question": question, "user_selection": selection, "retries": 0}\n    for event in app.stream(graph_input, config, stream_mode="updates"):\n        node_name, update = next(iter(event.items()))\n        if node_name == "__interrupt__":\n            # interrupt() で一時停止した。checkpoint は再開に必要なので残したまま呼び出し側へ返す\n            yield {"type": "interrupt", "payload": update}\n            return\n        yield {"type": "update", "node": node_name, "payload": update}\n\n    final_state = app.get_state(config).values\n    yield {"type": "result", "payload": final_state}'} />
                    </pre>
                    <div className="code-tag">{'python'}</div>
                    <pre>
                        <SyntaxCode language="python" code={'import uuid\n\nimport pandas as pd\nimport streamlit as st\nfrom neo4j.exceptions import ServiceUnavailable, SessionExpired, TransientError\n\n# RetryPolicy を使い切っても解消しなかった一時障害。checkpoint から再開できるので UI で再実行を提示する\nTRANSIENT_ERRORS = (ServiceUnavailable, SessionExpired, TransientError)\n\ndef render_result(payload: dict) -> None:\n    # 最終 State（results は table なら DataFrame、それ以外は to_dto() 形式のレコードのリスト）を描画する。\n    # graph / map の本格的な描画は外部の可視化コンポーネントに委ねる。差し替える場合も\n    # 「to_dto() 形式のレコードのリストを受け取り、node / relationship / path / point を描く」というインターフェースを守る\n    if payload.get("results_error"):\n        # リトライ上限に達しても解消しなかった Cypher エラー。再質問を促す\n        st.error(f"クエリを生成できませんでした。質問を言い換えてください。（{payload[\'results_error\']}）")\n        return\n    if payload.get("summary"):\n        st.markdown(payload["summary"])\n    output_type = payload.get("output_type")\n    if output_type == "table":\n        st.dataframe(payload["results"])\n    elif output_type in ("graph", "map"):\n        # 最小実装: 可視化コンポーネントを組み込むまでは、構造を確認できるよう JSON として表示する\n        st.json(payload.get("results") or [])\n\n# チェックポインタは thread_id 単位で状態を保存する。interrupt() からの再開を含め、1つの質問が\n# 完了するまでは同じ thread_id を使い続ける。Streamlit は操作のたびにスクリプトを再実行するため session_state に保持する\nif "thread_id" not in st.session_state:\n    st.session_state.thread_id = str(uuid.uuid4())\nconfig = {"configurable": {"thread_id": st.session_state.thread_id}}\n\ndef close_thread() -> None:\n    # 完了またはキャンセルした時点でだけ checkpoint を削除し、次の質問では新しい thread_id を使う\n    app.checkpointer.delete_thread(st.session_state.thread_id)\n    for key in ("thread_id", "pending_interrupt", "failed_transient"):\n        st.session_state.pop(key, None)\n\nresume = None\nretry_from_checkpoint = False\nif st.session_state.get("failed_transient"):\n    # 一時障害で中断したスレッド。checkpoint は残っているので、同じ config で入力なしの再開を選べる\n    st.error("一時的な障害で処理が中断しました。途中から再実行できます。")\n    if st.button("キャンセル", key="cancel_failed"):\n        close_thread()\n        st.rerun()\n    if not st.button("再実行"):\n        st.stop()\n    st.session_state.pop("failed_transient")\n    retry_from_checkpoint = True\n\npending = st.session_state.get("pending_interrupt")\nif pending is not None:\n    st.warning(pending[0].value)   # interrupt() に渡した確認内容\n    if st.button("キャンセル", key="cancel_interrupt"):\n        close_thread()\n        st.rerun()\n    answer = st.text_input("確認事項への回答")\n    if not answer:\n        st.stop()   # 回答を待つ間も checkpoint は残しておく\n    st.session_state.pop("pending_interrupt")\n    resume = answer\n\nif resume is None and not retry_from_checkpoint:\n    # 新しい質問は UI から受け取る。st.chat_input は送信した回の再実行でだけ値を返すため、\n    # 結果表示後の再実行で同じ質問が二重に処理されない\n    question = st.chat_input("質問を入力してください")\n    if not question:\n        st.stop()\nelse:\n    # 再開時は checkpoint の State を使うため、新しい質問は graph_input に使われない\n    question = ""\n# グラフ上で選択中のノード。可視化コンポーネントが選択時に session_state へ保存する想定（未選択なら None）\nselection = st.session_state.get("selection")\n\nplaceholder = st.empty()\nevents = process_question(\n    question, selection, config, resume=resume, retry_from_checkpoint=retry_from_checkpoint\n)\ntry:\n    for event in events:\n        if event["type"] == "update":\n            placeholder.info(f"処理中: {event[\'node\']}")\n        elif event["type"] == "interrupt":\n            # 一時停止中は checkpoint を削除せず、ユーザーの回答後に同じ config で再開する\n            st.session_state.pending_interrupt = event["payload"]\n            st.rerun()\n        elif event["type"] == "result":\n            payload = event["payload"]\n            if payload.get("results_truncated"):\n                # 部分結果を全件と誤解させないよう、描画前に切り捨てを通知する\n                st.warning(f"結果が上限の {MAX_RESULT_ROWS} 件を超えたため、先頭 {MAX_RESULT_ROWS} 件のみ表示しています。")\n            # State にはレコードのリストを保存し、table 表示用の DataFrame はグラフの外で作る\n            if payload.get("output_type") == "table" and payload.get("results") is not None:\n                payload = {**payload, "results": pd.DataFrame(payload["results"])}\n            render_result(payload)   # graph / map / table を描画（results_truncated もペイロードに含まれる）\n            close_thread()\nexcept TRANSIENT_ERRORS:\n    # checkpoint は削除せず残し、次回の再実行で入力なしの app.stream(None, config) として再開する\n    st.session_state.failed_transient = True\n    st.rerun()'} />
                    </pre>
                    <p>
                        {
                            '\n                        途中で例外が発生した場合も checkpoint は削除しません。'
                        }
                        <code>{'RetryPolicy'}</code>
                        {'\n                        を使い切っても解消しなかった一時障害（'}
                        <code>{'TRANSIENT_ERRORS'}</code>
                        {
                            '）では、「再実行」ボタンを表示します。押されたら\n                        '
                        }
                        <code>{'retry_from_checkpoint=True'}</code>
                        {' で\n                        '}
                        <code>{'process_question'}</code>
                        {' を呼び、同じ '}
                        <code>{'config'}</code>
                        {' のまま\n                        '}
                        <code>{'app.stream(None, config)'}</code>
                        {
                            ' を実行して、最後に保存された\n                        checkpoint\n                        から処理を続けます。新しい入力辞書を渡さないことが要点です。渡すと State\n                        が上書きされ、最初からやり直しになります。想定外のバグ（それ以外の例外）はそのまま送出し、デバッグに回します。再開を諦める場合は「キャンセル」で\n                        '
                        }
                        <code>{'close_thread()'}</code>
                        {' を呼び、スレッドを明示的に破棄します。\n                    '}
                    </p>
                    <div className="callout note">
                        <i className="ti ti-info-circle"></i>
                        <span className="callout-title">{'2026年の更新点'}</span>
                        <p>
                            {'\n                            ここで使っている '}
                            <code>{'stream_mode="updates"'}</code>
                            {' は安定版の API\n                            です。Python の '}
                            <code>{'stream_events()'}</code>
                            {' は、'}
                            <code>{'version="v1"'}</code>
                            {'\n                            /\n                            '}
                            <code>{'"v2"'}</code>
                            {'\n                            ではイベント辞書（'}
                            <code>{'StreamEvent'}</code>
                            {
                                '）を順に返すイテレータで、呼び出し側がイベント種別で分岐して組み立て直す必要があります。LangGraph\n                            v1.2 で追加された '
                            }
                            <code>{'stream_events(version="v3")'}</code>
                            {' は、代わりに\n                            '}
                            <code>{'GraphRunStream'}</code>
                            {'（非同期版は\n                            '}
                            <code>{'AsyncGraphRunStream'}</code>
                            {
                                '）というハンドルを返します。このハンドルの\n                            '
                            }
                            <code>{'run.values'}</code>
                            {
                                '（スーパーステップごとの状態スナップショット）や\n                            '
                            }
                            <code>{'run.messages'}</code>
                            {
                                '（メッセージ）などの型付き\n                            projection（射影）を個別に反復でき、実行後は\n                            '
                            }
                            <code>{'run.output'}</code>
                            {'（最終状態）や '}
                            <code>{'run.interrupted'}</code>
                            {' /\n                            '}
                            <code>{'run.interrupts'}</code>
                            {
                                '（human-in-the-loop\n                            の一時停止）を参照できます。ただし v3 は\n                            '
                            }
                            <strong>{'experimental'}</strong>
                            {
                                '\n                            と明記されており、仕様が変わる可能性があります。本番用途では、当面は本ガイドの\n                            '
                            }
                            <code>{'stream()'}</code>
                            {
                                ' を使い、v3 は API\n                            が安定してから採用を検討するのが安全です。\n                        '
                            }
                        </p>
                    </div>
                </section>
                <section id="walkthrough">
                    <h2>{'4. 実践ウォークスルー：捜査支援QAエージェントの例'}</h2>
                    <p>
                        {
                            '\n                        ここまでのパイプラインが実際にどう動くのか、書籍で紹介されている「警察の捜査支援」というユースケースをもとに、処理の流れを一般化して追ってみます（具体的な文面は書籍からの引用ではなく、要旨を再構成したものです）。\n                    '
                        }
                    </p>
                    <ol>
                        <li>
                            <strong>{'事件の特定'}</strong>
                            {'：ユーザーが「現在捜査中の事件を教えて」と質問すると、'}
                            <code>{'intent_detection'}</code>
                            {'\n                            は '}
                            <code>{'output_type = graph'}</code>
                            {' と判定し、'}
                            <code>{'text_to_cypher'}</code>
                            {
                                '\n                            が該当する\n                            '
                            }
                            <code>{'Crime'}</code>
                            {
                                '\n                            ノードを検索するCypherを生成します。結果はグラフ上に1つのノードとして描画され、詳細プロパティが選択パネルに表示されます。\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'周辺のANPRカメラを検索'}</strong>
                            {
                                '：ユーザーがその事件ノードをグラフ上で選択したまま「近くのANPRカメラは？」と続けると、'
                            }
                            <code>{'user_selection'}</code>
                            {'\n                            に選択中の '}
                            <code>{'Crime'}</code>
                            {' ノードが渡され、'}
                            <code>{'text_to_cypher'}</code>
                            {
                                '\n                            はそれを起点とした空間的な探索クエリを生成します。'
                            }
                            <code>{'intent_detection'}</code>
                            {'\n                            はここで\n                            '}
                            <code>{'output_type = map'}</code>
                            {' と判定し、結果は地図上に描画されます。\n                        '}
                        </li>
                        <li>
                            <strong>{'車両パターンの検出'}</strong>
                            {
                                '：「色と部分的なナンバープレートが一致する車両」という条件付きの質問に対し、'
                            }
                            <code>{'ANPRCamera'}</code>
                            {'\n                            と '}
                            <code>{'CameraEvent'}</code>
                            {'、'}
                            <code>{'Vehicle'}</code>
                            {
                                '\n                            をたどる複数ホップのCypherが生成されます。各検出イベントはパス（経路）として可視化され、タイムスタンプ付きで表示されます。\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'文脈を加えた再要約'}</strong>
                            {
                                '：ユーザーが「捜査上の観点で見て、不審な点は？」と追加の文脈を与えると、同じデータに対して\n                            '
                            }
                            <code>{'summarize'}</code>
                            {
                                '\n                            ノードが再実行され、単なる事実の列挙ではなく「特定の時間帯に同一車両が繰り返し検出されている」といった分析的な要約が生成されます。\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'前科への遡及'}</strong>
                            {'：最後に「この車両の所有者に前科は？」と質問すると、'}
                            <code>{'Vehicle'}</code>
                            {'\n                            から '}
                            <code>{'Person'}</code>
                            {'、さらに過去の\n                            '}
                            <code>{'Crime'}</code>
                            {
                                '\n                            へとグラフをたどるクエリが生成され、空間・時間・履歴という3種類のシグナルが1つの捜査ストーリーとして統合されます。\n                        '
                            }
                        </li>
                    </ol>
                    <p>
                        {'\n                        この一連の流れは、'}
                        <strong>
                            {
                                '同じ5ノードのパイプラインが、質問ごとに異なるCypherを生成しながら繰り返し使われている'
                            }
                        </strong>
                        {
                            'ことを示しています。ノードの構造自体を変えずに、State\n                        に積み上がっていく文脈（'
                        }
                        <code>{'user_selection'}</code>
                        {
                            '\n                        や会話履歴）だけで挙動が変化する——これが状態駆動型パイプラインの強みです。\n                    '
                        }
                    </p>
                </section>
                <section id="best-practices">
                    <h2>{'5. 2026年のベストプラクティスと落とし穴'}</h2>
                    <p>
                        {
                            '\n                        調査を通じて確認できた、2026年時点で押さえておくべき実践的なポイントを整理します。\n                    '
                        }
                    </p>
                    <h3>{'5-1. スキーマは「渡しすぎない」'}</h3>
                    <p>
                        {
                            '\n                        Neo4j公式のText2Cypherガイド（2026年）でも明言されている通り、スキーマ全体をそのままプロンプトに詰め込むと、かえってLLMの精度が下がります。関連するラベルだけをエンティティ認識やn-hop探索で絞り込んでから渡す設計が推奨されます。Step\n                        4 の\n                        '
                        }
                        <code>{'skip_labels'}</code>
                        {
                            '\n                        によるフィルタリングは、この考え方の最も単純な実装です。\n                    '
                        }
                    </p>
                    <h3>{'5-2. リトライは「2種類ある」ことを意識する'}</h3>
                    <p>
                        {
                            '\n                        Step 10 で触れた通り、LangGraphの\n                        '
                        }
                        <code>{'RetryPolicy'}</code>
                        {
                            '（インフラ的な一時障害への対応）と、Conditional Edge\n                        による業務ロジック的な再試行（LLMにエラー内容を渡して再生成させる）は目的が異なります。両方を組み合わせて初めて、ネットワーク瞬断にもCypher構文ミスにも強いパイプラインになります。\n                    '
                        }
                    </p>
                    <h3>{'5-3. Human-in-the-Loop を要所に入れる'}</h3>
                    <p>
                        {
                            '\n                        LangChainの2026年の調査（State of Agent\n                        Engineering）では、エージェントの評価手法として人手によるレビューを用いている割合が59.8%と報告されており、人間の判断は依然として品質保証の中心にあります。実行時の設計としても、エージェントが完全自動で最後まで突き進むのではなく、重要な判断の直前で一時停止し、人間の承認を待つ構成が有効です。LangGraph\n                        の '
                        }
                        <code>{'interrupt()'}</code>
                        {
                            ' API\n                        を使うと、グラフの実行を任意のノードで一時停止し、人間の入力を受け取ってから再開できます。捜査支援のような高リスクな領域では、Cypher実行前や、前科情報のような機微なデータを提示する前に確認ステップを挟む設計が現実的です。\n                    '
                        }
                    </p>
                    <h3>{'5-4. トレース可能性を最初から組み込む'}</h3>
                    <p>
                        {
                            '\n                        Conditional Edge\n                        がどの分岐を選んだか、どのノードが何回リトライされたかは、ターミナルの出力だけでは把握できません。LangGraph\n                        の実行トレースには「どの分岐が選ばれたか」「retry_policy\n                        によって何回再実行されたか」という情報が記録されるため、LangSmith\n                        のようなオブザーバビリティ（可観測性）ツールと組み合わせてトレースを可視化しておくことが、本番運用時のデバッグを大きく楽にします。\n                    '
                        }
                    </p>
                    <h3>{'5-5. 今後の発展方向'}</h3>
                    <p>
                        {
                            '\n                        書籍の第15章末尾でも触れられている今後の発展方向は、2026年の業界動向とも一致しています。\n                    '
                        }
                    </p>
                    <ul>
                        <li>
                            <strong>{'利用実績からの学習'}</strong>
                            {
                                '：成功したクエリ生成例や、ユーザーがつまずいたパターンをFew-shot例として蓄積し、Configuration\n                            Provider にフィードバックしていく\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'スキーマの多層化'}</strong>
                            {
                                '：巨大なグラフに対応するため、業務ドメインごとにスキーマを階層化・レイヤー化して提示する\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'意図検出の高精度化'}</strong>
                            {
                                '：table / graph / map\n                            の3分類だけでなく、より細かいユーザー意図の分類\n                        '
                            }
                        </li>
                        <li>
                            <strong>{'ナレッジグラフに特化したファインチューニング'}</strong>
                            {
                                '：汎用LLMのIn-context\n                            learningだけに頼らず、Text-to-Cypherに特化したモデル（例：Neo4j\n                            Labsが公開している\n                            '
                            }
                            <code>{'text2cypher'}</code>
                            {
                                '\n                            系のファインチューニング済みモデル群）を組み込み、精度とコストのバランスを取る\n                        '
                            }
                        </li>
                    </ul>
                </section>
                <section id="summary">
                    <h2>{'6. まとめ'}</h2>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{'ステップ'}</th>
                                    <th>{'目的'}</th>
                                    <th>{'使われる仕組み'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'Intent Detection'}</td>
                                    <td>{'表示形式を決める'}</td>
                                    <td>{'LLM呼び出し + State更新'}</td>
                                </tr>
                                <tr>
                                    <td>{'Schema Extraction'}</td>
                                    <td>{'LLMが理解できるスキーマを用意する'}</td>
                                    <td>
                                        <code>{'apoc.meta.schema()'}</code>
                                        {' + フィルタリング'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'Text-to-Cypher'}</td>
                                    <td>{'質問をクエリに変換する'}</td>
                                    <td>
                                        {'Configuration ProviderとStateの文脈を統合したプロンプト'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'Query Execution'}</td>
                                    <td>{'実行してエラーを捕捉する'}</td>
                                    <td>
                                        {
                                            '\n                                        書き込み拒否検証 + '
                                        }
                                        <code>{'RetryPolicy'}</code>
                                        {
                                            ' +\n                                        例外ハンドリング\n                                    '
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'ルーティング'}</td>
                                    <td>{'次の行き先を決める'}</td>
                                    <td>
                                        <code>{'add_conditional_edges'}</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{'Summarization'}</td>
                                    <td>{'人間向けに要約する'}</td>
                                    <td>{'追加コンテキストを注入したプロンプト'}</td>
                                </tr>
                                <tr>
                                    <td>{'フロントエンド連携'}</td>
                                    <td>{'リアルタイムに進捗を見せる'}</td>
                                    <td>{'イベントストリーミング + チェックポイントからの再開'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        {
                            '\n                        LangGraph\n                        の本質は、「複雑な処理を1つの巨大なプロンプトに詰め込む」のではなく、'
                        }
                        <strong>
                            {
                                '責務ごとに小さなノードへ分解し、State\n                            という共有の記憶を介して疎結合につなぎ、条件によって流れを動的に切り替える'
                            }
                        </strong>
                        {
                            'という設計思想にあります。この考え方は、ナレッジグラフQA以外の多くのエージェントシステム（カスタマーサポート、リサーチアシスタント、コード生成パイプラインなど）にもそのまま応用できます。\n                    '
                        }
                    </p>
                </section>
                <section id="references">
                    <h2>{'参考文献・情報源'}</h2>
                    <div className="ref-list">
                        <div className="ref-item">
                            <div className="ref-num">{'1'}</div>
                            <div>
                                <a
                                    href="https://docs.langchain.com/oss/python/langgraph/overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph 公式ドキュメント（概要）'}
                                </a>
                                <span className="ref-source">{'docs.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'2'}</div>
                            <div>
                                <a
                                    href="https://docs.langchain.com/oss/python/langgraph/graph-api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph 公式ドキュメント（Graph API）'}
                                </a>
                                <span className="ref-source">{'docs.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'3'}</div>
                            <div>
                                <a
                                    href="https://reference.langchain.com/python/langgraph/graph/state/StateGraph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'StateGraph APIリファレンス'}
                                </a>
                                <span className="ref-source">{'reference.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'4'}</div>
                            <div>
                                <a
                                    href="https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_conditional_edges"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'add_conditional_edges APIリファレンス'}
                                </a>
                                <span className="ref-source">{'reference.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'5'}</div>
                            <div>
                                <a
                                    href="https://docs.langchain.com/oss/python/langgraph/streaming"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph ストリーミング（stream_mode）公式ドキュメント'}
                                </a>
                                <span className="ref-source">{'docs.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'6'}</div>
                            <div>
                                <a
                                    href="https://docs.langchain.com/oss/python/langgraph/event-streaming"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph Event Streaming（v1.2〜、推奨API）公式ドキュメント'}
                                </a>
                                <span className="ref-source">{'docs.langchain.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'7'}</div>
                            <div>
                                <a
                                    href="https://futureagi.com/blog/langgraph-state-graph-tracing-nodes-edges-retries/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'LangGraph の Conditional Edge / Retry\n                                    のトレース解説（2026年8月）'
                                    }
                                </a>
                                <span className="ref-source">{'futureagi.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'8'}</div>
                            <div>
                                <a
                                    href="https://www.reactify-solutions.com/articles/langgraph-production-agents-2026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph 本番運用ガイド（2026年6月）'}
                                </a>
                                <span className="ref-source">{'reactify-solutions.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'9'}</div>
                            <div>
                                <a
                                    href="https://aishwaryasrinivasan.substack.com/p/the-complete-guide-for-langchain"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangGraph 2026年版 実践ガイド（AI with Aish）'}
                                </a>
                                <span className="ref-source">
                                    {'aishwaryasrinivasan.substack.com'}
                                </span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'10'}</div>
                            <div>
                                <a
                                    href="https://ai.gopubby.com/building-ai-agents-with-langgraph-2026-edition-a-step-by-step-guide-494d36e801f9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'LangGraphでのAIエージェント構築 2026年版（Lore Van Oudenhove,\n                                    AI Advances）'
                                    }
                                </a>
                                <span className="ref-source">{'ai.gopubby.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'11'}</div>
                            <div>
                                <a
                                    href="https://eastondev.com/blog/en/posts/ai/20260424-langgraph-agent-architecture/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'LangGraph の State管理とLangChain「State of AI\n                                    Agents」調査結果の紹介（2026年4月）'
                                    }
                                </a>
                                <span className="ref-source">{'eastondev.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'12'}</div>
                            <div>
                                <a
                                    href="https://www.lyzr.ai/blog/harness-engineering-for-ai-agents/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'LangChain「State of AI Agents」2026年レポートの要点まとめ'}
                                </a>
                                <span className="ref-source">{'lyzr.ai'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'13'}</div>
                            <div>
                                <a
                                    href="https://medium.com/data-science/implementing-graphreader-with-neo4j-and-langgraph-e4c73826a8b7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'Tomaz Bratanic（Neo4j, Graph ML & GenAI\n                                    Research）「Implementing GraphReader with Neo4j and\n                                    LangGraph」'
                                    }
                                </a>
                                <span className="ref-source">{'medium.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'14'}</div>
                            <div>
                                <a
                                    href="https://medium.com/neo4j/introducing-neo4j-agent-skills-e69958c38dea"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'Tomaz Bratanic「Introducing Neo4j Agent Skills」（Neo4j\n                                    Developer Blog, 2026年5月）'
                                    }
                                </a>
                                <span className="ref-source">{'medium.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'15'}</div>
                            <div>
                                <a
                                    href="https://neo4j.com/blog/genai/text2cypher-guide/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'Neo4j公式「Text2Cypher guide」（2026年）'}
                                </a>
                                <span className="ref-source">{'neo4j.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'16'}</div>
                            <div>
                                <a
                                    href="https://neo4j.com/docs/apoc/current/overview/apoc.meta/apoc.meta.schema/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'apoc.meta.schema APOC Core公式ドキュメント'}
                                </a>
                                <span className="ref-source">{'neo4j.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'17'}</div>
                            <div>
                                <a
                                    href="https://www.sciencedirect.com/science/article/pii/S030645732600227X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'CyVerACT: An Agentic Cypher Translation Workflow over Knowledge\n                                    Graphs（2026年4月）'
                                    }
                                </a>
                                <span className="ref-source">{'sciencedirect.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'18'}</div>
                            <div>
                                <a
                                    href="https://www.sciencedirect.com/science/article/pii/S016792362500154X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'Prompting LLMs based on semantic schema for\n                                    text-to-Cypher（T2CSS）'
                                    }
                                </a>
                                <span className="ref-source">{'sciencedirect.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'19'}</div>
                            <div>
                                <a
                                    href="https://arxiv.org/html/2505.05118v1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        'Enhancing Text2Cypher with Schema Filtering（Makbule Gulcin\n                                    Ozsoy, Neo4j）'
                                    }
                                </a>
                                <span className="ref-source">{'arxiv.org'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'20'}</div>
                            <div>
                                <a
                                    href="https://www.manning.com/books/knowledge-graphs-and-llms-in-action"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'Knowledge Graphs and LLMs in Action（書籍本体）'}
                                </a>
                                <span className="ref-source">{'manning.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'21'}</div>
                            <div>
                                <a
                                    href="https://www.manning.com/preview/knowledge-graphs-and-llms-in-action/chapter-15"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'第15章プレビュー'}
                                </a>
                                <span className="ref-source">{'manning.com'}</span>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-num">{'22'}</div>
                            <div>
                                <a
                                    href="https://github.com/alenegro81/knowledge-graphs-and-llms-in-action"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {'書籍サンプルコードリポジトリ'}
                                </a>
                                <span className="ref-source">{'github.com'}</span>
                            </div>
                        </div>
                    </div>
                    <p className="footnote">
                        {
                            '\n                        本ガイドは2026年9月23日時点で参照可能な情報をもとに作成されています。LangGraphは開発が活発なフレームワークのため、最新のAPI仕様は公式ドキュメント（docs.langchain.com）で随時確認することを推奨します。\n                    '
                        }
                    </p>
                </section>
            </main>
        </div>
    );
}
