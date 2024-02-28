import { Resources } from './Resources'; // Importiere die Ressourcenklasse für Spielerressourcen
import { DevelopmentCard } from './DevelopmentCard'; // Importiere die Entwicklungskartenklasse für Spielerentwicklungskarten

export interface Player {
  id: string; // ID des Spielers
  name: string; // Name des Spielers
  resources: Resources; // Ressourcen des Spielers
  developmentCards: DevelopmentCard[]; // Entwicklungskarten des Spielers
  // Weitere spielerbezogene Eigenschaften
  color: string; // Farbe des Spielers
  points: number; // Punkte des Spielers
  settlements: number; // Anzahl der Siedlungen des Spielers
  cities: number; // Anzahl der Städte des Spielers
  roads: number; // Anzahl der Straßen des Spielers
  longestRoad: boolean; // Gibt an, ob der Spieler die längste Handelsstraße besitzt
  largestArmy: boolean; // Gibt an, ob der Spieler die größte Rittermacht besitzt
}
