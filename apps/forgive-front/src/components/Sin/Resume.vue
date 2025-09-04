<template>
  <div class="flex flex-col">
    <ResumeHero />
    <div class="grid grid-cols-3 gap-4 mt-6">
      <Sin v-for="sin in sinsToShow" :key="sin.id" :sin="sin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSinStore } from '../../stores/sins.store';
import { computed } from 'vue';

const sinStore = useSinStore();

const { sins } = storeToRefs(sinStore);

const props = defineProps<{
  numberItemsToShow: number;
}>();

const sinsToShow = computed(() => {
  return sins.value.slice(0, props.numberItemsToShow);
});
</script>
