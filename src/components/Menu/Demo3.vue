<demo>demos.menu.h3_3</demo>

<template>
  <Menu>
    <Submenu :collapsible="false">
      <template v-slot:title>Menu 1</template>
      <template v-slot:items>
        <Menuitem mKey="1">Menu 1</Menuitem>
        <Menuitem mKey="2">Menu 2</Menuitem>
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