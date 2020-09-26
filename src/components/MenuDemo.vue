<template>
  <h1>Menu</h1>
  <section class="description">
    <p>This is a menu component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-menu">
      <h3>Menu</h3>
      <Menu>
        <Submenu title="SubMenu 1">
          <Menuitem>Menu 1</Menuitem>
          <Menuitem>Menu 2</Menuitem>
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