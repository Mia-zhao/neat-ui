<template>
  <div class="nav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>Neat UI</h1>
      <h2 v-if="selectedLanguage==='EN'">A simple and clean UI framework</h2>
      <h2 v-if="selectedLanguage==='ZH'">一个简易干净的 UI 框架</h2>
      <p class="actions">
        <a class="light" href="https://github.com">Github</a>
        <router-link to="/doc" v-if="selectedLanguage==='EN'">
          Start
        </router-link>
        <router-link to="/doc" v-if="selectedLanguage==='ZH'">
          开始
        </router-link>
      </p>
      <a class="info" href="https://v3.vuejs.org/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <span v-if="selectedLanguage==='EN'">Based on Vue 3</span>
        <span v-if="selectedLanguage==='ZH'">基于 Vue 3</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { LANG } from '../constants/Refs'
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  },
  setup() {
    const  selectedLanguage = inject<Ref<String>>(LANG)
    return { selectedLanguage }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
.nav-wrapper {
  background: #fff;
  height: 100vh;
  position: relative;
}
.banner {
  color: #1a3059;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 56px;
    padding: 10px;
    margin-bottom: 20px;
    cursor: default; 
  }
  h2 {
    font-size: 36px;
    padding: 6px;
    cursor: default;
    min-height: 60px;
    text-align: center
  }
  > .actions {
    margin-top: 40px;
    padding: 8px 0;
    a {
      font-size: 20px;
      margin: 0 8px;
      color: #ffffff;
      background: #09c3ff;
      display: inline-block;
      $h: 40px;
      height: $h;
      border-radius: $h / 2;
      padding: 6px 20px;
      &.light {
        background: #fff;
        color: #1c2f5a;
        border: 2px solid #e8eefa;
      }
    }
  }
  > .info {
    position: absolute;
    bottom: 20%;
    display: flex;
    align-items: center;
    > .icon {
      width: 24px;
      height: 24px;
    }
    > span {
      font-size: 24px;
      margin: 0 8px;
    }
  }
}
@media (max-width: 500px) {
  .banner {
    h1 { font-size: 42px; }
    h2 { font-size: 26px; }
  }
}
</style>
