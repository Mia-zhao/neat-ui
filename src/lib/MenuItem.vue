<template>
  <div @click="selectedMenu=menuKey">
   <slot />
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  props: {
    menuKey: {
      type: String,
      required: true
    }
  },
  setup() {
    const selectedMenu = inject<Ref<String>>('selected-menu')
    return { selectedMenu }
  }
}
</script>