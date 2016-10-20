describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with an empty board', function() {
    expect(game.board).toEqual([[null, null, null],
                                [null, null, null],
                                [null, null, null]])
  });

  it('allows a player to move to an empty space', function() {
    game.move("player1", 1, 2);
    expect(game.board).toEqual([[null, null, null],
                                [null, null, null],
                                [null, "O", null]])
  });

  it('starts with an empty board', function() {
    game.board = ([[null, null, null],
                   [null, null, null],
                   [null, "O", null]])
    expect(function() {game.move("player2", 1, 2)}).toThrow(new Error("That spot is already taken"))
  });



});
