let numSquares = 3;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
let result = document.getElementById('message');
result.style.color = "#6633f3";
result.style.fontWeight = 800;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
resetButton.style.cursor = "pointer";
let easeBtn = document.querySelector("#easeBtn");
easeBtn.style.cursor = "pointer";
let mediumBtn = document.querySelector("#mediumBtn");
mediumBtn.style.cursor = "pointer";
let hardBtn = document.querySelector("#hardBtn");
hardBtn.style.cursor = "pointer";

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and put into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick "red" to 0 = 255
    var r = Math.floor(Math.random() * 256);
    //pick "green" to 0 = 255
    var g = Math.floor(Math.random() * 256);
    //pick "blue" to 0 = 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (var i = 0; i < squares.length; i++) {
    // add initial colors for square
    squares[i].style.background = colors[i];
    // add click event listener to square
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        let clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            colorDisplay.textContent = "You win!!!";
            colorDisplay.style.color = "white";
            resetButton.textContent = "Play again?";
            resetButton.style.cursor = "pointer";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#6633f3";
        }
    });
}

easeBtn.addEventListener("click", function() {
    easeBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#6633f3";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];

        } else {
            squares[i].style.display = "none";
        }
    }
});

mediumBtn.addEventListener("click", function() {
    easeBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#6633f3";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easeBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#6633f3";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    this.textContent = "New colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#6633f3";
    result.textContent = "";
});