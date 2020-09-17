<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAsideMenu"></span>
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
.topnav {
  background: #0277BD;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;

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
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
  }
}
</style>
