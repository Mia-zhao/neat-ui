<template>
  <div :class="{ 'neat-menu-item': true,
    'selected': selectedMenu === mKey }"
    @click="selectedMenu = mKey">
   <slot />
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  props: {
    mKey: {
      type: String,
      required: true
    }
  },
  setup() {
    const selectedMenu = inject<Ref<String>>('selected-menu')
    return { selectedMenu }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-sub-menu-children {
  div.neat-menu-item {
    font-size: 14px;
    cursor: pointer;
    &.selected { color: $color-lightblue-700; }
    &.selected::after { background: rgba(129, 212, 250, 0.3); }
  }
  div.neat-menu-item {
    line-height: 1em;
    margin: 0.5em 0;
    padding: 0.5em 0;
    &::after {
      content: '';
      height: 2em;
      position: absolute;
      left: 0;
      margin-top: -0.5em;
      right: 0;
    }
  }
}
</style>