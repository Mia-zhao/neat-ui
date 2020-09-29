<demo>demos.menu.h3_3</demo>

<template>
  <Menu>
    <Submenu :collapsible="false" title="Menu 1" menuKey="menu1">
      <Menuitem menuKey="1">Menu 1</Menuitem>
      <Menuitem menuKey="2">Menu 2</Menuitem>
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