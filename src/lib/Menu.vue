<template>
  <div class="neat-menu">
    <component class="neat-menu-children"
      v-for="slot in slots"
      :key="slot.props.menuKey"
      :is="slot"/>
  </div>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'
export default {
  setup(props, context) {
    const selectedMenu = ref<String>(null)
    provide('selected-menu', selectedMenu)

    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== SubMenu && slot.type !== MenuItem) {
        throw new Error(
          'Children of Menu must be of type SubMenu or MenuItem'
        )
      }
    })
    return { slots }
  }
}
</script>