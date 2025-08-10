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
      // Disable unused variables warnings for now to focus on critical errors
      "@typescript-eslint/no-unused-vars": "warn",
      // Allow apostrophes and quotes in JSX for now
      "react/no-unescaped-entities": "off",
      // Allow img elements for now (can be optimized later)
      "@next/next/no-img-element": "warn",
      // Allow HTML anchor tags for now
      "@next/next/no-html-link-for-pages": "warn",
      // Fix React hooks dependencies
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default eslintConfig;
