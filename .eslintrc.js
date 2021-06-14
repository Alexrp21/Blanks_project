module.exports = {
    root: true,
    extends: [
      'plugin:vue/essential',
    ],
    rules: {
      'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never',
      }],
      'no-param-reassign': [
        'error', {
          props: true,
          ignorePropertyModificationsFor: [
            'state', // for vuex state
            'acc', // for reduce accumulators
            'e', // for e.returnvalue
          ],
        },
      ],
      'max-len': ['error', 120, 2, {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'no-console': 'off',
      'no-debugger': 'off',
      "import/extensions": 'off',
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };