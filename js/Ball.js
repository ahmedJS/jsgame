export default class Ball {
    constructor(gameWidth, gameHeight, game) {
        this.game = game;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.radius = 10;

        this.width = this.radius;
        this.height = this.radius

        this.position = {
            x: 20,
            y: 20
        }

        this.speed = {
            x: 3,
            y: 3
        }

    }
    draw(ctx) {

        ctx.fillStyle = 'red';
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();

        ctx.fill();
        ctx.beginPath();

    }

    update(dt) {
        let game = this.game;

        if (game.collisionDetection(this, game.gameObjects["paddle"])) {
            this.speed.y = -this.speed.y;
        }


        if (this.position.x + this.radius >= this.gameWidth || this.position.x <= 0)
            this.speed.x = -this.speed.x;

        if (this.position.y <= 0) this.speed.y = -this.speed.y;

        if (this.position.y + this.radius >= this.gameHeight) {
            game.toggleGameState();
        }
        this.position.x += this.speed.x;

        this.position.y += this.speed.y



    }

}