import type { Sin, RateType } from '@forgive-monorepo/shared/types';
import { useSinStore } from '../stores/sins.store';
import { useRatedSinsStore } from '../stores/ratedSins.store';

export const useSinService = () => {
  const api = useApi();
  const { emit } = useSocket();
  const sinStore = useSinStore();
  const ratedSinsStore = useRatedSinsStore();

  return {
    async getAll(): Promise<Sin[]> {
      const { data } = await api.get<Sin[]>('/api/sin');
      sinStore.setSins(data);
      return data;
    },

    async create(sin: Sin): Promise<Sin> {
      const { data } = await api.post<Sin>('/sin', sin);
      return data;
    },

    rateSin(sinId: number, type: RateType): void {
      emit('/sin/rate', { id: sinId, type });
      ratedSinsStore.addRatedSin(sinId);
    },
  };
};
