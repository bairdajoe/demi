import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.selectedCard = null;
    this.units = [];
    this.enemies = [];
  }

  preload() {
    const sprites = {
      Slime: 'https://labs.phaser.io/assets/sprites/slime.png',
      Goblin: 'https://labs.phaser.io/assets/sprites/ogre.png',
      Archer: 'https://labs.phaser.io/assets/sprites/archer.png',
      Mage: 'https://labs.phaser.io/assets/sprites/wizball.png',
      Knight: 'https://labs.phaser.io/assets/sprites/knight.png'
    };
    for (const [key, url] of Object.entries(sprites)) {
      this.load.image(key, url);
    }
  }

  create() {
    this.unitGroup = this.physics.add.group();
    this.enemyGroup = this.physics.add.group();

    this.time.addEvent({
      delay: 3000,
      callback: () => {
        const enemy = this.enemyGroup.create(0, Phaser.Math.Between(100, 540), 'Goblin').setScale(0.8);
        this.physics.moveTo(enemy, 800, 320, 40);
      },
      loop: true
    });

    this.input.on('pointerdown', (pointer) => {
      if (this.selectedCard) {
        const x = Math.floor(pointer.x / 64) * 64;
        const y = Math.floor(pointer.y / 64) * 64;
        const newUnit = this.unitGroup.create(x, y, this.selectedCard).setScale(0.8);
        newUnit.type = this.selectedCard;
        this.units.push(newUnit);

        // Check for merge
        const match = this.units.find(u => u !== newUnit && u.type === newUnit.type && Phaser.Math.Distance.Between(u.x, u.y, newUnit.x, newUnit.y) < 10);
        if (match) {
          match.destroy();
          newUnit.setTexture('Knight');  // simple evolution
          newUnit.type = 'Knight';
        }
      }
    });

    window.setSelectedCard = (card) => {
      this.selectedCard = card;
    };

    this.physics.add.overlap(this.unitGroup, this.enemyGroup, (unit, enemy) => {
      enemy.destroy();
    });
  }

  update() {}
}
