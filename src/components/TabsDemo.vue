<template>
  <DemoPage type="tabs">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <template v-slot:previous>
      {{ $t('message.previous') }}
      <router-link to="/doc/switch">
        {{ $t('message.menu2_switch') }}
      </router-link>
    </template>
    <template v-slot:next>
      {{ $t('message.next') }}
      <router-link to="/doc/menu">
        {{ $t('message.menu2_menu') }}
      </router-link>
    </template>
  </DemoPage>
</template>

<script lang="ts">
import Demo1 from './Tabs/Demo1.vue'
import Demo2 from './Tabs/Demo2.vue'
export default {
  setup() {
    return { Demo1, Demo2 }
  }
}
</script>