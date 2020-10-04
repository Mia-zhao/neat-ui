# 开始使用

请先[安装](#/doc/install) Neat UI 组件库。

然后通过以下代码引用组件:
```
import { Button, Switch, Tabs, Menu, Modal, Carousel } from 'neat-ui-dev'
```
k

## Vue 组件使用示例
```
<template>
  <Button>Hello</Button>
</template>

<script lang="ts">
import { Button } from 'neat-ui-dev'
import 'neat-ui-dev/dist/lib/neat.css'
export default {
  components: {
    Button
  }
}
</script>
```
请参考组件列表获得更多示例。

<br>

<hr style="height: 0.1em;">

上一节: [安装](#/doc/install)

下一节: [Button 按钮](#/doc/button)