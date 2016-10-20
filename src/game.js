Game = function() {
  this.board = [[null, null, null],
                [null, null, null],
                [null, null, null]]
};

Game.prototype = {
  move: function(player, x, y) {
    if (this.board[y][x] !== null) {
      throw new Error("That spot is already taken")
    }
    else if(player == "player1"){
      this.board[y][x] = "O"
    } else {
      this.board[y][x] = "X"
    }
  }
}
