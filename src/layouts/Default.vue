<template>
  <div class="container">
    <header class="px-12 md:px-24 pt-24 pb-4 w-full flex max-width">
      <g-image
        src="~/assets/brand/logo.png"
        width="90"
        quality="100"
        alt="Shiba Studio - Design & Code Agency Based In Sydney"
      />
    </header>
    <slot />
    <footer class="w-full p-8 bg-black mt-8 flex-grow z-10"></footer>
  </div>
</template>

<style></style>
