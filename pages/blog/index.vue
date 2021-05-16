<template>
  <div class="post-index">
    <PostList :amount="5" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList'

export default {
  components: { PostList }
}
</script>

<style scoped>
.post-index {
  display: block;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}
</style>
