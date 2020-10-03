<demo>demos.menu.h3_1</demo>

<template>
  <Menu>
    <Submenu menuKey="menu1">
      <template v-slot:title>Menu Title 1</template>
      <template v-slot:items>
        <Menuitem mKey="1">Menu item 1</Menuitem>
        <Menuitem mKey="2">Menu item 2</Menuitem>
      </template>
    </Submenu>
    <Submenu menuKey="menu2">
      <template v-slot:title>Menu Title 2</template>
      <template v-slot:items>
        <Menuitem mKey="3">Menu item 3</Menuitem>
        <Menuitem mKey="4">Menu item 4</Menuitem>
        <Submenu menuKey="menu3">
          <template v-slot:title>Menu Title 3</template>
          <template v-slot:items>
            <Menuitem mKey="5">Menu item 5</Menuitem>
            <Menuitem mKey="6">Menu item 6</Menuitem>
          </template>
        </Submenu>
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