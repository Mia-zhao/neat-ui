<demo>demos.modal.h3_3</demo>

<template>
  <Button @click="showModal()">show modal</Button>
</template>

<script lang="ts">
import { ref, h } from 'vue'
import Button from '../../lib/Button.vue'
import { openModal } from '../../lib/openModal'
export default {
  components: {
    Button
  },
  setup() {
    const visible = ref(false)
    const showModal = () => {
      openModal({
        title: h('strong', {}, 'Custom Header'),
        content: 'Custom Content',
        showTransition: false
      })
    }
    return { visible, showModal }
  }
}
</script>