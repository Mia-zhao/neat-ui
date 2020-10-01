<demo>demos.carousel.h3_2</demo>

<template>
  <Carousel v-model:selectedIndex="selectedIndex"
    autoPlay :duration="2000">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Carousel>
</template>

<script lang="ts">
import { ref } from 'vue'
import Carousel from '../../lib/Carousel.vue'
export default {
  components: {
    Carousel
  },
  setup() {
    const selectedIndex = ref(0);
    return { selectedIndex }
  }
}
</script>