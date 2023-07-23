/* eslint-disable */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';
import PrettierPlugin from 'vite-plugin-prettier';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/

const eslintOptions = {
  extensions: ['js', 'ts', 'react']
};

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(eslintOptions),
    reactRefresh(),
    PrettierPlugin(
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 100,
        bracketSpacing: true,
        arrowParens: 'avoid'
      },
      {
        include: ['src/**/*.{react,js,ts,jsx,tsx}'],
        exclude: ['src/**/*.spec.{js,ts,jsx,tsx}'],
        logLevel: 'warn',
        editorconfig: false
      } as any
    ),
    replace({
      'process.env.GMAIL_OAUTH_CLIENT_ID': JSON.stringify(process.env.GMAIL_OAUTH_CLIENT_ID),
      'process.env.GAMIL_OAUTH_CLIENT_SECRET': JSON.stringify(
        process.env.GAMIL_OAUTH_CLIENT_SECRET
      ),
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT)
    })
  ],
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
