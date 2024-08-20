import pygame
from pygame.sprite import Sprite

class Bullet(Sprite):
    """A class to manage bullets from the ship"""
    def __init__(self, ai_game):
        super().__init__()
        """Create a bullet at the ships position"""        
        self.screen = ai_game.screen
        self.settings = ai_game.settings
        self.color = self.settings.bullet_color

        # Create a bullet rect at (0, 0) and then set correct pos
        self.rect = pygame.Rect(0, 0, self.settings.bullet_width, self.settings.bullet_height)
        self.rect.midtop = ai_game.ship.rect.midtop

        self.y = float(self.rect.y)
    def update(self):
        """Update the bullet for when it moves up the screen"""
        # Update the exact position of the bullet
        self.y -= self.settings.bullet_speed
        # update the rect position
        self.rect.y = self.y

    def draw_bullet(self):
        """Draw the bullet onto screen"""
        pygame.draw.rect(self.screen, self.color, self.rect)
