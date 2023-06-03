<template>
  <Swiper
    class="max-h-screen"
    :modules="swiperModules"
    :direction="'vertical'"
    pagination
    mousewheel
  >
    <SwiperSlide>
      <Home />
    </SwiperSlide>
    <SwiperSlide>
      <About />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const swiperModules = [SwiperPagination, SwiperMousewheel];
</script>
