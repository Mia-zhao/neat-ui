<template>
  <div class="message">
    <h1>404</h1>
    <blockquote>{{ $t('message.notFound') }}</blockquote>
    <router-link to="/">{{ $t('message.backHome') }}</router-link>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss" scoped>
.message {
  max-width: 500px;
  margin: 60px auto;
  h1 {
    padding: 0.1rem 0;
    color: #122551;
  }
  blockquote {
    color: #999;
    border-left: .2rem solid #dfe2e5;
    margin: 1rem 0;
    padding: .25rem 0 .25rem 1rem;
  }
  a {
    color: #0366D6;
    cursor: pointer;
    padding: .25rem 0;
  }
  a:hover {
    text-decoration: underline;
  }
}
@media (max-width: 500px) {
  .message {
    max-width: 300px;
  }
}
</style>
