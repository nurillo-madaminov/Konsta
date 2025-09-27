<script setup>
import { onMounted } from 'vue'
import { useMerchStore } from '@/stores/useMerchStore'
import { useReleasesStore } from '@/stores/useReleasesStore'

import down from '@/assets/img/icons/chevron-down.png'
import konsta from '@/assets/img/konsta.png'
import sponsors from '@/assets/img/sponsors.png'
import instagram from '@/assets/img/icons/social/instagram.svg'
import youtube from '@/assets/img/icons/social/youtube.svg'
import spotify from '@/assets/img/icons/social/spotify.svg'
import telegram from '@/assets/img/icons/social/telegram.svg'

const merchStore = useMerchStore()
const releasesStore = useReleasesStore()

onMounted(() => {
  merchStore.fetchMerch()
  releasesStore.fetchReleases()
})
</script>

<template>
  <div
    class="pt-[150px] w-full h-screen flex items-end justify-center pb-20"
    :style="{
      'background-image': `url(${konsta})`,
      'background-repeat': 'no-repeat',
      'background-position': 'center bottom',
      'background-size': '40%',
      filter: 'grayscale(100%)',
    }"
  >
    <div class="flex items-center flex-col">
      <img :src="sponsors" alt="sponsors" class="h-10 mb-4" />
      <ul class="flex gap-2 text-white mb-4">
        <li>
          <a href="#"><img :src="instagram" class="w-10 text-white" alt="instagram" /></a>
        </li>
        <li>
          <a href="#"><img :src="youtube" class="w-10" alt="youtube" /></a>
        </li>
        <li>
          <a href="#"><img :src="spotify" class="w-10" alt="spotify" /></a>
        </li>
        <li>
          <a href="#"><img :src="telegram" class="w-10" alt="telegram" /></a>
        </li>
      </ul>
      <div class="flex items-center flex-col">
        <h3 class="text-2xl font-[redrose] text-[#ffffff33]">Latest</h3>
        <img :src="down" class="w-12" alt="chevron-down" />
      </div>
    </div>
  </div>
  <div class="bg-[#1D1B1B] text-white flex justify-center py-16">
    <div class="container">
      <h1 class="text-3xl font-[redrose]">LATEST</h1>
      <div class="flex justify-between items-center mt-10">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit earum. A, officia
          quasi aut dolorum non mollitia minima doloremque expedita nobis qui consectetur esse
          facere? Distinctio possimus vel explicabo exercitationem ratione dolorem dignissimos
          obcaecati, dicta placeat quibusdam modi error facere deserunt odio qui et! Fuga nihil
          nostrum deserunt unde aut nobis nemo id, quam molestias iste? Iure nam quos quidem
          quisquam quo vel doloribus corporis, necessitatibus recusandae saepe iste eum ratione
          delectus suscipit numquam earum vitae cupiditate quibusdam, laborum quae enim praesentium
          impedit neque assumenda. Labore dolore praesentium animi minus veniam tempore laudantium!
          Tempora aut sit quasi perferendis voluptas.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit earum. A, officia
          quasi aut dolorum non mollitia minima doloremque expedita nobis qui consectetur esse
          facere? Distinctio possimus vel explicabo exercitationem ratione dolorem dignissimos
          obcaecati, dicta placeat quibusdam modi error facere deserunt odio qui et! Fuga nihil
          nostrum deserunt unde aut nobis nemo id, quam molestias iste? Iure nam quos quidem
          quisquam quo vel doloribus corporis, necessitatibus recusandae saepe iste eum ratione
          delectus suscipit numquam earum vitae cupiditate quibusdam, laborum quae enim praesentium
          impedit neque assumenda. Labore dolore praesentium animi minus veniam tempore laudantium!
          Tempora aut sit quasi perferendis voluptas.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit earum. A, officia
          quasi aut dolorum non mollitia minima doloremque expedita nobis qui consectetur esse
          facere? Distinctio possimus vel explicabo exercitationem ratione dolorem dignissimos
          obcaecati, dicta placeat quibusdam modi error facere deserunt odio qui et! Fuga nihil
          nostrum deserunt unde aut nobis nemo id, quam molestias iste? Iure nam quos quidem
          quisquam quo vel doloribus corporis, necessitatibus recusandae saepe iste eum ratione
          delectus suscipit numquam earum vitae cupiditate quibusdam, laborum quae enim praesentium
          impedit neque assumenda. Labore dolore praesentium animi minus veniam tempore laudantium!
          Tempora aut sit quasi perferendis voluptas.
        </div>
      </div>
    </div>
  </div>
</template>
