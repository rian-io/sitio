<template>
  <div class="post-index">
    <PostList :posts="paginatedPosts" :last-page="lastPage" />
  </div>
</template>

<script>
import getContent from '@/utils/getContent'
import PostList from '@/components/posts/PostList'

export default {
  components: {
    PostList
  },
  async asyncData ({ $content, params, error }) {
    const content = await getContent($content, params, error)
    return {
      lastPage: content.lastPage,
      paginatedPosts: content.paginatedPosts
    }
  }
}
</script>

<style>
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
