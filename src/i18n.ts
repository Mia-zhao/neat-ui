import { createI18n } from 'vue-i18n'

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
        intro_1: 'Neat UI is a UI component library based on Vue 3 and TypeScript.',
        intro_2: 'This UI component library is created independenty by myself, with my best effort to not use any third libraries. This product website is developed independently as well.'
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
        menu2_carousel: 'Carousel 走马灯',
        intro_1: 'Neat UI 是一款基于 Vue 3 以及 TypeScript 的 UI 组件库。',
        intro_2: '这个组件库是个人独立总结创作的，尽量不采用第三方库。此官方网站也是个人独立开发的。'
      }
    }
  }
})

export default i18n