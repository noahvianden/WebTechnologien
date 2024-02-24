import React, { useEffect } from 'react';
import Phaser from 'phaser';

const GameScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      // Konfiguration von Phaser-Spiel
      // ...
    };

    new Phaser.Game(config);
  }, []);

  return <div id="game-container" />;
};

export default GameScene;
