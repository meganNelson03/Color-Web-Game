var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var winColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = winColor;

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	winColor = pickColor();

	colorDisplay.textContent = winColor;
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
});

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	for (var i=0;i<squares.length;i++){
		
		squares[i].style.background = colors[i];
		squares[i].style.display = "initial";
	}
	h1.style.background = "steelblue";
});

resetButton.addEventListener("click", function() {
	
	colors = generateRandomColors(numOfSquares);
	winColor = pickColor();
	colorDisplay.textContent = winColor;
	
	for (var i=0; i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
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

