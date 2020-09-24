<template>
  <div class="neat-tabs">
    <div class="neat-tabs-nav">
      <div class="neat-tabs-nav-item"
        v-for="(slot, index) in defaultSlots" :key="index"
        @click="$emit('update:selected', slot.props.title)"
        :class="{selected: slot.props.title === selected}">
        {{slot.props.title}}
      </div>
    </div>
    <div class="neat-tabs-content">
      <component class="neat-tabs-content-item"
        :is="selectedContent" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaultSlots = context.slots.default()
    defaultSlots.forEach(slot => {
      if (slot.type !== Tab) {
        throw new Error('Children of Tabs must be of type Tab')
      }
    })
    const selectedContent = computed(() => {
      return defaultSlots.filter(slot => {
        return slot.props.title === props.selected
      })[0]
    })
    return { defaultSlots, selectedContent }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-tabs {
  &-nav {
    display: flex;
    color: $color-grey-900;
    border-bottom: 1px solid $color-grey-400;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $color-lightblue-700;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>