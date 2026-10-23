import React from 'react';
import '@fontsource/jetbrains-mono/600.css';

// Runtime LF text survives both Next.js/SWC JSX transforms and preserves clipboard text.
function CodeLine({ children, newline }: { children?: React.ReactNode; newline: boolean }) {
    return React.createElement('div', { className: 'code-line' }, children, newline ? '\n' : null);
}
export default function CodeExample() { return <pre className="yaml"><code>
<CodeLine newline={true}><span className="tk-c">{"# 意味（DEC）"}</span></CodeLine>
<CodeLine newline={true}><span className="tk-k">{"data_element_concept"}</span>{":"}</CodeLine>
<CodeLine newline={true}>{"  "}<span className="tk-k">{"id"}</span>{": "}<span className="tk-s">{"DEC-0001"}</span></CodeLine>
<CodeLine newline={true}>{"  "}<span className="tk-k">{"name"}</span>{": 患者の収縮期血圧"}</CodeLine>
<CodeLine newline={true}>{"  "}<span className="tk-k">{"object_class"}</span>{": 患者"}</CodeLine>
<CodeLine newline={true}>{"  "}<span className="tk-k">{"property"}</span>{": 収縮期血圧"}</CodeLine>
<CodeLine newline={true}>{"  "}<span className="tk-k">{"definition"}</span>{": 患者の心臓が収縮したときの動脈内の血圧。"}</CodeLine>
<CodeLine newline={true}></CodeLine>
<CodeLine newline={true}><span className="tk-c">{"# 表現（VD）— 2種類"}</span></CodeLine>
<CodeLine newline={true}><span className="tk-k">{"value_domains"}</span>{":"}</CodeLine>
<CodeLine newline={true}>{"  - "}<span className="tk-k">{"id"}</span>{": "}<span className="tk-s">{"VD-0001"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"name"}</span>{": 血圧_mmHg_整数"}</CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"datatype"}</span>{": "}<span className="tk-s">{"integer"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"unit"}</span>{": "}<span className="tk-s">{"mmHg"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"permissible_range"}</span>{":"}</CodeLine>
<CodeLine newline={true}>{"      "}<span className="tk-k">{"min"}</span>{": "}<span className="tk-n">{"0"}</span></CodeLine>
<CodeLine newline={true}>{"      "}<span className="tk-k">{"max"}</span>{": "}<span className="tk-n">{"300"}</span></CodeLine>
<CodeLine newline={true}>{"  - "}<span className="tk-k">{"id"}</span>{": "}<span className="tk-s">{"VD-0002"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"name"}</span>{": 血圧_kPa_小数"}</CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"datatype"}</span>{": "}<span className="tk-s">{"decimal"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"unit"}</span>{": "}<span className="tk-s">{"kPa"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"permissible_range"}</span>{":"}</CodeLine>
<CodeLine newline={true}>{"      "}<span className="tk-k">{"min"}</span>{": "}<span className="tk-n">{"0.0"}</span></CodeLine>
<CodeLine newline={true}>{"      "}<span className="tk-k">{"max"}</span>{": "}<span className="tk-n">{"40.0"}</span></CodeLine>
<CodeLine newline={true}></CodeLine>
<CodeLine newline={true}><span className="tk-c">{"# データエレメント（DE）= DEC + VD"}</span></CodeLine>
<CodeLine newline={true}><span className="tk-k">{"data_elements"}</span>{":"}</CodeLine>
<CodeLine newline={true}>{"  - "}<span className="tk-k">{"id"}</span>{": "}<span className="tk-s">{"DE-0001"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"name"}</span>{": 患者収縮期血圧_mmHg"}</CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"data_element_concept"}</span>{": "}<span className="tk-s">{"DEC-0001"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"value_domain"}</span>{": "}<span className="tk-s">{"VD-0001"}</span></CodeLine>
<CodeLine newline={true}>{"  - "}<span className="tk-k">{"id"}</span>{": "}<span className="tk-s">{"DE-0002"}</span></CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"name"}</span>{": 患者収縮期血圧_kPa"}</CodeLine>
<CodeLine newline={true}>{"    "}<span className="tk-k">{"data_element_concept"}</span>{": "}<span className="tk-s">{"DEC-0001"}</span></CodeLine>
<CodeLine newline={false}>{"    "}<span className="tk-k">{"value_domain"}</span>{": "}<span className="tk-s">{"VD-0002"}</span></CodeLine>
</code></pre>; }
