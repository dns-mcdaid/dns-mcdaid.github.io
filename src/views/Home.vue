<template>
  <div id="home" class="main-gutter xl:w-2/3 md:p-8 p-4 pb-16 h-auto">
    <Headline :title="headline.title" :intro="headline.intro" :image="headline.profile" class="w-full" />
    <p class="text-left font-normal text-gray-100 md:m-12 text-xl ml-2 mr-2 mt-8 mb-8">{{ description }}</p>
    <h2 class="section-header sm:ml-12 md:text-xl">Here's some cool stuff I've shipped</h2>
    <div id="projects" class="flex flex-wrap sm:m-8 mt-2">
      <ProjectTile v-for="project in projects" :key="project.name" :project="project" />
    </div>
    <div id="contacts" class="flex flex-wrap justify-center sm:mx-8 mt-16 mb-16">
      <ContactButton v-for="contact in contacts" :key="contact.name" :name="contact.name" :icon="contact.icon" :url="contact.url" />
    </div>
  </div>
</template>

<script>
import ProjectTile from '@/components/ProjectTile.vue'
import Headline from '@/components/Headline.vue'
import ContactButton from '@/components/ContactButton.vue'

export default {
  components: {
    Headline,
    ProjectTile,
    ContactButton
  },
  data() {
    return {
      projects: this.$store.state.projects,
      headline: this.$store.state.headline,
      contacts: this.$store.state.contacts,
      description: this.$store.state.description
    }
  }
}
</script>

<style>
.main-gutter {
  @apply bg-gray-800 shadow-md;
}
.section-header {
  @apply text-left text-lg ml-2 text-gray-200 font-semibold;
}
</style>