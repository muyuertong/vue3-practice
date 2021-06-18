import {
    defineComponent,
    h,
    toRefs,
    onMounted,
    onUnmounted,
  } from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";

export default defineComponent({
    setup() {
        const handleAttack = () => {

        }
        onMounted(() => {
          window.addEventListener("keydown", handleAttack);
        })
    
        onUnMounted(() => {
          window.removeEventListener("keydown", handleAttack);
        })
    },
    render(ctx) {
        h("Container", {x: ctx.x, y: ctx.y},[
            h("Sprite", { texture: planeImg })
        ])
    }
})