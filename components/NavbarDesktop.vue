<template>
  <div
    class="absolute top-0 z-10 text-putih h-16 text-md w-full items-center justify-between px-8 hidden md:flex"
  >
    <div class="w-full">
      <NuxtLink to="/">
        <img class="h-10" src="~/assets/image/logo-navbar.png" />
      </NuxtLink>
    </div>
    <div class="flex w-full justify-center space-x-6 font-secondary font-normal">
      <button class="transition px-4 py-1 hover:bg-gray-100/5 rounded-md" v-for="(item, index) in listNavbarItem" :key="index">
        <p>{{ item.title }}</p>
      </button>
    </div>
    <div class="flex space-x-8 w-full justify-end">
      <a
        v-for="(item, index) in listSocialItem"
        :href="item.to"
        :key="index"
        target="_blank"
      >
        <Icon class="text-2xl" :name="item.icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
const listNavbarItem = [
  {
    title: "Beranda",
    to: "/",
  },
  {
    title: "Informasi",
    to: "/",
  },
  {
    title: "Contact",
    to: "/",
  },
];

const listSocialItem = [
  {
    icon: "uil:instagram",
    to: "https://www.instagram.com/jamnaspersis7",
  },
  {
    icon: "uil:facebook",
    to: "https://www.facebook.com/jamnaspersis7",
  },
  {
    icon: "ic:round-tiktok",
    to: "https://www.tiktok.com/@jamnaspersis7",
  },
  {
    icon: "uil:youtube",
    to: "https://www.youtube.com",
  },
];
</script>
