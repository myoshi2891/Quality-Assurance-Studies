'use client';

import React, { useState } from 'react';

interface ChecklistItemData {
  id: number;
  content: React.ReactNode;
}

const CHECKLIST_ITEMS: readonly ChecklistItemData[] = [
  {
    id: 1,
    content: (
      <>
        ワークフロー全体の<code>permissions</code>をread-only(または<code>{'{}'}</code>)にし、必要なジョブにのみ権限を追加しているか
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        サードパーティアクションはフルコミットSHAでピン留めし、Dependabotで更新を自動化しているか
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <code>pull_request_target</code>を使う場合、フォークのコードを明示的にチェックアウトしていないか(または権限分離パターンに再設計したか)
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        クラウド認証はOIDCベースの短命トークンに移行し、長期アクセスキーを避けているか
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        本番デプロイに対応するEnvironmentにRequired Reviewers・デプロイブランチ制限を設定しているか
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        セルフホストランナーをパブリックリポジトリで使っていないか、Runner Groupsで信頼境界を分離しているか
      </>
    ),
  },
  {
    id: 7,
    content: (
      <>
        リリース成果物にArtifact Attestations(ビルド来歴)を付与しているか
      </>
    ),
  },
  {
    id: 8,
    content: (
      <>
        キャッシュキーに依存関係ファイルのハッシュを含め、<code>concurrency</code>で無駄な実行を抑止しているか
      </>
    ),
  },
  {
    id: 9,
    content: (
      <>
        失敗時のログ・アーティファクトを保存し、Job SummaryとGitHub CLIでの調査導線を整えているか
      </>
    ),
  },
  {
    id: 10,
    content: (
      <>
        コストの前提(料金・無料枠)は必ずGitHub公式の最新情報で確認しているか
      </>
    ),
  },
] as const;

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;

  return (
    <div className="checklist-container">
      <div className="checklist-progress">
        <span className="checklist-progress-text">
          達成状況: <strong>{completedCount}</strong> / {totalCount} 項目
        </span>
        <div className="checklist-progress-bar">
          <div
            className="checklist-progress-fill"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      <ul className="checklist">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <li key={item.id} className={isChecked ? 'checked' : ''}>
              {/* li の listitem セマンティクスを保つため、role は付けずネイティブ checkbox を内包する */}
              <label className="checklist-label">
                <input
                  type="checkbox"
                  className="checklist-input"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                />
                <span className={`box ${isChecked ? 'checked' : ''}`} aria-hidden="true">
                  {isChecked && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="check-icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="item-text">{item.content}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
