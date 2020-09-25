<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>En</li>
      <li>中文</li>
    </ul>
    <svg v-if="toggleMenuVisible"
      @click="toggleMenu" class="toggleAsideMenu"
      aria-hidden="true">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { MENU_VISIBLE } from '../constants/Refs'

export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false
    }
  },
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
@import '../lib/neat-style.scss';
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: #56658e;
  >.logo {
    margin-right: auto;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      line-height: 32px;
      margin: 0 8px;
    }
  }
  > .toggleAsideMenu {
    width: 24px;
    height: 24px;
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
