console.log("Up and running!");
var gameBoard = document.getElementById("gameBoard");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', hCard);
    gameBoard.appendChild(newCard);
  } };
  function hCard () {
    cardInPlay.push(this.getAttribute('data-card'));
    this.innerHTML = '<img src="' + this.getAttribute('data-card') + 'jpg">'
    if (cardInPlay.length === 2) {
      Match(cardInPlay);
      cardInPlay = [];
    } };
  var isMatch = function(array) {
    (array [0] === array[1]) ? alert("You have found a match!") : alert ("Try Again!")
    for (var i = 0; i < cards.length; i++) {
      document.getElementsByClassName('card')[i].innerHTML = " ";
    } };
