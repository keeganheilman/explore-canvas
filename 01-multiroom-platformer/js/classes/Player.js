
class Player {
    constructor({collisionBlocks = []}) {
        
        this.gravity = 1
        this.position = {
            x: 200,
            y: 200
        }

        this.width = 40
        this.height = 40
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.collisionBlocks = collisionBlocks
    }

    draw() {
    // draw player rectangle
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


    checkForHorizontalCollisions() {
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // has the player collided?
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // player moving left
                if (this.velocity.x < 0) {
                    console.log('collision to the left')
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                    
                    break
                }
                // player moving right
                if (this.velocity.x > 0) {
                    console.log('collision to the right')
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
            }


        }
    }


    checkForVerticalCollisions() {
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // has the player collided?
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // player moving up
                if (this.velocity.y < 0) {
                    console.log('collision above')
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }
                // player moving down
                if (this.velocity.y > 0) {
                    console.log('collision below')
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
            }
        }
    }


    applyGravity() {

        this.velocity.y += this.gravity    
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

    }

    update() {
        
        this.position.x += this.velocity.x
        //check for horizontal collisions
        this.checkForHorizontalCollisions()
        // apply gravity
        this.applyGravity()
        // check for vertical collisions
        this.checkForVerticalCollisions()
        

       
    }

}
