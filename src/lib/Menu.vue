<template>
  <div class="neat-menu">
    <component class="neat-menu-children"
      v-for="slot in slots"
      :key="slot.props.menuKey"
      :is="slot"/>
  </div>
</template>

<script lang="ts">
import { ref, provide, onMounted, watch } from 'vue'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'
export default {
  props: {
    selectedMenu: {
      type: String
    }
  },
  setup(props, context) {
    const selectedMenu = ref<String>(props.selectedMenu || null)
    provide('selected-menu', selectedMenu)

    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== SubMenu && slot.type !== MenuItem) {
        throw new Error(
          'Children of Menu must be of type SubMenu or MenuItem'
        )
      }
    })
    onMounted(() => {
      watch(selectedMenu,
        (newSelected, prevSelected) => {
          context.emit('update:selectedMenu', newSelected)
        })
    })
    return { slots }
  }
}
</script>