export interface Hexagon {
    id: string;
    resource: 'brick' | 'wood' | 'sheep' | 'wheat' | 'ore' | 'desert';
    numberToken: number | null; // Würfelzahl auf der Kachel (nur bei Rohstoffkacheln)
    hasRobber: boolean; // Gibt an, ob der Räuber auf dieser Kachel platziert ist
    image: string; // Pfad oder URL zum Bild der Kachel
    // Weitere hexagonbezogene Eigenschaften können hier hinzugefügt werden
}
