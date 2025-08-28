<template>
  <div class="container flex flex-col justify-center mx-auto my-8">
    <Hero />
    <Form />
    <div class="px-12">
      <Divider />
      <Resume />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSinService } from '../services/sin';
import { useSinStore } from '../stores/sins';

const sinStore = useSinStore();
const { getAll } = useSinService();

onMounted(async () => {
  const sins = await getAll();
  sinStore.setSins(sins);
});
</script>
