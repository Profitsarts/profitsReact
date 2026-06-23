module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // projects_v2.js is an authored blob of case-study HTML stored in template
  // literals — linting it as application code only flags escapes inside content.
  // public/ holds verbatim static assets (legacy jquery/bootstrap vendor JS);
  // it is copied to dist untouched and must not be linted as source.
  ignorePatterns: ['dist', 'public', '.eslintrc.cjs', 'src/data/projects_v2.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // This portfolio does not use PropTypes; keep the gate on real errors
    // (undefined refs, hook rules, unused vars) rather than type/style noise.
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
  },
  overrides: [
    {
      // Build/config files and Node scripts: allow require/module/process.
      files: ['*.config.js', '*.cjs', 'postcss.config.js', 'tailwind.config.js', 'scripts/**/*.js'],
      env: { node: true },
    },
  ],
}
