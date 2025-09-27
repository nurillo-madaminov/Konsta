<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import LoaderComp from './components/LoaderComp.vue'
import { useMerchStore } from './stores/useMerchStore'

const merchStore = useMerchStore()

const navbar = ref('navbar')
const navlinks = ref('navlinks`')

const handleScroll = () => {
  // const rect = navbar.value.getBoundingClientRect()
  if (window.scrollY > 1) {
    navbar.value.style.position = 'fixed'
    navbar.value.style.top = 0
    navbar.value.style.backgroundColor = '#ff4d00cc'
    navlinks.value.style.backgroundColor = 'transparent'
    navlinks.value.style.paddingRight = '50px'
  } else {
    navbar.value.style.top = '40px'
    navlinks.value.style.clipPath = 'polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)'
    navlinks.value.style.paddingRight = ''
    navlinks.value.style.backgroundColor = '' // reset background color
    navbar.value.style.backgroundColor = '' // reset background color
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="navbar flex justify-center fixed top-10 w-full z-30 duration-250" ref="navbar">
      <div class="flex justify-between w-full">
        <h1 class="text-[50px] font-[800] ml-[50px] font-[syne-xb] rounded-2xl">
          <span class="transform rotate-z-180 inline-block">K</span>ONSTA
        </h1>
        <nav
          class="bg-[#ff4d00cc] h-20 flex items-center pl-16 pr-40 duration-250"
          style="clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)"
          ref="navlinks"
        >
          <ul class="flex text-2xl gap-5 font-[redrose]">
            <li>
              <RouterLink
                :to="{ name: 'home' }"
                class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'merch' }"
                class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Merch
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'releases' }"
                class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Releases
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'tour' }"
                class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Tour
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'about' }"
                class="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<!-- https://www.youtube.com/watch?v=R9mXtzn8meE&list=PLLBWNs6n7YMXx5z7pEWZlu-2rZQ5bfOiq - background footage -->
<!-- https://claude.ai/chat/c2b93af9-3d8f-4dba-83a5-333d6997e735 - claude ai schema recommendation -->
