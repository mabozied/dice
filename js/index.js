


// Create a random Number between 1 - 6

var randomNumber1 = Math.ceil( Math.random(1) * 6 );

// Use the random number created in the last step to pick out
// a random dice image between dice1.png to dice 6.png
// and assign it to image 1

var randomSrc1 = "images/dice" + randomNumber1 +".png";

document.querySelector(".img1").setAttribute("src", randomSrc1);

// Create a random Number between 1 - 6

var randomNumber2 = Math.ceil( Math.random(1) * 6 );

// Use the random number created in the last step to pick out
// a random dice image between dice1.png to dice 6.png
// and assign it to image 2

var randomSrc2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".img2").setAttribute("src", randomSrc2);

// Change the text in the h1, (which currently says Refresh Me) to
// show which user won or if there was a draw depending on the dice
// values of player 1 (left) and player 2 (right).

if (randomNumber1 > randomNumber2) {
  document.querySelector("#title").innerHTML = "Player 1 Wins 🏆";
  } else if (randomNumber2 > randomNumber1){
    document.querySelector("#title").innerHTML = "🏆 Player 2 Wins";
} else {
  document.querySelector("#title").innerHTML = "Refres Again!";
}

