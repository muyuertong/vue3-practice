
// 子弹
import { defineComponent, h, watch, reactive, toRefs } from "@vue/runtime-core";
import bulletImg from "../../assets/bullet.png";

export default defineComponent({
  props: ["x", "y"],
  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Sprite", { texture: bulletImg }),
    ]);
  },
});