import { createApp } from './src/runtime-canvas'
import App from './src/app'
import * as PIXI from "pixi.js"

// 创建一个根组件
console.log(PIXI)
const app = createApp(App)

//vue 默认带的是dom的渲染器
// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')

