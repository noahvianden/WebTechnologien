import { Resources } from './Resources';
import { DevelopmentCard } from './DevelopmentCard';

export interface Player {
  id: string;
  name: string;
  resources: Resources;
  developmentCards: DevelopmentCard[];
  // Weitere spielerbezogene Eigenschaften
  color: string;
  points: number;
  settlements: number;
  cities: number;
  roads: number;
  longestRoad: boolean;
  largestArmy: boolean;
  // Weitere spielerbezogene Eigenschaften können hier hinzugefügt werden
}
