<template>
  <DemoPage type="tabs">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Tabs/Demo1.vue'
import Demo2 from './Tabs/Demo2.vue'
export default {
  setup() {
    return { Demo1, Demo2 }
  }
}
</script>