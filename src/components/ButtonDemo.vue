<template>
  <h1>{{ $t('demos.button.h1') }}</h1>
  <section class="description">
    <p>{{ $t('demos.button.descr') }}</p>
  </section>
  <h2>{{ $t('demos.button.h2') }}</h2>
  <section class="examples">
    <Demo :component="Demo1" />
    <Demo :component="Demo2" />
    <Demo class-prefix="bg" :component="Demo3" />
    <Demo :component="Demo4" />
    <Demo :component="Demo5" />
    <Demo :component="Demo6" />
    <Demo :component="Demo7" />
  </section>
  <h2>API</h2>
  <section>
    <table class="api">
      <thead>
        <tr>
          <th v-for="(header, index) in Object.keys(apiTable.header)"
            v-bind:key="index">
            {{ $t(`demos.button.api.header.${header}`) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index1) in apiTable.content"
          v-bind:key="index1">
          <td v-for="(header, index2) in Object.keys(apiTable.header)"
            v-bind:key="index2">
            {{ data[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import i18n from '../i18n'
import Demo from './Demo.vue'
import Demo1 from './Button/Demo1.vue'
import Demo2 from './Button/Demo2.vue'
import Demo3 from './Button/Demo3.vue'
import Demo4 from './Button/Demo4.vue'
import Demo5 from './Button/Demo5.vue'
import Demo6 from './Button/Demo6.vue'
import Demo7 from './Button/Demo7.vue'
export default {
  components: {
    Demo
  },
  setup() {
    const apiTable = ref<Object>({})
    apiTable.value = i18n.global.messages.value[i18n.global.locale.value]
          .demos.button.api
    onMounted(() => {
      watchEffect(() => {
        apiTable.value = i18n.global.messages.value[i18n.global.locale.value]
          .demos.button.api
      })
    })
    return { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7,
      apiTable }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
  padding-bottom: 0.3em;
  border-bottom: 1px solid rgb(234, 236, 239);
}
section {
  margin: 16px 0;
}
table {
  border: 1px solid red;
  font-size: 14px;
  line-height: 1.5;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  margin: 2em 0;
  border-width: 0;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  width: 100%;
  border: 1px solid #ebedf0;
  td, th {
    padding: 14px 16px;
    border-bottom: 1px solid #ebedf0;
    text-align: left;
  }
  thead {
    background: #f0f0f0;
  }
}
</style>

<style lang="scss">
@import '../lib/neat-style.scss';
.demo.bg-demo > .demo-component {
  background: $color-grey-300;
}
</style>