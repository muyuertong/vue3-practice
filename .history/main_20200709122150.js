import { createApp } from './src/runtime-canvas'
import {defineComponent, h} from "@vue/runtime-core"

// 创建一个根组件

const APP = defineComponent({
    render() {
        //创建虚拟节点
        const vnode = h("div")
        return vnode
    },
})
const app = createApp(App)

//vue 默认带的是dom的渲染器
// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')

