<template>
  <div class="flex justify-between md:px-12 px-2">
    <div class="my-auto md:mr-16 mr-4">
      <h1 class="headline-text text-gray-300 md:text-4xl">{{ intro }}</h1>
      <h1 class="headline-text text-gray-100 md:text-4xl">{{ title }}</h1>
    </div>
    <BaseIcon class="ml-16" name="headline image" :src="image" height="h-32 md:h-56" width="w-32 md:w-56" />
  </div>
</template>

<script>
import BaseIcon from './BaseIcon'

export default {
  components: {
    BaseIcon,
  },
  props: {
    intro: String,
    title: String,
    image: String
  }
}
</script>

<style>
.headline-text {
  @apply text-left font-bold text-2xl;
}
</style>