/** @type {import("prettier").Config} */

const config = {
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: "none",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^@/context/(.*)$",
    "^@/data/(.*)$",
    "^@/hooks/(.*)$",
    "^@/lib/(.*)$",
    "^@/prisma/(.*)$",
    "^@/public/(.*)$",
    "^@/styles/(.*)$",
    "^@/types/(.*)$",
    "^@/utils/(.*)$",
    "",
    "^[./]",
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

module.exports = config;
