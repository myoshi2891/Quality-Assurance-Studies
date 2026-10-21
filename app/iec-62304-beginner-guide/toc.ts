// Original hierarchical navigation, in document order.
export const TOC_GROUPS = [
    {
        "id": "sec-1",
        "label": "1. 3分でわかる結論",
        "children": []
    },
    {
        "id": "sec-2",
        "label": "2. IEC 62304とは何か",
        "children": [
            {
                "id": "sec-3",
                "label": "2.1 目的"
            },
            {
                "id": "sec-4",
                "label": "2.2 なぜ必要なのか"
            },
            {
                "id": "sec-5",
                "label": "2.3 規格が「やらないこと」"
            }
        ]
    },
    {
        "id": "sec-6",
        "label": "3. 最初に覚える用語",
        "children": []
    },
    {
        "id": "sec-7",
        "label": "4. 規格の位置づけ（関連規格マップ）",
        "children": []
    },
    {
        "id": "sec-8",
        "label": "5. 版の歴史と現在の状況",
        "children": []
    },
    {
        "id": "sec-9",
        "label": "6. 規格の構成（条項マップ）",
        "children": []
    },
    {
        "id": "sec-10",
        "label": "Step 1：自分のソフトウェアが対象か判断する",
        "children": [
            {
                "id": "sec-11",
                "label": "1.1 適用対象の判断"
            },
            {
                "id": "sec-12",
                "label": "1.2 スコープの限界"
            }
        ]
    },
    {
        "id": "sec-13",
        "label": "Step 2：ソフトウェア安全クラスを決める",
        "children": [
            {
                "id": "sec-14",
                "label": "2.1 3つのクラス"
            },
            {
                "id": "sec-15",
                "label": "2.2 判定フロー"
            },
            {
                "id": "sec-16",
                "label": "2.3 判定のコツ"
            },
            {
                "id": "sec-17",
                "label": "2.4 セグリゲーション（分離）の考え方"
            },
            {
                "id": "sec-18",
                "label": "2.5 FDAの「文書化レベル」との違い"
            }
        ]
    },
    {
        "id": "sec-19",
        "label": "Step 3：クラスごとの必要活動を把握する",
        "children": [
            {
                "id": "sec-20",
                "label": "3.1 全体マトリクス"
            },
            {
                "id": "sec-21",
                "label": "3.2 クラスと厳格さのイメージ"
            }
        ]
    },
    {
        "id": "sec-22",
        "label": "Step 4：開発プロセスを回す（箇条5）",
        "children": [
            {
                "id": "sec-23",
                "label": "4.1 開発プロセス全体像"
            },
            {
                "id": "sec-24",
                "label": "4.2 各ステップの要点"
            }
        ]
    },
    {
        "id": "sec-25",
        "label": "Step 5：リスクマネジメントを組み込む（箇条7）",
        "children": []
    },
    {
        "id": "sec-26",
        "label": "Step 6：構成管理と変更管理（箇条8）",
        "children": []
    },
    {
        "id": "sec-27",
        "label": "Step 7：保守と問題解決（箇条6・9）",
        "children": [
            {
                "id": "sec-28",
                "label": "7.1 保守プロセス（箇条6）"
            },
            {
                "id": "sec-29",
                "label": "7.2 問題解決プロセス（箇条9）"
            }
        ]
    },
    {
        "id": "sec-30",
        "label": "14. SOUP（出自不明ソフトウェア）の扱い",
        "children": [
            {
                "id": "sec-31",
                "label": "14.1 SOUPとは"
            },
            {
                "id": "sec-32",
                "label": "14.2 SOUPの管理サイクル"
            }
        ]
    },
    {
        "id": "sec-33",
        "label": "15. アジャイル・CI/CDとの付き合い方",
        "children": []
    },
    {
        "id": "sec-34",
        "label": "16. 成果物（ドキュメント）一覧",
        "children": []
    },
    {
        "id": "sec-35",
        "label": "17. QAエンジニア視点のチェックポイント",
        "children": [
            {
                "id": "sec-36",
                "label": "17.1 トレーサビリティの全体像"
            },
            {
                "id": "sec-37",
                "label": "17.2 チェックリスト"
            }
        ]
    },
    {
        "id": "sec-38",
        "label": "18. よくある失敗と対策",
        "children": []
    },
    {
        "id": "sec-39",
        "label": "19. 導入ロードマップ例",
        "children": []
    },
    {
        "id": "sec-40",
        "label": "20. Edition 2（改訂版）の動向",
        "children": [
            {
                "id": "sec-41",
                "label": "20.1 状況（2026年10月11日時点）"
            },
            {
                "id": "sec-42",
                "label": "20.2 実務上の結論"
            },
            {
                "id": "sec-43",
                "label": "20.3 ドラフトで報じられている主な方向性（確定ではありません）"
            }
        ]
    },
    {
        "id": "sec-44",
        "label": "21. FAQ",
        "children": []
    },
    {
        "id": "sec-45",
        "label": "22. 参考ソース一覧",
        "children": [
            {
                "id": "sec-46",
                "label": "22.1 公式・規格団体"
            },
            {
                "id": "sec-47",
                "label": "22.2 国際的に知られる専門家・コンサルタント"
            },
            {
                "id": "sec-48",
                "label": "22.3 Edition 2 の動向"
            },
            {
                "id": "sec-49",
                "label": "22.4 総合解説・実務資料"
            },
            {
                "id": "sec-50",
                "label": "22.5 このガイドの根拠の強さについて"
            }
        ]
    }
] as const;
