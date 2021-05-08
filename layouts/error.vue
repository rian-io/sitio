<template>
  <section class="error-page">
    <h1 class="title">
      404
    </h1>
    <div class="message">
      <h2 class="text">
        This page could not be found.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 0 1.5rem;
}
.title {
  display:inline-block;
  border-right:1px solid rgba(0, 0, 0,.3);
  margin:0;
  margin-right:20px;
  padding:10px 23px 10px 0;
  font-size:24px;
  font-weight:500;
  vertical-align:top
}
.message {
  display:inline-block;
  text-align:left;
  line-height:49px;
  height:49px;
  vertical-align:middle
}
.text {
  font-size:14px;
  font-weight:normal;
  line-height:inherit;
  margin:0;
  padding:0
}
</style>
