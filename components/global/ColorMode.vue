<template>
  <div class="picker">
   <ul>
      <li
        v-for="mode in Object.keys(modes)"
        :key="mode"
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

<style>
.picker {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  z-index: 1;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
}
.dark-mode .picker {
  background-color: rgba(9, 26, 40, 0.7);
}
.sepia-mode .picker {
  background-color: rgba(241, 231, 208, 0.7);
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
}
</style>
