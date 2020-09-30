<template>
  <DemoPage type="carousel">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo :component="Demo3" />
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Carousel/Demo1.vue'
import Demo2 from './Carousel/Demo2.vue'
import Demo3 from './Carousel/Demo3.vue'
export default {
  setup() {
    return { Demo1, Demo2, Demo3 }
  }
}
</script>