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
    // 添加自定义规则
    rules: {
      // 允许使用 TypeScript 的 `any` 类型
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];

export default eslintConfig;
