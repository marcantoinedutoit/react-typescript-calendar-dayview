/**
 * This code exports an object that configures the commitlint tool.
 * It extends the conventional commit configuration and sets a rule for commit message types.
 * The rule enforces that commit messages must have one of the specified types: 
 * build, chore, ci, docs, feat, fix, perf, refactor, style, or test.
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'style',
      'test',
    ]],
  },
};
