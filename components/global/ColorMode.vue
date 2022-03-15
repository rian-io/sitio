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
  color: #9b9b9b;
}
li:hover {
  color: #222;
}
.preferred {
  color: #222;
}
.dark-mode li {
  color: #9b9b9b;
}
.dark-mode li:hover {
  color: #ebf4f1;
}
.dark-mode .preferred {
  color: #ebf4f1;
}
.sepia-mode li {
  color: #7B7064;
}
.sepia-mode li:hover {
  color: #433422;
}
.sepia-mode .preferred {
  color: #433422;
}
</style>
