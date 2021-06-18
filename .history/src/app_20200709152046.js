import {defineComponent, h} from "@vue/runtime-core"

export default defineComponent({
    setup() {
        return {
            currentPage,
            currentPageName
        }
    },

    render() {
        //创建虚拟节点
        // const vnode = h("circle", {x: 100, y:200}, [
        //     h("circle", {x: 200, y:200}, 'zhuzhu')
        // ])
        // return vnode

        return h("container", [
            h(ctx.currentPage, {
                onChangePage(nextPage) {
                    ctx.currentPageName = nextPage
                }
            })
        ])
    },
})