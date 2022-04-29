import strip from '@rollup/plugin-strip';
import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    strip(),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
});
