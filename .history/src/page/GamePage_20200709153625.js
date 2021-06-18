import {defineComponents, h} from "@vue/runtime-core"

import Map from "../comments/Map"

export default defineComponents({
    render(ctx) {
        return h('container', [
            h(Map)
        ])
    } 
})