<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { MENU_VISIBLE } from './constants/Refs'

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide(MENU_VISIBLE, menuVisible)
  }
}
</script>
