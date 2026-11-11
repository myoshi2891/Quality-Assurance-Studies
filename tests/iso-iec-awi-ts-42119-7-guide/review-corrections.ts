/** Apply verified citation corrections only to archived test expectations. */
export const applyReviewCorrections = (html: string) => html
  .replace('Microsoft AI Red Team「Red Teaming in Generative AI Systems」', 'Microsoft AI Red Team「PyRIT: A Framework for Security Risk Identification and Red Teaming in Generative AI Systems」')
  .replace(/<tr\b[^>]*>\s*<td>8ksec\.io「Red Teaming LLM Applications at Scale with garak and\s+PyRIT」<\/td>[\s\S]*?<\/tr>\s*/, '');
