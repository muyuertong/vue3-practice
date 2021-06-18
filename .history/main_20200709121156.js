import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({})
console.log(renderer, '1')

//vue 默认带的是dom的渲染器
// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')

