console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Player(name) {
  this.name = name;
  this.hand = [];
}

function Card(rank, suit, value) {
  this.suit = suit;
  this.rank = rank;
  this.value = value;
}

function Deck() {
  this.cards = [];
}

function Start([playerOne, playerTwo, playerThree, playerFour], numOfCards) {
  this.players = [
    new Player(playerOne),
    new Player(playerTwo),
    new Player(playerThree),
    new Player(playerFour)
  ];

  var deck = new Deck();
  deck.createDeck();
  deck.shuffleDeck();

  var cardDealt = 0;
  for (var i = 0; i < numOfCards; i++) {
    for (var j = 0; j < this.players.length; j++) {
      this.players[j].hand.push(deck.cards[cardDealt]);
      cardDealt++;
    }
    cardDealt += 4;
  }

  for (var n = 0; n < this.players.length; n++) {
    var handScore = 0;
    for (var m = 0; m < this.players[n].hand.length; m++) {
      handScore += this.players[n].hand[m].value;
    }
    this.players[n].score = handScore;
  }

  var winner = this.players[0];
  for (var z = 1; z < this.players.length; z++) {
    if (winner.score < this.players[z].score) {
      winner = this.players[z];
    }
  }
  console.log('winner winner chicken dinner:', winner.name);
}

Deck.prototype.createDeck = function () {
  var suits = ['hearts', 'clubs', 'diamonds', 'spades'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      this.cards.push(new Card(suits[i], ranks[j], values[j]));
    }
  }
};

Deck.prototype.shuffleDeck = function () {
  this.cards = _.shuffle(this.cards);
};

var game0 = new Start(['jim', 'tim', 'kim', 'lim'], 3);
console.log(game0);
