<template>
  <div class="nav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>Neat UI</h1>
      <i18n-t tag="h2" keypath="message.homeH2" />
      <p class="actions">
        <a class="light" href="https://github.com/Mia-zhao/neat-ui">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          <span>GitHub</span>
        </a>
        <router-link to="/doc">
          {{ $t('message.homeStartButton') }}
        </router-link>
      </p>
      <a class="info" href="https://v3.vuejs.org/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <i18n-t tag="span" keypath="message.homeMessage" />
      </a>
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
@import '../assets/style/helper.scss';
.nav-wrapper {
  background: #fff;
  height: 100vh;
  position: relative;
}
.banner {
  color: $theme_text_color;
  padding: 20vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 56px;
    padding: 2vh;
    margin-bottom: 24px;
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
    margin-top: 64px;
    display: flex;
    a {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin: 0 12px;
      color: #ffffff;
      background: #09c3ff;
      $h: 42px;
      height: $h;
      line-height: $h;
      border-radius: $h / 2;
      padding: 0 16px;
      text-align: center;
      border: 1px solid #fff;
      &.light {
       background: #fff;
       color: #1c2f5a;
       border: 1px solid #BDBDBD;
      }
      > .icon {
        height: 18px;
        width: 18px;
        margin-right: 4px;
      }
    }
  }
  > .info {
    position: absolute;
    bottom: 8vh;
    display: flex;
    align-items: center;
    line-height: 36px;
    > .icon {
      width: 24px;
      height: 24px;
      padding: auto;
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
