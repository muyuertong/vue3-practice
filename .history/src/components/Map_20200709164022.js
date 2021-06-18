//地图
import {defineComponent, h, ref} from "@vue/runtime-core"

import mapBg from "../../assets/map.jpg"
import { GameInstance } from "../game"

export default defineComponent({
    setUp() {
        const viewHeight = 1080
        const mapY1 = ref(0)
        const mapY2 = ref(-viewHeight)

        const speed = 5
        GameInstance.ticker.add(() => {
            console.log('1')
            mapY1.value += speed
            mapY2.value += speed

            // 归位
            if (mapY1.value >= viewHeight) {
                mapY1.value = -viewHeight
            }
            if (mapY2.value >= viewHeight) {
                mapY2.value = -viewHeight
            }
        })
    },
    render(ctx) {
        return h("Container", [
            h("Sprite", {texture: mapBg, y: ctx.mapY1}),
            h("Sprite", {texture: mapBg, y: ctx.mapY2}),
        ])
    }
})