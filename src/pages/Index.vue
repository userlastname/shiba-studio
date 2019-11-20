<template>
  <Layout>
    <section class="px-12 md:px-24 w-full flex flex-col z-10 max-width">
      <h1>
        We help you launch highly effective web projects, through beautiful code
        and design
      </h1>

      <a href="#poke" title="Get Started With Shiba Studio"
        ><button class="bg-yellow text-lg mt-8">
          Get Started With Shiba
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
        projects and identities.
      </p>
    </section>

    <projects />

    <section
      class="px-12 md:px-24 w-full flex flex-col z-10 max-width mt-8 md:mt-12"
    >
      <h3 class="sub-heading">We specialize in...</h3>

      <p>
        Building beautiful websites with a focus on performance and usability.
      </p>

      <p>
        Designing market-relevant brands with strong personality.
      </p>

      <p>
        Designing and building web applications to help startups validate ideas.
      </p>

      <p>
        User research to help businesses understand how to create more value.
      </p>
    </section>

    <PokeForm id="poke" class="mt-12" />
  </Layout>
</template>

<script>
import PokeForm from "~/components/poke-form.vue";
import Projects from "~/components/projects.vue";
export default {
  components: {
    PokeForm,
    Projects
  }
};
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
