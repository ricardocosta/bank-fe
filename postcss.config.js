/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    autoprefixer: {},
    "postcss-color-converter": {
      outputColorFormat: "hsl",
    },
    tailwindcss: {},
    "tailwindcss/nesting": {},
  },
};
