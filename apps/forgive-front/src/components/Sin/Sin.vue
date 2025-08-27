<template>
  <div
    class="flex flex-col w-full bg-gray-100 rounded-lg py-2 px-4 border-2 border-sky-300 overflow-x-hidden"
  >
    <p v-if="props.sin.message" class="mt-2 text-gray-700">
      {{ props.sin.message }}
    </p>
    <SinChoice
      :id="props.sin.id"
      :heaven="props.sin.heaven"
      :hell="props.sin.hell"
    />
  </div>
</template>

<script setup lang="ts">
import type { Sin } from '@forgive-monorepo/shared/types';

const props = defineProps<{
  sin: Sin;
}>();
</script>
