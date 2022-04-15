// Store elements from HTML file

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

//Get access to canvas tag's 2D drawing functions

const ctx = canvas.getContext('2d');

// Numerous values to be used in functions later

let size = 20;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

// When mouseclick is down, variables equal cursor position

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

// When mouseclick is released, variables revert to original values

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

// While mouse is moving and mouseclick is down (isPressed = true):

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        // Call both functions to colour in cursor position on canvas
    
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

// Creates filled-in circle on canvas

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
};

// Creates line from one point to another on canvas

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
};

// When plus button is clicked, size increases by 5 until 50

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    };

    // Call size display function

    updateSizeOnScreen();
});

// When minus button is clicked, size decreases until 5

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    };

    // Call size display function

    updateSizeOnScreen();
});

// When color input value is changed, color variable changes

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

// When delete button is clicked, canvas is cleared

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Size display changes according to size variable

function updateSizeOnScreen() {
    sizeEl.innerText = size;
};
