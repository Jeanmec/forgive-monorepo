import type { Sin, RateType } from '@forgive-monorepo/shared/types';

export const useSinService = () => {
  const api = useApi();

  return {
    async getAll(): Promise<Sin[]> {
      const { data } = await api.get<Sin[]>('/api/sin');
      return data;
    },

    async create(sin: Sin): Promise<Sin> {
      const { data } = await api.post<Sin>('/sin', sin);
      return data;
    },

    async rateSin(sinId: string, type: RateType): Promise<Sin> {
      const { data } = await api.post<Sin>(`/api/sin/${sinId}/rate`, {
        type,
      });
      return data;
    },
  };
};
