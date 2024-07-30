module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
