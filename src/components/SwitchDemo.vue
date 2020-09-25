<template>
  <h1>Switch</h1>
  <section class="description">
    <p>This is a two-state/on-off selector.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-basic">
      <h3>Basic Usage</h3>
      <Switch v-model:value="checked" />
      <pre class="code">
        import { Switch } from 'neat-ui'
      </pre>
    </div>
    <div class="example-transparent">
      <h3>Transparent</h3>
      <Switch :value="false" transparent />
    </div>
    <div class="example-disabled">
      <h3>Disabled</h3>
      <Switch :value="checked" disabled />
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const checked = ref(false)
    return { checked }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
h1 {
  margin-top: 30px;
}
h2 {
  margin-top: 20px;
}
section {
  margin-top: 10px;
}
.examples {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > div {
    min-width: 50%;
    border: 1px solid $color-grey-300;
    border-radius: $radius;
  }
}
</style>
