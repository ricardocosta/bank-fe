const TS_FILES = ["*.ts", "*.tsx"];
const JSX_FILES = ["*.jsx", "*.tsx"];
const VITEST_FILES = ["app/**/__tests__/**/*", "app/**/*.test.*"];
const APP_FILES = ["app/**"];
const TEST_FILES = ["**/tests/**", ...VITEST_FILES];

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: ["plugin:oxlint/recommended"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended-type-checked",
      ],
      files: TS_FILES,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/array-type": "off", // Already checked by oxlint
        "@typescript-eslint/consistent-type-exports": "error", // Needs typechecking
        // Replaces oxlint usage of deprecated no-empty-interface
        "@typescript-eslint/no-empty-object-type": [
          "error",
          {
            allowInterfaces: "with-single-extends",
          },
        ],
        "@typescript-eslint/no-namespace": "off", // Already checked by oxlint
        "@typescript-eslint/no-unused-vars": "off", // Already checked by oxlint
        "@typescript-eslint/only-throw-error": "off", // Throwing a response is valid in Remix
      },
    },
    {
      extends: ["plugin:tailwindcss/recommended"],
      files: JSX_FILES,
      rules: {
        "tailwindcss/no-custom-classname": "off",
      },
    },
    {
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      files: VITEST_FILES,
      rules: {
        "testing-library/no-debugging-utils": "error",
        "testing-library/prefer-explicit-assert": "error",
        "testing-library/prefer-user-event": "error",
      },
      // we're using vitest which has a very similar API to jest
      // (so the linting plugins work nicely), but it means we have to explicitly
      // set the jest version.
      settings: {
        jest: {
          version: 29,
        },
      },
    },
    {
      excludedFiles: TEST_FILES,
      files: APP_FILES,
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: TEST_FILES,
                message: "Do not import test files in app files",
              },
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  root: true,
  rules: {
    curly: ["error", "all"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
