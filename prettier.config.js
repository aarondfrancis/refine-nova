module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  semi: false,
  requirePragma: false,
  proseWrap: 'preserve',
  arrowParens: 'avoid',

  overrides: [
    {
      files: 'resources/css/**/*.css',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: 'resources/js/flavors/**/*.js',
      options: {
        printWidth: 120,
      },
    },
  ],
}
