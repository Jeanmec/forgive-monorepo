<template>
  <div class="flex gap-3 text-2xl">
    <button
      class="flex items-center gap-1 disabled:opacity-50"
      @click="rateSin(id, 'heaven')"
      :disabled="ratedSinsStore.isRatedSin(id)"
    >
      <span class="text-md">{{ heaven }}</span>
      <BurningSkull />
    </button>
    <button
      class="flex items-center gap-1 disabled:opacity-50"
      @click="rateSin(id, 'hell')"
      :disabled="ratedSinsStore.isRatedSin(id)"
    >
      <span class="text-md">{{ hell }}</span>
      <Cross />
    </button>
  </div>
</template>

<script setup>
import { useSinService } from '../../services/sin.service';
import { useRatedSinsStore } from '../../stores/ratedSins.store.ts';

const { rateSin } = useSinService();
const ratedSinsStore = useRatedSinsStore();

defineProps({
  id: {
    type: Number,
    required: true,
  },
  heaven: {
    type: Number,
    default: 0,
  },
  hell: {
    type: Number,
    default: 0,
  },
});
</script>
