import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@layout' : path.resolve(__dirname, './src/layout'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@router' : path.resolve(__dirname, './src/router'),
    },
  },
  plugins: [react()],
});