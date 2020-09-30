<template>
  <DemoPage type="button">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo class-prefix="bg" :component="Demo3" />
    <Demo :component="Demo4" />
    <Demo :component="Demo5" />
    <Demo :component="Demo6" />
    <Demo :component="Demo7" />
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Button/Demo1.vue'
import Demo2 from './Button/Demo2.vue'
import Demo3 from './Button/Demo3.vue'
import Demo4 from './Button/Demo4.vue'
import Demo5 from './Button/Demo5.vue'
import Demo6 from './Button/Demo6.vue'
import Demo7 from './Button/Demo7.vue'
export default {
  setup() {
    return { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7 }
  }
}
</script>