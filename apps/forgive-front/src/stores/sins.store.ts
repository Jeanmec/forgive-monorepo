import { defineStore } from 'pinia';
import { Sin } from 'shared/types/src/lib/sin';

export const useSinStore = defineStore('sin', {
  state: () => ({
    sins: [] as Sin[],
  }),
  actions: {
    getSins() {
      return this.sins;
    },
    addSin(sin: Sin) {
      this.sins.push(sin);
    },
    setSins(sins: Sin[]) {
      this.sins = sins;
    },
    updateSin(updatedSin: Sin) {
      const index = this.sins.findIndex((sin) => sin.id === updatedSin.id);
      if (index !== -1) {
        this.sins[index] = updatedSin;
      }
    },
    deleteSins() {
      this.sins = [];
    },
  },
});
