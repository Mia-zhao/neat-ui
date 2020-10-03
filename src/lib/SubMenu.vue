<template>
  <div class="neat-sub-menu">
    <div class="neat-sub-menu-title"
      :class="{collapsed: collapsed}"
      @click="collapsible && (collapsed = !collapsed)">
      <div class="title"><slot name="title" /></div>
      <svg class="icon" aria-hidden="true"
        v-if="collapsible && !hideArrow">
        <use :xlink:href="`#icon-arrow`"></use>
      </svg>
    </div>
    <div class="neat-sub-menu-children"
      :class="{collapsed: collapsed}">
      <component
        :class="{selected: selectedMenu===slot.props.menuKey,
        'neat-menu-item': slot.type===MenuItem}"
        v-for="slot in slots" :key="slot.props.menuKey"
        :is="slot"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject } from 'vue'
import MenuItem from './MenuItem.vue'
export default {
  props: {
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
    const slots = context.slots.items()
    slots.forEach(slot => {
      const hmrId = slot.type.__hmrId
      if (!(/^.*(MenuItem)|(SubMenu).vue$/.test(hmrId))) {
        throw new Error(
          'Children of SubMenu must be of type SubMenu or MenuItem'
        )
      }
    })
    return { slots, collapsed, selectedMenu, MenuItem }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-sub-menu {
  color: $color-grey-600;
  > .neat-sub-menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > .title {
      font-size: 16px;
    }
    > .icon {
      fill: $color-grey-600;
      width: 12px;
      height: 12px;
    }
    &.collapsed, &:hover {
      > .title { color: $color-lightblue-700; }
      > .icon { fill: $color-lightblue-700; }
    }
    &.collapsed > .icon { transform: rotateX(180deg); }
  }
}

.neat-sub-menu-children {
  display: none;
  &.collapsed { display: block; }
  > .neat-menu-item {
    font-size: 14px;
    cursor: pointer;
    &.selected { color: $color-lightblue-700; }
    &.selected::after { background: rgba(129, 212, 250, 0.3); }
  }
}

.neat-menu {
  max-width: 300px;
  > .neat-sub-menu {
    position: relative;
  }
}
.neat-sub-menu {
  > .neat-sub-menu-title {
    padding: 0.25em 0.5em 0.25em 0;
  }
  > .neat-sub-menu-children {
    padding-left: 1em;
    > .neat-menu-item {
      line-height: 1em;
      margin: 0.5em 0;
      padding: 0.5em 0;
    }
  }
}
.neat-menu-item::after {
  content: '';
  height: 2em;
  position: absolute;
  left: 0;
  margin-top: -0.5em;
  right: 0;
}
</style>