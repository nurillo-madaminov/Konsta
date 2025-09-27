<script setup>
import { onMounted } from 'vue'
import { useMerchStore } from '@/stores/useMerchStore'
import MerchComp from '@/components/MerchComp.vue'

const merchStore = useMerchStore()

window.onload = () => {
  merchStore.fetchMerch()
}
onMounted(() => {
  merchStore.fetchMerch()
})
</script>

<template>
  <div class="pt-40 flex justify-center">
    <!-- <div class="container grid grid-cols-4 gap-10">
      <div v-for="merchItem in merchStore.merch">{{ merchItem.title }}</div>
    </div> -->
    <div class="container grid grid-cols-4 gap-10">
      <merch-comp
        v-for="merchItem in merchStore.merch"
        :title="merchItem.title"
        :images="merchItem.images"
        :type="merchItem.type"
        :link="merchItem.link"
        :price="merchItem.price"
      />
    </div>
  </div>
</template>
