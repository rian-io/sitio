<template>
  <nuxt-link :to="post.path">
    <PostDate :date="$dateFns.parseISO (post.createdAt)" />
    <h2>{{ post.title }}</h2>
  </nuxt-link>
</template>

<script>
import PostDate from '~/components/posts/PostDate'

export default {
  name: 'PostItem',
  components: {
    PostDate
  },
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
  color: #222;
  display: inline-block;
}
h2 {
  margin: 0;
  font-weight: 500;
}
</style>
