<template>
  <button><span></span></button>
</template>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';
$h_outer: 22px;
$h_inner: $h_outer - 4px;
button {
  height: $h_outer;
  width: $h_outer*2;
  border: none;
  background: $color_lightblue_800;
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
}
button:hover > span {
  left: calc(100% - #{$h_inner} - 2px);
}
</style>