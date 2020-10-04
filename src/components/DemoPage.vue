<template>
  <h1>{{ $t(`demos.${type}.h1`) }}</h1>
  <section class="description">
    <p>{{ $t(`demos.${type}.descr`) }}</p>
  </section>
  <h2>{{ $t(`demos.${type}.h2`) }}</h2>
  <section class="examples">
    <slot />
  </section>
  <h2>API</h2>
  <section>
    <APITable :component-type="type" />
  </section>
  <section class="markdown-body">
    <hr style="height: 0.1em;">
    <p><slot name="previous"/></p>
    <p><slot name="next"/></p>
  </section>
</template>

<script lang="ts">
import APITable from './APITable.vue'
export default {
  components: {
    APITable,
  },
  props: {
    type: {
      type: String,
      required: true
    }
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
  overflow: auto;
}
</style>

<style lang="scss">
@import '../lib/neat-style.scss';
.demo.bg-demo > .demo-component {
  background: $color-grey-300;
}
</style>