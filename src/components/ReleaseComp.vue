<script setup>
const props = defineProps(['title', 'created_at', 'thumbnail', 'release_type'])
</script>

<template>
  <div>
    <div class="rounded bg-gray-500">
      <img :src="props.thumbnail" alt="" class="h-full">
    </div>
    <div class="font-[syne-reg] ">
      <h3 class="text-xl font-bold tracking-wider">{{ props.title }}</h3>
      <p class="capitalize text-sm font-sans text-gray-600">{{ props.created_at.substring(0, 10) }} • {{props.release_type}}</p>
    </div>
  </div>
</template>
