import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // TypeScript + Prettier apenas na pasta src
  ...tseslint.config({
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  }),
  {
    ...prettier,
    files: ['src/**/*.{ts,tsx,js,jsx,md,json}'],
  },
  {
    ignores: ['src/protos/**/*', 'src/__test-utils__/PushMessages.*'],
  },
]);
