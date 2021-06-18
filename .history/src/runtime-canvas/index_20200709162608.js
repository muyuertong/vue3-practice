import { createRenderer, createCommentVNode } from '@vue/runtime-core'
import { Graphics, Text, Container, Sprite, Texture } from 'pixi.js'

// 创建渲染器，实现渲染接口
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
    
    // createText(text) {
    //     return new Text(text)
    // }
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
        parent.addChild(el);
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
    },
    setElementText(node, text) {
        const canvasText = new Text(text)
        node.addChild(canvasText)
    },

    // // todo
    // 处理注释
    createComment() {},
    // 获取父节点
    parentNode() {},
    // // 获取兄弟节点
    // nextSibling() {},
    // // 删除节点
    // remove(el) {
    //     const parent = el.parent
    //     if (parent) {
    //         parent.removeChild(el)
    //     }
    // }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}