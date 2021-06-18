import { createApp } from './src/runtime-canvas'
import App from './src/app'
import { getCanvasRootContainer } from './src/game'

// 创建一个根组件
// const app = createApp(App)

//vue 默认带的是dom的渲染器
// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')

// mount 需要根容器

createApp(App).mount(getCanvasRootContainer())
