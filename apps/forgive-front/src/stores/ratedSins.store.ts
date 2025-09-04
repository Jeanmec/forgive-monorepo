import { defineStore } from 'pinia';
import { RateType } from '@forgive-monorepo/shared/types';

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
    removeRatedSin(sinId: number) {
      delete this.ratedItems[sinId];
    },
    clearRatedSins() {
      this.ratedItems = {};
    },
  },

  getters: {
    isRated: (state) => {
      return (sinId: number): boolean => sinId in state.ratedItems;
    },
    getRateType: (state) => {
      return (sinId: number): RateType | null =>
        state.ratedItems[sinId] ?? null;
    },
  },

  persist: true,
});
