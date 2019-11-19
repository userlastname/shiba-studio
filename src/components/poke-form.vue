<template>
  <section>
    <form
      method="POST"
      name="poke"
      class="max-width flex flex-col"
      data-netlify="true"
    >
      <h3 class="text-2xl mb-2 px-4 md:px-8 text-center">
        Poke us and we’ll get in touch!
      </h3>

      <label for="name"
        >Your name... <input type="text" name="name" id="name" required
      /></label>

      <label for="email" class="mt-6"
        >Your email address...
        <input type="email" name="email" id="email" required
      /></label>

      <button type="submit" class="bg-yellow text-lg mt-4 w-full text-center">
        Poke Shiba Studio
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Poke Form"
};
</script>

<style scoped>
section {
  @apply w-full bg-lightgrey flex flex-col items-center justify-center px-6 py-10;
}
</style>
