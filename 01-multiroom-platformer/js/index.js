
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576


const parsedCollisions = collisions.parse2d()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    // imageSrc: 'test-image.png',
    imageSrc: './img/background.png',
})

const player = new Player({
    collisionBlocks,
    frameRate: 5,
    imageSrc: './img/player/idle.png',
    animations: {
        idleRight: {
            frameRate: 5,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/player/idleRight.png',
        },
        idleLeft: {
            frameRate: 5,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/player/idleLeft.png',
        },
        enterDoor: {
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            imageSrc: './img/player/enterDoor.png'

        },
    }
})


const doors = [
    new Sprite({
        position: {
            x: 520,
            y: 288,
        },
        imageSrc: './img/doorOpening.png',
        frameRate: 5,
        frameBuffer: 4,
        loop:false,
        autoplay: false,
    }),
]

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
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    doors.forEach(door => {
        door.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.switchSprite('idleRight')
        player.velocity.x = 5
        player.lastDirection = 'right'
    }
    else if (keys.a.pressed) {
        player.switchSprite('idleLeft')
        player.velocity.x = -5
        player.lastDirection = 'left'
    }
    else {
        if (player.lastDirection === 'left') player.switchSprite('idleLeft')
        else player.switchSprite('idleRight')
    }
    player.draw()
    player.update()
}

animate()
