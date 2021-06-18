// 碰撞检测
export function hitTestPectangle(a, b) {
    return (a.x + a.width >= b.x ||
    b.x + b.width >= a.x ||
    a.y + a.height >= b.y ||
    b.y + b.height >= a.y ||
    )
}
