//地图
import {defineComponents, h, ref} from "@vue/runtime-core"

import mapBg from "../../assets/map.jpg"
import { Game } from "../game"

export default defineComponents({
    setUp() {

    },
    render() {
        return h("container", [
            h("Sprite", {texture: mapBg, y: ctx.mapY1}),
            h("Sprite", {texture: mapBg, y: ctx.mapY2}),
        ])
    }
})