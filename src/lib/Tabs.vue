<template>
  <div class="neat-tabs">
    <div class="neat-tabs-nav">
      <div class="neat-tabs-nav-item"
        v-for="(slot, index) in defaultSlots"
        :key="index">
        {{slot.props.title}}
      </div>
    </div>
    <div class="neat-tabs-content">
      <component class="neat-tabs-content-item"
        v-for="(slot, index) in defaultSlots"
        :key="index"
        :is="slot" />
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