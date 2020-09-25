<template>
  <div class="neat-carousel">
    <div class="neat-carousel-content">

    </div>
    <div class="neat-carousel-slide"
      :class="{[`neat-carousel-slide-${slideStyle}`]: slideStyle}">
      <div class="neat-carousel-slide-item"
        v-for="(slot, index) in slots" :key="index"
        @click="$emit('update:selectedIndex', index)"
        :class="{active: index === selectedIndex}">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    slideStyle: {
      type: String,
      default: 'dot'
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    selectedIndex: {
      type: Number
    }
  },
  setup(props, context) {
    const slots = context.slots.default()
    return { slots }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-carousel {
  &-slide {
    display: flex;
    justify-content: center;
    &-item {
      margin: 0 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-grey-400;
      transition: all 250ms;
      &.active {
        background: black;
      }
    }
  }
  &-slide-bar {
    .neat-carousel-slide-item {
      width: 12px;
      height: 5px;
      border-radius: $radius;
      &.active {
        width: 20px;
      }
    }
  }
}
</style>