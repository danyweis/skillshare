const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeRect(0, 0, canvas.width, canvas.height);

let snake = [
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
];

function drawPiece(pc) {
    console.log("call");
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.fillRect(pc.x, pc.y, 10, 10);
    ctx.strokeRect(pc.x, pc.y, 10, 10);
}

function drawSnake() {
    snake.forEach((pcs) => {
        drawPiece(pcs);
    });
}

drawSnake();
