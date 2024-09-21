const gameboardModule = (() => {
  // Create board
  const board = ["", "", "", "", "", "", "", "", ""];

  // Every cell in board
  const cells = document.querySelectorAll(".cell");

  // Win combinations
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check win
  function checkWin() {
    // Check current board against win conditions
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(`${board[a]} is the winner!`);
        return true;
      }
    }
    return false;
  }

  // Check tie
  function checkTie() {
    return board.every((cell) => cell !== "");
  }

  // Update display
  function updateDisplay() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = board[i];
    }
  }

  // Reset board
  function resetBoard() {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
    updateDisplay();
  }

  return {
    updateDisplay,
    resetBoard,
    checkWin,
    checkTie,
    cells,
    board,
  };
})();

function players() {
  let player1 = document.querySelector(".player1").value;
  let player2 = document.querySelector(".player2").value;

  if (player1 === "") player1 = "Player 1";

  if (player2 === "") player2 = "Player 2";
  // List of players
  const playerList = [
    { name: player1, symbol: "X" },
    { name: player2, symbol: "O" },
  ];

  // Set active player
  let activePlayer = playerList[0];

  // Change active player
  function changeActivePlayer() {
    activePlayer =
      activePlayer === playerList[0] ? playerList[1] : playerList[0];
  }

  // Get active player
  function getActivePlayer() {
    return activePlayer;
  }

  return {
    changeActivePlayer,
    getActivePlayer,
    playerList,
  };
}

const displayControllerModule = (() => {
  const playerController = players();
  const notiify = document.querySelector(".notify");

  // Add event listener to all cells
  function playRound() {
    notiify.textContent = "";
    gameboardModule.resetBoard();
    gameboardModule.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");

        // Only allow a move if the cell is empty
        if (!gameboardModule.board[index]) {
          // Get the active player
          const currentPlayer = playerController.getActivePlayer();

          // Update the board with the current player's symbol
          gameboardModule.board[index] = currentPlayer.symbol;

          // Update the display
          gameboardModule.updateDisplay();

          // Check for win or tie
          if (gameboardModule.checkWin()) {
            notiify.textContent = `${currentPlayer.name} wins!`;
          } else if (gameboardModule.checkTie()) {
            notiify.textContent = "It's a tie!";
          } else {
            // Switch to the next player
            playerController.changeActivePlayer();
          }
        }
      });
    });
  }

  // Reset
  document.querySelector(".reset").addEventListener("click", () => {
    gameboardModule.resetBoard();
  });

  document.querySelector(".start").addEventListener("click", () => {
    playRound();
  });
})();
