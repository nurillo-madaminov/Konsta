<script setup>
import { onMounted, ref } from 'vue'

import ReleaseComp from '@/components/ReleaseComp.vue'
import { useReleasesStore } from '@/stores/useReleasesStore'
import { routerKey } from 'vue-router'
import router from '@/router'

const releasesStore = useReleasesStore()
const type = ref('all')
// const order = ref('disc') // asc

let showTypeFilter = ref(false)
let showOrderFilter = ref(false)

function typeFilter() {
  showTypeFilter.value = !showTypeFilter.value
  showOrderFilter.value = false
}

function orderFilter() {
  showOrderFilter.value = !showOrderFilter.value
  showTypeFilter.value = false
}

onMounted(() => {
  releasesStore.fetchReleases()
  console.log(releasesStore.filteredReleases)
})
</script>

<template>
  <div class="pt-40 flex justify-center" @click.self="showTypeFilter = false; showOrderFilter = false">
    <div class="container" >
      <div class="flex items-center py-5 justify-between" @click.self="showTypeFilter = false; showOrderFilter = false">
        <h2 class="text-3xl font-[redrose]">Releases</h2>
        <div class="flex gap-2">
          <div class="relative">
            <h4
              class="w-20 capitalize py-3 text-center text-lg bg-gray-600 text-white"
              @click="typeFilter"
            >
              {{ type }}
            </h4>
            <ul v-if="showTypeFilter" class="absolute mt-2 right-0 bg-gray-600 text-white">
              <li class="w-28 px-3 py-2 border" @click="releasesStore.filterType = 'all'; typeFilter()">All</li>
              <li class="w-28 px-3 py-2 border" @click="releasesStore.filterType = 'album'; typeFilter()">Albums</li>
              <li class="w-28 px-3 py-2 border" @click="releasesStore.filterType = 'single'; typeFilter()">Singles</li>
            </ul>
          </div>
          <div class="relative">
            <h4
              class="w-20 capitalize py-3 text-center text-lg bg-gray-600 text-white"
              @click="orderFilter"
            >
              Latest
            </h4>
            <ul v-if="showOrderFilter" class="absolute mt-2 right-0 bg-gray-600 text-white">
              <li class="w-28 px-3 py-2 border" @click="releasesStore.sortOrder = 'dics'; orderFilter()">Latest</li>
              <li class="w-28 px-3 py-2 border" @click="releasesStore.sortOrder = 'asc'; orderFilter()">Oldest</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-10" @click.self="showTypeFilter = false; showOrderFilter = false">
        <ReleaseComp
          v-for="release in releasesStore.filteredReleases"
          :title="release.title"
          :created_at="release.created_at"
          :thumbnail="release.thumbnail"
          :release_type="release.release_type"
        />
      </div>
    </div>
  </div>
</template>
