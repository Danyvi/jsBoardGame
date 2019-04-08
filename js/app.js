/*
The app.js file is the interaction layer of our game:
where the DOM meets the objects. 
This file is used to initialize the Game objects and listen for user-triggered events,
like mouse clicks or keypresses.
*/

const game = new Game();

/**
 *  Listens for click on `#begin-game` and calls startGame() on game object
 *
 */

document.getElementById("begin-game").addEventListener("click", function() {
  game.startGame();

  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
