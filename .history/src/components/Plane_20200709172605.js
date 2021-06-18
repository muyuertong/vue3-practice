import {
    defineComponent,
    h,
    toRefs,
    onMounted,
    onUnmounted,
  } from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";

export default defineComponent({
    props: ["x", "y"],
    
    setup(props, ctx) {
        const handleAttack = () => {

        }
        onMounted(() => {
          window.addEventListener("keydown", handleAttack);
        })
    
        onUnmounted(() => {
          window.removeEventListener("keydown", handleAttack);
        })

        // 响应式丢失问题
        const { x, y } = toRefs(props)
        return {
            x,
            y
        }
    },
    render(ctx) {
        h("Container", { x: ctx.x, y: ctx.y },[
            h("Sprite", { texture: planeImg })
        ])
    }
})