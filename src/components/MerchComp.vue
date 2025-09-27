<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]
const props = defineProps(['title', 'type', 'images', 'link', 'price'])
</script>

<template>
  <a :href="props.link" target="_blank" class="font-[redrose] hover:shadow-lg rounded p-2 ">
    <swiper :pagination="true" :slides-per-view="1" :modules="modules" class="col-span-1">
      <swiper-slide v-for="image of props.images"
        ><img :src="image.url" :alt="image.alt"
      /></swiper-slide>
    </swiper>
    <div class="py-2">
      <p>
        <span class="capitalize text-gray-400">{{ props.type }} </span>: {{ props.title }}
      </p>

      <div class="flex justify-between">
        <p>{{ props.price }} so'm</p>
      </div>
    </div>
  </a>
</template>

