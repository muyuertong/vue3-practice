import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text, Container, Sprite, Texture } from 'pixi.js'

const renderer = createRenderer({
    // 渲染圆
    // createElement(type) {
    //     let element
    //     if (type === 'circle') {
    //         element = new Graphics()
    //         element.beginFill(0xff0000, 1)
    //         element.drawCircle(0, 0, 100)
    //         element.endFill()
    //     }
    //     return element
    // },
    // insert(el, parent) {
    //     parent.addChild(el)
    // },
    // patchProp(el, key,preValue, nextValue) {
    //     el[key] = nextValue
    // },
    
    createElement(type) {
        let element
        switch(type) {
            case 'Container':
                element =  new Container()
                break;
            case 'Sprite':
                element =  new Sprite()
                break;
        }

        return element
    },
    // 插入元素
    insert(el, parent) {
        parent.addChild(el)
    },
    // 给元素设置属性
    patchProp(el, key, preValue, nextValue) {
        switch(key) {
            case 'texture':
                el.texture =  Texture.from(nextValue)
                break;
            case 'onClick':
                el.on("pointertap", nextValue)
                break;
            default: 
                el[key] = nextValue
        }
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}