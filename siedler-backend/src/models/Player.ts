// Player.ts

import { Resources } from './Resources';

export interface Player {
  id: string;
  name: string;
  resources: Resources;
  // Weitere spielerbezogene Eigenschaften können hier hinzugefügt werden
}
