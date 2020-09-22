<template>
  <button class="neat-button"
    :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    level: {
      type: String,
      default: 'primary'
    }
  },
  setup(props, context) {
    const { theme, level, disabled, transparent } = props
    const classes = computed(() => {
      return {
        [`neat-button-theme-${theme}`]: theme,
        [`neat-button-level-${level}`]: level,
        'neat-button-disabled': disabled,
        'neat-button-transparent': transparent }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
$h: 32px;
button.neat-button.neat-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $color-lightblue-700;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out (black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

button.neat-button {
  &.neat-button-theme-link,
  &.neat-button-theme-text {
    background: transparent;
    color: $color-lightblue-800;
  }
  &.neat-button-theme-link {
    border: 1px solid $color-lightblue-800;
  }
}

.neat-button {
  position: relative;
  overflow: hidden;
  &::before {
    display: none;
    content: '';
    position: absolute;
    border-radius: 40%;
    background-color: rgba(129, 212, 250, 0.3);
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    top: 50%;
    left: 50%;
    animation: ripple 0.2s;
    opacity: 1;
  }
  &:active::before {
    display: block;
  }
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: scale(2);
    }
  }
}
</style>