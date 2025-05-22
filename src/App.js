import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import CardBar from './components/CardBar';
import { fullDeck } from './data/deck';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [deck, setDeck] = useState(() => [...fullDeck].sort(() => 0.5 - Math.random()).slice(0, 5));

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 960,
      height: 640,
      backgroundColor: '#1d1d1d',
      parent: 'game-container',
      scene: [new GameScene()],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      }
    };
    const game = new Phaser.Game(config);
    window.__PHASER_GAME__ = game;

    return () => game.destroy(true);
  }, []);

  useEffect(() => {
    if (window.setSelectedCard) {
      window.setSelectedCard(selectedCard);
    }
  }, [selectedCard]);

  return (
    <>
      <div id="game-container" />
      <CardBar deck={deck} setSelectedCard={setSelectedCard} />
    </>
  );
}

export default App;
