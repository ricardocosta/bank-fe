/** @type {import("prettier").Options} */
export default {
  // pretiier core
  proseWrap: "always",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-prisma",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  // prettier-plugin-sort-json
  jsonRecursiveSort: true,
  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^#app",
    "",
    "^#other",
    "",
    "^#tests",
    "",
    "^#",
    "",
    "^[./]",
    "",
    "<TYPES>",
    "",
    "<TYPES>^[#]",
    "",
    "<TYPES>^[./]",
  ],
};
