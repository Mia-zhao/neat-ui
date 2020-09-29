<template>
  <table class="api">
    <thead>
      <tr>
        <th v-for="(header, index) in Object.keys(apiTable.header)"
          v-bind:key="index">
          {{ $t(`demos.${componentType}.api.header.${header}`) }}
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
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import i18n from '../i18n'
export default {
  props: {
    componentType: {
      type: String,
      required: true
    }
  },
  setup() {
    const apiTable = ref<Object>({})
    const getAPI = () => {
      return i18n.global.messages.value[i18n.global.locale.value]
        .demos.button.api
    }
    apiTable.value = getAPI()
    onMounted(() => {
      watchEffect(() => {
        apiTable.value = getAPI()
      })
    })
    return { apiTable }
  }
}
</script>

<style lang="scss" scoped>
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