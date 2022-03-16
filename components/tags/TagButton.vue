<template>
  <NuxtLink :to="`/blog/tag/${tag.slug}`">
    {{ tag.name }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'TagButton',
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
a {
  display: inline-block;
  border-radius: 3px;
  background-color: var(--bg-tag);
  color: var(--link);
  transition: background-color 0.3s ease;
  padding: 0.25em 0.5em;
}
</style>
