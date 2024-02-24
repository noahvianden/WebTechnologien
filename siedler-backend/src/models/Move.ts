// models/Move.ts

export interface Move {
    id: string;
    playerId: string;
    type: 'build_settlement' | 'build_city' | 'build_road' | 'trade' | 'roll_dice';
    // Weitere zugbezogene Eigenschaften können hier hinzugefügt werden
  }
  