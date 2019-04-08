class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken () {
      divElement=document.createElement("DIV");
      document.getElementById('game-board-underlay').innerHTML(divElement);
      divElement.setAttribute('id', this.id);
      divElement.setAttribute(('class', 'token');
      divElement.setAttribute(('style', `background-color: ${this.color}`);
  }

  get htmlToken () {
      /* 
      Basically it returns the Element of the token. 
      We created 'div' element and stored it in 'const token'
      This getter would return that specific 'div' element
      */
      return documentGetElementById(this.id);
  }
}
