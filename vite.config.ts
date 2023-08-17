/* eslint-disable */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';
import PrettierPlugin from 'vite-plugin-prettier';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import { VitePWA } from 'vite-plugin-pwa';

dotenv.config();

// https://vitejs.dev/config/

const eslintOptions = {
  extensions: ['js', 'ts', 'react']
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'DOCTOR', // 앱 이름
        short_name: 'App', // 짧은 앱 이름
        start_url: '/', // 앱 시작 URL
        display: 'standalone', // 앱 디스플레이 모드 (standalone, fullscreen 등)
        theme_color: '#ffffff', // 앱 테마 컬러
        background_color: '#ffffff', // 앱 배경색
        icons: [
          {
            src: '/images/commons/doctor.png', // 아이콘 경로
            sizes: '72x72',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Workbox 설정
        runtimeCaching: [
          {
            // 예: API 요청 캐싱
            urlPattern: new RegExp('^https://kdt-ai7-team04.elicecoding.com:5000/'),
            handler: 'StaleWhileRevalidate'
          }
        ]
      }
    }),
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
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT),
      'process.env.KAKAO_API_KEY': JSON.stringify(process.env.KAKAO_API_KEY),
      'process.env.GOOGLE_MAP_API_KEY': JSON.stringify(process.env.GOOGLE_MAP_API_KEY)
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
