<demo>demos.menu.h3_2</demo>

<template>
  <Menu>
    <Submenu hideArrow menuKey="menu1">
      <template v-slot:title>菜单1</template>
      <template v-slot:items>
        <Menuitem menuKey="1">菜单条目1</Menuitem>
        <Menuitem menuKey="2">菜单条目2</Menuitem>
      </template>
    </Submenu>
  </Menu>
</template>

<script lang="ts">
import Menu from '../../lib/Menu.vue'
import Submenu from '../../lib/SubMenu.vue'
import Menuitem from '../../lib/MenuItem.vue'
export default {
  components: {
    Menu,
    Submenu,
    Menuitem
  }
}
</script>