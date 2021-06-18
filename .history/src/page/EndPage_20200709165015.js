// 结束页面
import { defineComponent, h } from "@vue/runtime-core";
import endPageBg from "../../assets/end_page.jpg";
import restartBtn from "../../assets/restartBtn.png";

// template -> render
export default defineComponent({
  render(ctx) {
    // Sprite 显示一张图片
    return h("Container", [
      h("Sprite", { texture: endPageBg }),
      h("Sprite", {
        texture: restartBtn,
        x: 200,
        y: 500,
        interactive: true,
        onClick() {
          ctx.$emit("changePage", "GamePage");
        },
      }),
    ]);
  },
});
