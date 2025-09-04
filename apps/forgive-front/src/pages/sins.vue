<template>
  <div class="container flex flex-col justify-center mx-auto my-8">
    <Hero />
    <div class="px-12">
      <Divider />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Sin v-for="sin in sins" :key="sin.id" :sin="sin" />

        <div
          v-if="hasMoreSins"
          class="flex items-center justify-center cursor-pointer group"
          @click="loadMoreSins"
        >
          <span class="flex gap-2 flex-col items-center underline">
            Charger plus...
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSinService } from '../services/sin.service';
import { useSinStore } from '../stores/sins.store';

const { getSins } = useSinService();
const sinStore = useSinStore();
const { sins } = storeToRefs(sinStore);

const itemsPerPage = 8;
const hasMoreSins = ref(true);

const loadMoreSins = async () => {
  try {
    const newSins = await getSins({
      take: itemsPerPage,
      skip: sins.value.length,
    });

    if (newSins && newSins.length < itemsPerPage) {
      hasMoreSins.value = false;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  if (sins.value.length < itemsPerPage) {
    const itemsToLoad = itemsPerPage - sins.value.length;
    getSins({
      take: itemsToLoad,
      skip: sins.value.length,
    });
  }
});
</script>
