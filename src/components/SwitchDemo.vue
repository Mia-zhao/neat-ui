<template>
  <DemoPage type="switch">
    <Demo :component="Demo1" />
    <Demo class-prefix="bg" :component="Demo2" />
    <Demo :component="Demo3" />
    <template v-slot:previous>
      {{ $t('message.previous') }}
      <router-link to="/doc/button">
        {{ $t('message.menu2_button') }}
      </router-link>
    </template>
    <template v-slot:next>
      {{ $t('message.next') }}
      <router-link to="/doc/tabs">
        {{ $t('message.menu2_tabs') }}
      </router-link>
    </template>
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Switch/Demo1.vue'
import Demo2 from './Switch/Demo2.vue'
import Demo3 from './Switch/Demo3.vue'
export default {
  setup() {
    return { Demo1, Demo2, Demo3 }
  }
}
</script>
