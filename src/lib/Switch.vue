<template>
  <button @click="toggle"
    :class="{ switched: value }">
    <span></span>
  </button>
  <div>{{value}}</div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('input', !props.value)
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
  background: $color-grey-600;
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
button.switched {
  background: $color-lightblue-800;
  > span {
    left: calc(100% - #{$h_inner} - 2px);
  }
}
button:focus {
  outline: none;
}
</style>