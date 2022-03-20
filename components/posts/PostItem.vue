<template>
  <NuxtLink :to="post.path">
    <PostDate :date="$dateFns.parseISO (post.date)" />
    <h2>{{ post.title }}</h2>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style scoped>
a {
  color: var(--color);
  display: inline-block;
}
h2 {
  margin: 0;
  font-weight: 500;
}
</style>
