export default {
  en: {
    h1: 'Menu Component',
    descr: 'This is a Menu component for navigation.',
    h2: 'Examples',
    h3_1: 'Basic',
    h3_2: 'hideArrow',
    h3_3: 'collapsible',
    checkCode: 'See Code',
    api: {
      header: { property: 'Property', description: 'Description', type: 'Type', default: 'Default' },
      content: [
        { property: 'selectedMenu', description: 'Menu prop. Reactive reference to currently selected mKey', type: 'String', default: '' },
        { property: 'defaultCollapsed', description: 'SubMenu prop. Menu is collapsed by default if true', type: 'Boolean', default: 'true' },
        { property: 'collapsible', description: 'SubMenu prop. Configure whether menu is collapsible', type: 'Boolean', default: 'true' },
        { property: 'hideArrow', description: 'SubMenu prop. Hide arrow if true', type: 'Boolean', default: 'false' },
        { property: 'mKey', description: 'MenuItem prop. Unique key for MenuItem', type: 'String', default: '' }
      ]
    }
  },
  zh: {
    h1: 'Menu 组件',
    descr: '这是一个 Menu 菜单组件，用来导航。',
    h2: '示例',
    h3_1: '基础',
    h3_2: '支持 hideArrow',
    h3_3: '支持 collapsible',
    checkCode: '查看代码',
    api: {
      header: { property: '属性', description: '描述', type: '类型', default: '默认值' },
      content: [
        { property: 'selectedMenu', description: 'Menu 参数。反应当前选中的菜单项的 mKey', type: 'String', default: '' },
        { property: 'defaultCollapsed', description: 'SubMenu 参数。如果为 true, 菜单是默认展开的', type: 'Boolean', default: 'true' },
        { property: 'collapsible', description: 'SubMenu 参数。设置菜单是否能展开收回', type: 'Boolean', default: 'true' },
        { property: 'hideArrow', description: 'SubMenu 参数。如果为 true, 隐藏箭头', type: 'Boolean', default: 'false' },
        { property: 'mKey', description: 'MenuItem 参数。提供独一的 MenuItem Key', type: 'String', default: '' }
      ]
    }
  }
}