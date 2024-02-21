// DevelopmentCards.js
import React from 'react';

const DevelopmentCards = ({ cards }) => {
  // Logik und Darstellung der Entwicklungskarten
  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>{card.name}</div>
      ))}
    </div>
  );
};

export default DevelopmentCards;
