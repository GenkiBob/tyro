import Theme from 'vitepress/theme'
import './style/var.css'
import Support from '../../components/support.vue'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
  ...Theme,
  enhanceApp ({ app }) {
    app.component('Support', Support);
    app.use(ElementPlus);
  }
}