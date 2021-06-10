module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier', 'unused-imports'],
  rules: {
    'react/react-in-jsx-scope': 'off', // for Next.js
    'unused-imports/no-unused-imports': 2
  }
};
