
class Player extends Sprite {
    constructor({collisionBlocks = [], imageSrc, frameRate, animations }) {
        super({ imageSrc, frameRate, animations })
        this.gravity = 1
        this.position = {
            x: 200,
            y: 200
        }

        this.sides = {
            bottom: this.position.y + this.height
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.collisionBlocks = collisionBlocks
    }


    update() {
        this.position.x += this.velocity.x
        //check for horizontal collisions
        this.updateHitbox()
        this.checkForHorizontalCollisions()
        // apply gravity
        this.applyGravity()
        this.updateHitbox()
        c.fillStyle = 'rgba(0,0,255, 0.5)'
        c.fillRect(
            this.hitbox.position.x,
            this.hitbox.position.y,
            this.hitbox.width,
            this.hitbox.height
        )
        // check for vertical collisions
        this.checkForVerticalCollisions()
    }    

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 38,
                y: this.position.y + 15,
            },
            width: 100,
            height: 150,
        }
    } 
    

    switchSprite( name ) {
        if (this.image === this.animations[name].image){
            return    
        }
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        
    }


    checkForHorizontalCollisions() {
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // has the player collided?
            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // player moving left
                if (this.velocity.x < 0) {
                    console.log('collision to the left')
                    const offset = this.hitbox.position.x - this.position.x 
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01 - offset
                    
                    break
                }
                // player moving right
                if (this.velocity.x > 0) {
                    console.log('collision to the right')
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }


        }
    }


    checkForVerticalCollisions() {
        for (let i = 0; i< this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            // has the player collided?
            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // player moving up
                if (this.velocity.y < 0) {
                    console.log('collision above')
                    const offset = this.hitbox.position.y - this.position.y 
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01 - offset
                    break
                }
                // player moving down
                if (this.velocity.y > 0) {
                    console.log('collision below')
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - offset - 0.01
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

}
