import {defineComponent, h} from "@vue/runtime-core"

// 创建一个根组件

export default defineComponent({
    render() {
        //创建虚拟节点
        const vnode = h("circle")
        console.log(vnode)
        return vnode
    },
})