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
      },
      mds: {
        intro: 'intro.md',
        install: 'install.md',
        getting_started: 'getting-started.md'
      },
      demos: {
        button: {
          h1: 'Button Component',
          descr: 'This is a button component. A button is a clickable component used to trigger an operation.',
          h2: 'Examples',
          h3_1: 'Basic',
          h3_2: 'Disabled',
          h3_3: 'Transparent',
          h3_4: 'Level',
          h3_5: 'Loading',
          h3_6: 'Shadow',
          h3_7: 'Icon',
          checkCode: 'See Code',
          defaultText: 'Hello',
          defaultYes: 'Yes',
          defaultNo: 'No',
          api: {
            header: { property: 'Property', description: 'Description', type: 'Type', default: 'Default' },
            content: [
              { property: 'theme', description: 'Specify button theme, one of normal, link or text', type: 'String', default: 'normal' },
              { property: 'disabled', description: 'disable button', type: 'Boolean', default: 'false' },
              { property: 'transparent', description: 'set button to be transparent', type: 'Boolean', default: 'false' },
              { property: 'level', description: 'Specify button level, primary or secondary', type: 'String', default: 'primary' },
              { property: 'loading', description: 'Set loading style of button', type: 'Boolean', default: 'false' },
              { property: 'shadow', description: 'Add button shadow', type: 'Boolean', default: 'false' },
              { property: 'noRipple', description: 'Disable ripple animation', type: 'Boolean', default: 'false' },
              { property: 'icon', description: 'Add icon to button', type: 'String', default: '' }
            ]
          }
        }
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
        button: {
          h1: 'Button 组件',
          descr: '这是一个 Button 按钮组件。按钮组件是可以点击的，用来触发一个操作。',
          h2: '示例',
          h3_1: '基础',
          h3_2: '支持 disabled',
          h3_3: '支持 transparent',
          h3_4: '支持 level',
          h3_5: '支持 loading',
          h3_6: '支持 shadow',
          h3_7: '支持 icon',
          checkCode: '查看代码',
          defaultText: '你好',
          defaultYes: '是',
          defaultNo: '否',
          api: {
            header: { property: '属性', description: '描述', type: '类型', default: '默认值' },
            content: [
              { property: 'theme', description: '设置按钮主题: normal, link 或 text', type: 'String', default: 'normal' },
              { property: 'disabled', description: '设为禁用样式', type: 'Boolean', default: 'false' },
              { property: 'transparent', description: '设为透明样式', type: 'Boolean', default: 'false' },
              { property: 'level', description: '设置按钮级别: primary 或 secondary', type: 'String', default: 'primary' },
              { property: 'loading', description: '设为加载样式', type: 'Boolean', default: 'false' },
              { property: 'shadow', description: '增加阴影', type: 'Boolean', default: 'false' },
              { property: 'noRipple', description: '关闭涟漪动画', type: 'Boolean', default: 'false' },
              { property: 'icon', description: '加入 icon', type: 'String', default: '' }
            ]
          }
        }
      }
    }
  }
})

export default i18n