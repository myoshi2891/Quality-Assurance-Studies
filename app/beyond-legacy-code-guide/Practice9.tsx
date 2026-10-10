import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Practice9() {
  return (
    <div className="practice-block" id="practice-9">
      <h3>
        {"プラクティス9: レガシーコードをリファクタリングする"}
      </h3>
      <div className="prose">
        <p>
          {" 最後のプラクティスは、既存のコードに手を入れる場面での指針です。技術的負債を「投資」と「借金」のどちらとして扱うかという視点、コードに変更が必要になったときの判断基準、そしてオープン・クローズドの原則に沿ったリファクタリング技法などが紹介されています。著者は、テストのないレガシーコードに対しては、そのままテストを書ける場合はまず特性化テストを直接追加し、テストを書きにくい場合に限ってテスト用の「継ぎ目(Seam)」を作ってからテストを追加することを勧めています。これはMichael Feathersの『Working Effectively with Legacy Code』(レガシーコード改善ガイド)の考え方とも重なります。 "}
        </p>
      </div>
      <div id="diagram-refactor" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-refactor"]} />
      </div>
      <p className="diagram-caption">
        {"図6: レガシーコードを安全に改善する流れ"}
      </p>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" レガシーコードに手を入れる前に、テストが書ける状態であれば、まず現状の振る舞いを固定するテスト(特性化テスト)を書く "}
          </li>
          <li>
            {" テストを書くこと自体が難しい場合は、先に小さく安全なリファクタリングで継ぎ目(Seam)を作り、テストを書ける形にしてから本題の変更に進む "}
          </li>
          <li>
            {"一度に大きく書き換えず、小さな安全なステップに分解する"}
          </li>
          <li>
            {" 「動くコードを書く」作業と「コードを整える」作業を区別して意識する "}
          </li>
        </ul>
      </div>
    </div>
  );
}
