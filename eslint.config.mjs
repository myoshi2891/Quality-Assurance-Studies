import tsConfig from 'eslint-config-next/typescript';

// eslint-config-next のフル設定（react/import プラグイン）は ESLint v10 と非互換のため
// TypeScript ルールのみ有効化する
export default tsConfig;
