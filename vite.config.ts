import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@layout' : path.resolve(__dirname, './src/layout'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@styles' : path.resolve(__dirname, './src/styles'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@router' : path.resolve(__dirname, './src/router'),
    },
  },
  plugins: [react(),svgr()],
});