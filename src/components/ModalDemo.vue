<template>
  <h1>Modal</h1>
  <section class="description">
    <p>This is a modal component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <div class="example-theme">
      <h3>Theme</h3>
      <Button @click="visible = !visible">toggle</Button>
      <Modal v-model:visible="visible"
        :functionOK="funcOK" :functionCancel="funcCancel">
      </Modal>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Modal,
    Button
  },
  setup() {
    const visible = ref(false)
    const funcOK = () => {

    }
    const funcCancel = () => {

    }
    return { visible, funcOK, funcCancel }
  }
}
</script>