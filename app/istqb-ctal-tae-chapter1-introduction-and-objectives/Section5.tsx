'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  'テスト自動化の定義（3つの活動）を自分の言葉で説明できる',
  'メリット9項目・デメリット6項目・限界4項目を区別して説明できる',
  'ウォーターフォール・Vモデル・アジャイルそれぞれで、自動化の「構築タイミング」と「実行タイミング」の違いを説明できる',
  'Vモデルにおいて「テストレベルごとにTAFを用意することが推奨される」という記述を覚えている',
  'アジャイルにおける「in-sprint automation」という用語とその意味を説明できる',
  'ツール選定において、SUTの分析→要件特定→コスト検討→チームスキル評価→言語親和性、という流れを説明できる',
  'キーワード（system under test, test automation, test automation engineer）を正確に説明できる',
];

export default function Section5() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(CHECKLIST_ITEMS.length).fill(false)
  );

  const handleToggle = (index: number) => {
    setCheckedItems((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const doneCount = checkedItems.filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const progressPercent = totalCount > 0 ? (doneCount / totalCount) * 100 : 0;

  return (
    <section className="section" id="s5">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-checklist"></i>
        </div>
        <div>
          <span className="eyebrow">章末チェックリストと試験対策のポイント</span>
          <h2>理解度セルフチェック</h2>
        </div>
      </div>

      <div className="check-progress-wrap">
        <div className="check-progress-bar">
          <div
            className="check-progress-fill"
            id="checkFill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="check-progress-label" id="checkLabel">
          {doneCount} / {totalCount} 完了
        </div>
      </div>

      <ul className="check-list" id="checkList">
        {CHECKLIST_ITEMS.map((item, idx) => (
          <li key={idx} className={checkedItems[idx] ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems[idx]}
                onChange={() => handleToggle(idx)}
              />
              <span className="txt">{item}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="callout warn">
        <i className="ti ti-alert-triangle"></i>
        <div className="callout-body">
          <div className="callout-title">ベストプラクティス（試験対策）</div>
          <p>
            第1章はK2レベルのため、選択肢問題では「一見正しそうだが微妙にニュアンスが異なる」ダミー選択肢（例：デメリットと限界の入れ替え）が出やすい傾向があります。表形式で整理した項目を「デメリットか限界か」を即座に判別できるレベルまで整理しておきましょう。
          </p>
          <p>
            シラバス本文の因果関係（例：「プログラミング経験が少ない→ローコード/ノーコードが有効」）はシナリオ問題として出題されやすいため、単なる暗記でなく「なぜその選択が妥当なのか」を説明できるようにしておくことが重要です。
          </p>
        </div>
      </div>
    </section>
  );
}
