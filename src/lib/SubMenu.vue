<template>
  <div class="neat-sub-menu">
    <div class="neat-sub-menu-title"
      :class="{collapsed: collapsed}"
      @click="collapsible && (collapsed = !collapsed)">
      <span>
        {{ title }}
      </span>
      <svg class="icon" aria-hidden="true"
        v-if="collapsible && !hideArrow">
        <use :xlink:href="`#icon-arrow`"></use>
      </svg>
    </div>
    <div class="neat-sub-menu-children"
      :class="{collapsed: collapsed}">
      <component class="neat-menu-item"
        :class="{selected: selectedIndex===index}"
        v-for="(slot, index) in slots" :key="index"
        @click="selectedIndex=index"
        :is="slot"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Menuitem from './MenuItem.vue'
export default {
  props: {
    title: {
      type: String
    },
    defaultCollapsed: {
      type: Boolean,
      default: true
    },
    collapsible: {
      type: Boolean,
      default: true
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const collapsed = ref<Boolean>(props.defaultCollapsed)
    const selectedIndex = ref<Number>(null)
    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== Menuitem) {
        throw new Error('Children of SubMenu must be of type or MenuItem')
      }
    })
    return { slots, collapsed, selectedIndex }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-sub-menu {
  max-width: 300px;
  color: $color-grey-600;
  > .neat-sub-menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 4px 8px;
    margin: 4px 0;
    > span {
      font-size: 16px;
    }
    > .icon {
      fill: $color-grey-600;
      width: 12px;
      height: 12px;
    }
    &.collapsed, &:hover {
      > span {
        color: $color-lightblue-700;
      }
      > .icon {
        fill: $color-lightblue-700;
      }
    }
    &.collapsed > .icon {
      transform: rotateX(180deg);
    }
  }
  > .neat-sub-menu-children {
    display: none;
    &.collapsed {
      display: block;
    }
    > .neat-menu-item {
      font-size: 14px;
      padding: 4px 24px;
      margin: 4px 0;
      cursor: pointer;
      &.selected {
        color: $color-lightblue-700;
        background: $color-lightblue-100;
      }
    }
  }
}
</style>