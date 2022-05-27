export default class Input {
    constructor(game) {
        document.addEventListener("keydown", function(event) {
            switch (event.keyCode) {
                case 39:
                    //alert("moveright");
                    game.gamePaddle.moveRight();
                    break;
                case 37:
                    //alert("moveleft")
                    game.moveLeft();
                    break;
                case 32 :
                    game.gameToggle();
                    break;
            }
        });

        document.addEventListener("keyup", function(event) {
            switch (event.keyCode) {
                case 39:
                    //alert("moveright");
                    game.gamePaddle.stop();
                    break;
                case 37:
                    //alert("moveleft")
                    game.gamePaddle.stop();
                    break;
            }
        });

    }
}