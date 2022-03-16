<template>
  <div>
    <a
      title="GitHub"
      href="https://github.com/rian-io"
      target="_blank"
      rel="noopener"
    >
      <UilGithubAlt class="icon" />
    </a>
    <a
      v-if="$nuxt.$route.name !== 'index'"
      title="LinkedIn"
      href="https://www.linkedin.com/in/rianoliveira/"
      target="_blank"
      rel="noopener"
    >
      <UilLinkedinAlt class="icon" />
    </a>
    <a
      title="Behance"
      href="https://www.behance.net/r_io"
      target="_blank"
      rel="noopener"
    >
      <UilBehanceAlt class="icon" />
    </a>
  </div>
</template>

<script>
import { UilBehanceAlt, UilGithubAlt, UilLinkedinAlt } from '@iconscout/vue-unicons'

export default {
  components: {
    UilBehanceAlt,
    UilGithubAlt,
    UilLinkedinAlt
  }
}
</script>

<style scoped>
a {
  display: inline-block;
}
a:not(:last-child) {
  margin-right: 2em;
}
.icon {
  color: var(--color);
  width: 24px;
  height: 24px;
}
</style>
