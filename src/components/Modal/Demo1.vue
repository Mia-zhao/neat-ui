<demo>demos.modal.h3_1</demo>

<template>
  <Button @click="visible = !visible">显示对话框</Button>
  <Modal v-model:visible="visible" >
    <template v-slot:title>自定义头部</template>
    <template v-slot:content>
      自定义内容
    </template>
  </Modal>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from '../../lib/Modal.vue'
import Button from '../../lib/Button.vue'
export default {
  components: {
    Modal,
    Button
  },
  setup() {
    const visible = ref(false)
    return { visible }
  }
}
</script>