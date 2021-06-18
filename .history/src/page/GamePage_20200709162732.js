import {defineComponents, h} from "@vue/runtime-core"

import Map from "../components/Map"

export default defineComponents({
    render(ctx) {
        return h('Container', [
            h(Map)
        ])
    } 
})