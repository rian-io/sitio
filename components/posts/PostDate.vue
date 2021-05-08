<template>
  <time>
    <span>{{ $dateFns.format(date, "LLLL d, yyyy") }}</span>
  </time>
</template>

<script>
export default {
  name: 'PostDate',
  props: {
    date: { type: Date, default: new Date() }
  }
}
</script>

<style scoped>
span {
  color: #9b9b9b;
}
</style>
