class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /**
   *  Gets associated htmlToken
   *  @return {element} Html element associated with token object
   */
  get htmlToken() {
    /* 
    Basically it returns the Element of the token. 
    We created 'div' element and stored it in 'const token'
    This getter would return that specific 'div' element
    */
    return document.GetElementById(this.id);
  }

  /**
   * Braws new HTML token
   */
  drawHTMLToken() {
    const token = document.createElement("DIV");
    document.getElementById("game-board-underlay").appendChild(token);
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    token.style.backgroundColor = this.owner.color;
  }
}
// Note the double dot notation this.owner.color
// this is how you access properties or methods of objects
// that are stored inside properties of other objects.
// In fact the Token object has a property called owner that is holding
// a Player object
// Any of that player object's properties or methods can be accessed
// inside the token class by using this.owner.property or method.name
