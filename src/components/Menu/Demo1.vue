<demo>demos.menu.h3_1</demo>

<template>
  <Menu>
    <Submenu title="Menu Title 1" menuKey="menu1">
      <Menuitem menuKey="1">Menu item 1</Menuitem>
      <Menuitem menuKey="2">Menu item 2</Menuitem>
    </Submenu>
    <Submenu title="Menu Title 2" menuKey="menu2">
      <Menuitem menuKey="3">Menu item 3</Menuitem>
      <Menuitem menuKey="4">Menu item 4</Menuitem>
      <Submenu title="SubMenu 3" menuKey="menu3">
        <Menuitem menuKey="5">Menu item 5</Menuitem>
        <Menuitem menuKey="6">Menu item 6</Menuitem>
      </Submenu>
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