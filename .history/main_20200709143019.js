import { createApp } from './src/runtime-canvas'
import App from './src/app'
import Game from './src/game'
import * as PIXI from "pixi.js"

// 创建一个根组件
// const app = createApp(App)
// console.log(app)

//vue 默认带的是dom的渲染器
// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')

// mount 需要根容器

const game = new PIXI.Application({
    width: 750,
    height: 1080
})
console.log(game)

document.body.appendChild(game.view)
// stage是基于canvas的根容器
createApp(App).mount(game.stage)
