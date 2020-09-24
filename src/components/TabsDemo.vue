<template>
  <h1>Tabs</h1>
  <section class="description">
    <p>This is Tabs component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <h3>Tabs Default</h3>
    <div class="example-tabs1">
      <Tabs v-model:selected="selected">
        <Tab title="Nav 1">Content 1</Tab>
        <Tab title="Nav 2">Content 2</Tab>
      </Tabs>
    </div>
    <div class="example-tabs2">
      <h3>Tabs Card Type</h3>
      <Tabs v-model:selected="selected" type="card">
        <Tab title="Nav 1">Content 1</Tab>
        <Tab title="Nav 2">Content 2</Tab>
      </Tabs>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selected = ref('Nav 1')
    return { selected }
  }
}
</script>