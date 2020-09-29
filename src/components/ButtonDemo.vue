<template>
  <h1>{{ $t('demos.button.h1') }}</h1>
  <section class="description">
    <p>{{ $t('demos.button.descr') }}</p>
  </section>
  <h2>{{ $t('demos.button.h2') }}</h2>
  <section class="examples">
    <div class="demo">
      <h3>{{ $t('demos.button.h3_1') }}</h3>
      <div class="demo-component">
        <Button>{{ $t('demos.button.defaultText') }}</Button>
        <Button theme="link">{{ $t('demos.button.defaultText') }}</Button>
        <Button theme="text">{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h3>{{ $t('demos.button.h3_2') }}</h3>
      <div class="demo-component">
        <Button>{{ $t('demos.button.defaultText') }}</Button>
        <Button disabled>{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="example-transparent">
      <h3>{{ $t('demos.button.h3_3') }}</h3>
      <div class="demo-component">
        <Button>{{ $t('demos.button.defaultText') }}</Button>
        <Button transparent>{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h3>{{ $t('demos.button.h3_4') }}</h3>
      <div class="demo-component">
        <Button>{{ $t('demos.button.defaultText') }}</Button>
        <Button level="secondary">{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h3>{{ $t('demos.button.h3_5') }}</h3>
      <div class="demo-component">
        <Button>{{ $t('demos.button.defaultText') }}</Button>
        <Button loading>{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h3>{{ $t('demos.button.h3_6') }}</h3>
      <div class="demo-component">
        <Button>
          {{ $t('demos.button.defaultText') }}
        </Button>
        <Button shadow>{{ $t('demos.button.defaultText') }}</Button>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h3>{{ $t('demos.button.h3_7') }}</h3>
      <div class="demo-component">
        <Button icon="yes">{{ $t('demos.button.defaultYes') }}</Button>
        <Button icon="no">{{ $t('demos.button.defaultNo') }}</Button>
        <Button icon="yes"/>
        <Button icon="no"/>
      </div>
      <div class="demo-actions">
        <Button>{{ $t('demos.button.checkCode') }}</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button/&gt;</pre>
      </div>
    </div>
  </section>
  <h2>API</h2>
  <section>
    <div class="api">
    </div>
  </section>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button }
}
</script>

<style lang="scss" scoped>
@import '../lib/neat-style.scss';
h1 {
  font-size: 32px;
  padding-bottom: 0.3em;
  border-bottom: 1px solid rgb(234, 236, 239);
}
section {
  margin: 16px 0;
}
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
    border-top: 1px dashed $color-grey-300;
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
</style>