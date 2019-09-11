// Make BlackJack 
/* features : - Ask user if he wants to draw a card
                => if yes add a card 
              - Tell the user is he bust or not
              - Make pc draw a card and decide to quit or not
              - Try not to make the PC cheat, make some AI to play "intelligently"
              - When both players stop or bust ask if the player wants to play another round.
              - Update the user what happens all the time with prompts and alerts
   
    Nice to have features : - Instead of using prompts, use the images of cards. (very hard!)
                            - Make a gamble mechanic, every user starts with X chips, and before each round we ask what he wants to gamble
                            - If both the PC and the player bust the wins go to "the house".
*/

var deck = new Array();
var suits = ["spades", "diamons", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createCards() {

    // Making card deck

    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        
        for (var x = 0; x < suits.length; x++ ) {
            var weight = parseInt(values[i]);
            if(values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if(values[i] == "A")
                weight = 11;
            var card = {Value: values[i], Suit: suits[x], Weight: weight};
            deck.push(card);
        }
    }
}

function shuffle() {

    // switching values of two random cards
    // i < 1000 is for how many turns it shuffles , in this case 500 turns

    for(var i = 0; i < 500; i++){

        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}



var players = new Array();
function createPlayer(num) {
    players = new Array();
    for(var i = 1; i <= num; i++) {
        var hand = new Array();
        var player = {Name: 'Player ' + i, Id: i, Points: 0, Hand: hand};
        players.push(player);
    }
}



function playerUI() {

    // Make players interface

    document.querySelector('#players').innerHTML = '';
    for( var i = 0; i < players.length; i++) {
        var divPlayer = document.createElement('div');
        var divPlayerId = document.createElement('div');
        var divHand = document.createElement('div');
        var divPoints = document.createElement('div');

        divPoints.className = 'points';
        divPlayer.className = 'player';
        divPoints.id = 'points_' + i;
        divPlayer.id = 'player_' + i;
        divHand.id = 'hand' + i;

        divPlayerId.innerHTML = players[i].Id;
        divPlayer.appendChild(divPlayerId);
        divPlayer.appendChild(divHand);
        divPlayer.appendChild(divPoints);
        document.querySelector('#players').appendChild(divPlayer);
    }
}

