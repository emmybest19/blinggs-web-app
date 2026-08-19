import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Without eslint-plugin-react, `no-unused-vars` cannot see identifiers
      // that are only referenced from JSX. Capitalised names are components by
      // convention, so they are exempt whether they arrive as a variable or as
      // a (destructured) parameter.
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^[A-Z_]' },
      ],

      // Feature-sliced boundaries: features are siblings and must not reach
      // into each other's internals, and nothing may bypass a feature's
      // public barrel (`@features/<name>`).
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*/*'],
              message:
                'Import from the feature barrel (@features/<feature>) instead of reaching into its internals.',
            },
            {
              group: ['../../*/'],
              message:
                'Cross-feature relative imports are not allowed. Use @shared, @app, or the feature barrel.',
            },
          ],
        },
      ],
    },
  },
])
