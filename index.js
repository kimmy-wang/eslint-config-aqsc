module.exports = {
  extends: ['./rules/vue', './rules/common'].map(require.resolve),
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}
