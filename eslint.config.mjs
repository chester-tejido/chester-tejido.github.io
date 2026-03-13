import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['**/*.js', '**/*.cjs', '**/*.mjs'] },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
    },
  },
]);
