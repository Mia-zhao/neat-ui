export default {
  en: {
    h1: 'Carousel Component',
    descr: 'This is a Carousel component.',
    h2: 'Examples',
    h3_1: 'Basic Style',
    h3_2: 'autoPlay',
    h3_3: 'Slide Style',
    checkCode: 'See Code',
    api: {
      header: { property: 'Property', description: 'Description', type: 'Type', default: 'Default' },
      content: [
        { property: 'slideStyle', description: 'Specify carousel slider style: dot or bar', type: 'String', default: 'dot' },
        { property: 'autoPlay', description: 'Carousel will auto play if true', type: 'Boolean', default: 'false' },
        { property: 'duration', description: 'Autoplay duration (in ms)', type: 'Number', default: '3000' },
        { property: 'selectedIndex', description: 'Indicates active index of the carousel', type: 'Number', default: '' }
      ]
    }
  },
  zh: {
    h1: 'Carousel 组件',
    descr: '这是一个 Carousel 走马灯组件。',
    h2: '示例',
    h3_1: '基础类型',
    h3_2: '支持 autoPlay',
    h3_3: '横条类型',
    checkCode: '查看代码',
    api: {
      header: { property: '属性', description: '描述', type: '类型', default: '默认值' },
      content: [
        { property: 'slideStyle', description: '设置走马灯 slider 样式: dot 或 bar', type: 'String', default: 'dot' },
        { property: 'autoPlay', description: '设置自动播放', type: 'Boolean', default: 'false' },
        { property: 'duration', description: '自动播放间隔时间 (ms)', type: 'Number', default: '3000' },
        { property: 'selectedIndex', description: '反应当前的走马灯 index', type: 'Number', default: '' }
      ]
    }
  }
}