<template>
  <ul>
    <li
      v-for="(pageNumber, index) in pages"
      :key="index"
    >
      <NuxtLink :to="{ name: 'blog-page-page', params: { page:pageNumber } }">
        {{ pageNumber }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    lastPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages () {
      return Array.from({ length: this.lastPage }, (_, i) => i + 1)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 3rem 0 0 0;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 1em;
  color: var(--color-secondary);
  font-size: 1.25rem;
}
.nuxt-link-exact-active {
  color: var(--color);
  font-weight: bold;
}
</style>
