<template>
  <div class="neat-modal-overlay"></div>
  <div class="neat-modal-wrapper">
    <div class="neat-modal">
      <header>标题</header>
      <main>
        <p>一</p>
        <p>二</p>
      </main>
      <footer>
        <Button icon="yes"></Button>
        <Button icon="no" level="secondary"></Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
@import './neat-style.scss';
.neat-modal {
  border: 1px solid red;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
}
</style>