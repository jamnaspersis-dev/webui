<template>
  <div
    class="absolute top-0 z-10 text-putih h-20 text-md w-full items-center justify-between px-8 flex md:hidden"
  >
    <div class="w-full">
      <NuxtLink to="/">
        <img class="h-10" src="~/assets/image/logo-navbar.png" />
      </NuxtLink>
    </div>
    <div class="flex w-full justify-end">
        <Icon class="text-2xl" name="ci:hamburger" />
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
