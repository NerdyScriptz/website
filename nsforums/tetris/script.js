// script.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 20;

let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
document.getElementById('highScore').textContent = highScore;

let gameInterval;
const difficultySelect = document.getElementById('difficulty');

// Tetromino shapes
const SHAPES = [
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1], [1, 1]],       // O
  [[1, 1, 0], [0, 1, 1]], // Z
  [[0, 1, 1], [1, 1, 0]], // S
  [[1, 0, 0], [1, 1, 1]], // L
  [[0, 0, 1], [1, 1, 1]], // J
  [[1, 1, 1, 1]]          // I
];

let currentPiece = randomPiece();
let currentX = 3, currentY = 0;

function randomPiece() {
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  return shape.map(row => row.slice());
}

function drawBlock(x, y) {
  ctx.fillStyle = 'white';
  ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (board[y][x]) drawBlock(x, y);
    }
  }
  drawPiece();
}

function drawPiece() {
  currentPiece.forEach((row, dy) => {
    row.forEach((value, dx) => {
      if (value) drawBlock(currentX + dx, currentY + dy);
    });
  });
}

function canMove(piece, x, y) {
  return piece.every((row, dy) => {
    return row.every((value, dx) => {
      if (!value) return true;
      const newX = currentX + dx + x;
      const newY = currentY + dy + y;
      return (
        newX >= 0 &&
        newX < COLS &&
        newY >= 0 &&
        newY < ROWS &&
        !board[newY][newX]
      );
    });
  });
}

function rotate(piece) {
  return piece[0].map((_, i) => piece.map(row => row[i]).reverse());
}

function dropPiece() {
  if (canMove(currentPiece, 0, 1)) {
    currentY++;
  } else {
    currentPiece.forEach((row, dy) => {
      row.forEach((value, dx) => {
        if (value) board[currentY + dy][currentX + dx] = 1;
      });
    });
    clearLines();
    currentPiece = randomPiece();
    currentX = 3;
    currentY = 0;
    if (!canMove(currentPiece, 0, 0)) {
      gameOver();
    }
  }
  drawBoard();
}

function clearLines() {
  const oldLength = board.length;
  board = board.filter(row => row.some(cell => cell === 0));
  while (board.length < ROWS) {
    board.unshift(Array(COLS).fill(0));
    score += 10;
  }
  if (board.length < oldLength) updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    document.getElementById('highScore').textContent = highScore;
  }
}

function gameOver() {
  alert('Game Over');
  clearInterval(gameInterval);
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  score = 0;
  updateScore();
  startGame();
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && canMove(currentPiece, -1, 0)) currentX--;
  else if (e.key === 'ArrowRight' && canMove(currentPiece, 1, 0)) currentX++;
  else if (e.key === 'ArrowDown') dropPiece();
  else if (e.key === ' ') currentPiece = rotate(currentPiece);
  drawBoard();
});

function startGame() {
  currentPiece = randomPiece();
  currentX = 3;
  currentY = 0;
  drawBoard();
  clearInterval(gameInterval);
  gameInterval = setInterval(dropPiece, parseInt(difficultySelect.value));
}

difficultySelect.addEventListener('change', startGame);

startGame();
