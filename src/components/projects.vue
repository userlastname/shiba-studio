<template>
  <section>
    <span class="non-scrollable"></span>
    <span class="scrollable">
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
section {
  @apply relative;
  max-width: 940px;
}

section .scrollable {
  @apply flex items-center overflow-x-scroll relative z-0;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

section .non-scrollable {
  @apply absolute h-full w-32 overflow-hidden z-10 right-0 top-0;
}

section .non-scrollable:after {
  @apply absolute h-full w-full right-0;
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
  min-width: 320px;
}

.project-card:nth-last-child(1) {
  @apply w-48;
  min-width: 0;
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
  section {
    @apply flex-col mb-4;
  }

  section:after {
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
