<template>
  <i18n-t tag="article" :keypath="keypath" class="markdown-body"
    v-html="content">
  </i18n-t>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import i18n from '../i18n'
export default {
  props: {
    keypath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref<String>(null)
    onMounted(() => {
      watchEffect(() => {
        import(`../mds/${i18n.global.t(props.keypath)}`).then(result => {
        content.value = result.default
      })
      })
    })
    return { content }
  }
}
</script>