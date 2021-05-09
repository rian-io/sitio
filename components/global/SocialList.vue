<template>
  <div>
    <a
      title="Behance"
      href="https://www.behance.net/r_io"
      target="_blank"
      rel="noopener"
    >
      <UilBehanceAlt class="icon" />
    </a>
    <a
      title="GitHub"
      href="https://github.com/rian-io"
      target="_blank"
      rel="noopener"
    >
      <UilGithubAlt class="icon" />
    </a>
  </div>
</template>

<script>
import { UilBehanceAlt, UilGithubAlt } from '@iconscout/vue-unicons'

export default {
  components: {
    UilBehanceAlt,
    UilGithubAlt
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
  color: black;
  width: 24px;
  height: 24px;
}
</style>
