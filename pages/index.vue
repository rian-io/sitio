<template>
  <div class="container">
    <div>
      <h1>
        Hi, I am Rian Oliveira<span class="fancy">.</span>
      </h1>
      <a
        href="https://www.linkedin.com/in/rianoliveira/"
        target="_blank"
        rel="noopener"
      ><span class="handle">@rianoliveira</span></a>
      <h2>A Computer Science student.</h2>
      <SocialList />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 0 1.5rem;
}
h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 500;
}
h2 {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.25;
}
.handle {
  display: inline-block;
  margin-top: 0.275em;
  color: #9b9b9b;
  letter-spacing: 0.05em;
}
.sepia-mode .handle {
  color: #7B7064;
}

@media (min-width: 960px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.25rem;
  }
}
</style>
