import type { Sin, RateType } from '@forgive-monorepo/shared/types';
import { useSinStore } from '../stores/sins.store';
import { useRatedSinsStore } from '../stores/ratedSins.store';

export const useSinService = () => {
  const api = useApi();
  const { emit } = useSocket();
  const sinStore = useSinStore();
  const ratedSinsStore = useRatedSinsStore();

  return {
    async getSins({
      take,
      skip,
    }: {
      take?: number;
      skip?: number;
    }): Promise<Sin[]> {
      const params = [];
      if (take !== undefined) params.push(`take=${take}`);
      if (skip !== undefined) params.push(`skip=${skip}`);
      const query = params.length ? `?${params.join('&')}` : '';
      const { data } = await api.get<Sin[]>(`/api/sin${query}`);
      sinStore.addSins(data);
      return data;
    },

    async create(message: string): Promise<Sin> {
      const { data } = await api.post<Sin>('/api/sin/create', { message });
      return data;
    },

    rateSin(sinId: number, type: RateType): void {
      emit('/sin/rate', { id: sinId, type });
      ratedSinsStore.addRatedSin(sinId, type);
    },
  };
};
