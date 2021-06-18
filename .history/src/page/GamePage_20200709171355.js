import {
    defineComponent, 
    h,
    reactive,
    toRefs,
    onMounted,
    onUnmounted
} from "@vue/runtime-core"

import Map from "../components/Map"
import Plane from "../components/Plane";
import { GameInstance } from "../game";
import { hitTestRectangle } from "../utils/index";

export default defineComponent({
    setup(props, ctx) {
        const planeInfo = createPlane()
        console.log(planeInfo)
        // 子弹数据
        const bullets = reactive([]);
        const handleAttack = (info) => {

        }

        return {
            planeInfo
        }
    },
    render(ctx) {
        return h('Container', [
            h(Map),
            h(Plane, {
                x: ctx.planeInfo.x,
                y: ctx.planeInfo.y,
                onAttack: ctx.handleAttack,
            })
        ])
    } 
})

// reactive 处理对象类型 引用类型 {} []
const createPlane = () => {
    const planeInfo = reactive({
        x: 150,
        y: 300,
        width: 258,
        height: 364
    })
    // planeInfo.x = x;
    // planeInfo.y = y;

    return planeInfo
}