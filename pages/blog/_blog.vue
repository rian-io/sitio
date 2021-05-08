<template>
  <div class="container">
    <!--<nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>-->

    <article>
      <header>
        <h1>{{ post.title }}</h1>
        <div class="metadata">
          <div>
            <PostDate :date="$dateFns.parseISO (post.createdAt)" />
          </div>
        </div>
      </header>
      <nuxt-content :document="post" />
    </article>
    <footer>
      <div class="social-list">
        <SocialList />
      </div>
    </footer>
  </div>
</template>

<script>
import PostDate from '~/components/posts/PostDate'

export default {
  components: {
    PostDate
  },
  async asyncData ({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.blog).fetch()
    } catch (e) {
      error({ message: 'Blog post not found' })
    }
    return { post }
  }
}
</script>

<style scoped>
.container {
  display: block;
  max-width: 36rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}
.metadata div {
  display: inline-block;
  margin-right: 0.5rem;
}
article {
  flex: 1 0 auto;
}
h1 {
  margin: 0 0 0.5rem;
  font-size: 2.25rem;
}
.tag-list {
  list-style: none;
  text-align: right;
  margin: 1.75rem 0 0 0;
  padding: 0;
}
.tag-list li {
  display: inline-block;
  margin-left: 0.5rem;
}
.social-list {
  margin-top: 3rem;
  text-align: center;
}
@media (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
