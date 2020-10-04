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
      <slot name="items" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject, Fragment, onMounted, nextTick, watch } from 'vue'
import MenuItem from './MenuItem.vue'
export default {
  props: {
    selectedMenu: {
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
    const selectedMenu = inject<Ref<String>>('selected-menu')
    const slots = context.slots.items()
    const checkType = (vnode) => {
      if (vnode.type === Fragment) {
        vnode.children.forEach(child => {
          checkType(child)
        })
      } else {
        if (!(/^.*(MenuItem)|(SubMenu).vue$/.test(
          vnode.type.__hmrId))) {
          throw new Error(
            'Children of SubMenu must be of type SubMenu or MenuItem'
          )
        }
      }
    }
    onMounted(() => {
      nextTick(() => {
        slots.forEach(slot => {
          checkType(slot)
        })
      })
      watch(() => props.selectedMenu,
      (newSelected, prevSelected) => {
        selectedMenu.value = newSelected
      })
    })
    return { collapsed }
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
}

.neat-menu {
  max-width: 300px;
  > .neat-sub-menu {
    position: relative;
  }
}
.neat-sub-menu {
  > .neat-sub-menu-title {
    padding: 0.25em 0.5em 0.25em 1em;
  }
  > .neat-sub-menu-children {
    padding-left: 1em;
  }
}
</style>