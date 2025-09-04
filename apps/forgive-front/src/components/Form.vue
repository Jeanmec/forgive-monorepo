<template>
  <div class="flex flex-col w-full md:w-8/12 px-10 md:px-0 mx-auto mt-8 mb-6">
    <textarea
      v-model="message"
      class="h-24 border-2 border-gray-400 font-lora rounded-md w-full p-2 hover:border-blue-400 hover:outline-none focus:border-blue-400 focus:outline-none resize-none"
      :maxlength="limitCharMax"
      :placeholder="placeholderText"
    />

    <p class="text-sm ml-auto">
      <span :class="textColor">{{ message.length }}</span> / {{ limitCharMax }}
    </p>

    <button
      @click="handleSubmit"
      :disabled="!isValidLength"
      :class="[
        'w-fit rounded-md mx-auto px-4 py-2 font-bold',
        isValidLength
          ? 'text-white bg-sky-400 hover:bg-sky-300'
          : 'text-white bg-gray-400 cursor-not-allowed',
      ]"
    >
      Submit your confession
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSinService } from '../services/sin.service';

const message = ref('');

const limitCharMin = 35;
const limitCharMax = 255;

const { create } = useSinService();

const isValidLength = computed(
  () =>
    message.value.length >= limitCharMin && message.value.length <= limitCharMax
);

const placeholderText = computed(
  () => `Your sin here between ${limitCharMin} and ${limitCharMax} characters..`
);

const textColor = computed(() => {
  const length = message.value.length;
  if (!length) return 'text-slate-700';
  return isValidLength.value ? 'text-green-600' : 'text-red-700';
});

const handleSubmit = async () => {
  if (!isValidLength.value) return;
  await create(message.value);
  message.value = '';
};
</script>
