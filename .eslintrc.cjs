const TS_FILES = ["*.ts", "*.tsx"];
const JSX_FILES = ["*.jsx", "*.tsx"];
const VITEST_FILES = ["app/**/__tests__/**/*", "app/**/*.test.*"];
const APP_FILES = ["app/**"];
const TEST_FILES = ["**/tests/**", ...VITEST_FILES];
const TOP_LEVEL_AWAIT_FILES = [
  "index.js",
  "dev-server.js",
  "other/setup-swap.js",
];

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:n/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // playwright requires destructuring in fixtures even if you don't use anything 🤷‍♂️
    "no-empty-pattern": "off",
    // Try to reuse these rules when this is merged:
    // https://github.com/eslint-community/eslint-plugin-n/pull/139
    "n/no-extraneous-import": "off",
    "n/no-missing-import": "off",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    curly: ["error", "all"],
  },
  overrides: [
    {
      // this is needed, otherwise plugins defining older ecmaVersion will get precedence
      files: TOP_LEVEL_AWAIT_FILES,
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    {
      files: TS_FILES,
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended-type-checked",
      ],
      rules: {
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-namespace": [
          "error",
          { allowDeclarations: true },
        ],
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: true,
          },
        ],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-empty-function": [
          "error",
          // Allow no-op functions () => {}
          { allow: ["arrowFunctions"] },
        ],
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      },
    },
    {
      files: JSX_FILES,
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "plugin:tailwindcss/recommended",
      ],
      rules: {
        "react/hook-use-state": "error",
        "react/jsx-fragments": "error",
        "react/jsx-no-leaked-render": "error",
        "react/no-array-index-key": "error",
        "react/jsx-pascal-case": "error",
        "react/self-closing-comp": "error",
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            reservedFirst: true,
          },
        ],
      },
    },
    {
      files: VITEST_FILES,
      extends: [
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
        "plugin:vitest/all",
      ],
      rules: {
        // It seems the eslint-plugin is not conforming with Vitest API
        // https://github.com/veritem/eslint-plugin-vitest/issues/153
        "vitest/valid-expect": "off",
        "vitest/no-hooks": "off",
        // vitest/prefer-expect-resolves conflicts with RTL's await find*
        "vitest/prefer-expect-resolves": "off",
        // Don't tell me how many assertions I need
        "vitest/max-expects": "off",
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
      files: APP_FILES,
      excludedFiles: TEST_FILES,
      plugins: ["remix-react-routes"],
      rules: {
        "remix-react-routes/use-link-for-routes": "error",
        "remix-react-routes/require-valid-paths": "error",
        // disable this one because it doesn't appear to work with our
        // route convention. Someone should dig deeper into this...
        "remix-react-routes/no-relative-paths": [
          "off",
          { allowLinksToSelf: true },
        ],
        "remix-react-routes/no-urls": "error",
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
};
