# Getting Started

Please [install](#/doc/install) Neat UI first.

Then you can import components:
```
import { Button, Switch, Tabs, Menu, Modal, Carousel } from 'neat-ui-dev'
```
Next feel free to use the components.

## Vue Component Usage
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
For more examples, please checkout the components documentation.

<br>

<hr style="height: 0.1em;">

Previous: [install](#/doc/install)

Next: [button](#/doc/button)