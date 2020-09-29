<template>
  <i18n-t tag="article" :keypath="keypath" class="markdown-body"
    v-html="content">
  </i18n-t>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import i18n from '../i18n'
import path from 'path'
export default {
  setup() {
    const keypath = 'mds.intro'
    const content = ref<String>(null)
    onMounted(() => {
      watchEffect(() => {
        import(`../md/${i18n.global.t(keypath)}`).then(result => {
        content.value = result.default
      })
      })
    })
    return { keypath, content }
  }
}
</script>