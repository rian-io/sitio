<template>
  <NuxtLink :to="`/blog/tag/${tag.slug}`">
    # {{ tag.name }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'TagLink',
  props: {
    tag: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
