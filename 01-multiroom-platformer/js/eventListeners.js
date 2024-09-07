window.addEventListener('keydown', (event)=> {
    console.log(event)
    switch (event.key) {
        case ' ':
            if (player.velocity.y ===0) player.velocity.y = -20
            // console.log('pressed Space')
            break
        case 'w':
            //move player away (towards door)
            for (let i =0; i < doors.length; i++) {
                const door = doors[i]
                if (
                    player.hitbox.position.x <= door.position.x + door.width &&
                    player.hitbox.position.x + player.hitbox.width >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                ) {
                    console.log('player collieded with door.')
                }                    
            }
            // keys.w.pressed = true
            // console.log('keydown w')
            break
        case 'a':
            //move player to left
            keys.a.pressed = true
            // console.log('keydown a')
            break
        case 'd':
            //move player to right
            keys.d.pressed = true
            // console.log('keydown d')
            break

    }
})

window.addEventListener('keyup', (event)=> {
    console.log(event)
    switch (event.key) {
        case 'w':
            //move player away (towards door)
            keys.w.pressed = false
            // console.log('keydown w')
            break
        case 'a':
            //move player to left
            keys.a.pressed = false
            // console.log('keyup a')
            break
        case 'd':
            //move player to right
            keys.d.pressed = false
            // console.log('keyup d')
            break
        

    }
})