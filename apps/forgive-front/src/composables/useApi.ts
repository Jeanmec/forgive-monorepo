// composables/useApi.ts
import axios, { type AxiosInstance } from 'axios';
import { useRuntimeConfig } from 'nuxt/app';

let apiInstance: AxiosInstance | null = null;

export const useApi = (): AxiosInstance => {
  if (apiInstance) {
    return apiInstance;
  }

  const config = useRuntimeConfig();
  const backendUrl = config.public?.publicBackendUrl;

  if (!backendUrl) {
    throw new Error('PUBLIC_BACKEND_URL is not defined in runtimeConfig.');
  }

  apiInstance = axios.create({
    baseURL: backendUrl.toString(),
  });

  return apiInstance;
};
