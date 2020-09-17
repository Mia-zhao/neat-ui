import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocHome from './components/DocHome.vue'
import ButtonDoc from './components/ButtonDoc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import DialogDoc from './components/DialogDoc.vue'
import TabsDoc from './components/TabsDoc.vue'
import CarouselDoc from './components/CarouselDoc.vue'

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
          path: '', component: DocHome
        },
        {
          path: 'button', component: ButtonDoc
        },
        {
          path: 'switch', component: SwitchDoc
        },
        {
          path: 'dialog', component: DialogDoc
        },
        {
          path: 'tabs', component: TabsDoc
        },
        {
          path: 'carousel', component: CarouselDoc
        }
      ]
    }
  ]
})