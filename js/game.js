var config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [Scene1, Scene2]
};

window.onload = function () {
    let game = new Phaser.Game(config);
};

// =============================================================================
// Sprites
// =============================================================================

// =============================================================================
// Loading state
// =============================================================================

// =============================================================================
// Play state
// =============================================================================
