<template>
  <div
    class="absolute flex top-0 z-10 text-putih h-16 text-md w-full items-center justify-between px-8"
  >
    <div>
      <NuxtLink to="/">
        <img class="h-9" src="~/assets/image/logo-navbar.png" />
      </NuxtLink>
    </div>
    <div class="flex space-x-8">
      <button @click="swiper.slideNext()" v-for="(item, index) in listNavbarItem">
        <p>{{ item.title }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
const swiper = useSwiper();

const listNavbarItem = ref([
  {
    title: "Beranda",
    to: "/",
  },
  {
    title: "Tentang",
    to: "/#tentang",
  },
]);
</script>
