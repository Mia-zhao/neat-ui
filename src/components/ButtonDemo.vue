<template>
  <h1>{{ $t('demos.button.h1') }}</h1>
  <section class="description">
    <p>{{ $t('demos.button.descr') }}</p>
  </section>
  <h2>{{ $t('demos.button.h2') }}</h2>
  <section class="examples">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo class-prefix="bg" :component="Demo3" />
    <Demo :component="Demo4" />
    <Demo :component="Demo5" />
    <Demo :component="Demo6" />
    <Demo :component="Demo7" />
  </section>
  <h2>API</h2>
  <section>
    <APITable component-type="button" />
  </section>
</template>

<script lang="ts">
import APITable from './APITable.vue'
import Demo from './Demo.vue'
import Demo1 from './Button/Demo1.vue'
import Demo2 from './Button/Demo2.vue'
import Demo3 from './Button/Demo3.vue'
import Demo4 from './Button/Demo4.vue'
import Demo5 from './Button/Demo5.vue'
import Demo6 from './Button/Demo6.vue'
import Demo7 from './Button/Demo7.vue'
export default {
  components: {
    APITable,
    Demo
  },
  setup() {
    return { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7 }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
  padding-bottom: 0.3em;
  border-bottom: 1px solid rgb(234, 236, 239);
}
section {
  margin: 16px 0;
}
</style>

<style lang="scss">
@import '../lib/neat-style.scss';
.demo.bg-demo > .demo-component {
  background: $color-grey-300;
}
</style>