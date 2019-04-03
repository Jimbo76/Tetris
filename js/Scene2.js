class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {

    // Load Tetromino
    this.load.spritesheet('i_block', 'images/i_block.png', {frameWidth: 128, frameHeight: 128});

    this.cursors = this.input.keyboard.createCursorKeys();
  };

  create() {
    this.add.text(20, 20, "Playing Game", {font: "25px Arial", fill: "yellow"});

    // Display Tetromino
    this.block = this.physics.add.sprite(400, 300, 'i_block', 0);
    this.block.setCollideWorldBounds(true);

    // Rotate Tetromino 90 degrees
    this.input.keyboard.on('keyup_SPACE', function (event) {
      this.block.setFrame(1);
    }, this);

    // Move Tetromino Right
    this.input.keyboard.on('keyup_RIGHT', function (event) {
      this.block.x += this.block.width/4;
    }, this);

    // Move Tetromino left
    this.input.keyboard.on('keyup_LEFT', function (event) {
      this.block.x -= this.block.width/4;
    }, this);

    this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: blockDrop,
      callbackScope: this
    });
  };


  update() {
  };
}

function blockDrop() {
  this.block.y += this.block.height/4;
}
