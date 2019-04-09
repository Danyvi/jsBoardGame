class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   *  Return active player
   * @return {Object} player - The active player
   */
  get activePlayer() {
    return this.players.find(player => player.active); // we use find and not filter
  } // because we only look for a
  // single value. it returns the
  // first element, in our case
  // the only element that passes
  // the test.
  // the test in our case is:
  // does the player.active property
  // equals to true? is this the
  // active player?

  /**
   * Create two player objects
   * @return {array} An array of two player objects
   */
  createPlayers() {
    const players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13")
    ];
    return players;
  }

  
   *  Gets game ready for play
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
