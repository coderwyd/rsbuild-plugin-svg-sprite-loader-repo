import { join } from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginSvgSpriteLoader } from 'rsbuild-plugin-svg-sprite-loader';
import {pluginVue} from '@rsbuild/plugin-vue'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSvgSpriteLoader({
      path: join(__dirname, 'src/icons'),
      symbolId: 'icon-[name]',
    }),
  ],
  source: {
    entry: {
      index: './src/main.js',
    },
  }
});
