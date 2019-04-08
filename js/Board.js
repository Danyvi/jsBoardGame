class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces
   *  @return {array}    An array of sapce objects
   */
  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }

      spaces.push(column);
    }

    return spaces;
  }

  drawHTMLBoard() {
    for (let i = 0; i < this.spaces.length; i++) {
      this.spaces.drawSVGSpace();
    }
  }
}

// we are not passing any argument to the constructor moethod because each game
// will only have one  board object and
// we are statically setting the number of rows and columns