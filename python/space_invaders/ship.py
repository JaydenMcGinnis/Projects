import pygame
from pygame.sprite import Sprite

class Ship(Sprite):
    """ A class to manage the ship """

    def __init__(self, si_game):
        """ Initialize the ship and set its starting position """
        super().__init__()
        self.screen = si_game.screen
        self.settings = si_game.settings
        self.screen_rect = si_game.screen.get_rect()

        # Load the image and get its rect
        self.image = pygame.image.load('images/player_ship.bmp')
        self.rect = self.image.get_rect()

        # Start player ship in the bottom middle of the screen
        self.rect.midbottom = self.screen_rect.midbottom

        # A flag representing movement of the ship
        self.moving_right = False
        self.moving_left = False

        # Store a float for the ships exact horizontal position
        self.x = float(self.rect.x)

    def blitme(self):
        """ Draw the ship at its current location """
        self.screen.blit(self.image, self.rect)

    def update(self):
        """Update the ships pos based on the movement flag"""
        # Update the ships x value, not the rect
        if self.moving_right and self.rect.right < self.screen_rect.right:
            self.x += self.settings.ship_speed
        if self.moving_left and self.rect.left > 0:
            self.x -= self.settings.ship_speed
        
        # Update the rect object from self.x
        self.rect.x = self.x

    def center_ship(self):
        """Center ship"""
        self.rect.midbottom = self.screen_rect.midbottom
        self.x = float(self.rect.x)
