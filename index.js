const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
let isDrawing = false;
let color = 'black';
let brushSize = 2;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, false);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    context.beginPath();
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    context.beginPath();
});

function draw(x, y, isDragging) {
    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.strokeStyle = color;

    if (!isDragging) {
      context.beginPath();
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
      context.stroke();
    }
}

document.getElementById('black').addEventListener('click', () => {
    color = 'black';
});

document.getElementById('pink').addEventListener('click', () => {
    color = '#F50057';
});

document.getElementById('blue').addEventListener('click', () => {
    color = '#2979FF';
});

document.getElementById('yellow').addEventListener('click', () => {
    color = '#FFD600';
});

document.getElementById('erase').addEventListener('click', () => {
    color = 'white';
});

document.getElementById('new').addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('slider').addEventListener('input', (e) => {
    brushSize = e.target.value;
    document.getElementById('brushSize').textContent = brushSize;
});
