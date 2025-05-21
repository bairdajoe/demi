import React, { useEffect } from 'react';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

function App() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: '#1d1d1d',
      parent: 'phaser-container',
      scene: [GameScene],
    };

    new Phaser.Game(config);
  }, []);

  return <div id="phaser-container" style={{ width: '100vw', height: '100vh' }} />;
}

export default App;
