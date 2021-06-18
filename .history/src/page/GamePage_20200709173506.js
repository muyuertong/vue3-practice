import {
    defineComponent, 
    h,
    reactive,
    toRefs,
    onMounted,
    onUnmounted
} from "@vue/runtime-core"

import Map from "../components/Map"
import Plane from "../components/Plane";
import { GameInstance } from "../game";
import { hitTestRectangle } from "../utils/index";

export default defineComponent({
    setup(props, ctx) {
        const planeInfo = reactive({
            x: 150,
            y: 300,
            width: 258,
            height: 364
        })
        // const planeInfo = createPlane()
        console.log(planeInfo)
        // 子弹数据
        const bullets = reactive([]);

        const handleAttack = (info) => {
            createBulletInfo = () => {
                return {
                    x: info.x + 100,
                    y: info.y
                }
            }
            bullets.push(createBulletInfo())
        }

        return {
            planeInfo,
            handleAttack
        }
    },
    render(ctx) {
        return h('Container', [
            h(Map),
            h(Plane, {
                x: ctx.planeInfo.x,
                y: ctx.planeInfo.y,
                // onAttack: ctx.handleAttack,
            })
        ])
    } 
})

// reactive 处理对象类型 引用类型 {} []
const createPlane = () => {
    const planeInfo = reactive({
        x: 150,
        y: 300,
        width: 258,
        height: 364
    })
    const {x, y} = movePlane(planeInfo.x, planeInfo.y)
    planeInfo.x = x;
    planeInfo.y = y;

    return planeInfo
}

const movePlane = (initX, initY) => {
    const speed = 15
    const point = reactive({
        x: initX,
        y: initY,
    })
    // 按键需要销毁
    const hanldeKeyDown = (e) => {
        switch(e.code) {
            case 'ArrowUp':
                point.y -= speed
                break
            case "ArrowDown":
                point.y += speed;
                break
                case "ArrowLeft":
                point.x -= speed;
                break
                case "ArrowRight":
                point.x += speed;
                break
        }
    }

    onMounted(() => {
        // 组件创建完
        window.addEventListener("keydown", handleKeyDown);
      });
    
      onUnmounted(() => {
        // 组件销毁时
        window.removeEventListener("keydown", handleKeyDown);
      });

    return toRefs(point)
}