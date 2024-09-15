import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts from 'typescript-eslint'

const { config, plugin } = ts

export default config(
  ...ts.configs.recommended,
  js.configs.recommended,
  {
    ignores: ['dist', 'node_modules', '.next'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@next/next': next,
      '@typescript-eslint': plugin,
      //
      prettier,
      //
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      //
      '@next/next/no-duplicate-head': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  perfectionist.configs['recommended-alphabetical'],
)
