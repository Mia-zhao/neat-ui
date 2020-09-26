<template>
  <div class="neat-menu">
    <component class="neat-menu-children"
      v-for="(slot, index) in slots" :key="index"
      :is="slot"/>
  </div>
</template>

<script lang="ts">
import Submenu from './SubMenu.vue'
import Menuitem from './MenuItem.vue'
export default {
  setup(props, context) {
    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== Submenu && slot.type !== Menuitem) {
        throw new Error('Children of Menu must be of type SubMenu or MenuItem')
      }
    })
    return { slots }
  }
}
</script>