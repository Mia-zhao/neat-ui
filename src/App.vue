<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { MENU_VISIBLE } from './constants/Refs'

export default {
  name: 'App',
  setup() {
    const screenWidth = document.documentElement.clientWidth
    const menuVisible = ref(screenWidth > 500)
    provide(MENU_VISIBLE, menuVisible)
  }
}
</script>
