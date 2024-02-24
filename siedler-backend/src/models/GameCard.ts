export interface GameCard {
    id: string;
    type: 'resource' | 'development';
    name: string;
    description: string; // Beschreibung der Karte
    image: string; // Pfad oder URL zu einem Bild der Karte
    effects: string[]; // Liste von Effekten oder Aktionen der Karte
}
