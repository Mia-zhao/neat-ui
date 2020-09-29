export default {
  en: {
    h1: 'Tabs Component',
    descr: 'This is a Tabs component. A Tabs component allows switching between views.',
    h2: 'Examples',
    h3_1: 'Basic Type',
    h3_2: 'Card Type',
    checkCode: 'See Code',
    api: {
      header: { property: 'Property', description: 'Description', type: 'Type', default: 'Default' },
      content: [
        { property: 'type', description: 'Specify tabs style: default or card', type: 'String', default: 'default' },
        { property: 'selected', description: 'A reactive String of selected tab', type: 'String', default: '' }
      ]
    }
  },
  zh: {
    h1: 'Tabs 组件',
    descr: '这是一个 Tabs 标签页组件。标签页组件方便在不同视图中切换。',
    h2: '示例',
    h3_1: '基础类型',
    h3_2: '卡片类型',
    checkCode: '查看代码',
    api: {
      header: { property: '属性', description: '描述', type: '类型', default: '默认值' },
      content: [
        { property: 'type', description: '声明 Tabs 样式类型: default 或 card', type: 'String', default: 'default' },
        { property: 'selected', description: '响应的字符类型，代表选中的 Tab', type: 'String', default: '' }
      ]
    }
  }
}