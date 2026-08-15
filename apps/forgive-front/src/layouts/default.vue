<template>
  <div class="flex min-h-screen flex-col">
    <div class="grow">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSinStore } from '../stores/sins.store';
import { Sin } from '@forgive-monorepo/shared/types';

const sinStore = useSinStore();
const { on } = useSocket();

onMounted(async () => {
  on('/sin/update', (data: Sin) => {
    sinStore.updateSin(data);
  });
  on('/sin/new', (data: Sin) => {
    sinStore.addSin(data);
  });
});
</script>
