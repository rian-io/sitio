<template>
  <div>
    <Burger :active="isActive" @toggle="toggle" />
    <div :class="{'active': isActive}" class="navigation">
      <ul>
        <li>
          <NuxtLink to="/" @click.native="toggle">
            home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :class="{'nuxt-link-exact-active':isExact}" to="/blog" @click.native="toggle">
            blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click.native="toggle">
            about
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    isExact () {
      return this.$nuxt.$route.path.includes('blog')
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.navigation {
  width: 0;
}

ul {
  opacity: 0;
  width: 100%;
  height: 100vh;
  text-align: right;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  transform: translateX(100%);
  transition: 400ms;
}
.dark-mode ul {
  background-color: #091a28;
}
.sepia-mode ul {
  background-color: #f1e7d0;
}
.active ul {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 200ms;
}
li {
  margin-bottom: 1.75rem;
  font-size: 2rem;
  padding: 0 1.5rem 0 0;
}
li:last-child {
  margin-bottom: 0;
}
.nuxt-link-exact-active {
  color: #222;
}
.dark-mode .nuxt-link-exact-active {
  color: #fff;
}
.sepia-mode .nuxt-link-exact-active {
  color: #2E2417
}

@media (min-width: 769px) {
  .container {
    width: 7rem;
    display: grid;
  }
  ul {
    opacity: 1;
    width: 7rem;
    top: auto;
    display: block;
    transform: translateY(0);
  }
  li {
    font-size: 1rem;
  }
}
</style>
