const View = require("./ttt-view.js");
const Game = require("../.././solution/game.js");

$( () => {
  const game = new Game();
  let $el = $(".ttt");
  const view = new View(game, $el);
  view.setupBoard();
  view.bindEvents();
});
