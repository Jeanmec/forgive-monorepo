<template>
  <div class="flex flex-col">
    <ResumeHero />
    <div class="grid grid-cols-3 gap-4 mt-6">
      <Sin v-for="sin in sins" :key="sin.id" :sin="sin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSinService } from '../../services/sin';

const { getAll } = useSinService();
const sins = ref([]);

onMounted(async () => {
  try {
    sins.value = await getAll();
  } catch (err) {
    console.error('Error fetching sins:', err);
  }
});
</script>
