module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Tus reglas personalizadas pueden sobreescribir las de airbnb-base
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': 'off', // Se mantiene para permitir logs en el servidor
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_|next' }], // Advierte sobre variables no usadas, ignorando _ y next

    // Reglas específicas para Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
  },
};