<template>
  <div class="container">
    <ul>
      <li>
        <nuxt-link to="/">
          about
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/resume">
          resume
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">
          blog
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style>
.container {
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
  transform: translateY(100%);
  transition: opacity 200ms;
}
.nuxt-link-exact-active ul {
  opacity: 1;
  transform: translateY(0);
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
    padding: 0;
  }
}
</style>
