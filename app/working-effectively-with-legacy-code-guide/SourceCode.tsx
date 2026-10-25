import React from 'react';
const CODE = "// calculateShippingFee の「今の」挙動をまず記録する\ntest('calculateShippingFee の現状の挙動を記録する', () => {\n  const result = calculateShippingFee(sampleOrder);\n\n  // 1. 最初はここを仮の値のままテストを実行する\n  // 2. 実際に返ってきた値を確認する\n  // 3. その値をそのまま期待値として書き込み、テストをgreenにする\n  expect(result).toEqual(actualObservedValue);\n});";
// Preserve every source newline and indentation through Next.js/SWC transforms.
export default function SourceCode() {
 const pattern = /(\/\/[^\n]*|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|\b(?:const|let|var|function|return|if|else|new|throw)\b|\b\d+(?:\.\d+)?\b)/g;
 return <pre><code className="language-javascript hljs">{CODE.split(/(?<=\n)/).map((line,i) => <div className="code-line" key={i}>{line.split(pattern).map((token,j) => {const type = token.startsWith('//') ? 'comment' : /^['"]/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : /^(const|let|var|function|return|if|else|new|throw)$/.test(token) ? 'keyword' : '';return type ? <span className={'hljs-'+type} key={j}>{token}</span> : token;})}</div>)}</code></pre>;
}
