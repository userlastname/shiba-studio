<template>
  <section class="flex items-center justify-center pt-10" ref="trigger">
    <article class="max-width px-12 md:px-24">
      <span class="non-scrollable"></span>
      <span class="scrollable" ref="scrollable">
        <a
          v-for="project in projects"
          target="_blank"
          :title="project.title"
          :href="project.url"
          :key="project.title"
          :style="'--color:' + project.color"
          class="project-card"
        >
          <h4>{{ project.title }}:</h4>
          <h5>{{ project.description }}</h5>
        </a>
        <a href="" style="--color: white;" class="project-card"></a>
      </span>
    </article>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Tribefire XP",
          description: "An engagement platform for gamers",
          url:
            "https://dribbble.com/danielpalmer/projects/1187245-Tribefire-XP",
          color: "#BEFFE8"
        },
        {
          title: "Inboxmood",
          description: "Mood and Productivity Tracking",
          url: "https://www.inboxmood.com",
          color: "#F4F4F4"
        },
        {
          title: "Makerwing",
          description: "Auto-Generating Portfolios for Web Designers",
          url: "https://www.makerwing.com",
          color: "#F5C1FF"
        }
      ]
    };
  },
  mounted() {
    this.lockHorizontalScroll(this.$refs.trigger);
  },
  methods: {
    lockHorizontalScroll(trigger) {
      const el = this.$refs.scrollable;

      function scrollHorizontally(e) {
        console.log("Scroll Trigger");
        if (el.scrollLeft <= el.scrollWidth - el.clientWidth - 100) {
          e = window.event || e;
          const speed = 5;
          const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
          el.scrollLeft -= delta * speed;
          e.preventDefault();
        }
        return;
      }

      if (!el || !trigger) {
        return;
      }

      if (trigger.addEventListener) {
        trigger.addEventListener("mousewheel", scrollHorizontally, false);
        trigger.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        trigger.attachEvent("onmousewheel", scrollHorizontally);
      }
    }
  }
};
</script>

<style scoped>
article,
section {
  @apply relative w-full;
}

article .scrollable {
  @apply flex items-center flex-no-wrap overflow-x-scroll relative z-0;
  -webkit-overflow-scrolling: touch;
}

.scrollable::-webkit-scrollbar {
  display: none;
}

.max-width {
  margin: 0 auto;
}

article .non-scrollable {
  @apply absolute h-full overflow-hidden z-10 right-0 top-0 w-full flex justify-end;
  padding: inherit;
}

article .non-scrollable:after {
  @apply h-full w-48;
  content: "";
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 90%
  );
}

.project-card {
  @apply p-8 rounded-sm text-center flex flex-col items-center justify-center mr-5;
  background: var(--color, "#F4F4F4");
  height: 350px;
  min-width: 350px;
}

.project-card:nth-last-child(1) {
  @apply w-64;
  min-width: 200px;
}

.project-card h4,
.project-card h5 {
  @apply text-3xl text-black;
}

@media (max-width: 950px) {
  .project-card {
    min-width: 250px;
  }
  .project-card h4,
  .project-card h5 {
    @apply text-2xl text-black;
  }
}

@media (max-width: 420px) {
  article .scrollable {
    @apply flex-col mb-4;
  }

  article .non-scrollable {
    @apply hidden;
  }

  .project-card {
    @apply mr-0;
  }

  .project-card:nth-last-child(1) {
    @apply hidden;
  }
}
</style>
