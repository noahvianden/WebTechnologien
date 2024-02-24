// models/Road.ts

export interface Road {
    id: string;
    playerId: string;
    positions: [number, number]; // Positionen auf dem Spielfeld (z. B. Kachelnummern)
    // Weitere straßenbezogene Eigenschaften können hier hinzugefügt werden
  }
  