import pygame
from pygame.sprite import Sprite

class Alien(Sprite):
    def __init__(self, ai_game):
        super().__init__()
        self.screen = ai_game.screen

        # Load image and get rect of image
        self.image = pygame.image.load('images/alien.bmp')
        self.rect = self.image.get_rect()
        self.settings = ai_game.settings

        # Set initial pos of the rect
        self.rect.x = self.rect.width
        self.rect.y = self.rect.height

        # Convert pos to float val on x axis
        self.x = float(self.rect.x)
    
    def update(self):
        """move the alien to the right or left"""
        self.x += self.settings.alien_speed * self.settings.fleet_direction
        self.rect.x = self.x

    def check_edges(self):
        """Return True if alien is at edge of screen"""
        screen_rect = self.screen.get_rect()
        return (self.rect.right >= screen_rect.right) or (self.rect.left <= 0)