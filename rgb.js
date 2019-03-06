var numOfSquares = 6;
var colors = [];
var winColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");

colorDisplay.textContent = winColor;

init();

function init() {
	setUpModes(); 
	squareSetUp();
	reset();
}

function setUpModes() {
	for (var i=0; i<modes.length; i++){
		modes[i].addEventListener("click", function() {
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");

			this.classList.add("selected");

			this.textContent==="Easy" ? numOfSquares = 3 : numOfSquares = 6;

			reset();

		});
	}
}

function squareSetUp() {
	for (var i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === winColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			h1.style.background = "steelbue";
		}	
	});
	}
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color){
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

