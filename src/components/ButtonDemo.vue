<template>
  <h1>Button</h1>
  <section class="description">
    <p>This is a button component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-basic">
      <h3>Basic Usage</h3>
      <Button @click="onClick"
        @focus="onClick" @mouseover="onClick">
        你好
      </Button>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('1')
    }
    return { onClick }
  }
}
</script>