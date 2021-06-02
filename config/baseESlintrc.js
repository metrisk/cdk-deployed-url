module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'standard-with-typescript'],
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  env: {
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'object-shorthand': 'error'
  }
}
