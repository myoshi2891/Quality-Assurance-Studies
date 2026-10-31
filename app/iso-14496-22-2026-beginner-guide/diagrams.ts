export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0b1a2e",
    "primaryColor": "#12294a",
    "primaryBorderColor": "#7c9eff",
    "primaryTextColor": "#e6eefc",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0e2038",
    "tertiaryColor": "#12294a",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0e2038",
    "clusterBorder": "#1f3555",
    "edgeLabelBackground": "#0e2038",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_01 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: TrueTypeとPostScriptの統合と標準化
    accDescr: TrueType形式とPostScript由来のCFF形式がOpenType/Open Font Formatに統合され、ISO/IEC 14496-22として国際規格化されてブラウザやOSで共通利用される流れを示す。
    TT["TrueType 形式 二次曲線の輪郭と hinting"] --> OT["OpenType Open Font Format"]
    PS["PostScript 由来の CFF 形式 三次曲線の輪郭"] --> OT
    OT --> ISO["ISO/IEC 14496-22 国際規格として標準化"]
    ISO --> USE["ブラウザ OS アプリが共通で読める"]`;

export const DIAGRAM_02 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: ISO/IEC 14496-22:2026改訂スケジュール
    accDescr: 2023年8月の新規プロジェクト承認から、CD登録、DIS承認、投票期間、FDIS承認を経て2026年7月の国際規格発行に至るプロセスを示す。
    A["2023-08-11 新規プロジェクト承認"] --> B["2024-08-06 委員会原案 CD 登録"]
    B --> C["2024-12-17 CD が DIS として承認"]
    C --> D["2025-02-24 から 2025-05-20 DIS 投票 12週間"]
    D --> E["2025-08-08 DIS 承認 FDIS へ"]
    E --> F["2026-03-03 から 2026-04-29 FDIS 投票 8週間"]
    F --> G["2026-07-16 国際規格として発行"]`;

export const DIAGRAM_03 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: ISO第5版作業草案とMicrosoft OpenType仕様の関係
    accDescr: ISO第5版の作業草案がMicrosoft OpenType 1.9.1とISO/IEC 14496-22:2026にどのように反映され、最新更新と照合されるかを示す。
    WD["ISO 第5版の作業草案"] --> MS["OpenType 1.9.1 2024年5月 Microsoft 公開"]
    WD --> ISO5["ISO/IEC 14496-22:2026 2026年7月 発行"]
    MS --> POST["リリース後の更新 新しいスクリプトタグなど"]
    ISO5 --> CHECK["差分の確認は購入した本文と照合"]`;

export const DIAGRAM_04 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: sfntコンテナの読み込みフロー
    accDescr: ファイル先頭4バイトを判定してフォントコレクションか単一フォントかを識別し、sfntVersionから輪郭形式を判別してテーブルレコードを取得する手順。
    START["ファイルを開く"] --> HEAD{"先頭4バイトは ttcf か"}
    HEAD -->|"はい"| TTC["フォントコレクション 各フォントの目次位置を読む"]
    HEAD -->|"いいえ"| DIR["テーブルディレクトリを読む"]
    TTC --> DIR
    DIR --> VER{"sfntVersion は 0x00010000 か OTTO か"}
    VER -->|"0x00010000"| TTO["TrueType 輪郭 glyf を使う"]
    VER -->|"OTTO"| CFFO["CFF か CFF2 の輪郭を使う"]
    TTO --> REC["テーブルレコードを tableTag で探す"]
    CFFO --> REC
    REC --> CHK["offset と length で範囲を取り出す"]`;

export const DIAGRAM_05 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: OpenTypeフォントテーブルの全体地図
    accDescr: 必須テーブル群、基本輪郭、SVG、ビットマップ、高度な組版（GSUB/GPOS等）、可変フォント、カラー、その他の分類と構造。
    FONT["OpenType フォント"] --> REQ["必須 cmap head hhea hmtx maxp name OS/2 post"]
    FONT --> OUT["基本輪郭 glyf loca または CFF または CFF2"]
    FONT --> SVGT["任意 SVG 基本輪郭と共存し グリフの SVG 表現を提供"]
    SVGT -.->|"共存"| OUT
    FONT --> BMP["ビットマップ EBDT EBLC EBSC CBDT CBLC sbix"]
    FONT --> LAY["高度な組版 GSUB GPOS GDEF BASE JSTF MATH"]
    FONT --> VAR["可変フォント fvar avar gvar cvar HVAR MVAR VVAR STAT"]
    FONT --> COL["カラー COLR CPAL"]
    FONT --> ETC["その他 DSIG kern meta VORG vhea vmtx"]`;

export const DIAGRAM_06 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: 文字表示パイプライン
    accDescr: Unicode文字列がcmapでグリフ番号になり、GSUB置換、メトリクス取得、GPOS位置調整、輪郭抽出、ラスタライズを経て画面表示される流れ。
    TXT["Unicode 文字列"] --> CMAP["cmap で グリフ番号に変換"]
    CMAP --> GSUB["GSUB で グリフを置き換える 合字 異体字 文脈依存の形"]
    GSUB --> METRIC["hmtx vmtx で 基準の送り幅を決める"]
    METRIC --> GPOS["GPOS で 位置と送り幅を調整する xAdvance yAdvance カーニング 濁点の位置 など"]
    GPOS --> OUTL["glyf CFF CFF2 で 輪郭を取り出す"]
    OUTL --> RAST["ラスタライズ 画素に変換"]
    RAST --> SCREEN["画面に表示"]`;

export const DIAGRAM_07 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: GSUBとGPOSのデータ階層
    accDescr: ScriptList（文字体系）からLangSys（言語設定）、FeatureList（機能一覧）、LookupList（処理一覧）、Lookupサブテーブル（実際の置換・位置データ）への参照構造。
    SL["ScriptList 文字体系の一覧 例 kana latn arab"] --> LS["LangSys 言語ごとの設定"]
    LS --> FL["FeatureList 機能の一覧 例 liga kern vert"]
    FL --> LL["LookupList 具体的な処理の一覧"]
    LL --> SUB["Lookup サブテーブル 実際の置換 位置調整データ"]`;

export const DIAGRAM_08 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: 可変フォントの座標計算フロー
    accDescr: ユーザー指定の軸値から正規化を行い、avar補正、タプルのスカラー計算、デルタのスカラー倍、デフォルト座標への合算を経て変形輪郭を生成する手順。
    USER["ユーザーが wght 650 を指定"] --> NORM["正規化 最小100 標準400 最大900 なので 0.5"]
    NORM --> AVAR["avar があれば補正する"]
    AVAR --> SCALAR["gvar の各タプルについて 適用領域から スカラーを計算する"]
    SCALAR --> DELTA["各タプルのデルタに そのスカラーを掛ける"]
    DELTA --> ADD["スカラー倍したデルタを合算し デフォルト輪郭の座標に足す"]
    ADD --> OUT["wght 650 の輪郭が完成"]`;

export const DIAGRAM_09 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: TTCフォントコレクションの構造
    accDescr: TTCヘッダの下に複数のフォント目次があり、別々のcmapテーブルから共通のglyf/loca輪郭データを共有参照する仕組み。
    TTC["TTC ヘッダ ttcf"] --> D1["Font1 のテーブルディレクトリ"]
    TTC --> D2["Font2 のテーブルディレクトリ"]
    D1 --> C1["cmap 1 かな 1 と 漢字を指す"]
    D2 --> C2["cmap 2 かな 2 と 漢字を指す"]
    C1 --> G["共有の glyf と loca かな1 かな2 漢字"]
    C2 --> G`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: Chromeのフォントエンジン刷新スケジュール
    accDescr: Chrome 128でのRust製Fontations試験導入から、Chrome 133・136でのWebフォント・システムフォント有効化、Chrome 145でのFreeType削除までの移行過程。
    A["Chrome 128 2024年8月 色付きフォントや CFF2 などで試験導入"] --> B["Chrome 133 2025年2月 Linux Android ChromeOS の Web フォントで有効化"]
    B --> C["Chrome 136 Linux と Android のシステムフォントで有効化"]
    C --> D["Chrome 145 Blink から FreeType を削除"]`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart TD
    accTitle: 初学者の学習ロードマップ 6ステップ
    accDescr: ステップ1 目次の自作コード読みから、ステップ2 cmap/hmtx、ステップ3 GSUB置換、ステップ4 可変フォントfvar、ステップ5 HarfBuzz、ステップ6 ISO本文照合へと進む順序。
    S1["ステップ1 章5を読み 目次を自作コードで読む"] --> S2["ステップ2 cmap と hmtx を読み 文字から送り幅を出す"]
    S2 --> S3["ステップ3 GSUB の単純な置換を読む"]
    S3 --> S4["ステップ4 可変フォントの fvar を読み 輪郭の差分を読む TrueType 輪郭は gvar CFF2 輪郭は CFF2 テーブル"]
    S4 --> S5["ステップ5 HarfBuzz で シェーピング結果を確認する"]
    S5 --> S6["ステップ6 ISO 本文と OpenType 1.9.1 を照合する"]`;
