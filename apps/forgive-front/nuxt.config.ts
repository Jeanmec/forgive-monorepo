import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Forgive me - Confess your sins anonymously',
      meta: [
        {
          name: 'description',
          content:
            'Confess your sins anonymously and face judgment. Atone, seek redemption, and discover if you deserve forgiveness.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/praying.svg' }],
    },
  },
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
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/seo',
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

  plugins: ['~/plugins/pinia-persistedstate.ts'],

  nitro: {
    output: {
      dir: '../../dist/apps/forgive-front/.output',
    },
  },
});
