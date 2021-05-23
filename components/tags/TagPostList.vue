<template>
  <div class="posts-container">
    <div class="posts">
      <ul class="post-list">
        <li
          v-for="(post, index) in posts"
          :key="index"
        >
          <PostItem :post="post" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostItem from '~/components/posts/PostItem'

export default {
  name: 'TagPostList',
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      default: Array
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.posts {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.posts li {
  margin-bottom: 1.5rem;
}
.post-list {
  flex: 1 0 auto;
}
@media (min-width: 769px) {
  .categories {
    display: block;
  }
}
</style>
