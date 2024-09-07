window.addEventListener('keydown', (event)=> {
    console.log(event)
    switch (event.key) {
        case ' ':
            if (player.velocity.y ===0) player.velocity.y = -20
            // console.log('pressed Space')
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