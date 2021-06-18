import {defineComponent, h, computed, ref} from "@vue/runtime-core"
import StartPage from "../page/startPage"
import GamePage from "../page/GamePage"

export default defineComponent({
    setup() {
        const currentPageName = ref("startPage")

        const computed = () => {

        }
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