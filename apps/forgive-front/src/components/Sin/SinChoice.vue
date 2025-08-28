<template>
  <div class="flex gap-3 text-2xl">
    <button class="flex items-center gap-1" @click="rateSin(id, 'heaven')">
      <span class="text-md">{{ heaven }}</span
      ><BurningSkull />
    </button>
    <button class="flex items-center gap-1" @click="rateSin(id, 'hell')">
      <span class="text-md">{{ hell }}</span
      ><Cross />
    </button>
  </div>
</template>

<script setup>
import { useSinService } from '../../services/sin';

const { rateSin } = useSinService();

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
