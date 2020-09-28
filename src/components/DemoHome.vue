<template>
  <article class="markdown-body">
    <i18n-t tag="h2" keypath="message.menu1" :locale="selectedLanguage" />
    <a href="#/doc/intro">
      <i18n-t tag="h3" keypath="message.menu1_intro" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/install">
      <i18n-t tag="h3" keypath="message.menu1_install" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/getting-started">
      <i18n-t tag="h3" keypath="message.menu1_getting_started" :locale="selectedLanguage" />
    </a>
    <i18n-t tag="h2" keypath="message.menu2" :locale="selectedLanguage" />
    <a href="#/doc/button">
      <i18n-t tag="h3" keypath="message.menu2_button" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/switch">
      <i18n-t tag="h3" keypath="message.menu2_switch" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/tabs">
      <i18n-t tag="h3" keypath="message.menu2_tabs" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/menu">
      <i18n-t tag="h3" keypath="message.menu2_menu" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/modal">
      <i18n-t tag="h3" keypath="message.menu2_modal" :locale="selectedLanguage" />
    </a>
    <a href="#/doc/carousel">
      <i18n-t tag="h3" keypath="message.menu2_carousel" :locale="selectedLanguage" />
    </a>
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