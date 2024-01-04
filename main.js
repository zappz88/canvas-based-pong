import { Shape } from "./canvas/model/shape.js";
import { FillShape } from "./canvas/model/fillShape.js";
import { FillRect } from "./canvas/model/fillRect.js";
import { StrokeShape } from "./canvas/model/strokeShape.js";
import { StrokeRect } from "./canvas/model/strokeRect.js";
import { CollisionDetection } from "./canvas/model/collisionDetection/collisionDetection.js";
import { CollisionDetection2D } from "./canvas/model/collisionDetection/collisionDetection2D.js";
import { Point2D } from "./geometry/point2D.js";
import { CanvasCollisionDetection } from "./canvas/environment/canvasCollisionDetection.js";
import { CanvasCollisionDetection2D } from "./canvas/environment/canvasCollisionDetection2D.js";
import { KeyCode } from "./controls/keyCode.js";
import { KeyboardControlMap } from "./controls/keyboardControlMap.js";
import { Paddle } from "./paddle.js";
import { Pong } from "./pong.js";
import { PowerUps } from "./powerUps.js";

function animate(){
    if(paused){
        return;
    }

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    boardObjects.forEach((boardObject) => boardObject.update());

    paddles.forEach((paddle) => {
        let point = null;
        if(pong.isFacingRight){
            point = CollisionDetection2D.getRightCollisionDetected(pong, paddle);
            if(point){
                pong.setXVelocity((pong.xVelocity * -1));
                pong.setYVelocity((Math.round(Math.random()) ? 1 : -1) * ((point.source.y - point.target.y) / paddle.height) + paddle.yVelocity);
                pong.setDegree(pong.degree * -1);
                pong.isFacingRight = !pong.isFacingRight;
            }
        }
        else{
            point = CollisionDetection2D.getLeftCollisionDetected(pong, paddle);
            if(point){
                pong.setXVelocity((pong.xVelocity * -1));
                pong.setYVelocity((Math.round(Math.random()) ? 1 : -1) * ((point.source.y - point.target.y) / paddle.height) + paddle.yVelocity);
                pong.setDegree(pong.degree * -1);
                pong.isFacingRight = !pong.isFacingRight;
            }
        }
        point = null;
    });

    if(CanvasCollisionDetection2D.verticalCollisionDetected(pong, ctx)){
        if(pong.yVelocity < 0){
            pong.yVelocity = ((pong.yVelocity - pong.incrementingYVelocity) * -1);
        }
        else{
            pong.yVelocity = ((pong.yVelocity + pong.incrementingYVelocity) * -1);
        }
    }

    if(CanvasCollisionDetection2D.rightCollisionDetected(pong, ctx)){
        pong.isFacingRight = !pong.isFacingRight;
        pong.setXVelocity((pong.xVelocity * -1));
        playerOneScore++;
        playerOneScoreBoard.innerText = playerOneScore;
    }

    if(CanvasCollisionDetection2D.leftCollisionDetected(pong, ctx)){
        pong.isFacingRight = !pong.isFacingRight;
        pong.setXVelocity((pong.xVelocity * -1));
        playerTwoScore++;
        playerTwoScoreBoard.innerText = playerTwoScore;
    }

    if(CanvasCollisionDetection2D.rightCollisionDetected(pong, ctx)){
        pong.isFacingRight = !pong.isFacingRight;
        pong.setXVelocity((pong.xVelocity * -1));
        playerOneScore++;
        playerOneScoreBoard.innerText = playerOneScore;
    }

    if(playerOneScore === WINNING_SCORE){
        pauseGame(paused);
        ShowWinnerScreen("PlayerOne");
    }

    if(playerTwoScore === WINNING_SCORE){
        pauseGame(paused);
        ShowWinnerScreen("PlayerTwo");
    }
}

function pauseGame(){
    paused = !paused;
}

function ShowWinnerScreen(winner){
    gameContainer.style.display = "none";
    winnerScreenContainer.innerHTML = `<h1>The winner is: ${winner}!!!</h1>`;
    winnerScreenContainer.style.display = "flex";
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const PLAYER_YVELOCITY = 3;
var PONG_VELOCITY = 2;
var PONG_SIZE = 10;
var PONG_INCREMENTING_XVELOCITY = 0.1;
var PONG_INCREMENTING_YVELOCITY = 0.1;
var WINNING_SCORE = 10;
var paused = true;
var powerUps = PowerUps;

const paddleOneKeyBoardControlMap = new KeyboardControlMap(KeyCode.KeyW, KeyCode.KeyS, KeyCode.KeyA, KeyCode.KeyD, KeyCode.Space);
var paddleOne = new Paddle(ctx, 0, (canvas.height - 50), 0, 0, 50, 10, "#000000", paddleOneKeyBoardControlMap);

const paddleTwoKeyBoardControlMap = new KeyboardControlMap(KeyCode.ArrowUp, KeyCode.ArrowDown, KeyCode.ArrowLeft, KeyCode.ArrowRight, KeyCode.Space);
var paddleTwo = new Paddle(ctx, (canvas.width - 10), (canvas.height - 50), 0, 0, 50, 10, "#000000", paddleTwoKeyBoardControlMap);

var paddles = [paddleOne, paddleTwo];

var pong = new Pong(ctx, (canvas.width / 2), (canvas.height / 2), PONG_VELOCITY, PONG_VELOCITY, PONG_SIZE, PONG_SIZE, "#000000");

var boardObjects = [paddleOne, paddleTwo, pong];

var playerOneScore = 0;
const playerOneScoreBoard = document.querySelector("#playerOneScoreBoard");
playerOneScoreBoard.innerText = playerOneScore;

var playerTwoScore = 0;
const playerTwoScoreBoard = document.querySelector("#playerTwoScoreBoard");
playerTwoScoreBoard.innerText = playerTwoScore;

const startGameContainer = document.querySelector("#startGameContainer");
const startButton = document.querySelector("#startButton");
const winningScoreInputField = document.querySelector("#winningScoreInputField");
const pongVelocityInputField = document.querySelector("#pongVelocityInputField");
const pongSizeInputField = document.querySelector("#pongSizeInputField");
const pongIncrementingXVelocityInputField = document.querySelector("#pongIncrementingXVelocityInputField");
const pongIncrementingYVelocityInputField = document.querySelector("#pongIncrementingYVelocityInputField");
const winningScoreField = document.querySelector("#winningScoreField");
const gameContainer = document.querySelector("#gameContainer");
const gameButtonContainer = document.querySelector("#gameButtonContainer");
const titleButton = document.querySelector("#titleButton");
const pauseButton = document.querySelector("#pauseButton");
const winnerScreenContainer = document.querySelector("#winnerScreenContainer");

titleButton.addEventListener('click', (event) => {
    
    pauseGame(paused);
    cancelAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    PONG_VELOCITY = 2;
    PONG_SIZE = 10;
    PONG_INCREMENTING_XVELOCITY = 0.1;
    PONG_INCREMENTING_YVELOCITY = 0.1;
    WINNING_SCORE = 10;
    paused = true;
    paddleOne = new Paddle(ctx, 0, (canvas.height - 50), 0, 0, 50, 10, "#000000", paddleOneKeyBoardControlMap);
    paddleTwo = new Paddle(ctx, (canvas.width - 10), (canvas.height - 50), 0, 0, 50, 10, "#000000", paddleTwoKeyBoardControlMap);
    pong = new Pong(ctx, (canvas.width / 2), (canvas.height / 2), PONG_VELOCITY, PONG_VELOCITY, PONG_SIZE, PONG_SIZE, "#000000");
    playerOneScore = 0;
    playerOneScoreBoard.innerText = playerOneScore;
    playerTwoScore = 0;
    playerTwoScoreBoard.innerText = playerTwoScore;

    setTimeout(() => {
        startGameContainer.style.display = "flex";
        gameContainer.style.display = "none";
        gameButtonContainer.style.display = "none";
    }, 1000)

}, false);

pauseButton.addEventListener('click', (event) => {
    
    pauseGame(paused);
    animate();

}, false);

startButton.addEventListener('click', (event) => {
    
    WINNING_SCORE = parseInt(winningScoreInputField.value) || WINNING_SCORE;
    winningScoreField.innerText = WINNING_SCORE;
    PONG_VELOCITY = parseInt(pongVelocityInputField.value) || PONG_VELOCITY;
    PONG_SIZE = parseInt(pongSizeInputField.value) || PONG_SIZE;
    PONG_INCREMENTING_XVELOCITY = parseInt(pongIncrementingXVelocityInputField.value) || PONG_INCREMENTING_XVELOCITY;
    PONG_INCREMENTING_YVELOCITY = parseInt(pongIncrementingYVelocityInputField.value) || PONG_INCREMENTING_YVELOCITY;
    pong.setSize(PONG_SIZE)
        .setXVelocity(PONG_VELOCITY)
        .setYVelocity(PONG_VELOCITY)
        .setIncrementingXVelocity(PONG_INCREMENTING_XVELOCITY)
        .setIncrementingYVelocity(PONG_INCREMENTING_YVELOCITY);
    startGameContainer.style.display = "none";
    gameContainer.style.display = "flex";
    gameButtonContainer.style.display = "flex";

    setTimeout(() => { 
        pauseGame(paused);
        animate();
    }, 1000)

}, false);

document.addEventListener('keydown', (event) => {
        
    paddleOne.move(event, PLAYER_YVELOCITY);
    // paddleOne.bump(event, pong);
    paddleTwo.move(event, PLAYER_YVELOCITY);
    // paddleTwo.bump(event, pong);

}, false);

document.addEventListener('keyup', (event) => {
    
    paddleOne.stop(event);
    paddleTwo.stop(event);

}, false);

document.addEventListener('keydown', (event) => {
        
    if(event.code ==="Space"){
        pong.xVelocity *= powerUps[(Math.floor(Math.random() * powerUps.length))]; 
    }

}, false);
