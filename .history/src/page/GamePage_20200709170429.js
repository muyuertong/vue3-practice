import {defineComponent, h} from "@vue/runtime-core"

import Map from "../components/Map"
import Plane from "../component/Plane";
import { GameInstance } from "../Game";

export default defineComponent({
    setup(props, ctx) {

    },
    render(ctx) {
        return h('Container', [
            h(Map),
            h(Plane, {
                x: ctx.planeInfo.x,
                y: ctx.planeInfo.y,
            })
        ])
    } 
})