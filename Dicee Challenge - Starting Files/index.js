

let diceImageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

const randomNumber = Math.floor(Math.random() * 6);

function changeImage() {
  const elem = document.getElementById('player1Dice');
  elem.setAttribute("src", diceImageArray[randomNumber]);
}

changeImage();
