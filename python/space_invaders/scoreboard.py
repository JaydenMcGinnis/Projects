import pygame, json
from pygame.sprite import Group
from ship import Ship

class Scoreboard:
    """Report scoring information"""
    def __init__(self, si_game):
        self.si_game = si_game
        self.screen = si_game.screen
        self.screen_rect = self.screen.get_rect()
        self.settings = si_game.settings
        self.stats = si_game.stats

        # Font settings for scoring information
        self.text_color = (230, 230, 230)
        self.font = pygame.font.SysFont(None, 48)

        # Prep initial score and highscore
        self.prep_score()
        self.prep_highscore()
        self.prep_level()
        self.prep_ships()


    def prep_score(self):
        """Turn the score into a rendered image"""
        rounded_score = round(self.stats.score, -1)
        score_str = f"SCORE: {rounded_score:,}"
        self.score_image = self.font.render(score_str, True, self.text_color,
                self.settings.bg_color)
        
        # Display the score at the top right of the screen
        self.score_rect = self.score_image.get_rect()
        self.score_rect.right = self.screen_rect.right - 20
        self.score_rect.top = 20

    def prep_highscore(self):
        """Turn the highscore into a rendered image"""
        high_score = round(self.stats.highscore, -1)
        highscore_str = f"HS: {high_score:,}"
        self.highscore_image = self.font.render(highscore_str, True, self.text_color,
                self.settings.bg_color)
        
        # Set the highscores xy values
        self.highscore_rect = self.highscore_image.get_rect()
        self.highscore_rect.centerx = self.screen_rect.centerx
        self.highscore_rect.top = self.screen_rect.top

    def prep_level(self):
        """Turn the level to an image"""
        level_str = str(self.stats.level)
        self.level_image = self.font.render(level_str, True, self.text_color,
                self.settings.bg_color)
        
        # Set the pos of the images xy values
        self.level_rect = self.level_image.get_rect()
        self.level_rect.right = self.score_rect.right
        self.level_rect.top = self.score_rect.bottom + 10

    def prep_ships(self):
        """Show how many ships are left"""
        self.ships = Group()
        for ship_number in range(self.stats.ships_left):
            ship = Ship(self.si_game)
            ship.rect.x = 10 + ship_number * ship.rect.width
            ship.rect.y = 10
            self.ships.add(ship)

    def show_score(self):
        """Displays the scores and level to the screen"""
        self.screen.blit(self.score_image, self.score_rect)
        self.screen.blit(self.highscore_image, self.highscore_rect)
        self.screen.blit(self.level_image, self.level_rect)
        self.ships.draw(self.screen)

    def check_highscore(self):
        """Check if new scored is greater than current highscore"""
        if self.stats.score > self.stats.highscore:
            self.stats.highscore = self.stats.score
            # Write new highscore to file
            with open('highscore.json', 'w') as file:
                json.dump(self.stats.highscore, file)
            self.prep_highscore()

