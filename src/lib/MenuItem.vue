<template>
  <div>
   <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    menuKey: {
      type: String,
      required: true
    }
  }
}
</script>