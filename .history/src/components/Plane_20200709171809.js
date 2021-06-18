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
        onMounted(() => {
            window.addEventListener("keydown", handleAttack);
          });
      
          onUnMounted(() => {
            window.removeEventListener("keydown", handleAttack);
          });
    },
    render() {
        h()
    }
})