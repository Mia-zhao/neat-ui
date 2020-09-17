<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span @click="toggleMenu"
      class="toggleAsideMenu"></span>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { MENU_VISIBLE } from '../constants/Refs'

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>(MENU_VISIBLE)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';
.topnav {
  background: $color-lightblue-800;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  >.logo {
    max-width: 6em;
    margin-right: auto;
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  > .toggleAsideMenu {
    width: 24px;
    height: 24px;
    background: #666;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu { display: none; }
    > .logo { margin: 0 auto; }
    > .toggleAsideMenu { display: inline-block; }
  }
}
</style>
