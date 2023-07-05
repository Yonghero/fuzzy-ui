module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2023,
  },
  plugins: ['vue', 'tailwindcss'],
  rules: {
    "vue/attribute-hyphenation": "off",
    "no-continue": "off",
    "no-plusplus":"off",
    // 'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'max-len': ['error', {
      code: 160,
      ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
      ignoreUrls: true,
    }],
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    semi: [2, 'never'],
    'linebreak-style': 'off',
    'no-restricted-syntax': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src'], ['utils', './packages/utils']],
      },
    },
  },
}
