'use client';
import React,{useState} from 'react';
const ITEMS=[
  {
    "term": "VSE 最大25人の企業・組織・部門・プロジェクト",
    "title": "VSE",
    "definition": "最大25人の企業・組織・部門・プロジェクト"
  },
  {
    "term": "プロファイル 大きな規格から、目的に合わせて選んだプロセス・活動・タスク・成果の部分集合",
    "title": "プロファイル",
    "definition": "大きな規格から、目的に合わせて選んだプロセス・活動・タスク・成果の部分集合"
  },
  {
    "term": "Basicプロファイル 1つの作業チームが1つの製品を作るVSE向けのプロファイル",
    "title": "Basicプロファイル",
    "definition": "1つの作業チームが1つの製品を作るVSE向けのプロファイル"
  },
  {
    "term": "汎用プロファイル群 安全重要でない製品を開発するVSE向けの、4つの成長段階のプロファイル群",
    "title": "汎用プロファイル群",
    "definition": "安全重要でない製品を開発するVSE向けの、4つの成長段階のプロファイル群"
  },
  {
    "term": "プロセス 入力を出力に変える、相互に関連する活動の集まり",
    "title": "プロセス",
    "definition": "入力を出力に変える、相互に関連する活動の集まり"
  },
  {
    "term": "活動 一連のタスクのまとまり",
    "title": "活動",
    "definition": "一連のタスクのまとまり"
  },
  {
    "term": "タスク 成果の達成に貢献する、必須・推奨・許容された行動",
    "title": "タスク",
    "definition": "成果の達成に貢献する、必須・推奨・許容された行動"
  },
  {
    "term": "条件付きタスク 条件により、必須にも任意にも対象外にもなりうるタスク",
    "title": "条件付きタスク",
    "definition": "条件により、必須にも任意にも対象外にもなりうるタスク"
  },
  {
    "term": "ベースライン 正式に承認され、ある時点で固定された構成要素の版",
    "title": "ベースライン",
    "definition": "正式に承認され、ある時点で固定された構成要素の版"
  },
  {
    "term": "作業成果物 プロセスから生じる成果物（計画、仕様、コード、報告書など）",
    "title": "作業成果物",
    "definition": "プロセスから生じる成果物（計画、仕様、コード、報告書など）"
  },
  {
    "term": "デプロイメントパッケージ（DP） VSEが実務を導入しやすくするための成果物一式",
    "title": "デプロイメントパッケージ（DP）",
    "definition": "VSEが実務を導入しやすくするための成果物一式"
  },
  {
    "term": "ソフトウェアサポート 実装済みシステムの利用と改善のために、継続して提供されるサービスと資材",
    "title": "ソフトウェアサポート",
    "definition": "実装済みシステムの利用と改善のために、継続して提供されるサービスと資材"
  },
  {
    "term": "トレーサビリティ 要求から設計・コード・テストまで、対応関係をたどれること",
    "title": "トレーサビリティ",
    "definition": "要求から設計・コード・テストまで、対応関係をたどれること"
  },
  {
    "term": "欠陥 作業成果物が要求や仕様を満たさず、修理か交換が必要な不備",
    "title": "欠陥",
    "definition": "作業成果物が要求や仕様を満たさず、修理か交換が必要な不備"
  }
];
/** Search original terms and definitions case-insensitively, announcing the remaining count. */
export default function Glossary(){const [query,setQuery]=useState('');const q=query.trim().toLowerCase();const count=ITEMS.filter(i=>i.term.toLowerCase().includes(q)).length;return <><div className="gloss-toolbar"><input aria-label="用語を検索" className="gloss-search" placeholder="用語を検索（例：プロファイル、VSE）" type="search" onChange={e=>setQuery(e.target.value)}/><span className="gloss-count" role="status">{count} 件</span></div>{"\n"}<div className="gloss-grid">{"\n"}{ITEMS.map(i=><div className="gloss-card" key={i.term} data-term={i.term} hidden={!i.term.toLowerCase().includes(q)}>{"\n"}<div className="gloss-term">{i.title}</div>{"\n"}<div className="gloss-def">{i.definition}</div>{"\n"}</div>)}</div>{"\n"}<p className="gloss-empty" style={count?undefined:{display:'block'}}>該当する用語がありません。</p></>;}
