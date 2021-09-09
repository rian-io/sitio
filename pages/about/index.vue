<template>
  <div class="container">
    <article>
      <nuxt-content :document="about" />
    </article>
    <footer>
      <div class="footer">
        <SocialList />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    let about
    try {
      about = await $content('about').fetch()
      about = about[0]
    } catch (e) {
      error({ message: 'about not found' })
    }
    return { about }
  }
}
</script>

<style scoped>
.container {
  display: block;
  max-width: 40rem;
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
