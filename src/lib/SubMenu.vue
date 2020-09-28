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
        :class="{selected: selectedMenu===slot.props.menuKey}"
        v-for="slot in slots" :key="slot.props.menuKey"
        @click="selectedMenu=slot.props.menuKey"
        :is="slot"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject } from 'vue'
import Menuitem from './MenuItem.vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    menuKey: {
      type: String,
      required: true
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
    const selectedMenu = inject<Ref<String>>('selected-menu')
    const slots = context.slots.default()
    slots.forEach(slot => {
      if (slot.type !== Menuitem) {
        throw new Error(
          'Children of SubMenu must be of type or MenuItem'
        )
      }
    })
    return { slots, collapsed, selectedMenu }
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