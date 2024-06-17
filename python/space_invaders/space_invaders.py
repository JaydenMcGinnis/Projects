import sys, pygame
from time import sleep

from game_stats import GameStats
from settings import Settings
from ship import Ship
from bullets import Bullet
from alien import Alien
from button import Button
from scoreboard import Scoreboard

class AlienInvasion:
    """ Overall class to manage game assets and behavior """
    def __init__(self):
        """ initialize the game and create game resources """
        pygame.init()
        self.game_active = False
        self.clock = pygame.time.Clock()
        self.settings = Settings()

        # Display
        self.screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
        self.rect = self.screen.get_rect()
        self.settings.screen_width = self.screen.get_rect().width
        self.settings.screen_height = self.screen.get_rect().height
        pygame.display.set_caption("Alien Invasion!")

        # Stats and score
        self.stats = GameStats(self)
        self.scoreboard = Scoreboard(self)

        # Ship creation
        self.ship = Ship(self)

        # Sprite Groups
        self.bullets = pygame.sprite.Group()
        self.aliens = pygame.sprite.Group()
        self._create_fleet()

        # Make play button
        self.play_button = Button(self, "Play", 860, 515, (255,140,0))

        # Make difficulty settings
        self.easy_button = Button(self, "Easy", 650, 440, (0, 185, 0))
        self.medium_button = Button(self, "Medium", 860, 440, (0, 185, 185))
        self.hard_button = Button(self, "Hard", 1070 , 440, (185, 0, 0))

    def _create_alien(self, x_position, y_position):
        """Create a single alien and place it in a row"""
        new_alien = Alien(self)
        new_alien.x = x_position
        new_alien.rect.x = x_position
        new_alien.rect.y = y_position
        self.aliens.add(new_alien)

    def _create_fleet(self):
        """Create an alien and add to group"""
        # Create an alien and keep adding to the screen until theres no room left
        # Spacing between each alien is one alien width and one alien height apart.
        # Spacing between aliens will be one alien width apart
        alien = Alien(self)
        alien_width, alien_height = alien.rect.size
        
        current_x, current_y = alien_width, alien_height
        while current_y <(self.settings.screen_height - 13 * alien_height):
            while current_x < (self.settings.screen_width - 2 * alien_width):
                self._create_alien(current_x, current_y)
                current_x += 2 * alien_width

            # Finished a row; reset x value, and increment y value
            current_x = alien_width
            current_y += 2 * alien_height

    def _update_aliens(self):
        """Update the movement of the aliens"""
        self._check_fleet_edges()
        self.aliens.update()

        # Look for alien-ship collision
        if pygame.sprite.spritecollideany(self.ship, self.aliens):
            self._ship_hit()

        # Look for aliens hitting the bottom of the screen
        self._check_aliens_bottom()

    def _check_aliens_bottom(self):
        """Check if any aliens have reched the bottom of screen"""
        for alien in self.aliens.sprites():
            if alien.rect.bottom >= self.settings.screen_height:
                # Treat this the same as ship getting hit
                self._ship_hit()
                break
    
    def _check_fleet_edges(self):
        """Respond appropriately if any aliens have reached the edge"""
        for alien in self.aliens.sprites():
            if alien.check_edges():
                self._change_fleet_direction()
                break

    def _change_fleet_direction(self):
        """If alien is at edge change drop down and change direction"""
        for alien in self.aliens.sprites():
            alien.rect.y += self.settings.fleet_drop_speed
        self.settings.fleet_direction *= -1
        
    def _check_events(self):    
        """ Respond to keyboard and mouse events """
        for event in pygame.event.get():
            # check if event is then pygame.quit event
            if event.type == pygame.QUIT:
                sys.exit()
            # Check if movement keys are being used
            elif event.type == pygame.KEYDOWN:
                self._check_keydown_events(event)
            elif event.type == pygame.KEYUP:
                self._check_keyup_events(event)
            elif event.type == pygame.MOUSEBUTTONDOWN:
                mouse_pos = pygame.mouse.get_pos()
                self._check_play_button(mouse_pos)         
        
    def _check_keydown_events(self, event):
        """Responds to keydown events"""
        if event.key == pygame.K_RIGHT:
            self.ship.moving_right = True
        elif event.key == pygame.K_LEFT:
            self.ship.moving_left = True
        elif event.key == pygame.K_SPACE:
            self._fire_bullet()
        elif event.key == pygame.K_p and not self.game_active :
            self._start_game()
        elif event.key == pygame.K_q:
            sys.exit()

    def _check_keyup_events(self, event):
        """Responds to keyup events"""
        if event.key == pygame.K_RIGHT:
            self.ship.moving_right = False
        elif event.key == pygame.K_LEFT:
            self.ship.moving_left = False

    def _ship_hit(self):
        """Responds to your ship getting hit"""
        if self.stats.ships_left > 0:
            self.stats.ships_left -= 1
            self.scoreboard.prep_ships()
            self._reset_screen()

            # Pause
            sleep(0.5)
        else:
            self.game_active = False
            self.settings.initialize_dynamic_settings()
            pygame.mouse.set_visible(True)

    def _check_play_button(self, mouse_pos):
        """Start a new game when button pressed"""
        self._check_easy_button(mouse_pos)
        self._check_medium_button(mouse_pos)
        self._check_hard_button(mouse_pos)
        button_clicked = self.play_button.rect.collidepoint(mouse_pos)
        if button_clicked and not self.game_active:
            self.stats.reset_stats()
            self.scoreboard.prep_score()
            self.scoreboard.prep_ships()
            self._start_game()
        
    def _check_easy_button(self, mouse_pos):
        """Start a new game when button pressed"""
        button_clicked = self.easy_button.rect.collidepoint(mouse_pos)
        if button_clicked and not self.game_active:
            self.settings.increase_speed(1.5)
            
    def _check_medium_button(self, mouse_pos):
        """Start a new game when button pressed"""
        button_clicked = self.medium_button.rect.collidepoint(mouse_pos)
        if button_clicked and not self.game_active:
            self.settings.increase_speed(2.0)
            
    def _check_hard_button(self, mouse_pos):
        """Start a new game when button pressed"""
        button_clicked = self.hard_button.rect.collidepoint(mouse_pos)
        if button_clicked and not self.game_active:
            self.settings.increase_speed(2.8)

    def _fire_bullet(self):
        """Create new bullet and add it to the bullets group"""
        if len(self.bullets) < self.settings.bullets_allowed:
            new_bullet = Bullet(self)
            self.bullets.add(new_bullet)
                
    def _update_bullets(self):
        """Delete the bullets when their rect.bottom value <= 0"""
        self.bullets.update()
        for bullet in self.bullets:
            if bullet.rect.bottom <= 0:
                self.bullets.remove(bullet)
        self._check_bullet_alien_collision()

    def _check_bullet_alien_collision(self):
        """Respond to bullet alien collision"""
        # Remove the aliens that the bullets have hit
        collisions = pygame.sprite.groupcollide(
            self.bullets, self.aliens, True, True)
        
        if collisions:
            for aliens in collisions.values():
                self.stats.score += self.settings.alien_points * len(aliens)
            self.scoreboard.prep_score()
            self.scoreboard.check_highscore()

        # If aliens == False(aliens group is empty) destroy all existing bullets and create new fleet
        if not self.aliens:
            self.bullets.empty()
            self._create_fleet()
            self.settings.increase_speed(self.settings.speedup_scale)
            self.stats.level += 1
            self.scoreboard.prep_level()

    def _start_game(self):
        """Reset stats, player screen and set game active"""
        self.stats.reset_stats()
        self.game_active = True
        self._reset_screen()
        pygame.mouse.set_visible(False)

    def _reset_screen(self):
        """Removes existing aliens and bullets, creates new fleet and  recenters ship"""
        # get rid of any remaining bullets and aliens
        self.bullets.empty()
        self.aliens.empty()

        # Create new fleet and reset ship pos
        self._create_fleet
        self.ship.center_ship()

    def _update_screen(self):
        """ Update images on the screen and flip to new screen """
        # Redraw the screen for each pass of the loop
        self.screen.fill(self.settings.bg_color)
        # self.screen.blit(self.bg_image, (0, 0))
        for bullet in self.bullets.sprites():
            bullet.draw_bullet()
        self.ship.blitme()
        self.aliens.draw(self.screen)
        self.scoreboard.show_score()

        # Draw the play button to screen if the game is inactive
        if not self.game_active:
            self.play_button.draw_button()
            self.easy_button.draw_button()
            self.medium_button.draw_button()
            self.hard_button.draw_button()

        # Make the most recently drawn screen visable
        pygame.display.flip()

    def run_game(self):
        """ Start the main loop for the game """
        while True:
            self._check_events()
            if self.game_active:
                self.ship.update()
                self._update_bullets()
                self._update_aliens()
            self._update_screen() 
            self.clock.tick(60)

if __name__ == '__main__':
    """ Make a game instance, and run the game """
    ai = AlienInvasion()
    ai.run_game()