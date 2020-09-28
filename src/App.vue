<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { MENU_VISIBLE } from './constants/Refs'
import { router } from './router'

const WIDTH_THRESHOLD = 500
const getScreenWidth = (() => {
  return document.documentElement.clientWidth
})

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(getScreenWidth() > WIDTH_THRESHOLD)
    provide(MENU_VISIBLE, menuVisible)

    router.afterEach(() => {
      if (getScreenWidth() <= WIDTH_THRESHOLD) {
        menuVisible.value = false
      }
    })
  }
}
</script>
