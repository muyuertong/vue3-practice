import {defineComponent, h, computed, ref} from "@vue/runtime-core"
import StartPage from "../page/startPage"
import GamePage from "../page/GamePage"

export default defineComponent({
    setup() {
        // ref创建一个响应式对象值为string number
        const currentPageName = ref("startPage")

        const currentPage = computed(() => {
            if (currentPageName.value === 'startPage') {
                return StartPage
            } else if (currentPageName.value === "GamePage") {
                return GamePage;
            } else if (currentPageName.value === "EndPage") {
                return EndPage;
            }
        })
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