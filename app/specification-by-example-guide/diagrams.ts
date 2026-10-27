export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#fffcf6",
    "primaryColor": "#fffaf0",
    "primaryTextColor": "#2b2620",
    "primaryBorderColor": "#3b4a91",
    "lineColor": "#6b6152",
    "secondaryColor": "#efe4c9",
    "tertiaryColor": "#fffaf0",
    "mainBkg": "#fffaf0",
    "nodeBorder": "#3b4a91",
    "clusterBkg": "#efe4c9",
    "titleColor": "#2b2620",
    "edgeLabelBackground": "#fffcf6",
    "fontFamily": "Noto Sans JP, Hiragino Sans, Yu Gothic, sans-serif",
    "fontSize": "16px"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "subGraphTitleMargin": {
      "top": 10,
      "bottom": 28
    }
  }
}}%%`;
export const DIAGRAMS: Record<string, string> = {
    'diag-history':
        MERMAID_CONFIG +
        '\nflowchart TB\n    classDef hub fill:#f5d78e,stroke:#a8720b,stroke-width:2px,color:#241a00;\n    classDef done fill:#cfe8d6,stroke:#3f6b4a,stroke-width:2px,color:#12281a;\n    Y2002["2002年 XP Agile Universeのワークショップでmartin Fowlerが用語に出会う"] --> Y2003["2003年 Dan NorthがJBehaveの開発を開始"]\n    Y2003 --> Y2004["2004年 Dan NorthとChris MattsがGiven-When-Thenの型を提案"]\n    Y2004 --> Y2006["2006年 Dan Northが論文Introducing BDDを発表"]\n    Y2006 --> Y2011["2011年 Gojko Adzicが書籍Specification by Exampleを出版"]\n    Y2011 --> Y2019["2019年 Cyrille Martraireが書籍Living Documentationを出版"]\n    class Y2011 hub;\n    class Y2019 done;',
    'diag-cycle':
        MERMAID_CONFIG +
        '\nflowchart TB\n    classDef hub fill:#f5d78e,stroke:#a8720b,stroke-width:2px,color:#241a00;\n    classDef done fill:#cfe8d6,stroke:#3f6b4a,stroke-width:2px,color:#12281a;\n    A["① ゴールからスコープを導く Deriving Scope from Goals"] --> B["② 協働で仕様化する Specifying Collaboratively"]\n    B --> C["③ 具体例で説明する Illustrating Using Examples"]\n    C --> D["④ 仕様を洗練する Refining the Specification"]\n    D --> E["⑤ 検証を自動化する Automating Validation"]\n    E --> F["⑥ 頻繁に検証する Validating Frequently"]\n    F --> G["⑦ 生きたドキュメントへ進化させる Evolving a Documentation System"]\n    G -->|"次のイテレーションへ"| A\n    class A hub;\n    class G done;',
    'diag-amigos':
        MERMAID_CONFIG +
        '\nflowchart LR\n    classDef hub fill:#f5d78e,stroke:#a8720b,stroke-width:2px,color:#241a00;\n    classDef done fill:#cfe8d6,stroke:#3f6b4a,stroke-width:2px,color:#12281a;\n    BIZ["ビジネス視点 プロダクトオーナー・BA"] --> MEET["仕様ワークショップ Three Amigosミーティング"]\n    DEV["開発視点 エンジニア"] --> MEET\n    QA["品質視点 テスター・QA"] --> MEET\n    MEET --> RESULT["共通理解と受け入れ基準の合意"]\n    class MEET hub;\n    class RESULT done;',
    'diag-mapping':
        MERMAID_CONFIG +
        '\nflowchart TB\n    S["ストーリー 黄色カード"] --> R1["ルール1 青色カード"]\n    S --> R2["ルール2 青色カード"]\n    R1 --> E1["具体例A 緑色カード"]\n    R1 --> E2["具体例B 緑色カード"]\n    R2 --> E3["具体例C 緑色カード"]\n    S --> Q["未解決の疑問 赤色カード"]',
    'diag-gwt':
        MERMAID_CONFIG +
        '\nflowchart LR\n    classDef done fill:#cfe8d6,stroke:#3f6b4a,stroke-width:2px,color:#12281a;\n    G1["Given 前提条件"] --> W1["When 操作・イベント"]\n    W1 --> T1["Then 期待される結果"]\n    class T1 done;',
    'diag-ci':
        MERMAID_CONFIG +
        '\nflowchart TB\n    classDef hub fill:#f5d78e,stroke:#a8720b,stroke-width:2px,color:#241a00;\n    classDef done fill:#cfe8d6,stroke:#3f6b4a,stroke-width:2px,color:#12281a;\n    C1["コードを変更してコミット"] --> CI["CIパイプラインが起動"]\n    CI --> RUN["Gherkinシナリオを自動実行"]\n    RUN --> PASS{"すべて合格?"}\n    PASS -->|"Yes"| DOC["生きたドキュメントとして公開"]\n    PASS -->|"No"| FIX["失敗箇所を修正し仕様を再確認"]\n    FIX --> C1\n    class C1 hub;\n    class DOC done;',
};
