import json

class GameStats:
    """Track statistics for Space Invaders"""
    def __init__(self, si_game):
        """Initialize statistics"""
        self.settings = si_game.settings
        self.reset_stats()
        self.highscore = self.read_highscore()

    def reset_stats(self):
        self.ships_left = self.settings.ship_limit
        self.score = 0
        self.level = 0

    def read_highscore(self):
        """reads highscore from json file"""
        with open('highscore.json', 'r') as file:
            return json.load(file)