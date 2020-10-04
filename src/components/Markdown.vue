<template>
  <i18n-t tag="article" :keypath="keypath" class="markdown-body"
    v-html="htmlContent">
  </i18n-t>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import i18n from '../i18n'
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    keypath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const htmlContent = ref<String>(props.content[i18n.global.locale.value])
    onMounted(() => {
      watchEffect(() => {
        htmlContent.value = props.content[i18n.global.locale.value]
      })
    })
    return { htmlContent }
  }
}
</script>