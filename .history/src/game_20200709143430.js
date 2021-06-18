import * as PIXI from "pixi.js"

const game = new PIXI.Application({
    width: 750,
    height: 1080
})

document.body.appendChild(game.view)
export default game.stage