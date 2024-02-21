import React from 'react';

// Angenommen, Sie haben Komponenten für verschiedene Teile des Spiels
import ResourceBar from './ResourceBar';
import DevelopmentCards from './DevelopmentCards';
import PlayerHand from './PlayerHand';
import ActionPanel from './ActionPanel';

const GameBoard = ({ gameState, onAction }) => {
    // Destructuring, um die verschiedenen Zustände und Eigenschaften zu extrahieren
    const { players, currentPlayerId, developmentCards, resources } = gameState;
  
    // Einen gültigen Spieler finden oder null zurückgeben, wenn keiner gefunden wird
    const currentPlayer = players.find(p => p.id === currentPlayerId) || null;
  
    return (
      <div className="game-board">
        <h2>Spielbrett</h2>
        <ResourceBar resources={resources} />
        <DevelopmentCards cards={developmentCards} />
        {currentPlayer && <PlayerHand player={currentPlayer} />}
        <ActionPanel onAction={onAction} />
      </div>
    );    
  };
  
  export default GameBoard;
  
