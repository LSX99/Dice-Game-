// ===================== FIRST RANDOM NUMBER ======================

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource = 'images/dice' + randomNumber1 + '.png'; //images/dice1.png - images/dice2.png

document.querySelectorAll('img')[0].setAttribute('src', randomImageSource); //changing image1

// ===================== SECOND RANDOM NUMBER ======================

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1], setAttribute('src', randomImageSource2); //changing image2

// ===================== CHANGING THE TITLE BASED ON RESULT ======================

// Player 1 Wins
if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player 1 WINS!!!';
}

// Player 2 Wins
else if (randomNumber2 > randomNumber1) {
	document.querySelector('h1').innerHTML = 'Player 2 WINS!!!';
}

// Draw
else {
	document.querySelector('h1').innerHTML = 'Game is a DRAW...';
}
