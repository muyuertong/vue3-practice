import {defineComponent, h} from "@vue/runtime-core"

import Map from "../components/Map"

export default defineComponent({
    render(ctx) {
        return h('Container', [
            h(Map),
        ])
    } 
})