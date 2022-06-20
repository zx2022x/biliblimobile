import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import { Tab, Tabs } from 'vant'
import '@/mock/index'
import { createPinia } from 'pinia'
const app=createApp(App)
app.use(createPinia())
import { Swipe, SwipeItem } from 'vant';
app.use(Swipe);
app.use(SwipeItem);
app.use(Tab);
app.use(Tabs);
app.use(router).mount('#app')
