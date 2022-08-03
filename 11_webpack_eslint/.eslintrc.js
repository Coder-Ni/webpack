module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-constant-condition": "off",
    "no-console": "off",
    "prefer-promise-reject-errors": "off",
    quotes: ["error", "single", { allowTemplateLiterals: true }],
  },
};
