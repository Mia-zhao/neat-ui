<demo>demos.tabs.h3_1</demo>

<template>
  <Tabs v-model:selected="selected">
    <Tab title="Nav 1">Content 1</Tab>
    <Tab title="Nav 2">Content 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
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