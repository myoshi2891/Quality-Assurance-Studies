import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
import Checklist from './Checklist';
export default function Practice() {return <>
    <section className="section" id="sec16">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-robot">
                </i>
            </div>
            <h2>
                {"16. AIエージェント時代におけるレガシーコード対応"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 2025〜2026年にかけて、コーディングエージェント（AIによる自律的なコード変更ツール）が実務に急速に普及しています。ThoughtWorks で生成AIと開発プラクティスの関係を調査している Martin Fowler のチームも、自社サイト上でこの変化に関する継続的な考察を公開しています"}
                <sup>
                    {"[22]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" こうした流れの中でも、Feathers の技法が古びていないどころか、むしろ重要性を増しているという見方があります。実際、AIエージェント自身に「変更点の特定→テストポイントの発見→依存関係の分離→テストの作成→変更とリファクタリング」という本書の変更アルゴリズムをそのまま手続きとして組み込む、という取り組みも登場しています"}
                <sup>
                    {"[50]"}
                </sup>
                {"。これは、AIが自律的にコードを書き換える場面でも「今の挙動を壊さずに変更する」という安全性の担保がまったく変わらず必要とされていることの表れだと言えます。 "}
            </p>
            <p>
                {" 一方で、AIコーディングツールに関する2026年の業界動向レポートでは、開発者はAIを業務の約6割で活用しているものの、完全にタスクを委任できるのは0〜20%程度にとどまるという調査結果も紹介されており、レガシーコードのような複雑で文脈依存の高い作業では、依然として人間による判断とレビューが欠かせないことが示唆されています"}
                <sup>
                    {"[51]"}
                </sup>
                {"。 "}
            </p>
            <div className="callout plum">
                <p>
                    {" 「テストのないコードは安全に変更できない」というFeathersの根本原則は、変更をAIが行うか人間が行うかにかかわらず変わりません。むしろAI時代には、キャラクタリゼーションテストやシームの整備によって、AIエージェントが安心して自律的に変更を提案・実行できる「安全な足場」を人間が用意しておくことの価値が、これまで以上に高まっていると言えるでしょう。 "}
                </p>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec17">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-checklist">
                </i>
            </div>
            <h2>
                {"17. 初学者向け実践チェックリスト"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 以下は、これから自分のプロジェクトで本書の考え方を試してみたい人向けの、実践のための最初のステップです。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d10">
                    <Mermaid chart={DIAGRAMS.d10} />
                </div>
            </div>
            <Checklist />
        </div>
    </section>

    
    <section className="section" id="sec18">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-map">
                </i>
            </div>
            <h2>
                {"18. まとめ：全体像"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 本書のすべての技法は、最終的に「安全に、小さく変更するためにはどうすればいいか」という一点に集約されます。最後に、これまで見てきた要素の関係を1枚の図にまとめます。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d11">
                    <Mermaid chart={DIAGRAMS.d11} />
                </div>
            </div>
            <p>
                {" テストがないコードに対して恐れずに向き合い、小さく安全な一歩を積み重ねていく――それが、20年以上経った今も本書が読み継がれている最大の理由です。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec19">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-link">
                </i>
            </div>
            <h2>
                {"19. 参考文献・出典"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 本ガイドは2026年9月7日時点で確認できる以下の情報源をもとに作成しました。原著者本人の解説記事、著名な開発者・技術者による解説、企業エンジニアリングブログ、公式書誌情報などを優先的に参照しています。 "}
            </p>
            <div className="ref-grid" id="refGrid">
                <div className="ref-card">
                    <span className="ref-num">
                        {"[2]"}
                    </span>
                    <span className="ref-title">
                        {"DaedTech（Erik Dietrich）「Characterization Tests」"}
                    </span>
                    <a className="ref-url" href="https://daedtech.com/characterization-tests/" target="_blank" rel="noopener noreferrer">
                        {"https://daedtech.com/characterization-tests/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[3]"}
                    </span>
                    <span className="ref-title">
                        {"Understand Legacy Code（Nicolas Carlo）「The key points of Working Effectively with Legacy Code」"}
                    </span>
                    <a className="ref-url" href="https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/" target="_blank" rel="noopener noreferrer">
                        {"https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[4]"}
                    </span>
                    <span className="ref-title">
                        {"同上（Understand Legacy Code）"}
                    </span>
                    <a className="ref-url" href="https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/" target="_blank" rel="noopener noreferrer">
                        {"https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[5]"}
                    </span>
                    <span className="ref-title">
                        {"Mike Bland（Google）「Legacy code, seams, and the most important design guideline」"}
                    </span>
                    <a className="ref-url" href="https://mike-bland.com/2023/08/23/legacy-code-seams-and-the-most-important-design-guideline.html" target="_blank" rel="noopener noreferrer">
                        {"https://mike-bland.com/2023/08/23/legacy-code-seams-and-the-most-important-design-guideline.html"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[9]"}
                    </span>
                    <span className="ref-title">
                        {"Mark Needham「Book Club: Working Effectively With Legacy Code - Chapters 6 & 7」"}
                    </span>
                    <a className="ref-url" href="https://www.markhneedham.com/blog/2009/10/26/book-club-working-effectively-with-legacy-code-chapters-6-7-michael-feathers/" target="_blank" rel="noopener noreferrer">
                        {"https://www.markhneedham.com/blog/2009/10/26/book-club-working-effectively-with-legacy-code-chapters-6-7-michael-feathers/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[10]"}
                    </span>
                    <span className="ref-title">
                        {"Michael Feathers（InformIT）「Seams｜Testing Effectively With Legacy Code」"}
                    </span>
                    <a className="ref-url" href="https://www.informit.com/articles/article.aspx?p=359417&seqNum=2" target="_blank" rel="noopener noreferrer">
                        {"https://www.informit.com/articles/article.aspx?p=359417&seqNum=2"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[12]"}
                    </span>
                    <span className="ref-title">
                        {"GitHub Gist（jeremy-w）「Notes on Michael Feathers' Working Effectively with Legacy Code」"}
                    </span>
                    <a className="ref-url" href="https://gist.github.com/jeremy-w/6774525" target="_blank" rel="noopener noreferrer">
                        {"https://gist.github.com/jeremy-w/6774525"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[13]"}
                    </span>
                    <span className="ref-title">
                        {"Agile in a Flash（Tim Ottinger）「Legacy Code Change Algorithm」"}
                    </span>
                    <a className="ref-url" href="http://agileinaflash.blogspot.com/2009/03/legacy-code-change-algorithm.html" target="_blank" rel="noopener noreferrer">
                        {"http://agileinaflash.blogspot.com/2009/03/legacy-code-change-algorithm.html"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[14]"}
                    </span>
                    <span className="ref-title">
                        {"Medium（Nitesh Ranjan）「6 Takeaways from Working Effectively with Legacy Code」"}
                    </span>
                    <a className="ref-url" href="https://medium.com/@nitesh.ranja/6-takeaways-from-working-effectively-with-legacy-code-by-michael-feathers-bc9fa5e63f98" target="_blank" rel="noopener noreferrer">
                        {"https://medium.com/@nitesh.ranja/6-takeaways-from-working-effectively-with-legacy-code-by-michael-feathers-bc9fa5e63f98"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[15]"}
                    </span>
                    <span className="ref-title">
                        {"O'Reilly Online Learning「Working Effectively with Legacy Code」書誌・目次ページ"}
                    </span>
                    <a className="ref-url" href="https://www.oreilly.com/library/view/working-effectively-with/0131177052/" target="_blank" rel="noopener noreferrer">
                        {"https://www.oreilly.com/library/view/working-effectively-with/0131177052/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[16]"}
                    </span>
                    <span className="ref-title">
                        {"Emily Bache（97 Things, Medium）「Approval Testing」"}
                    </span>
                    <a className="ref-url" href="https://medium.com/97-things/approval-testing-33946cde4aa8" target="_blank" rel="noopener noreferrer">
                        {"https://medium.com/97-things/approval-testing-33946cde4aa8"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[17]"}
                    </span>
                    <span className="ref-title">
                        {"GitHub（codecop）「dependency-breaking-katas」"}
                    </span>
                    <a className="ref-url" href="https://www.github.com/codecop/dependency-breaking-katas" target="_blank" rel="noopener noreferrer">
                        {"https://www.github.com/codecop/dependency-breaking-katas"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[19][27]"}
                    </span>
                    <span className="ref-title">
                        {"Wikipedia「Strangler fig pattern」"}
                    </span>
                    <a className="ref-url" href="https://en.wikipedia.org/wiki/Strangler_fig_pattern" target="_blank" rel="noopener noreferrer">
                        {"https://en.wikipedia.org/wiki/Strangler_fig_pattern"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[20]"}
                    </span>
                    <span className="ref-title">
                        {"Shopify Engineering「Refactoring Legacy Code with the Strangler Fig Pattern」"}
                    </span>
                    <a className="ref-url" href="https://shopify.engineering/refactoring-legacy-code-strangler-fig-pattern" target="_blank" rel="noopener noreferrer">
                        {"https://shopify.engineering/refactoring-legacy-code-strangler-fig-pattern"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[21]"}
                    </span>
                    <span className="ref-title">
                        {"University of Minnesota CSE「Code Freeze 2025 Keynote Speaker: Michael Feathers」"}
                    </span>
                    <a className="ref-url" href="https://cse.umn.edu/umsec/code-freeze-2025-keynote-speaker-michael-feathers" target="_blank" rel="noopener noreferrer">
                        {"https://cse.umn.edu/umsec/code-freeze-2025-keynote-speaker-michael-feathers"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[22]"}
                    </span>
                    <span className="ref-title">
                        {"Martin Fowler / ThoughtWorks「Exploring Generative AI」"}
                    </span>
                    <a className="ref-url" href="https://www.martinfowler.com/articles/exploring-gen-ai.html" target="_blank" rel="noopener noreferrer">
                        {"https://www.martinfowler.com/articles/exploring-gen-ai.html"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[23]"}
                    </span>
                    <span className="ref-title">
                        {"SlidePlayer（Cory Foy）「Getting Unstuck: Working with Legacy Code and Data」"}
                    </span>
                    <a className="ref-url" href="https://slideplayer.com/slide/4484335/" target="_blank" rel="noopener noreferrer">
                        {"https://slideplayer.com/slide/4484335/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[24]"}
                    </span>
                    <span className="ref-title">
                        {"vFunction「The Strangler Architecture Pattern for Modernization」"}
                    </span>
                    <a className="ref-url" href="https://vfunction.com/blog/strangler-architecture-pattern-for-modernization/" target="_blank" rel="noopener noreferrer">
                        {"https://vfunction.com/blog/strangler-architecture-pattern-for-modernization/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[25]"}
                    </span>
                    <span className="ref-title">
                        {"Microsoft Learn「Strangler Fig Pattern - Azure Architecture Center」"}
                    </span>
                    <a className="ref-url" href="https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" target="_blank" rel="noopener noreferrer">
                        {"https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[32]"}
                    </span>
                    <span className="ref-title">
                        {"Understand Legacy Code「What's the difference between Regression, Characterization, and Approval Tests?」"}
                    </span>
                    <a className="ref-url" href="https://understandlegacycode.com/blog/characterization-tests-or-approval-tests/" target="_blank" rel="noopener noreferrer">
                        {"https://understandlegacycode.com/blog/characterization-tests-or-approval-tests/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[38]"}
                    </span>
                    <span className="ref-title">
                        {"Developer Fusion「Herding Code 117: Llewellyn Falco on Approval Tests」"}
                    </span>
                    <a className="ref-url" href="https://www.developerfusion.com/media/122649/herding-code-117-llewellyn-falcon-on-approval-tests/" target="_blank" rel="noopener noreferrer">
                        {"https://www.developerfusion.com/media/122649/herding-code-117-llewellyn-falcon-on-approval-tests/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[41][42]"}
                    </span>
                    <span className="ref-title">
                        {"tamerlan.dev「Working Effectively with Legacy Code: Chapter 6 Summary」／Medium（Nitesh Ranjan）"}
                    </span>
                    <a className="ref-url" href="https://tamerlan.dev/working-effectively-with-legacy-code/" target="_blank" rel="noopener noreferrer">
                        {"https://tamerlan.dev/working-effectively-with-legacy-code/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[44]"}
                    </span>
                    <span className="ref-title">
                        {"Taswar Bhatti「Learn The Sprout Method for adding new functionality」"}
                    </span>
                    <a className="ref-url" href="https://taswar.zeytinsoft.com/learn-the-sprout-method-for-adding-new-functionality/" target="_blank" rel="noopener noreferrer">
                        {"https://taswar.zeytinsoft.com/learn-the-sprout-method-for-adding-new-functionality/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[45]"}
                    </span>
                    <span className="ref-title">
                        {"Understand Legacy Code「The key points of Working Effectively with Legacy Code」"}
                    </span>
                    <a className="ref-url" href="https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/" target="_blank" rel="noopener noreferrer">
                        {"https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[50]"}
                    </span>
                    <span className="ref-title">
                        {"Wondel.ai Skills「Legacy Code — AI Agent Skill」"}
                    </span>
                    <a className="ref-url" href="https://skills.wondel.ai/skills/working-with-legacy-code/" target="_blank" rel="noopener noreferrer">
                        {"https://skills.wondel.ai/skills/working-with-legacy-code/"}
                    </a>
                </div>
                <div className="ref-card">
                    <span className="ref-num">
                        {"[51]"}
                    </span>
                    <span className="ref-title">
                        {"Anthropic「2026 Agentic Coding Trends Report」"}
                    </span>
                    <a className="ref-url" href="https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf" target="_blank" rel="noopener noreferrer">
                        {"https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf"}
                    </a>
                </div>
            </div>
            <div className="callout gold">
                <p>
                    {" 注：本ガイドは各出典を要約・言い換えたものであり、原文からの逐語的な引用は最小限に留めています。より正確で網羅的な内容は、必ず原著および各出典元をご確認ください。 "}
                </p>
            </div>
        </div>
    </section>
</>;}
