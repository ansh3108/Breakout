let board, context;
let boardWidth = 500, boardHeight = 500;

let playerWidth = 80, playerHeight = 10, playerVelocityX = 10;
let player = {
    x: boardWidth / 2 - playerWidth / 2,
    y: boardHeight - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
    velocityX: playerVelocityX
};

let ballWidth = 10, ballHeight = 10, ballVelocityX = 3, ballVelocityY = 2;
let ball = {
    x: boardWidth / 2,
    y: boardHeight / 2,
    width: ballWidth,
    height: ballHeight,
    velocityX: ballVelocityX,
    velocityY: ballVelocityY
};

let blockArray = [], blockWidth = 50, blockHeight = 10;
let blockColumns = 8, blockRows = 3, blockMaxRows = 10, blockCount = 0;
let blockX = 15, blockY = 45;
let score = 0, gameOver = false;
