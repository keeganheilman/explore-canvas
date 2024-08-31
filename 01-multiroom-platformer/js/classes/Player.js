
class Player {
    constructor() {
        this.gravity = 1
        this.position = {
            x: 100,
            y: 100
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
    // draw player rectangle
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {

        this.position.y += this.velocity.y
        // check whether player is at canvas floor
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
            this.sides.bottom = this.position.y + this.height
        } else this.velocity.y = 0
    }
}
