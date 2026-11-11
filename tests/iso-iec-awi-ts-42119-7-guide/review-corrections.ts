/** Apply verified review corrections only to archived test expectations. */
export const applyReviewCorrections = (html: string) => html
  .replace('標準誤差：測定値のばらつきの大きさを表す統計の指標', '標準誤差：平均値などの推定値が、標本の取り方によってどの程度ばらつくかを表す統計の指標')
  .replace('Microsoft AI Red Team「Red Teaming in Generative AI Systems」', 'Microsoft AI Red Team「PyRIT: A Framework for Security Risk Identification and Red Teaming in Generative AI Systems」')
  .replace(/<tr\b[^>]*>\s*<td>8ksec\.io「Red Teaming LLM Applications at Scale with garak and\s+PyRIT」<\/td>[\s\S]*?<\/tr>\s*/, '');
