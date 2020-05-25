<template>
  <div>
    <img :class="[width, height]" class="rounded-full object-cover object-center" :alt="name" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    src: String,
    background: {
      type: String,
      default: "#00000000"
    },
    width: {
      type: String,
      default: 'w-16'
    },
    height: {
      type: String,
      default: 'h-16'
    }
  },
  data() {
    return {
      imageUrl: require(`@/assets/${this.src}`)
    }
  }
}
</script>

<style>

</style>