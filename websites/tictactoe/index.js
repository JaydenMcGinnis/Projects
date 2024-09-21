// Game Board
const Gameboard = (function () {
  const rows = 3;
  const columns = 3;
  const board = [];

  //  Create a 2d array of cells
  const emptyBoard = () => {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i][j] = [];
      }
    }
  };

  emptyBoard();

  //  Updates board
  const updateBoard = function (row, column, activePlayer) {
    // Changes the cell on the board to activePlayers symbol
    if (board[row][column] != false) {
      return console.log("This cell is already taken");
    }
    board[row][column] = activePlayer.symbol;
    displayBoard();
  };

  // Get board
  const getBoard = () => board;

  // Display board
  const displayBoard = function () {
    board.map((row) => console.log(row));
  };

  return {
    updateBoard,
    getBoard,
  };
})();

// Players
const Players = function (
  playerOneName = "Player one",
  playerTwoName = "Player two"
) {
  // List of players
  const players = [
    { name: playerOneName, symbol: "X" },
    { name: playerTwoName, symbol: "O" },
  ];

  //  Set current active player
  let activePlayer = players[0];

  // Change player
  const changeActivePlayer = () => {
    activePlayer = activePlayer == players[0] ? players[1] : players[0];
  };

  // Get active player
  const getActivePlayer = () => activePlayer;

  return {
    changeActivePlayer,
    getActivePlayer,
  };
};

// Game logic
const GameController = (() => {
  // Inherit
  const board = Gameboard;
  const players = Players();

  const playRound = (rows, columns) => {
    const activePlayer = players.getActivePlayer();
    board.updateBoard(rows, columns, activePlayer);

    if (checkWin()) {
      console.log(`${activePlayer.name} wins!`);
      return; // Stop the game after a win
    }

    if (checkTie()) {
      console.log("It's a tie!");
      return; // Stop the game after a tie
    }

    players.changeActivePlayer();
  };

  // Check win conditions for active player
  const checkWin = () => {
    const currentBoard = board.getBoard(); // Fix board variable name

    // CHECK ROWS AND COLUMNS
    for (let i = 0; i < 3; i++) {
      if (
        (currentBoard[i][0] &&
          currentBoard[i][0] === currentBoard[i][1] &&
          currentBoard[i][1] === currentBoard[i][2]) ||
        (currentBoard[0][i] &&
          currentBoard[0][i] === currentBoard[1][i] &&
          currentBoard[1][i] === currentBoard[2][i])
      ) {
        return true;
      }
    }

    // CHECK DIAGONALS
    if (
      (currentBoard[0][0] &&
        currentBoard[0][0] === currentBoard[1][1] &&
        currentBoard[1][1] === currentBoard[2][2]) ||
      (currentBoard[0][2] &&
        currentBoard[0][2] === currentBoard[1][1] &&
        currentBoard[1][1] === currentBoard[2][0])
    ) {
      return true;
    }

    return null; // No winner yet
  };

  // Check if the game is tied
  const checkTie = () => {
    const currentBoard = board.getBoard();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (currentBoard[i][j] == false) {
          return false; // There is at least one empty cell, no tie
        }
      }
    }
    return true; // All cells are filled, it's a tie
  };

  return {
    playRound,
  };
})();
