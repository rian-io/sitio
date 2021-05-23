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
      <Pagination :last-page="lastPage" />
    </div>
    <ul className="categories">
      <li
        v-for="(tag, index) in tags"
        :key="index"
      >
        <TagLink :tag="tag" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostItem from '~/components/posts/PostItem'
import TagLink from '~/components/tags/TagLink'
import { getTags } from '~/utils/tag'

export default {
  name: 'PostList',
  components: {
    PostItem,
    TagLink
  },
  props: {
    posts: {
      type: Array,
      default: Array
    },
    lastPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      tags: getTags()
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
  max-height: 100%;
  height: 100%;
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
