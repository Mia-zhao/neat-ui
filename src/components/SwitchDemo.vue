<template>
  <div>
    <Switch v-model:value="switched" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const switched = ref(false)
    return { switched }
  }
}
</script>