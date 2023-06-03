<template>
  <Swiper
    class="max-h-screen"
    :modules="[SwiperPagination, SwiperMousewheel]"
    :slides-per-view="1"
    :direction="'vertical'"
    pagination
    mousewheel
  >
    <SwiperSlide class="bg-green-500">
      <strong>Page 1</strong>
    </SwiperSlide>
    <SwiperSlide class="bg-red-500">
      <strong>Page 2</strong>
    </SwiperSlide>
  </Swiper>
</template>
