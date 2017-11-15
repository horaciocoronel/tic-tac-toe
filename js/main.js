// Add DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {

  var container = document.querySelector('.container');
  var status = document.getElementById('status');
  var playButton = document.getElementById('button');
  var cells = document.querySelectorAll('.cell');
  var x = 'X';
  var o = 'O';
  var counter = 0;
  var player;
  var playerXArray = [];
  var playerOArray = [];
  winningCombinations = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"]
  ]
  var arrrayUserX = 0;
  var arrrayUserO = 0;
  container.addEventListener('click', gameLogic);
// debugger
function gameLogic(element){
  if (element.target.innerText === 'X' || element.target.innerText === 'O') {
    setTimeout(function(){ alert('Pick a different cell'); }, 50);
    currentArray = arrrayUserX
    player = 'X'
    counter--;
  } else if (counter %2 == 0) {
    // Player X turn
    player = 'X';
    var currentArray = playerXArray;
    playerXArray[arrrayUserX++] = element.target.getAttribute( 'id' );
    element.target.innerHTML = x;
  } else {
    // Player O turn
    player = 'O';
    var currentArray = playerOArray;
    playerOArray[arrrayUserO++] = element.target.getAttribute( 'id' );
    element.target.innerHTML = o;
  };
  isWinner(player, currentArray);
  counter++;
}

function isWinner(playerName, playerArray) {
  if (playerArray.length >= 3) {
    winningCombinations.forEach(function (element) {
      if (playerArray.includes(element[0]) &&
          playerArray.includes(element[1]) &&
          playerArray.includes(element[2])) {
            status.innerHTML = 'Player '+ playerName + ' won';
            menu();
          }
    })
  }
} // iswinner ending
  function menu() {
    container.removeEventListener('click', gameLogic);
    var playAgainButton = document.createElement('button');
    playAgainButton.innerHTML = 'Play Again?';
    playButton.append(playAgainButton);
    playAgain();
  } // menu ending

  function playAgain() {
      resetBoard();
      container.addEventListener('click', gameLogic);
    }//Ending playAgain

  function resetBoard() {
    playButton.addEventListener('click', function() {
      cells.forEach(function (cell){
        cell.innerText = ""
      })
      playerOArray = [];
      playerXArray = [];
      status.innerHTML = '';
      counter = 0;
      document.querySelector('button').remove();
    })
  } //Ending resetBoard
  });
