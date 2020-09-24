<template>
  <div>
    Tabs 组件
    <component :is="defaultSlots[0]" />
    <component :is="defaultSlots[1]" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaultSlots = context.slots.default()
    defaultSlots.forEach(slot => {
      if (slot.type !== Tab) {
        throw new Error('Children of Tabs must be of type Tab')
      }
    })
    return { defaultSlots }
  }
}
</script>