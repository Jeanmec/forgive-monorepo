import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
    '@pinia/nuxt',
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
      extends: '../../../tsconfig.base.json',
    },
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/styles.scss'],
  vite: {
    plugins: [nxViteTsPaths()],
    build: {
      sourcemap: false,
    },
  },

  runtimeConfig: {
    public: {
      publicBackendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
    },
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
