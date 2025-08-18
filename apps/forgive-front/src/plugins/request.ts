import axios, { type AxiosInstance } from 'axios';
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const backendUrl = config.public?.publicBackendUrl;

  if (!backendUrl) {
    throw new Error('PUBLIC_BACKEND_URL is not defined in runtimeConfig.');
  }

  const apiPlugin: AxiosInstance = axios.create({
    baseURL: backendUrl.toString(),
  });

  return {
    provide: {
      apiPlugin,
    },
  };
});
