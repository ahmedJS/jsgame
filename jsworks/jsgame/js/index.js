import { game , gameMode } from "./Game.js"

const GAMEWIDTH = 700;
const GAMEHEIGHT = 400;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

const Game = new game(GAMEWIDTH, GAMEHEIGHT, ctx);

function update(timestamp) {


    Game.update();


    requestAnimationFrame(update);

}

update();
