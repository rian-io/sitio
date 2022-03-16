<template>
  <div class="picker glass">
   <ul>
      <li
        v-for="mode in Object.keys(modes)"
        :key="mode"
        :class="{
          preferred: !$colorMode.unknown && mode === $colorMode.preference,
          selected: !$colorMode.unknown && mode === $colorMode.value
        }"
      >
        <component :is="modes[mode]" @click.native="$colorMode.preference = mode" />  
      </li>
    </ul>
  </div>
</template>

<script setup>
import { UilCoffee, UilDesktop, UilMoon, UilSun } from '@iconscout/vue-unicons'

export default {
  components: {
    UilCoffee,
    UilDesktop,
    UilMoon,
    UilSun
  },
  data() {
    return {
      modes: {"system": UilDesktop, "light": UilSun, "dark": UilMoon, "sepia": UilCoffee}
    }
  }
}
</script>

<style scoped>
.picker {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  z-index: 1;
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  color: var(--color-secondary);
}
li:hover {
  color: var(--color);
}
.preferred {
  color: var(--color);
}
</style>
