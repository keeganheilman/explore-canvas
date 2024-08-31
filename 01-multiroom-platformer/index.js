
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const playerHeight = 100
let y = 100
let floor = y + playerHeight

function animate() {
    window.requestAnimationFrame(animate)
    
    //set canvas background
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    // set player rectangle
    c.fillStyle = 'red'
    c.fillRect(100,y,100, playerHeight)

    // check whether player is at canvas floor
    if (floor < canvas.height) {
        y++
        floor = y + playerHeight
    }
}

animate()

