import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section13() {
    return <section id="sec13">
        <div className="sec-head">
            <i className="ti ti-map">

            </i>
            <h2>
                {"13. 学習ロードマップ"}
            </h2>
        </div>
        <div className="diagram-block">
            <div className="diagram-caption">
                {"図8: Quality Is Free の次に読むべき本"}
            </div>
            <ChapterDiagram id="dg-roadmap" />
        </div>
        <ul>
            <li>
                <strong>
                    {"次に読むべき本（品質哲学を深める）"}
                </strong>
                {"：Gerald M. Weinberg『Perfect Software: And Other Illusions about Testing』 "}
            </li>
            <li>
                <strong>
                    {"次に読むべき本（統計的品質管理の視点を加える）"}
                </strong>
                {"：W. Edwards Deming『Out of the Crisis』 "}
            </li>
            <li>
                <strong>
                    {"次に読むべき本（現代のDevOps文脈で品質と速度の両立を学ぶ）"}
                </strong>
                {"：Forsgren, Humble, Kim『Accelerate』 "}
            </li>
            <li>
                <strong>
                    {"次に読むべき本（数字を鵜呑みにしない批判的思考を鍛える）"}
                </strong>
                {"：Laurent Bossavit『The Leprechauns of Software Engineering』 "}
            </li>
        </ul>
    </section>;
}
