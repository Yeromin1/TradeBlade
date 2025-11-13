import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  base: '/TradeBlade/', // <-- имя репозитория
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // главный HTML
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    viteStaticCopy({
      targets: [{ src: 'src/img/icons.svg', dest: 'img' }],
    }),
  ],
});
