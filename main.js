canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

carX = 30;
carY = 340;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	imgBG = new Image();
	imgBG.onload = uploadBackground;
	imgBG.src = background_image;

	imgCAR = new Image();
	imgCAR.onload = uploadgreencar;
	imgCAR.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(imgBG, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(imgCAR, carX, carY, 100, 150);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (carY > 10){
		carY = carY - 5;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (carY < 440){
		carY = carY + 5;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (carX > 10){
		carX = carX - 5;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (carX < 890){
		carX = carX + 5;
		uploadBackground();
		uploadgreencar();
	}
}
