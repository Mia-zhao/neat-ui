<template>
  <div>
    <div v-for="(slot, index) in defaultSlots" :key="index">
      <div>{{slot.props.title}}</div>
      <component :is="slot" />
    </div>
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