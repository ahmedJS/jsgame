import Game from "./Game.js"


const GAMEWIDTH = 700;
const GAMEHEIGHT = 400;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

const game = new Game(GAMEWIDTH, GAMEHEIGHT, ctx);

function update() {
    game.update();
    if (!game.gameState) return;
    requestAnimationFrame(update);
}

update();