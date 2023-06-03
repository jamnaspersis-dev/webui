<template>
  <div
    class="bg-home bg-cover bg-center h-full w-full flex items-center justify-center text-center flex-col"
  >
    <img class="h-56 drop-shadow-md" src="~/assets/image/logo.png" />
    <p class="text-9xl font-primary text-white drop-shadow-md">
      <span class="text-oren-dua boujee-text">Jambore</span> Nasional 7
    </p>
    <p class="font-secondary font-light text-emas text-xl drop-shadow-md italic">
      Kolaborasi Pelajar dan Mahasiswa Persis
    </p>
    <p class="font-secondary font-bold text-emas text-xl drop-shadow-md uppercase italic">
      Berdaya, Berkarya, Digdaya untuk Mewujudkan Indonesia Emas 45
    </p>
    <button
      class="transition px-6 py-2 flex rounded-xl font-semibold text-white mt-6 shadow-md bg-hijau-satu hover:bg-hijau-dua active:shadow-none active:bg-hijau-satu"
    >
      Coming Soon
    </button>
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
    animation: move-bg 8s linear infinite;
  }
  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}
</style>
