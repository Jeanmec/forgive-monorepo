import { defineStore } from 'pinia';
import { Sin } from '@forgive-monorepo/shared/types';

interface SinState {
  sins: Sin[];
}

export const useSinStore = defineStore('sin', {
  state: (): SinState => ({
    sins: [],
  }),

  actions: {
    addSin(sin: Sin) {
      this.sins.unshift(sin);
    },
    addSins(sins: Sin[]) {
      this.sins.push(...sins);
    },
    setSins(sins: Sin[]) {
      this.sins = sins;
    },
    updateSin(updatedSin: Sin) {
      const index = this.sins.findIndex((sin) => sin.id === updatedSin.id);
      if (index !== -1) {
        this.sins.splice(index, 1, updatedSin);
      }
    },
    deleteSins() {
      this.sins = [];
    },
  },

  getters: {
    getSins: (state): Sin[] => state.sins,
  },
});
