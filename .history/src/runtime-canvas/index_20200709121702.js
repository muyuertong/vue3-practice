import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({})

export function createApp = () =>{
    return renderer(App)
}