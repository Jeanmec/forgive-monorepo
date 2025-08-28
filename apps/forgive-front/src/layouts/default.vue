<template><NuxtPage /></template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSinStore } from '../stores/sins.store';
import { Sin } from '@forgive-monorepo/shared/types';

const sinStore = useSinStore();
const { on } = useSocket();

onMounted(async () => {
  on('/sin/update', (data: Sin) => {
    console.log('sin updated:', data);
    sinStore.updateSin(data);
  });
});
</script>
