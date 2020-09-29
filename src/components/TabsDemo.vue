<template>
  <h1>{{ $t('demos.tabs.h1') }}</h1>
  <section class="description">
    <p>{{ $t('demos.tabs.descr') }}</p>
  </section>
  <h2>{{ $t('demos.tabs.h2') }}</h2>
  <section class="examples">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
  </section>
  <h2>API</h2>
  <section>
    <APITable component-type="tabs" />
  </section>
</template>

<script lang="ts">
import APITable from './APITable.vue'
import Demo from './Demo.vue'
import Demo1 from './Tabs/Demo1.vue'
import Demo2 from './Tabs/Demo2.vue'
export default {
  components: {
    APITable,
    Demo
  },
  setup() {
    return { Demo1, Demo2 }
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