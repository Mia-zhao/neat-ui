<template>
  <button class="neat-switch" @click="toggle"
    :class="{ 'neat-switch-checked': value,
      'neat-switch-disabled': disabled,
      'neat-switch-transparent': transparent }">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled: Boolean,
    transparent: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
$h_outer: 22px;
$h_inner: $h_outer - 4px;
.neat-switch {
  height: $h_outer;
  width: $h_outer*2;
  border: none;
  background: $color-grey-300;
  border-radius: $h_outer/2;
  position: relative;
}
.neat-switch > span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h_inner;
  width: $h_inner;
  background: white;
  border-radius: 50%;
  transition: left 250ms;
}
.neat-switch.neat-switch-checked {
  background: $color-lightblue-800;
  >span {
    background: white;
    left: calc(100% - #{$h_inner} - 2px);
  }
}
.neat-switch:focus {
  outline: none;
}
.neat-switch:hover {
  cursor: pointer;
}
.neat-switch.neat-switch-disabled {
  &:hover {
    cursor: no-drop;
  }
  background: $color-grey-200;
  >span {
    background: $color-grey-100;
  }
  &.neat-switch-checked {
    background: $color-lightblue-700;
  }
}
.neat-switch.neat-switch-transparent {
  border: 1px solid white;
  background: transparent;
}
</style>
