import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DemoHome from './components/DemoHome.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import CarouselDemo from './components/CarouselDemo.vue'
import Intro from './views/Intro.vue'
import GettingStarted from './views/GettingStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children: [
        { path: '', component: DemoHome },
        { path: 'intro', component: Intro },
        { path: 'getting-started', component: GettingStarted },
        { path: 'install', component: Install },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'modal', component: ModalDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'carousel', component: CarouselDemo }
      ]
    }
  ]
})