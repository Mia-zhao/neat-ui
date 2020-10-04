import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import NotFound from './views/404.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import MenuDemo from './components/MenuDemo.vue'
import CarouselDemo from './components/CarouselDemo.vue'
import Markdown from './components/Markdown.vue'

import intro from './mds/intro.md'
import intro_zh from './mds/intro_zh.md'
import install from './mds/install.md'
import install_zh from './mds/install_zh.md'
import gs from './mds/getting-started.md'
import gs_zh from './mds/getting-started_zh.md'

const renderMd = (content, keypath) => h(Markdown, { content, keypath })
const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children: [
        { path: '', component: renderMd({'en': intro, 'zh': intro_zh}, 'mds.intro') },
        { path: 'intro', component: renderMd({'en': intro, 'zh': intro_zh}, 'mds.intro') },
        { path: 'getting-started', component: renderMd({'en': gs, 'zh': gs_zh}, 'mds.getting_started') },
        { path: 'install', component: renderMd({'en': install, 'zh': install_zh}, 'mds.install') },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'modal', component: ModalDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'menu', component: MenuDemo },
        { path: 'carousel', component: CarouselDemo }
      ]
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})