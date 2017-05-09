var cards = ["queen" , "queen" , "king" , "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};



var flipCard = function() {
	var cardId = this.getAttribute('data-id'); 
	console.log("User flipped " + cards[cardId]);
	console.log(cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}

