<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li @click="language='EN'"
        :class="{selected: language === 'EN'}">
        En
      </li>
      <li @click="language='ZH'"
        :class="{selected: language === 'ZH'}">
        中文
      </li>
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
import { MENU_VISIBLE, LANG } from '../constants/Refs'

export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>(MENU_VISIBLE)
    const language = inject<Ref<String>>(LANG)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return { toggleMenu, language }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
$color: #56658e;
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
  color: $color;
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
    > li {
      line-height: 32px;
      padding: 0 8px;
      margin: 0 4px;
      border-radius: 4px;
      cursor: pointer;
      &.selected {
        background: $color;
        color: #fff;
      }
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
