export default class Input {
    constructor(paddle) {

        document.addEventListener("keydown", function(event) {
            switch (event.keyCode) {
                case 39:
                    //alert("moveright");
                    paddle.moveRight();
                    break;
                case 37:
                    //alert("moveleft")
                    paddle.moveLeft();
                    break;
            }
        });

        document.addEventListener("keyup", function(event) {
            switch (event.keyCode) {
                case 39:
                    //alert("moveright");
                    paddle.stop();
                    break;
                case 37:
                    //alert("moveleft")
                    paddle.stop();
                    break;
            }
        });

    }
}