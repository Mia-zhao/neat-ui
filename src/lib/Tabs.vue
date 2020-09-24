<template>
  <div class="neat-tabs">
    <div class="neat-tabs-nav" ref="navContainer"
      :class="{[`neat-tabs-type-${type}`]: type}">
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
import { computed, ref, onMounted, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navContainer = ref<HTMLDivElement>(null)
    const selectedNav = ref<HTMLDivElement>(null)
    const underline = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(() => {
        const { width: selectedWidth, left: selectedLeft } =
          selectedNav.value.getBoundingClientRect()
        const { left: navLeft } = navContainer.value.getBoundingClientRect()
        underline.value.style.width = selectedWidth + 'px'
        underline.value.style.left = (selectedLeft - navLeft) + 'px'
      })
    })
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
    return { defaultSlots, selectedContent, selectedNav, underline,
      navContainer }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-tabs {
  &-nav {
    display: flex;
    color: $color-grey-900;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0px;
      height: 1px;
      width: 100%;
      background: $color-grey-300;
    }
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child { margin-left: 0; }
      &.selected {
        color: $color-lightblue-700;
      }
    }
    &-underline {
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 100px;
      border-radius: 4px;
      background: $color-lightblue-700;
      transition: all 250ms;
    }
  }
  &-nav.neat-tabs-type-card {
    &::before { left: -1px; }
    .neat-tabs-nav-item {
      padding: 8px 16px 4px 16px;
      margin: 0 1px;
      border: 1px solid $color-grey-300;
      border-bottom: none;
      background: $color-grey-200;
      transition: background-color 250ms;
      &:first-child { margin-left: -1px; }
      &.selected {
        background: $color-grey-100;
        border-bottom: 1px solid $color-grey-100;
      }
    }
    .neat-tabs-nav-underline {
      height: 1px;
      border-radius: 0;
      background: $color-grey-100;
      transition: none;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>