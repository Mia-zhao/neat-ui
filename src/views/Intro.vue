<template>
  <article class="markdown-body">
    <i18n-t tag="h2" keypath="message.menu1_intro" :locale="selectedLanguage" />
    <i18n-t tag="p" keypath="message.intro_1" :locale="selectedLanguage" />
    <i18n-t tag="p" keypath="message.intro_2" :locale="selectedLanguage" />
  </article>
</template>

<script lang="ts">
import { inject } from 'vue'
import { LANG } from '../constants/Refs'
export default {
  setup() {
    const selectedLanguage = inject<Ref<String>>(LANG)
    return { selectedLanguage }
  }
}
</script>