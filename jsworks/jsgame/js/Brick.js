export default class Brick {

    static width = 700 / 9;
    static height = 20;
    constructor(x, y, gameWidth, gameHeight, ctx, game) {
        this.width = Brick.width;
        this.gameHeight = gameHeight
        this.gameWidth = gameWidth
        this.ctx = ctx
        this.game = game;

        this.width = Brick.width;
        this.height = Brick.height

        this.position = {
            x: x,
            y: y
        }
        this.deletionMarker = false;
    }

    stepDown() {
        this.position.y += 20;
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.position.x, this.position.y, Brick.width, Brick.height);
    }

    update() {
        if (this.game.collisionDetection(this, this.game.gameBall)) {
            this.game.gameBall.speed.y = -this.game.gameBall.speed.y
            this.deletionMarker = true;
        }
    }
}