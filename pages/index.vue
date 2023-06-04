<template>
  <Swiper
    class="max-h-screen"
    :modules="swiperModules"
    :direction="'vertical'"
    pagination
    mousewheel
    @swiper="onSwiper"
  >
    <SwiperSlide>
      <Home />
    </SwiperSlide>
    <SwiperSlide>
      <About />
    </SwiperSlide>
    <SwiperSlide>
      <About />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
useHead({
  title: "Jambore Nasional 7",
});

const swiperInstance = ref();
const swiperModules = [SwiperPagination, SwiperMousewheel];

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

function goToSlide(position) {
  swiperInstance?.value.slideTo(position);
}
</script>
