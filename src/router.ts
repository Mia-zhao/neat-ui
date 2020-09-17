import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DemoHome from './components/DemoHome.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import CarouselDemo from './components/CarouselDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/doc', component: Doc,
      children: [
        {
          path: '', component: DemoHome
        },
        {
          path: 'button', component: ButtonDemo
        },
        {
          path: 'switch', component: SwitchDemo
        },
        {
          path: 'dialog', component: DialogDemo
        },
        {
          path: 'tabs', component: TabsDemo
        },
        {
          path: 'carousel', component: CarouselDemo
        }
      ]
    }
  ]
})