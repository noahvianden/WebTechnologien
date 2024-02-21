// Resources.js
import React from 'react';

const Resources = ({ resources }) => {
  // Logik und Darstellung der Ressourcen
  return (
    <div>
      {Object.entries(resources).map(([resource, amount]) => (
        <div key={resource}>{`${resource}: ${amount}`}</div>
      ))}
    </div>
  );
};

export default Resources;