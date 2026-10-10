import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function WhatIsLegacy() {
  return (
    <section id="what-is-legacy">
      <p className="section-eyebrow">
        <i className="ti ti-code-off">
        </i>
        {"DEFINITION"}
      </p>
      <h2>
        {"レガシーコードとは何か"}
      </h2>
      <div className="prose">
        <p>
          {" 書籍内での定義は、単に「古いコード」ではなく、"}
          <strong>
            {"理由を問わず修正・拡張・作業が困難になったコード"}
          </strong>
          {"を指しています。書かれてから1年しか経っていなくても、テストがなく変更のたびに副作用が起きるようなコードは、この定義においてはすでにレガシーコードです。 "}
        </p>
        <p>
          {" 以下は、レガシーコードが生まれ続ける典型的な悪循環と、9つのプラクティスが目指す好循環を対比した図です。 "}
        </p>
      </div>
      <div id="diagram-vicious" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-vicious"]} />
      </div>
      <p className="diagram-caption">
        {"図1: 悪循環 ― レガシー化が進むサイクル"}
      </p>
      <div id="diagram-virtuous" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-virtuous"]} />
      </div>
      <p className="diagram-caption">
        {" 図2: 好循環 ― 9つのプラクティスが目指すサイクル "}
      </p>
    </section>
  );
}
