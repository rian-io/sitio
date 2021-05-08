<template>
  <div class="post-index">
    <h1>All posts / <span>{{ tag.name }}</span></h1>
    <TagPostList :posts="articles" />
  </div>
</template>

<script>
import TagPostList from '~/components/tags/TagPostList'

export default {
  components: {
    TagPostList
  },
  async asyncData ({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('blog', params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
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
  color: #9b9b9b;
}
h1 span {
  font-weight: bold;
  color: #222;
}
@media (min-width: 769px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
