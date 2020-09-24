<template>
  <div class="neat-tabs">
    <div class="neat-tabs-nav"
      ref="navContainer">
      <div class="neat-tabs-nav-item"
        v-for="(slot, index) in defaultSlots" :key="index"
        :ref="el => { if (slot.props.title === selected) selectedNav = el }"
        @click="$emit('update:selected', slot.props.title)"
        :class="{selected: slot.props.title === selected}">
        {{slot.props.title}}
      </div>
      <div class="neat-tabs-nav-underline"
        ref="underline"/>
    </div>
    <div class="neat-tabs-content">
      <component class="neat-tabs-content-item"
        :is="selectedContent" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted, onUpdated } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navContainer = ref<HTMLDivElement>(null)
    const selectedNav = ref<HTMLDivElement>(null)
    const underline = ref<HTMLDivElement>(null)
    const setUnderlineStyle = () => {
      const { width: selectedWidth, left: selectedLeft } =
        selectedNav.value.getBoundingClientRect()
      const { left: navLeft } = navContainer.value.getBoundingClientRect()
      underline.value.style.width = selectedWidth + 'px'
      underline.value.style.left = (selectedLeft - navLeft) + 'px'
    }
    onMounted(setUnderlineStyle)
    onUpdated(setUnderlineStyle)
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
    return { defaultSlots, selectedContent,
      selectedNav, underline, navContainer }
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
    position: relative;
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
    &-underline {
      position: absolute;
      height: 3px;
      background: $color-lightblue-700;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>