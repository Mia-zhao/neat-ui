export default {
  en: {
    h1: 'Modal Component',
    descr: 'This is a Modal component. Modal creates a floating layer for interaction.',
    h2: 'Examples',
    h3_1: 'Basic',
    h3_2: 'showTransition',
    h3_3: 'open Modal with JS',
    checkCode: 'See Code',
    api: {
      header: { property: 'Property', description: 'Description', type: 'Type', default: 'Default' },
      content: [
        { property: 'visible', description: 'Set visibility of modal', type: 'Boolean', default: 'false' },
        { property: 'closeOnClickOverlay', description: 'Modal can be closed on overlay click if set to true', type: 'Boolean', default: 'true' },
        { property: 'showTransition', description: 'Show no transition if false', type: 'Boolean', default: 'true' },
        { property: 'functionOK', description: 'Callback function when confirmed', type: 'Function', default: '' },
        { property: 'functionCancel', description: 'Callback function when canceled', type: 'Function', default: '' }
      ]
    }
  },
  zh: {
    h1: 'Modal 组件',
    descr: '这是一个 Modal 对话框组件。对话框创建一个悬浮的交互层面。',
    h2: '示例',
    h3_1: '基础',
    h3_2: '支持 showTransition',
    h3_3: 'JS 打开对话框',
    checkCode: '查看代码',
    api: {
      header: { property: '属性', description: '描述', type: '类型', default: '默认值' },
      content: [
        { property: 'visible', description: '设置对话框是否可见', type: 'Boolean', default: 'false' },
        { property: 'closeOnClickOverlay', description: '如果为 true, 在对话框外点击可以关闭对话框', type: 'Boolean', default: 'true' },
        { property: 'showTransition', description: '如果为 false, 不显示 transition', type: 'Boolean', default: 'true' },
        { property: 'functionOK', description: '对话框确认的回调函数', type: 'Function', default: '' },
        { property: 'functionCancel', description: '对话框取消的回调函数', type: 'Function', default: '' }
      ]
    }
  }
}