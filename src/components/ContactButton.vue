<template>
  <div class="p-2 mt-4 md:w-1/5 w-1/3 contact-container" @click="handle(url)">
    <i :class="icon" class="fa-2x icon" />
    <p class="text-gray-300 mt-2 font-medium">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String,
    url: String
  },

  methods: {
    handle: (url) => {
      window.open(url)
    }
  }
}
</script>

<style>
.icon {
  @apply align-middle p-1 text-gray-300;
}

.icon:hover {
  @apply text-white;
}

.contact-container:hover {
  @apply cursor-pointer;
}
</style>