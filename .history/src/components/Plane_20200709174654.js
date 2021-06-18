import {
    defineComponent,
    h,
    watch,
    reactive,
    toRefs,
    onMounted,
    onUnmounted,
  } from "@vue/runtime-core";
  import planeImg from "../../assets/plane.png";
  
  export default defineComponent({
    props: ["x", "y"],
  
    setup(props, ctx) {
      console.log("----props-------");
      console.log(props);
  
      const handleAttack = (e) => {
        if (e.code === "Space") {
          // 发消息
          ctx.emit("attack", {
            x: props.x,
            y: props.y,
          });
        }
      };
  
      onMounted(() => {
        window.addEventListener("keydown", handleAttack);
      });
  
      onUnMounted(() => {
        window.removeEventListener("keydown", handleAttack);
      });
  
  
      // 响应式丢失问题
      const { x, y } = toRefs(props);
      return {
        x,
        y,
      };
    },
    render(ctx) {
      return h("Container", { x: ctx.x, y: ctx.y }, [
        h("Sprite", { texture: planeImg }),
      ]);
    },
  });
  