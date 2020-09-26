<template>
  <div>
    <div class="neat-sub-menu-title">
      {{ title }}
    </div>
    <div class="neat-sub-menu-children">
      <component class="neat-menu-item"
        v-for="(slot, index) in slots" :key="index"
        :is="slot"/>
    </div>
  </div>
</template>

<script lang="ts">
import Menuitem from './MenuItem.vue'
export default {
  props: {
    title: {
      type: String
    }
  },
  setup(props, context) {
    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== Menuitem) {
        throw new Error('Children of SubMenu must be of type or MenuItem')
      }
    })
    return { slots }
  }
}
</script>