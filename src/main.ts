import { createApp } from 'vue'
import './style.scss'
/*组件函数式调用，按需引入需要单独引入这些样式*/
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import App from './App.vue'

createApp(App).mount('#app')
