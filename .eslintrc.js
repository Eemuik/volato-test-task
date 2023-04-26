module.exports = {
  root: true,
  extends: ['@react-native-community'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-shadow': 'off',
    curly: 'off',
    indent: 'off',
    'max-len': ['error', 120],
  },
};
