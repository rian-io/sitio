<template>
  <div class="container">
    <h1>
      {{ resume.title }}
    </h1>
    <article>
      <nuxt-content :document="resume" />
    </article>
    <footer>
      <div class="footer">
        <SocialList />
        <Copyright />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    let resume
    try {
      resume = await $content('resume').fetch()
      resume = resume[0]
    } catch (e) {
      error({ message: 'Resume not found' })
    }
    return { resume }
  }
}
</script>

<style scoped>
.container {
  display: block;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}
.footer {
  margin-top: 3rem;
  text-align: center;
}
</style>
