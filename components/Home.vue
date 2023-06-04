<template>
  <div
    class="bg-home-mobile md:bg-home bg-cover bg-center h-full w-full flex items-center justify-center text-center flex-col px-6"
  >
    <img class="h-32 md:h-56 drop-shadow-md" src="~/assets/image/logo.png" />
    <p class="text-5xl md:text-9xl font-primary text-white drop-shadow-md">
      <span class="text-oren-dua boujee-text">Jambore</span> Nasional 7
    </p>
    <p class="font-secondary font-light text-emas text-sm md:text-xl drop-shadow-md italic">
      Kolaborasi Pelajar dan Mahasiswa Persis
    </p>
    <p class="font-secondary font-bold text-emas text-sm md:text-xl drop-shadow-md uppercase italic">
      Berdaya, Berkarya, Digdaya untuk Mewujudkan Indonesia Emas 45
    </p>
  </div>
</template>

<style scoped>
.boujee-text {
  --bg-size: 400%;
  --color-one: hsl(15 90% 55%);
  --color-two: hsl(40 95% 55%);
  background: linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-one))
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
}

@media (prefers-reduced-motion: no-preference) {
  .boujee-text {
    animation: move-bg 6s linear infinite;
  }
  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}
</style>
