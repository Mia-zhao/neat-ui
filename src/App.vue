<template>
<div>导航栏 | <router-link to="/">HelloWorld</router-link>
  | <router-link to="/2">HelloWorld2</router-link>
</div>
<router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {}
}
</script>
