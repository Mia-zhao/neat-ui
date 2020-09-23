<template>
  <Teleport to="body">
  <transition name="modal">
    <template v-if="visible">
      <div class="neat-modal-overlay" @click="closeOnClickOverlay && closeModal()">
        <div class="neat-modal-wrapper">
          <div class="neat-modal" :class="{'neat-modal-transition': showTransition}">
            <header>
              <slot name="title">
                Default Header
              </slot>
              <span @click="closeModal" class="neat-modal-close"></span>
            </header>
            <main>
              <slot name="content">
                Default Content
              </slot>
            </main>
            <footer>
              <Button @click="functionOK?.() !== false && closeModal()"
                icon="yes"></Button>
              <Button @click="functionCancel?.(); closeModal();"
                icon="no" level="secondary"></Button>
            </footer>
          </div>
        </div>
      </div>
    </template>
  </transition>
  </Teleport>
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
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    showTransition: {
      type: Boolean,
      default: true
    },
    functionOK: {
      type: Function
    },
    functionCancel: {
      type: Function
    }
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit('update:visible', false)
    }
    return { closeModal }
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
  transition: all 0.3s ease;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
    transition: opacity 0.3s ease;
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .neat-modal,
.modal-leave-active .neat-modal.neat-modal-transition {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
