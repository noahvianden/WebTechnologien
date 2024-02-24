// models/Hexagon.ts

export interface Hexagon {
    id: string;
    resource: 'brick' | 'wood' | 'sheep' | 'wheat' | 'ore' | 'desert';
    numberToken: number | null; // Würfelzahl auf der Kachel (nur bei Rohstoffkacheln)
    // Weitere hexagonbezogene Eigenschaften können hier hinzugefügt werden
  }
  