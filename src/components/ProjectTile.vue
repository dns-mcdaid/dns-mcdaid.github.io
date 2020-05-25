<template>
  <div class="lg:w-1/3 sm:w-1/2 w-full p-2">
    <div class="tile" @click="goTo(project)">
      <BaseIcon :name="project.name" :src="project.icon" class="flex-none" />
      <h3 class="tile-text text-m">{{ project.name }}</h3>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  components: {
    BaseIcon
  },
  props: {
    project: Object
  },
  methods: {
    goTo: (project) => {
      window.open(project.link)
    }
  }
}
</script>
<style>
.tile {
  @apply flex p-4 rounded-lg shadow-lg bg-gray-700;
}
.tile-text {
  @apply pl-4 text-gray-100 font-semibold text-left my-auto;
}

.tile:hover {
  @apply shadow-2xl bg-gray-600 cursor-pointer;
}

.tile:active {
  @apply shadow-sm bg-gray-900;
}
</style>