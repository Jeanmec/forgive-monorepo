import { defineStore } from 'pinia';

export const useRatedSinsStore = defineStore('ratedSins', {
  state: () => ({
    sinsIdRated: [] as number[],
  }),
  actions: {
    addRatedSin(sinId: number) {
      this.sinsIdRated.push(sinId);
    },
    getRatedSins() {
      return this.sinsIdRated;
    },
    isRatedSin(sinId: number) {
      return this.sinsIdRated.includes(sinId);
    },
  },
  persist: true,
});
