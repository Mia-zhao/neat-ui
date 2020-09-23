import Modal from './Modal.vue'
import { createApp, h } from 'vue'
export const openModal = (options) => {
  const { title, content, funcOK, funcCancel,
    closeOnClickOverlay, showTransition } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const closeModal = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(
        Modal,
        {
          visible: true,
          'onUpdate:visible': (visible) => {
            visible === false && closeModal()
          },
          funcOK, funcCancel,
          closeOnClickOverlay, showTransition
        },
        { title, content }
      )
    }
  })
  app.mount(div)
}