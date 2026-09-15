'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  title: string;
  note: string;
}

const CHECKLIST_ITEMS: readonly ChecklistItem[] = [
  {
    id: 'cl1',
    title: '環境準備 ─ 使用言語のxUnit系テストフレームワーク（JUnit / pytest / Jest等）を1つ選び、テストの実行方法を確認する',
    note: 'いきなり本番プロジェクトで試さず、練習用の小さなリポジトリから始める',
  },
  {
    id: 'cl2',
    title: 'テストリスト作成 ─ 実装したい機能を、思いつく限り箇条書きでリストアップする',
    note: '完璧なリストを最初から作ろうとしない。実装しながら追加してよい',
  },
  {
    id: 'cl3',
    title: '最初のテスト ─ リストから最も簡単な項目を選び、テストコードを書く',
    note: 'まだ存在しないクラス・関数を呼び出してもよい（コンパイルエラーもRedの一種）',
  },
  {
    id: 'cl4',
    title: 'Red確認 ─ テストを実行し、意図どおりに失敗することを確認する',
    note: '「なぜ失敗しているか」を必ず読む。想定外の理由で失敗していないか確認する',
  },
  {
    id: 'cl5',
    title: '最小実装 ─ テストを通すためだけの、可能な限り小さいコードを書く',
    note: 'Fake It（ベタ書き）で構わない。かっこよく書こうとしない',
  },
  {
    id: 'cl6',
    title: 'Green確認 ─ 全テストが通ることを確認する',
    note: '1つのテストのために既存のテストを壊していないか必ず確認する',
  },
  {
    id: 'cl7',
    title: 'リファクタリング ─ 重複コード・マジックナンバー・分かりにくい命名を整理する',
    note: 'テストが常にGreenの状態を保ったまま、小さな変更を積み重ねる',
  },
  {
    id: 'cl8',
    title: '次のテストへ ─ テストリストから次の項目を選び、3に戻る',
    note: 'リストが空になるまで繰り返す。新しく気づいた項目はリストに追加する',
  },
  {
    id: 'cl9',
    title: '振り返り ─ 一区切りついたら、書いたテスト群を読み返す',
    note: 'テストがドキュメントとして機能しているか（仕様が読み取れるか）を確認する',
  },
] as const;

export default function Checklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedState).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;

  return (
    <>
      <div className="checklist-head">
        <span className="checklist-counter" id="clCounter" role="status">
          {completedCount} / {totalCount} 完了
        </span>
      </div>
      <ul className="checklist" id="clList">
        {CHECKLIST_ITEMS.map((item) => {
          const isDone = Boolean(checkedState[item.id]);
          return (
            <li key={item.id} className={isDone ? 'done' : ''}>
              <input
                type="checkbox"
                id={item.id}
                checked={isDone}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={item.id}>
                {item.title}
                <span className="cl-note">{item.note}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
