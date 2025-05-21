import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    // Load assets (replace with your own as needed)
    this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
  }

  create() {
    // Add some simple content
    this.add.text(100, 50, 'Welcome to Demi Dungeons', {
      font: '28px Arial',
      fill: '#ffffff',
    });

    // Add the logo to the screen
    const logo = this.add.image(400, 300, 'logo');
    logo.setScale(0.5);
    logo.setInteractive();

    // Add a click effect
    logo.on('pointerdown', () => {
      this.add.text(200, 400, 'Logo clicked!', {
        font: '20px Arial',
        fill: '#ffcc00',
      });
    });
  }

  update() {
    // Optional game loop logic
  }
}
