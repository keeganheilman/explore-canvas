
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'img/background.png',
})

const player = new Player()

const keys = {
    w: {
        pressed: false
    },
    a: {
        prssed: false
    },
    d: {
        pressed: false
    },

}

function animate() {
    window.requestAnimationFrame(animate)
    //set canvas background
    // c.fillStyle = 'white' //using background image instead
    // c.fillRect(0, 0, canvas.width, canvas.height) //using background image instead

    background.draw()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5
    player.draw()
    player.update()
}

animate()
