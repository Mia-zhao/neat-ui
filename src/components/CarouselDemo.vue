<template>
  <h1>Carousel</h1>
  <section class="description">
    <p>This is a Carousel component.</p>
  </section>
  <h2>Examples</h2>
  <section class="examples">
    <h3>Carousel Default</h3>
    <div class="example-carousel1">
      <Carousel v-model:selectedIndex="selectedIndex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Carousel>
    </div>
  </section>
  <section class="properties">

  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import Carousel from '../lib/Carousel.vue'
export default {
  components: {
    Carousel
  },
  setup() {
    const selectedIndex = ref<Number>(0);
    return { selectedIndex }
  }
}
</script>