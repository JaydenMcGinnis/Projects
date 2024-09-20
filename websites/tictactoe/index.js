// Gameboard Module
const gameboardModule = (() => {
  // Board
  const board = [];
  // Reset Board
  const resetBoard = () => {
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i][j] = ["x"];
      }
    }
  };
  // Display Board
  const displayBoard = () => {
    board.map((row) => console.log(row));
  };
  // Get Board
  const getBoard = () => board;
  // Update Board
  const markBoard = (row, column) => {
    board[row][column] = activePlayer.symbol;
  };

  return {
    resetBoard,
    displayBoard,
    getBoard,
    markBoard,
  };
})();

const playerModule = () => {
  // Player list
  const players = [];
  // Create Player
  const createPlayers = (name, symbol) => {
    if (board.length < 2) players.push({ name, symbol });
  };
  // Set active player
  const activePlayer = players[0].name;
  // Get active player
  const getActivePlayer = () => activePlayer;
  // Change active player
  const changeActivePlayer = () => {
    activePlayer = activePlayer ? board[0].name : board[1].name;
  };

  return {
    createPlayers,
    getActivePlayer,
    changeActivePlayer,
  };
};

const gameLogicModule = () => {
  // Game state
  const gameState = false;
  // Check game state
  const checkGameState = () => gameState;
  // Check winner
  const checkWin = () => {
    const currentBoard = board.getBoard();

    // CHECK ROWS
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[i][0] &&
        currentBoard[i][0] === currentBoard[i][1] &&
        currentBoard[i][1] === currentBoard[i][2]
      ) {
        return true;
      }
    }

    // CHECK COLUMNS
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[0][i] &&
        currentBoard[0][i] === currentBoard[1][i] &&
        currentBoard[1][i] === currentBoard[2][i]
      ) {
        return true;
      }
    }

    // CHECK DIAGONALS
    if (
      currentBoard[0][0] &&
      currentBoard[0][0] === currentBoard[1][1] &&
      currentBoard[1][1] === currentBoard[2][2]
    ) {
      return true;
    }

    if (
      currentBoard[0][2] &&
      currentBoard[0][2] === currentBoard[1][1] &&
      currentBoard[1][1] === currentBoard[2][0]
    ) {
      return true;
    }

    return null; // No winner yet
  };
  // Check tie
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
    checkGameState,
    checkTie,
    checkWin,
  };
};

const displayControllerModule = () => {
  // Piece game together
};
