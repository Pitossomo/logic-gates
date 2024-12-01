// Seleciona o elemento canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Ajusta as dimensões do canvas para se adequar à tela
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

// Função para desenhar uma porta lógica AND
function drawANDGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.arcTo(x + 100, y, x + 100, y + 50, 50);
    ctx.arcTo(x + 100, y + 100, x + 50, y + 100, 50);
    ctx.lineTo(x, y + 100);
    ctx.closePath();
    ctx.stroke();
}

// Função para desenhar uma porta lógica OR
function drawORGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 30, y + 50, x, y + 100);
    ctx.quadraticCurveTo(x + 70, y + 100, x + 100, y + 50)
    ctx.quadraticCurveTo(x + 70, y , x, y)
    ctx.closePath();
    ctx.stroke();
}

// Função para desenhar uma porta lógica OR
function drawXORGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x - 15, y);
    ctx.quadraticCurveTo(x + 15, y + 50, x - 15, y + 100);
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 30, y + 50, x, y + 100);
    ctx.quadraticCurveTo(x + 70, y + 100, x + 100, y + 50)
    ctx.quadraticCurveTo(x + 70, y , x, y)
    ctx.closePath();
    ctx.stroke();
}

// Função para desenhar uma porta lógica AND
function drawNANDGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.arcTo(x + 100, y, x + 100, y + 50, 50);
    ctx.arcTo(x + 100, y + 100, x + 50, y + 100, 50);
    ctx.lineTo(x, y + 100);
    ctx.closePath();
    ctx.stroke();
    ctx.moveTo(x + 100, y + 50)
    ctx.beginPath();
    ctx.arc(x + 110, y + 50, 10, 0, Math.PI*2, false)
    ctx.stroke();
}

// Função para desenhar uma porta lógica OR
function drawXNORGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x - 15, y);
    ctx.quadraticCurveTo(x + 15, y + 50, x - 15, y + 100);
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 30, y + 50, x, y + 100);
    ctx.quadraticCurveTo(x + 70, y + 100, x + 100, y + 50)
    ctx.quadraticCurveTo(x + 70, y , x, y)
    ctx.closePath();
    ctx.stroke();
    ctx.moveTo(x + 100, y + 50)
    ctx.beginPath();
    ctx.arc(x + 110, y + 50, 10, 0, Math.PI*2, false)
    ctx.stroke();
}

// Função para desenhar uma porta lógica AND
function drawNOTGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y+50);
    ctx.lineTo(x, y + 100);
    ctx.closePath();
    ctx.stroke();
    ctx.moveTo(x + 100, y + 50)
    ctx.beginPath();
    ctx.arc(x + 110, y + 50, 10, 0, Math.PI*2, false)
    ctx.stroke();
}

// Desenha as portas lógicas
drawANDGate(50, 50);
drawORGate(200, 50);
drawXORGate(350, 50);
drawNANDGate(50, 200);
drawXNORGate(200, 200)
drawNOTGate(350, 200)
