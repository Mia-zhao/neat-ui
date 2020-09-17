<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { MENU_VISIBLE } from './constants/Refs'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const screenWidth = document.documentElement.clientWidth
    const showMenu = screenWidth > 500
    const menuVisible = ref(showMenu)
    provide(MENU_VISIBLE, menuVisible)
    router.afterEach(() => {
      menuVisible.value = showMenu
    })
  }
}
</script>
