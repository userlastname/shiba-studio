<template>
  <div class="overflow-hidden min-h-screen flex flex-col items-center relative">
    <header class="px-12 md:px-24 pt-24 pb-4 w-full flex max-width">
      <g-image
        src="~/assets/brand/logo.png"
        width="90"
        quality="100"
        :immediate="true"
        alt="Shiba Studio (Logo) - Design and Code In Sydney"
      />
    </header>
    <slot />
    <footer class="w-full p-8 py-10 bg-black flex-grow z-10">
      <div class="max-width flex items-center justify-between w-full">
        <h5 class="ml-auto text-white">Shiba Studio © 2019</h5>
      </div>
    </footer>
  </div>
</template>

<style></style>
