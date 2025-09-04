<template>
  <div class="container flex flex-col justify-center mx-auto my-8">
    <Hero />
    <Form />
    <div class="px-12">
      <Divider />
      <Resume :numberItemsToShow="numberItemsPreview" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSinService } from '../services/sin.service';

const { getSins } = useSinService();

const numberItemsPreview = 3;

onMounted(async () => {
  await getSins({
    take: numberItemsPreview,
    skip: 0,
  });
});
</script>
