import { Hexagon } from './Hexagon';
import { Settlement } from './Settlement';
import { City } from './City';
import { Road } from './Road';
import IGame from './Game';



export interface GameBoard {
    hexagons: Hexagon[];
    settlements: Settlement[];
    cities: City[];
    roads: Road[];
    // Weitere brettbezogene Eigenschaften können hier hinzugefügt werden
  }
  