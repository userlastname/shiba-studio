<template>
  <section class="flex items-center justify-center pt-10" ref="trigger">
    <article class="max-width px-12 md:px-24">
      <a
        target="_blank"
        :href="projects[projects.length -1].url"
        :title="projects[projects.length -1].title"
        class="non-scrollable"
      ></a>
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
}

.scrollable::-webkit-scrollbar {
  -webkit-appearance: none;
}

.scrollable::-webkit-scrollbar:horizontal {
  @apply h-2;
}

.scrollable::-webkit-scrollbar-thumb {
  @apply rounded border-4 border-white bg-green cursor-pointer;
}

.scrollable::-webkit-scrollbar-track {
  @apply rounded bg-white;
}

.max-width {
  margin: 0 auto;
}

article .non-scrollable {
  @apply absolute h-full overflow-hidden z-10 right-0 top-0 flex justify-end;
  padding: inherit;
  padding-left: 0px;
}

article .non-scrollable:after {
  @apply h-full w-40;
  content: "";
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 90%
  );
}

.project-card {
  @apply p-8 rounded-sm text-center flex flex-col items-center justify-center mr-5 mb-3;
  background: var(--color, "#F4F4F4");
  height: 350px;
  min-width: 350px;
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
    @apply mr-0 mb-0;
  }
}
</style>
