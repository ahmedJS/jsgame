import Paddle from "./Paddle.js"
import Input from "./Input.js"
import Ball from "./Ball.js"
import Brick from "./Brick.js";
import { level1, level2 } from "./Levels.js";
export const gameMode={
    gameOver : 3,
    gameMenuBar : 54,
    gameWin : 100,
    gamePause : 9,
    gameOn : 0
}

export class game {
    constructor(gameWidth, gameHeight, ctx) {

        this.ctx = ctx;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.currentLevel = 1;

        this.start(level2, 1500);

    }

    start(levelMap, steppingDownSpeed) {

        let bricks = this.renderLevel(levelMap);

        this.gameObjects = {
            paddle: new Paddle(this.gameWidth, this.gameHeight),
            ball: new Ball(this.gameWidth, this.gameHeight, this),
            bricks: bricks
        }

        this.gameState = gameMode.gameOn;

        // set the main game objects into special property
        this.gamePaddle = this.gameObjects.paddle
        this.gameBall = this.gameObjects.ball

        //inputs activate
        new Input(this);

        // stepping down the bricks
        this.steppingDownBricks(this.gameObjects.bricks, steppingDownSpeed);

    }

    gameToggle(){
        this.gameState = ( this.gameState == gameMode.gamePause )
        ? gameMode.gameOn : gameMode.gamePause;
    }

    gameOver()
    {
        // send message of gameover
        return false;
    }
    //step down the bricks every 3 seconds
    steppingDownBricks(bricks, time) {
        var stepping_down_bricks = setInterval(() => {

            bricks.forEach(function(brick) {
                brick.stepDown();
            })

        }, time);
    }

    update() {

        switch(this.gameState) {
            case gameMode.gamePause : return ;
            case gameMode.gameOver : ;
            case gameMode.gameWin : ;
            case gameMode.gameMenuBar : ;
            case gameMode.gameOn : ;
        }
    
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

        for (var index in this.gameObjects) {


            if (Array.isArray(this.gameObjects[index])) {

                // render every multi drawable object (array) in game objects

                this.gameObjects[index].forEach(object => {
                    object.update()
                    object.draw()
                })

            } else {

                // render every single drawable object in game objects

                this.gameObjects[index].update()
                this.gameObjects[index].draw(this.ctx)

            }
        }

        // delete every brick object that have a deletionMarker property

        this.gameObjects.bricks = this.gameObjects.bricks.filter(brick => !brick.deletionMarker);

    }


    collisionDetection(rect1, rect2) {
        if (rect1.position.x < rect2.position.x + rect2.width &&
            rect1.position.x + rect1.width > rect2.position.x &&
            rect1.position.y < rect2.position.y + rect2.height &&
            rect1.position.y + rect1.height > rect2.position.y)

            return true;
    }

    toggleGameState() {
        this.gameState = this.gameState ? 0 : 1;
        return this.gameState;
    }
    renderLevel(level) {

        let bricks = [];

        // each row
        level.forEach((row, index) => {
            let y = (Brick.height + 20) * (index + 1)

            // each column
            row.forEach((column, index) => {
                if (column === 1) {
                    let x = (index + 1) * Brick.width;
                    bricks.push(new Brick(x, y, this.gameWidth, this.gameHeight, this.ctx, this));
                }
            });
        });
        return bricks;
    }
}