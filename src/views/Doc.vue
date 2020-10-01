<template>
  <div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible"
        v-click-outside="handleClickOutside">
        <Menu class="menu" :key="key">
          <Submenu :title="$t('message.menu1')"
            menuKey="menu1">
            <Menuitem @click="$router.push('/doc/intro')"
              menuKey="1">
            {{ $t('message.menu1_intro') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/install')"
              menuKey="2">
            {{ $t('message.menu1_install') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/getting-started')"
              menuKey="3">
            {{ $t('message.menu1_getting_started') }}
            </Menuitem>
          </Submenu>
          <Submenu :title="$t('message.menu2')"
            menuKey="menu2">
            <Menuitem @click="$router.push('/doc/button')"
              menuKey="4">
            {{ $t('message.menu2_button') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/switch')"
              menuKey="5">
            {{ $t('message.menu2_switch') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/tabs')"
              menuKey="6">
            {{ $t('message.menu2_tabs') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/menu')"
              menuKey="7">
            {{ $t('message.menu2_menu') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/modal')"
              menuKey="8">
            {{ $t('message.menu2_modal') }}
            </Menuitem>
            <Menuitem @click="$router.push('/doc/carousel')"
              menuKey="9">
            {{ $t('message.menu2_carousel') }}
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
import { inject, ref, onMounted, watch } from 'vue'
import Topnav from '../components/Topnav.vue'
import Menu from '../lib/Menu.vue'
import Submenu from '../lib/SubMenu.vue'
import Menuitem from '../lib/MenuItem.vue'
import { MENU_VISIBLE } from '../constants/Refs'
import i18n from '../i18n'

export default {
  components: {
    Topnav,
    Menu,
    Submenu,
    Menuitem
  },
  directives: {
    'click-outside': {
      mounted(el: any, binding: any) {
        if (document.documentElement.clientWidth > 500) return
        el.clickOutside = function (event: Event) {
          if (!(el === event.target ||
            el.contains(event.target))) {
            binding.value(event)
          }
        }
        document.body.addEventListener('click', el.clickOutside)
      }
    },
    unmounted(el: any) {
      document.body.removeEventListener('click', el.clickOutside)
      el.clickOutside = null
    }
  },
  setup(props, context) {
    const menuVisible = inject<Ref<boolean>>(MENU_VISIBLE)
    const key = ref<Number>(0)
    const handleClickOutside = (e) => {
      if (e.path.length >= 2 &&
        (e.path[1].classList.contains('toggleAsideMenu') ||
        e.path[0].classList.contains('toggleAsideMenu'))) return
      if (menuVisible.value === true) menuVisible.value = false
    }
    onMounted(() => {
      watch(i18n.global.locale,
        (val, prevVal) => {
          key.value = key.value === 0 ? 1 : 0
        }
      )
    })
    return { menuVisible, key, handleClickOutside }
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
    background: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
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
    padding-top: 36px;
    background: #fff;
  }
}
aside {
  background: #fff;
  width: 300px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 9;
}
.menu {
  margin-top: 28px;
}
main {
  overflow: auto;
}
@media (max-width: 500px) {
  aside {
    width: 200px;
  }
}
</style>
