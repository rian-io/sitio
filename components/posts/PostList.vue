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
  name: 'PostList',
  components: {
    PostItem
  },
  props: {
    amount: { // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: val => val >= 0 && val < 100
    }
  },
  data () {
    return {
      posts: []
    }
  },
  async mounted () {
    this.posts = await this.fetchPosts()
  },
  methods: {
    async fetchPosts () {
      let posts
      try {
        posts = await this.$content('blog')
          .sortBy('createdAt', 'desc')
          .limit(this.amount).fetch()
      } catch (e) {
        this.error({ message: 'Blog posts not found' })
      }
      return posts
    }
  }
}
</script>

<style scoped>
.posts-container {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 1.5rem;
}
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
.categories {
  display: none;
}
.categories li {
  margin-bottom: 0.75em;
}
@media (min-width: 769px) {
  .categories {
    display: block;
  }
}
</style>
