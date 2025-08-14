import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lora: true,
        },
      },
    ],
  ],
  dir: {
    public: path.resolve(__dirname, './public'),
  },
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: '../../../tsconfig.base.json', // Nuxt copies this string as-is to the `./.nuxt/tsconfig.json`, therefore it needs to be relative to that directory
    },
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/styles.scss'],
  vite: {
    plugins: [nxViteTsPaths()],
  },
  components: [
    '~/components',
    {
      path: '~/components/Icons',
      pathPrefix: false,
    },
    {
      path: '~/components/Sin',
      pathPrefix: false,
    },
  ],
});
