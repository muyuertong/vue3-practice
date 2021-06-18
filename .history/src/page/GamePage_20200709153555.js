import {defineComponents, h} from "@vue/runtime-core"

export default defineComponents({
    render(ctx) {
        return h('container', [
            h(Map)
        ])
    } 
})