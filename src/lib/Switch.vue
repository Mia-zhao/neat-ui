<template>
  <button @click="toggle"
    :class="{ checked: value, disabled, transparent }">
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
    return { toggle }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';
$h_outer: 22px;
$h_inner: $h_outer - 4px;
button {
  height: $h_outer;
  width: $h_outer*2;
  border: none;
  background: $color-grey-300;
  border-radius: $h_outer/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h_inner;
  width: $h_inner;
  background: white;
  border-radius: 50%;
  transition: left 250ms;
}
button.checked {
  background: $color-lightblue-800;
  > span {
    background: white;
    left: calc(100% - #{$h_inner} - 2px);
  }
}
button:focus {
  outline: none;
}
button:hover {
  cursor: pointer;
}
button.disabled {
  &:hover {
    cursor: no-drop;
  }
  background: $color-grey-200;
  > span {
    background: $color-grey-100;
  }
  &.checked {
    background: $color-lightblue-700;
  }
}
button.transparent {
  border: 1px solid white;
  background: transparent;
}
</style>
