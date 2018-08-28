module.exports = {
  extends: [
    './rules/best_practices.js',
    './rules/es6.js',
    './rules/indent_break.js',
    './rules/naming.js',
    './rules/space.js',
    './rules/variables.js',
  ].map(require.resolve),

  rules: {
    strict: 'error',
  },
};
