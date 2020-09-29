import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import MenuDemo from './components/MenuDemo.vue'
import CarouselDemo from './components/CarouselDemo.vue'
import Markdown from './components/Markdown.vue'

const renderMd = keypath => h(Markdown, { keypath })
const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children: [
        { path: '', component: renderMd('mds.intro') },
        { path: 'intro', component: renderMd('mds.intro') },
        { path: 'getting-started', component: renderMd('mds.getting_started') },
        { path: 'install', component: renderMd('mds.install') },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'modal', component: ModalDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'menu', component: MenuDemo },
        { path: 'carousel', component: CarouselDemo }
      ]
    }
  ]
})