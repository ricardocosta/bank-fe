/** @type {import("prettier").Options} */
export default {
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
  // prettier-plugin-sort-json
  jsonRecursiveSort: true,

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-prisma",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  // pretiier core
  proseWrap: "always",
};
