# Create a board as well as update board
board = [["_", "_", "_"], 
         ["_", "_", "_"], 
         ["_", "_", "_"]]

def display_board():
    for i in board:
        print(i)

# Creating a class that represents a player
class Player():

    def __init__(self, name, symbol):
        self.name = name
        self.symbol = symbol

# Get info about the player
def players():
    name = input("What is your player name? ")
    symbol = input("Choose a symbol to represent your player: \n")
    player_info = Player(name, symbol)
    return player_info

# Show players what their name is and the symbol that represents them
def show_players(player1, player2):
    
    print(f"Player, {player1.name}'s symbol is {player1.symbol}")
    print(f"Player, {player2.name}'s symbol is {player2.symbol}\n")

# Swap who's turn it is
def swap_turn(player1, player2, players_turn):
    if players_turn == player1:
        return player2
    else:
        return player1

# Get player whos turn it is to pick a location
def player_choice(players_turn, board):
    player_choice_row = int(input(f"{players_turn.name} pick a row: "))
    player_choice_column = int(input(f"{players_turn.name} pick a column: "))
    return update_board(player_choice_row, player_choice_column, board, players_turn)

# Update board with player choice
def update_board(player_choice_row, player_choice_column, board, players_turn):
    board[player_choice_row][player_choice_column] = players_turn.symbol

# Add logic to decide who wins/draws

def check_win(board, players_turn):
    # Check rows
    for row in board:
        if all(cell == players_turn.symbol for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(board[row][col] == players_turn.symbol for row in range(3)):
            return True

    # Check diagonals
    if all(board[i][i] == players_turn.symbol for i in range(3)) or \
       all(board[i][2-i] == players_turn.symbol for i in range(3)):
        return True

    return False

def check_draw(board):
    for i in range(3):
        for j in range(3):
            if board[i][j] != "_":
                continue
            else: return False
    return True
          
"""
-- This is the loop we expect each player turn execution --
    player_choice(players_turn, board)
    display_board()
    check_win(board, players_turn)
    check_draw(board, players_turn)
"""
# Make the main game function
def game_active():
    # Create a bool flag
    game = True

    # Create two player instances
    player1 = players()
    player2 = players()

    # Default to player 1 being the one to start game
    players_turn = player1

    # While game == True game will continue
    while game:

        # Get player1's choice
        player_choice(players_turn, board)

        # Display board
        display_board()

        # Check win and draw conditions
        if check_win(board, players_turn) == True:
            print(f"{players_turn.name} has won!")
            break
        elif check_draw(board) == True:
            print("Game is a draw")
            break
        
        # Change players turn
        players_turn = swap_turn(player1, player2, players_turn)

game_active()

""" 
    TODO: Make everything more user friendly
    1. Off by one for picking rows and columns
    2. Changing so other people cant take the same cell
    3. Players cant have the same symbol and can only use a single char
    4. Add newlines for print funcs
"""