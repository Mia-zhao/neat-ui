<template>
  <template v-if="visible">
    <div class="neat-modal-overlay"></div>
    <div class="neat-modal-wrapper">
      <div class="neat-modal">
        <header>标题 <span class="neat-modal-close"></span></header>
        <main>
          <p>一</p>
          <p>二</p>
        </main>
        <footer>
          <Button icon="yes"></Button>
          <Button icon="no" level="secondary"></Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-modal {
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header, > main, > footer {
    padding: 12px 16px;
  }

  > header {
    border-bottom: 1px solid $color-grey-300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > footer {
    border-top: 1px solid $color-grey-300;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before, &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>