import { createI18n } from 'vue-i18n'
import buttonI18n from './locales/button'
import switchI18n from './locales/switch'
import tabsI18n from './locales/tabs'
import menuI18n from './locales/menu'
import modalI18n from './locales/modal'
import carouselI18n from './locales/carousel'

const i18n = createI18n({
  locale: 'zh',
  messages: {
    en: {
      message: {
        homeH2: 'A simple and clean UI framework',
        homeStartButton: 'Start',
        homeMessage: 'Based on Vue 3',
        menu1: 'Doc',
        menu1_intro: 'Introdunction',
        menu1_install: 'Install',
        menu1_getting_started: 'Getting Started',
        menu2: 'Components',
        menu2_button: 'Button',
        menu2_switch: 'Switch',
        menu2_tabs: 'Tabs',
        menu2_menu: 'Menu',
        menu2_modal: 'Modal',
        menu2_carousel: 'Carousel',
      },
      mds: {
        intro: 'intro.md',
        install: 'install.md',
        getting_started: 'getting-started.md'
      },
      demos: {
        button: buttonI18n.en,
        switch: switchI18n.en,
        tabs: tabsI18n.en,
        menu: menuI18n.en,
        modal: modalI18n.en,
        carousel: carouselI18n.en
      }
    },
    zh: {
      message: {
        homeH2: '一个简易干净的 UI 框架',
        homeStartButton: '开始',
        homeMessage: '基于 Vue 3',
        menu1: '文档',
        menu1_intro: '介绍',
        menu1_install: '安装',
        menu1_getting_started: '开始使用',
        menu2: '组件列表',
        menu2_button: 'Button 按钮',
        menu2_switch: 'Switch 开关',
        menu2_tabs: 'Tabs 标签页',
        menu2_menu: 'Menu 菜单',
        menu2_modal: 'Modal 对话框',
        menu2_carousel: 'Carousel 走马灯'
      },
      mds: {
        intro: 'intro_zh.md',
        install: 'install_zh.md',
        getting_started: 'getting-started_zh.md'
      },
      demos: {
        button: buttonI18n.zh,
        switch: switchI18n.zh,
        tabs: tabsI18n.zh,
        menu: menuI18n.zh,
        modal: modalI18n.zh,
        carousel: carouselI18n.zh
      }
    }
  }
})

export default i18n