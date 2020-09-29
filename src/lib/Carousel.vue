<template>
  <div class="neat-carousel">
    <div class="neat-carousel-content-wrapper">
      <div class="neat-carousel-content">
        <component class="neat-carousel-content-item"
          :class="{active: index === selectedIndex,
            prev: selectedIndex === 0 ?
              index === slots.length-1 : index === selectedIndex-1,
            next: selectedIndex === slots.length-1 ?
              index === 0 : index === selectedIndex+1}"
          v-for="(slot, index) in slots" :key="index"
          :is="slot" />
      </div>
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
  transform-style: preserve-3d;
  &-content-wrapper {
    overflow: hidden;
  }
  &-content {
    display: flex;
    justify-content: center;
    &-item {
      position: absolute;
      top: 0;
      opacity: 0;
      width: 100%;
      margin: auto;
      padding: 1rem 4rem;
      z-index: 100;
      transition: transform 300ms, opacity 300ms, z-index 300ms;
      &.active {
        opacity: 1;
        position: relative;
        z-index: 900;
      }
      &.prev, &.next {
        z-index: 800;
      }
      &.prev { transform: translateX(-100%); }
      &.next { transform: translateX(100%); }
    }
  }
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
      cursor: pointer;
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