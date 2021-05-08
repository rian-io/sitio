<template>
  <div>
    <a
      title="Behance"
      href="https://www.behance.net/r_io"
      target="_blank"
      rel="noopener"
    >
      <Behance class="icon" />
    </a>
    <a
      title="GitHub"
      href="https://github.com/rian-io"
      target="_blank"
      rel="noopener"
    >
      <GitHub class="icon" />
    </a>
  </div>
</template>

<script>
import GitHub from '~/assets/icons/github.svg?inline'
import Behance from '~/assets/icons/behance.svg?inline'

export default {
  components: {
    GitHub,
    Behance
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
  width: 24px;
  height: 24px;
}
</style>
