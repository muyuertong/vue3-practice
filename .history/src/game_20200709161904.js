import * as PIXI from "pixi.js"

const game = new PIXI.Application({
    width: 750,
    height: 1080
})

document.body.appendChild(game.view)

// stage是基于canvas的根容器
export function getCanvasRootContainer() {
    console.log("1")
    return game.stage
}

// export const GameInstance = game

export function getGame() {
    return game;
  }