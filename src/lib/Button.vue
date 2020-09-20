<template>
  <button class="neat-button"
    :class="`theme-${theme}`"
    v-bind="$attrs" >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'normal'
    }
  },
  inheritAttrs: false
}
</script>

<style lang="scss">
@import '../assets/style/helper.scss';
$h: 32px;
.neat-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1p solid $color-grey-100;
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out (black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover, &:focus {
    color: $color-lightblue-100;
    border-color: $color-lightblue-100;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

</style>