<template>
  <div class="flex gap-3 text-2xl mt-auto ml-auto">
    <button
      class="flex items-center gap-1"
      @click="rateSin(id, 'heaven')"
      :disabled="ratedSinsStore.isRated(id)"
      :class="{ 'text-blue-500': ratedSinsStore.getRateType(id) === 'heaven' }"
    >
      <span class="text-md">{{ heaven }}</span>
      <Cross />
    </button>

    <button
      class="flex items-center gap-1"
      @click="rateSin(id, 'hell')"
      :disabled="ratedSinsStore.isRated(id)"
      :class="{ 'text-red-500': ratedSinsStore.getRateType(id) === 'hell' }"
    >
      <span class="text-md">{{ hell }}</span>
      <BurningSkull />
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
