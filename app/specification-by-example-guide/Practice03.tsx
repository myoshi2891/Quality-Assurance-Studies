import React from 'react';
import Diagram from './Diagram';

export default function Practice03() {
    return (
        <>
            <h3 id="s5-3">{'ステップ3: 具体例で説明する (Example Mapping)'}</h3>
            <p>
                {
                    '\n                        Three Amigosの会話を構造化する代表的な技法が、Cucumberの共同創業者であるMatt\n                        Wynne氏が考案した「Example\n                        Mapping(例のマッピング)」です。氏はセントルイスでチームをトレーニングしていた際にこの手法を発案したと、自身のプロフィールページで説明しています。\n                    '
                }
            </p>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a href="https://mattwynne.net/about" target="_blank" rel="noopener noreferrer">
                    {'Matt Wynne「About」'}
                </a>
            </p>
            <p>{'Example Mappingでは、4色の索引カードを使って会話の内容を可視化します。'}</p>
            <div className="table-wrap">
                <div className="table-title">
                    <i className="ti ti-cards"></i>
                    {'Example Mappingの4色カード\n                        '}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>{'カードの色'}</th>
                            <th>{'意味'}</th>
                            <th>{'内容の例'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{'黄色'}</td>
                            <td>{'ストーリー'}</td>
                            <td>{'対象のユーザーストーリーそのもの'}</td>
                        </tr>
                        <tr>
                            <td>{'青色'}</td>
                            <td>{'ルール'}</td>
                            <td>{'受け入れ基準・ビジネスルール(ストーリーの下に配置)'}</td>
                        </tr>
                        <tr>
                            <td>{'緑色'}</td>
                            <td>{'具体例'}</td>
                            <td>{'各ルールを裏付ける具体的なシナリオ(ルールの下に配置)'}</td>
                        </tr>
                        <tr>
                            <td>{'赤色'}</td>
                            <td>{'疑問'}</td>
                            <td>{'その場で答えが出ない質問・保留事項'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://cucumber.io/docs/bdd/example-mapping/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Cucumber公式「Example Mapping」'}
                </a>
                {'\n                        /\n                        '}
                <a
                    href="https://cucumber.io/blog/bdd/example-mapping-introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Matt Wynne「Introducing Example Mapping」'}
                </a>
            </p>
            <div className="mermaid-wrap">
                <Diagram id="diag-mapping" />
            </div>
            <p className="mermaid-caption">{'図4: Example Mappingのカード構造'}</p>
            <p>
                {
                    '\n                        Matt Wynne氏は自身の記事の中で、Example\n                        Mappingの狙いを「ストーリーの中の最も小さなふるまいの単位にズームインし、ルールを切り分け、本当にやるべき中核を見つけ、残りは後回しにできるようにすること」だと説明しています。またCucumberチームでは、セッション開始から25分経過した時点でメンバーが親指を立てる簡易投票を行い、そのストーリーを次のスプリントに取り込めるかどうかを判断しているとも述べています。\n                    '
                }
            </p>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://medium.com/@mattwynne/introducing-example-mapping-42ccd15f8adf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Matt Wynne「Introducing Example Mapping」(Medium転載版)'}
                </a>
            </p>
            <p>
                <strong>{'実践のポイント'}</strong>
            </p>
            <ul>
                <li>{'ルールとサンプル(具体例)の違いを最初に全員で理解しておく'}</li>
                <li>
                    {
                        '\n                            疑問(赤カード)が多く出るストーリーは、まだ実装に着手すべきではないサイン\n                        '
                    }
                </li>
                <li>{'1セッションは時間を区切る(20〜30分が目安)'}</li>
                <li>
                    {
                        '\n                            Example\n                            Mappingで洗い出した緑カードが、次のステップ「仕様の洗練」でGherkinシナリオの土台になる\n                        '
                    }
                </li>
            </ul>
        </>
    );
}
