import { defineConfig } from 'vite';
import { resolve, relative, sep } from 'path';
import fs from 'fs';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const getHtmlEntries = () => {
  const pagesDir = resolve(__dirname, 'src/partials');
  const entries = {};

  if (!fs.existsSync(pagesDir)) return entries;

  const walk = dir => {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = resolve(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.html')) {
        const rel = relative(pagesDir, fullPath).replace(/\\/g, '/'); // windows -> posix
        const name = rel.replace('.html', '').replace(/\//g, '-');
        entries[name] = fullPath;
      }
    });
  };

  walk(pagesDir);
  return entries;
};

export default defineConfig(({ command }) => {
  return {
    root: 'src',
    base: '/TradeBlade/',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          ...getHtmlEntries(),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
          },
          entryFileNames: '[name].[hash].js',
          chunkFileNames: 'chunks/[name].[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      viteStaticCopy({
        targets: [{ src: 'img/icons.svg', dest: 'img' }],
      }),
    ],
  };
});
