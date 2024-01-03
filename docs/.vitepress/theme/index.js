import Theme from 'vitepress/theme'
import './style/var.css'
import Support from '../../components/support.vue'

export default {
    ...Theme,
    enhanceApp({ app }) {
      app.component('Support', Support)
    }
  }