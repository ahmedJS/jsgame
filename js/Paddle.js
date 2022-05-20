export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 15;

        this.speed = 0;
        this.maxSpeed = 10
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    moveRight() {
        this.speed = this.maxSpeed;
    }
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    update(dt) {
        this.position.x += this.speed;
    }
    stop() {
        this.speed = 0;
    }
}