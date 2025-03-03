import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2], // インデントをスペース2つに統一
      "space-in-parens": ["error", "never"], // 括弧内の不要なスペースを削除
      "array-bracket-spacing": ["error", "never"], // 配列の括弧内スペースを削除
      "object-curly-spacing": ["error", "always"], // オブジェクトの波括弧内にスペースを入れる
      "comma-spacing": ["error", { "before": false, "after": true }], // カンマの後にスペースを入れる
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // コロンの後にスペースを入れる
      "no-trailing-spaces": ["error"], // 行末の不要なスペースを削除
      "space-before-blocks": ["error", "always"], // ブロックの前にスペースを入れる
      "spaced-comment": ["error", "always"], // コメントの前にスペースを入れる
      "arrow-spacing": ["error", { "before": true, "after": true }], // アロー関数の矢印前後にスペースを入れる
      "semi-spacing": ["error", { "before": false, "after": true }], // セミコロンの後にスペースを入れる
      "block-spacing": ["error", "always"], // ブロック内のスペースを強制
      "switch-colon-spacing": ["error", { "after": true, "before": false }], // switch文のコロンの後にスペース
      "template-curly-spacing": ["error", "never"] // テンプレートリテラルの `{}` 内にスペースを入れない
    }
  }
];

export default eslintConfig;
