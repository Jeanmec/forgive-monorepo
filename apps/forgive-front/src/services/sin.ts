import type { Sin, RateType } from '@forgive-monorepo/shared/types';

export const useSinService = () => {
  const api = useApi();
  const { emit } = useSocket();

  return {
    async getAll(): Promise<Sin[]> {
      const { data } = await api.get<Sin[]>('/api/sin');
      return data;
    },

    async create(sin: Sin): Promise<Sin> {
      const { data } = await api.post<Sin>('/sin', sin);
      return data;
    },

    rateSin(sinId: string, type: RateType): void {
      emit('/sin/rate', { id: sinId, type });
    },
  };
};
