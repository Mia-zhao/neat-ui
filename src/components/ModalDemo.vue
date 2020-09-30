<template>
  <DemoPage type="modal">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo :component="Demo3" />
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Modal/Demo1.vue'
import Demo2 from './Modal/Demo2.vue'
import Demo3 from './Modal/Demo3.vue'
export default {
  setup() {
    return { Demo1, Demo2, Demo3 }
  }
}
</script>