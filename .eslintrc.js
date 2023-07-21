module.exports = {
  extends: ["prettier", "plugin:storybook/recommended"],
  parserOptions: {
    // https://typescriptbook.jp/tutorials/eslint#sourcetype
    sourceType: "module",
    // https://eslint.org/blog/2021/07/eslint-v7.30.0-released/#main
    ecmaVersion: "latest"
  }
};