import {defineComponents, h} from "@vue/runtime-core"
import startPageBg from "../../assets/start_page.jpg"
import startBtn from "../../assets/startBtn.png"

export default defineComponents({
    render(ctx) {
        return h('Container', [
            h("Sprite", { texture: startPageBg }), 
            h("Sprite", {
                texture: startBtn,
                x: 210,
                y: 500,
                // 要使用click事件需要将该属性设置为true
                interactive: true,
                onClick() {
                    ctx.$emit("changePage", "GamePage")
                }
            }), 
        ])
    } 
})