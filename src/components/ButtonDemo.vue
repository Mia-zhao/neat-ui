<template>
  <h1>Button</h1>
  <section class="description">
    <p>This is a button component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-theme">
      <h3>Theme</h3>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick">
        你好
      </Button>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        theme="link">
        你好
      </Button>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        theme="text">
        你好
      </Button>
    </div>
    <div class="example-disabled">
      <h3>Disabled</h3>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick">
        你好
      </Button>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        disabled>
        你好
      </Button>
    </div>
    <div class="example-transparent">
      <h3>Transparent</h3>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick">
        你好
      </Button>
      <Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        transparent>
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
    }
    return { onClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
section {
  display: flex;
  flex-wrap: wrap;
  > div {
    min-width: 50%;
    border: 1px solid $color-grey-300;
    border-radius: 4px;
  }
}
</style>