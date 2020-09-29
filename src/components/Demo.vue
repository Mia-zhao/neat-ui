<template>
  <div class="demo" :class="{[`${classPrefix}-demo`]: classPrefix}">
    <h3>{{ $t(component.__i18nTitle) }}</h3>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button no-ripple level="secondary">
        {{ $t('demos.button.checkCode') }}
      </Button>
    </div>
    <div class="demo-code">
      <pre class="language-html"
        v-html="Prism.highlight(component.__sourceCode,
        Prism.languages.html, 'html')" />
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs'
import 'prismjs/themes/prism.css'
import Button from '../lib/Button.vue'

const Prism = window.Prism
export default {
  components: {
    Button
  },
  props: {
    component: Object,
    classPrefix: String
  },
  setup() {
    return { Prism }
  }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';

.demo {
  border: 1px solid $color-grey-300;
  margin: 16px 0 32px;
  > h3 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $color-grey-300;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $color-grey-400;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $color-grey-300;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
.language-html {
  background: #fff;
}
</style>