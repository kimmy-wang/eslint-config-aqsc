module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:vue/recommended'],
  plugins: ['vue', 'html'],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 10,
          allowFirstLine: true,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'vue/html-closing-bracket-newline': [
      0,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
  },
}
