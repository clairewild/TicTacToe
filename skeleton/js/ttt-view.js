class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    $("li").click((event) => {
      let $square = $(event.target);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.attr("data").split(",").map((el) => parseInt(el));
    this.game.playMove(pos);
    let mark = this.game.currentPlayer;
    $square.addClass(mark);
    $square.text(mark);
    if (this.game.isOver()) {
      $("body").append(`<h2>${this.game.currentPlayer} wins!</h2>`);
      $("li").off();
    }
  }

  setupBoard() {
    this.el.append("<ul></ul>");
    for (let i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
      let y = i % 3;
      $("ul").append(`<li data="${[x,y]}"> </li>`);
    }
  }
}

module.exports = View;
