<template>
  <div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible"
        v-click-outside="handleClickOutside">
        <Menu class="menu" :selectedMenu="selectedMenu">
          <Submenu>
            <template v-slot:title>{{ $t('message.menu1') }}</template>
            <template v-slot:items>
              <Menuitem @click="$router.push('/doc/intro')"
                mKey="/doc/intro">
              {{ $t('message.menu1_intro') }}
              </Menuitem>
              <Menuitem @click="$router.push('/doc/install')"
                mKey="/doc/install">
              {{ $t('message.menu1_install') }}
              </Menuitem>
              <Menuitem @click="$router.push('/doc/getting-started')"
                mKey="/doc/getting-started">
              {{ $t('message.menu1_getting_started') }}
              </Menuitem>
            </template>
          </Submenu>
          <Submenu>
            <template v-slot:title>{{ $t('message.menu2') }}</template>
            <template v-slot:items>
              <Menuitem v-for="(item, index) in menuHash.menu2.items"
                @click="$router.push(menuHash.menu2.pathRoot+'/'+item)"
                :key="`${menuHash.menu2.pathRoot+'/'+item}`"
                :mKey="`${menuHash.menu2.pathRoot+'/'+item}`">
                {{ $t(menuHash.menu2.nameRoot + "_" + item) }}
              </Menuitem>
            </template>
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
import { inject, ref, onMounted } from 'vue'
import Topnav from '../components/Topnav.vue'
import Menu from '../lib/Menu.vue'
import Submenu from '../lib/SubMenu.vue'
import Menuitem from '../lib/MenuItem.vue'
import { MENU_VISIBLE } from '../constants/Refs'
import { router } from '../router'

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
    const selectedMenu = ref<String>(null)
    const handleClickOutside = (e) => {
      if (e.path.length >= 2 &&
        (e.path[1].classList.contains('toggleAsideMenu') ||
        e.path[0].classList.contains('toggleAsideMenu'))) return
      if (menuVisible.value === true) menuVisible.value = false
    }
    const menuHash = {
      menu2: {
        nameRoot: 'message.menu2',
        pathRoot: '/doc',
        items: [ 'button', 'switch', 'tabs',
          'menu', 'modal', 'carousel' ]
      }
    }
    onMounted(() => {
      selectedMenu.value = router.currentRoute.value.path
      router.afterEach((to, from) => {
        selectedMenu.value = to.path
      })
    })
    return { menuVisible, handleClickOutside, menuHash, selectedMenu }
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
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 9;
}
.menu {
  margin-top: 28px;
  height: 100%;
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
