import { RateType } from '@forgive-monorepo/shared/types';
import { defineStore } from 'pinia';

interface RatedState {
  ratedItems: Record<number, RateType>;
}

export const useRatedSinsStore = defineStore('ratedSins', {
  state: (): RatedState => ({
    ratedItems: {},
  }),

  actions: {
    addRatedSin(sinId: number, rateType: RateType) {
      this.ratedItems[sinId] = rateType;
    },
  },

  getters: {
    isRated:
      (state) =>
      (sinId: number): boolean => {
        return sinId in state.ratedItems;
      },
    getRateType:
      (state) =>
      (sinId: number): RateType | null => {
        return state.ratedItems[sinId] || null;
      },
  },
});
