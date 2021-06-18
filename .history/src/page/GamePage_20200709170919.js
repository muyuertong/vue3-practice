import {
    defineComponent, 
    h,
    reactive
} from "@vue/runtime-core"

import Map from "../components/Map"
import Plane from "../components/Plane";
import { GameInstance } from "../game";

export default defineComponent({
    setup(props, ctx) {
        const planeInfo = createPlane()

        return {
            planeInfo
        }
    },
    render(ctx) {
        return h('Container', [
            h(Map),
            h(Plane, {
                x: ctx.planeInfo.x,
                y: ctx.planeInfo.y
            })
        ])
    } 
})

// reactive创建响应式对象
const createPlane = () => {
    const planeInfo = reactive({
        x: 150,
        y: 300,
        width: 258,
        height: 364
    })

    return planeInfo
}