<template>
  <DemoPage type="menu">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo :component="Demo3" />
    <template v-slot:previous>
      {{ $t('message.previous') }}
      <router-link to="/doc/tabs">
        {{ $t('message.menu2_tabs') }}
      </router-link>
    </template>
    <template v-slot:next>
      {{ $t('message.next') }}
      <router-link to="/doc/modal">
        {{ $t('message.menu2_modal') }}
      </router-link>
    </template>
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Menu/Demo1.vue'
import Demo2 from './Menu/Demo2.vue'
import Demo3 from './Menu/Demo3.vue'
export default {
  setup() {
    return { Demo1, Demo2, Demo3 }
  }
}
</script>