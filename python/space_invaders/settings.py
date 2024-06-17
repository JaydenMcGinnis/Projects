class Settings():
    """ A place to store all settings for Alien Invasion """

    def __init__(self):
        """Initialize games static settings"""
        #self.screen_width = 1200
        #self.screen_height = 800
        self.bg_color = (30, 30, 30)
        self.ship_speed = 4

        # Bullet settings
        self.bullets_allowed = 25
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_color = (230, 230, 230)

        #alien settings
        self.fleet_drop_speed = 10
        self.alien_points = 30

        #ship settings
        self.ship_limit = 3
        
        # How quickly the game scales
        self.speedup_scale = 1.1
        self.score_scale = 1.5

        self.initialize_dynamic_settings()
    
    def initialize_dynamic_settings(self):
        """Initialize settings that change throughout the game"""
        self.ship_speed = 1.5
        self.bullet_speed = 2.5
        self.alien_speed = 1.0

        # fleet_direction of 1 represents right; -1 represents left
        self.fleet_direction = 1

    def increase_speed(self, num):
        """Increases the speed settings and alien point values"""
        self.ship_speed *= num
        self.bullet_speed *= num
        self.alien_speed *= num
        self.alien_points = int(self.alien_points * self.score_scale)


        
        
        