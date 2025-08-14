<template>
  <div
    class="flex flex-col w-full bg-gray-100 rounded-lg py-2 px-4 border-2 border-sky-300 overflow-x-hidden"
  >
    <p v-if="message" class="mt-2 text-gray-700">{{ message }}</p>
    <SinChoice :heaven="heaven" :hell="hell" />
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '',
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
