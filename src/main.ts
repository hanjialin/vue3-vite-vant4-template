import { createApp } from 'vue'

import '@/assets/style/main.scss'
/*组件函数式调用，按需引入需要单独引入这些样式*/
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import { setupStore } from '@/store'
import router from '@/router'
import App from '@/App.vue'

/**
 * @desc 等待路由加载完毕再进行内容挂载
 * @author HanJiaLin
 * @time 2025/4/17 09:57
 **/
async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  app.use(router)
  await router.isReady()
  app.mount('#app')
}
void bootstrap()
