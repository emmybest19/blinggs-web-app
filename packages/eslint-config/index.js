import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

/**
 * Guards the layering rule: an app may depend on shared packages, but never on
 * another app. Without this, `finance-admin` importing from `security-admin`
 * would compile happily and quietly undo the isolation the split exists for.
 */
const noCrossAppImports = {
  files: ['**/*.{js,jsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/apps/*', '../../*-admin/**', '../../main-app/**'],
            message:
              'Apps must not import from each other. Move the shared code into packages/admin-kit (or another workspace package) instead.',
          },
        ],
      },
    ],
  },
}

/**
 * The rules every Blingg workspace shares.
 *
 * This has to run through `defineConfig` here rather than being exported as a
 * plain array: the `extends` key is a defineConfig feature, and ESLint's flat
 * config rejects it if the array reaches it unprocessed.
 *
 * @param extra additional flat-config objects appended after the defaults.
 */
export function createConfig(...extra) {
  return defineConfig([
    globalIgnores(['dist', 'node_modules']),
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
        // that are only referenced from JSX. Capitalised names are components
        // by convention, so they are exempt whether they arrive as a variable
        // or as a (destructured) parameter.
        'no-unused-vars': [
          'error',
          { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^[A-Z_]' },
        ],
      },
    },
    noCrossAppImports,
    ...extra,
  ])
}

export default createConfig
