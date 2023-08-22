module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
  ],
  plugins: ["prettier", "@typescript-eslint", "react"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      ['error', { singleQuote: true }]
    ],
    camelcase: ["error"],
    strict: "error",
    eqeqeq: ["error", "always"],
  },
  root: true,
};
