<template>
  <div class="nav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>Neat UI</h1>
      <h2>一个简易干净的 UI 框架</h2>
      <p class="actions">
        <a class="light" href="https://github.com">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
.nav-wrapper {
  background: #fff;
}
.banner {
  color: #1a3059;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 { font-size: 56px; padding: 10px; margin-bottom: 20px}
  h2 { font-size: 36px; padding: 6px; }
  >.actions {
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
}
@media (max-width: 500px) {
  .banner {
    h1 { font-size: 42px; }
    h2 { font-size: 26px; }
  }
}
</style>
