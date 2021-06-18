import { createRenderer } from '@vue/runtime-core'
import { Graphics } from 'pixi.js'

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
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}