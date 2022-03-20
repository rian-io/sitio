<template>
  <div class="post-index">
    <h1>All posts / <span>{{ tag.name }}</span></h1>
    <TagPostList :posts="posts" />
  </div>
</template>

<script>
import { getTag } from '~/utils/tag'

export default {
  async asyncData ({ $content, params }) {
    const tag = getTag(params.tag)

    const posts = await $content('blog', params.slug)
      .where({ tags: { $contains: tag.slug } })
      .sortBy('date', 'asc')
      .fetch()
    return {
      posts,
      tag
    }
  }
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
h1 {
  margin: 0 0 2rem;
  padding: 0;
  font-weight: 100;
  font-size: 1.75rem;
  color: var(--color-secondary);
}
h1 span {
  font-weight: bold;
  color: var(--color);
}
@media (min-width: 769px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
