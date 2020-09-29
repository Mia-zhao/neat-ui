<template>
  <button class="neat-button"
    :class="classes">
    <svg class="icon" aria-hidden="true" v-if="showIcon">
      <use :xlink:href="`#icon-${buttonIcon}`"></use>
    </svg>
    <span v-if="hasSlot"><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    level: {
      type: String,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    noRipple: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const { theme, level, disabled, transparent, loading,
      shadow, icon, noRipple } = props
    let buttonIcon = icon
    if (loading) {
      buttonIcon = 'loading'
    }
    const showIcon = buttonIcon !== ''
    const hasSlot = context.slots.default !== undefined
    const classes = computed(() => {
      return {
        [`neat-button-theme-${theme}`]: theme,
        [`neat-button-level-${level}`]: level,
        'neat-button-disabled': disabled,
        'neat-button-transparent': transparent,
        'neat-button-loading': loading,
        'neat-button-shadow': shadow,
        'neat-button-no-ripple': noRipple
      }
    })
    return { classes, showIcon, buttonIcon, hasSlot }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
$h: 32px;
button.neat-button.neat-button {
  box-sizing: border-box;
  height: $h;
  line-height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: $color-lightblue-700;
  color: white;
  border: none;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out (black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

button.neat-button {
  &.neat-button-theme-link,
  &.neat-button-theme-text {
    background: transparent;
    color: $color-lightblue-800;
  }
  &.neat-button-theme-link {
    border: 1px solid $color-lightblue-800;
  }
}

button.neat-button.neat-button-disabled {
  cursor: no-drop;
  background: $color-grey-300;
}

button.neat-button.neat-button-transparent {
  border: 1px solid white;
  color: white;
  background: transparent;
}

button.neat-button.neat-button-shadow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
}

button.neat-button.neat-button-level-secondary {
  border: 1px solid $color-lightblue-100;
  color: $color-lightblue-800;
  background: transparent;
}

button.neat-button {
  & > .icon {
    width: 0.7em;
    height: 0.7em;
    margin: 0;
    padding: 0;
    & + span {
      margin-left: 6px;
    }
  }
  &.neat-button-loading > .icon {
    animation: rotate 1s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

button.neat-button:not(.neat-button-disabled) {
  position: relative;
  overflow: hidden;
  &::before {
    display: none;
    content: '';
    position: absolute;
    border-radius: 40%;
    background-color: rgba(129, 212, 250, 0.3);
    width: 100px;
    height: 120px;
    margin-top: -60px;
    margin-left: -50px;
    top: 50%;
    left: 50%;
    animation: ripple 0.4s;
    opacity: 1;
  }
  &.neat-button-no-ripple::before {
    animation: none;
  }
  &:active::before {
    display: block;
  }
  &.neat-button-shadow:active {
    box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
      0px 1px 8px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>