<template>
  <div class="neat-carousel"
    @mouseenter="pauseAutoPlay()"
    @mouseleave="startAutoPlay()">
    <div class="neat-carousel-content"
      ref="carouselView"
      :class="{ transition: state.inTransition }">
      <slot></slot>
    </div>
    <div class="neat-carousel-slide"
      :class="{[`neat-carousel-slide-${slideStyle}`]: slideStyle}">
      <div class="neat-carousel-slide-item"
        v-for="(slot, index) in slots" :key="index"
        @click="state.index = index"
        :class="{active: index === state.index}">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive,
  onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
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
    duration: {
      type: Number,
      default: 3000
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const slots = context.slots.default()
    const carouselView = ref<HTMLDivElement>(null)
    const timerId = ref<Number>(null)
    const index = ref<Number>(props.selectedIndex)
    const inTransition = ref<Boolean>(true)
    const inChange = ref<Boolean>(false)
    const dragStartX = ref<Number>(0)
    const dragStartY = ref<Number>(0)
    const mousedown = ref<Boolean>(false)
    const state = reactive({
      timerId, index, inTransition, inChange,
      dragStartX, dragStartY, mousedown
    })
    const startAutoPlay = () => {
      const play = () => {
        updateIndexBy(1)
        state.timerId = setTimeout(play, props.duration)
      }
      if ((!props.autoPlay) || state.timerId) return
      state.timerId = setTimeout(play, props.duration)
    }
    const pauseAutoPlay = () => {
      if (!state.timerId) return
      window.clearTimeout(state.timerId)
      state.timerId = null
    }
    const updateIndexBy = (delta) => {
      if (state.inChange) return
      state.index += delta
      state.index = state.index > slots.length-1 ? 0 :
        (state.index < 0 ? slots.length-1 : state.index)
    }
    const reset = () => {
      state.inTransition = false
      const n = state.index === 0 ? 1 : slots.length
      setTransform(`translateX(${-100*n}%)`)
      state.inChange = false
      removeListener()
    }
    const addListener = () => {
      carouselView.value.addEventListener('transitionend', reset)
    }
    const removeListener = () => {
      carouselView.value?.removeEventListener('transitionend', reset)
    }
    const addDragListeners = () => {
      if (isTouchDevice()) {
        carouselView.value.addEventListener('touchstart', handleMousedown)
        carouselView.value.addEventListener('touchmove', handleMousemove)
        carouselView.value.addEventListener('touchend', handleMouseup)
      } else {
        carouselView.value.addEventListener('mousedown', handleMousedown)
        carouselView.value.addEventListener('mousemove', handleMousemove)
        carouselView.value.addEventListener('mouseup', handleMouseup)
      }
    }
    const removeDragListeners = () => {
      if (isTouchDevice()) {
        carouselView.value?.removeEventListener('touchstart', handleMousedown)
        carouselView.value?.removeEventListener('touchmove', handleMousemove)
        carouselView.value?.removeEventListener('touchend', handleMouseup)
      } else {
        carouselView.value?.removeEventListener('mousedown', handleMousedown)
        carouselView.value?.removeEventListener('mousemove', handleMousemove)
        carouselView.value?.removeEventListener('mouseup', handleMouseup)
      }
    }
    const setTransform = (style) => {
      carouselView.value.style.transform = style
    }
    const cloneDOM = () => {
      carouselView.value.prepend(
        slots[slots.length-1].el.cloneNode(true)
      )
      carouselView.value.append(
        slots[0].el.cloneNode(true)
      )
      for (const el of carouselView.value.children) {
        el.style['flex-shrink'] = 0
        el.classList
          .add('neat-carousel-content-item')
      }
    }
    const isTouchDevice = () => {
      return 'ontouchstart' in window
    }
    const getClientX = (e) => {
      return isTouchDevice() ? e.touches[0].clientX : e.clientX
    }
    const getClientY = (e) => {
      return isTouchDevice() ? e.touches[0].clientY : e.clientY
    }
    const handleMousedown = (e) => {
      if (!e.touches) e.preventDefault()
      state.mousedown = true
      state.dragStartX = getClientX(e)
      state.dragStartY = getClientY(e)
    }
    const handleMouseup = () => {
      state.mousedown = false
    }
    const handleMousemove = (e) => {
      if (!state.mousedown) return
      const deltaX = state.dragStartX - getClientX(e)
      const deltaY = state.dragStartY - getClientY(e)
      if (Math.abs(deltaX) < Math.abs(deltaY)) return
      if (deltaX > 15) {
        handleMouseup()
        updateIndexBy(1)
      } else if (deltaX < -15) {
        handleMouseup()
        updateIndexBy(-1)
      }
    }
    onMounted(() => {
      nextTick(() => {
        cloneDOM()
        startAutoPlay()
        addDragListeners()
      })
      watch(index, (index, prevIndex) => {
        context.emit('update:selectedIndex', index)
        state.inTransition = true
        if (index === 0 && prevIndex === slots.length-1) {
          setTransform(`translateX(${-100*(slots.length+1)}%)`)
          addListener()
          state.inChange = true
          return
        }
        if (index === slots.length-1 && prevIndex === 0) {
          setTransform(`translate(0)`)
          addListener()
          state.inChange = true
          return
        }
        setTransform(`translateX(${-100*(index+1)}%)`)
      })
    })
    onBeforeUnmount(() => {
      state.inChange = false
      removeListener()
      removeDragListeners()
    })
    return { slots, state, carouselView, startAutoPlay, pauseAutoPlay }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  &-content {
    display: flex;
    width: 100%;
    transform: translateX(-100%);
    &.transition {
      transition: transform 400ms linear;
    }
  }
  &-content-item {
    margin: auto;
    text-align: center;
    font-size: 30px;
    height: 200px;
    line-height: 200px;
    width: 100%;
    color: #fff;
    background: #BDBDBD;
  }
  .neat-carousel-slide {
    display: flex;
    justify-content: center;
    margin: 8px 0;
    .neat-carousel-slide-item {
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
  .neat-carousel-slide-bar
  > .neat-carousel-slide-item {
    width: 12px;
    height: 5px;
    border-radius: $radius;
    &.active {
      width: 20px;
    }
  }
}
</style>