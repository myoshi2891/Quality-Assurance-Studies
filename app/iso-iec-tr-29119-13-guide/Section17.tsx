import React from 'react';
import Diagram from './Diagram';
import Checklist from './Checklist';

/** 16. 学習ロードマップとチェックリスト — preserve the complete original category. */
export default function Section17() {
  return <>
<h2 id={"s48"}>{"16. 学習ロードマップとチェックリスト"}</h2>
{"\n"}
<h3 id={"s49"}>{"16.1 おすすめの学習順序"}</h3>
{"\n"}
<figure className={"diagram"}><Diagram index={16} />{"\n"}</figure>
{"\n"}
<h3 id={"s50"}>{"16.2 理解度チェックリスト"}</h3>
{"\n"}
<Checklist />
{"\n"}

{"\n"}
<hr />
{"\n"}
  </>;
}
