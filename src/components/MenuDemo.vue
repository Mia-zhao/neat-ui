<template>
  <h1>Menu</h1>
  <section class="description">
    <p>This is a menu component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-menu1">
      <h3>Menu1</h3>
      <Menu>
        <Submenu title="SubMenu 1" menuKey="menu1">
          <Menuitem menuKey="1">Menu 1</Menuitem>
          <Menuitem menuKey="2">Menu 2</Menuitem>
        </Submenu>
      </Menu>
    </div>
    <div class="example-menu2">
    <h3>Menu2</h3>
      <Menu>
        <Submenu hideArrow title="SubMenu 2" menuKey="menu1">
          <Menuitem menuKey="1">Menu 1</Menuitem>
          <Menuitem menuKey="2">Menu 2</Menuitem>
        </Submenu>
      </Menu>
    </div>
    <div class="example-menu3">
    <h3>Menu2</h3>
      <Menu>
        <Submenu :collapsible="false" title="SubMenu 3" menuKey="menu1">
          <Menuitem menuKey="1">Menu 1</Menuitem>
          <Menuitem menuKey="2">Menu 2</Menuitem>
        </Submenu>
      </Menu>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import Menu from '../lib/Menu.vue'
import Submenu from '../lib/SubMenu.vue'
import Menuitem from '../lib/MenuItem.vue'
export default {
  components: {
    Menu,
    Submenu,
    Menuitem
  }
}
</script>