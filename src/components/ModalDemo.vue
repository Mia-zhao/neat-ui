<template>
  <h1>Modal</h1>
  <section class="description">
    <p>This is a modal component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-modal1">
      <h3>Modal Default</h3>
      <Button @click="visible = !visible">toggle</Button>
      <Modal v-model:visible="visible" >
        <template v-slot:title>Custom Header</template>
        <template v-slot:content>
          custom content
        </template>
      </Modal>
    </div>
    <div class="example-modal2">
      <h3>Modal No Transition</h3>
      <Button @click="showModal()">toggle</Button>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import { ref, h } from 'vue'
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
import { openModal } from '../lib/openModal'
export default {
  components: {
    Modal,
    Button
  },
  setup() {
    const visible = ref(false)
    const showModal = () => {
      openModal({
        title: h('strong', {}, 'Custom Header 2'),
        content: 'Custom Content 2',
        showTransition: false
      })
    }
    return { visible, showModal }
  }
}
</script>
