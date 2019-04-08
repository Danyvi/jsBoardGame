class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21); // return value from the method call
    // using 'this' indicates that the method that we are calling will be
    // available on the object that we are initializing
  }
  /**
   *  Creates token objects for player
   *  @param {integer} num - Number of token objects to be created
   *  @return {array}  tokens - an array of new token objects
   */
  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }
}
