<script setup lang="ts">
import { ref, computed } from 'vue';

const message = ref('');

const limitCharMin = 35;
const limitCharMax = 255;

const textColor = computed(() => {
  const length = message.value.length;
  if (length > limitCharMin && length < limitCharMax) {
    return 'text-green-600';
  } else {
    return 'text-slate-700';
  }
});
</script>

<template>
  <div class="flex flex-col w-full md:w-8/12 px-10 md:px-0 mx-auto mt-8 mb-6">
    <textarea
      v-model="message"
      :class="`h-24 border-2 border-gray-400 font-lora rounded-md w-full p-2 focus:border-blue-400 focus:outline-none resize-none `"
      :maxlength="limitCharMax"
      :placeholder="`Your sin here between ${limitCharMin} and ${limitCharMax} characters..`"
    ></textarea>
    <p class="text-sm ml-auto" :class="textColor">
      {{ message.length }} / {{ limitCharMax }}
    </p>
    <button
      class="text-white bg-sky-400 hover:bg-sky-300 w-fit rounded-md mx-auto px-4 py-2 font-bold"
    >
      Submit your confession
    </button>
  </div>
</template>
