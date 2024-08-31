
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    draw() {
    // draw player rectangle
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        // check whether player is at canvas floor
        if (this.sides.bottom < canvas.height) {
            this.position.y++
            this.sides.bottom = this.position.y + this.height
        }
    }
}
