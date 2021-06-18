import {defineComponent, h, computed, ref} from "@vue/runtime-core"
import StartPage from "./page/StartPage"
import GamePage from "./page/GamePage"
import EndPage from "./page/EndPage"

export default defineComponent({
    setup() {
        // ref创建一个响应式对象值为string number
        const currentPageName = ref("StartPage")

        // ref和reactive的一个区别是返回值有个value键值对，在template中不需要使用.value
        const currentPage = computed(() => {
            if (currentPageName.value === 'StartPage') {
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

    render(ctx) {
        //创建虚拟节点
        // const vnode = h("circle", {x: 100, y:200}, [
        //     h("circle", {x: 200, y:200}, 'zhuzhu')
        // ])
        // return vnode

        return h("Container", [
            h(ctx.currentPage, {
                onChangePage(nextPage) {
                    ctx.currentPageName = nextPage
                }
            })
        ])
    },
})