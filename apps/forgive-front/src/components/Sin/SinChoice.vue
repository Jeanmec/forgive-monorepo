<template>
  <div class="flex gap-3 text-2xl">
    <button class="flex items-center gap-1">
      <span class="text-md">{{ heaven }}</span
      ><BurningSkull />
    </button>
    <button class="flex items-center gap-1">
      <span class="text-md">{{ hell }}</span
      ><Cross />
    </button>
  </div>
</template>

<script setup>
defineProps({
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
