import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'

const renderer = createRenderer({
    createElement(type) {
        let element
        if (type === 'circle') {
            element = new Graphics()
            element.beginFill(0xff0000, 1)
            element.drawCircle(0, 0, 100)
            element.endFill()
        }
        return element
    },
    insert(el, parent) {
        parent.addChild(el)
    },
    patchProp(el, key,preValue, nextValue) {
        el[key] = nextValue
    },
    setElementText(node, text) {
        const canvasText = new Text(text)
        node.addChild(canvasText)
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}