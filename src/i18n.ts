import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'zh',
  messages: {
    en: {
      message: {
        homeH2: 'A simple and clean UI framework',
        homeStartButton: 'Start',
        homeMessage: 'Based on Vue 3'
      }
    },
    zh: {
      message: {
        homeH2: '一个简易干净的 UI 框架',
        homeStartButton: '开始',
        homeMessage: '基于 Vue 3'
      }
    }
  }
})

export default i18n