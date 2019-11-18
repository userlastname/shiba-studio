<template>
  <Layout>
    <section class="px-12 md:px-24 w-full flex flex-col z-10 max-width">
      <h1>
        We help you launch highly effective web projects, through beautiful code
        and design
      </h1>

      <a href="#poke" title="Get Started With Shiba Studio"
        ><button class="bg-yellow text-lg mt-8">
          Let's Chat, No Strings Attached
        </button></a
      >

      <span class="green-banner"></span>

      <h3 class="sub-heading mt-12 md:mt-32">Shiba Studio is...</h3>

      <p>
        Naj and Dan, two lifelong friends from Sydney, Australia. Naj is a
        talented illustrator and creative, while Dan specialises in UI/UX and
        frontend development.
      </p>

      <p>
        Together, they help companies create delightful, brand-driven web
        projects using modern static site and app technology.
      </p>

      <h3 class="sub-heading mt-4 md:mt-8">We specialize in...</h3>

      <p>
        Building beautiful static websites with a focus on performance and
        accessibility.
      </p>

      <p>
        Designing market-relevant brands with strong personality.
      </p>

      <p>
        Developing and launching web applications to help startups validate
        their ideas.
      </p>

      <p>
        User research to help businesses understand how to create more value.
      </p>
    </section>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
.green-banner {
  @apply absolute bg-green;
  z-index: -1;
  width: 120%;
  left: -10%;
  height: 300px;
  transform: rotate(-7deg);
  max-width: var(--max-container);
}

@media (max-width: 600px) {
  .green-banner {
    height: 160px;
  }
}
</style>
