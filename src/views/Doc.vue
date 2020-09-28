<template>
  <div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <Menu>
          <Submenu :title="$t('message.menu1', {}, { locale: selectedLanguage })"
            menuKey="menu1">
            <Menuitem @click="$router.push('/doc/intro')"
              menuKey="1">
            {{ $t('message.menu1_intro', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/install')"
              menuKey="2">
            {{ $t('message.menu1_install', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/getting-started')"
              menuKey="3">
            {{ $t('message.menu1_getting_started', {}, { locale: selectedLanguage }) }}
            </Menuitem>
          </Submenu>
          <Submenu :title="$t('message.menu2', {}, { locale: selectedLanguage })"
            menuKey="menu2">
            <Menuitem @click="$router.push('/doc/button')"
              menuKey="4">
            {{ $t('message.menu2_button', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/switch')"
              menuKey="5">
            {{ $t('message.menu2_switch', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/tabs')"
              menuKey="6">
            {{ $t('message.menu2_tabs', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/menu')"
              menuKey="7">
            {{ $t('message.menu2_menu', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/modal')"
              menuKey="8">
            {{ $t('message.menu2_modal', {}, { locale: selectedLanguage }) }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/carousel')"
              menuKey="9">
            {{ $t('message.menu2_carousel', {}, { locale: selectedLanguage }) }}
            </Menuitem>
          </Submenu>
        </Menu>

      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import Topnav from '../components/Topnav.vue'
import Menu from '../lib/Menu.vue'
import Submenu from '../lib/SubMenu.vue'
import Menuitem from '../lib/MenuItem.vue'
import { MENU_VISIBLE, LANG } from '../constants/Refs'

export default {
  components: {
    Topnav,
    Menu,
    Submenu,
    Menuitem
  },
  setup(props, context, t) {
    const menuVisible = inject<Ref<boolean>>(MENU_VISIBLE)
    const selectedLanguage = inject<Ref<String>>(LANG)
    return { menuVisible, selectedLanguage, ...useI18n }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
@import '../assets/style/helper.scss';
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 306px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #fff;
  }
}
aside {
  background: $aside_bg_color;
  width: 300px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
}
main {
  overflow: auto;
}
</style>
