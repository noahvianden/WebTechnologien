// ActionPanel.js
import React from 'react';

const ActionPanel = ({ onAction }) => {
  // Logik und Darstellung des Aktionspanels
  return (
    <div>
      <button onClick={() => onAction('build')}>Bauen</button>
      {/* Weitere Aktionen hinzufügen */}
    </div>
  );
};

export default ActionPanel;