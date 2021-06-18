//地图
import {defineComponents, h, ref} from "@vue/runtime-core"

import mapBg from "../../assets/map.jpg"
import { getGame } from "../game"

export default defineComponents({
    setUp() {
        const viewHeight = 1080
        const mapY1 = ref(0)
        const mapY2 = ref(-viewHeight)

        const speed = 5
        getGame().ticker.add(() => {
            // mapY1.value += speed
            // mapY2.value += speed

            // // 归位
            // if (mapY1.value >= viewHeight) {
            //     mapY1.value = -viewHeight
            // }
            // if (mapY2.value >= viewHeight) {
            //     mapY2.value = -viewHeight
            // }
        })
    },
    render(ctx) {
        return h("container", [
            h("Sprite", {texture: mapBg, y: ctx.mapY1}),
            h("Sprite", {texture: mapBg, y: ctx.mapY2}),
        ])
    }
})