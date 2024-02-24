export enum DevelopmentCardType {
    KNIGHT = 'knight',
    VICTORY_POINT = 'victory_point',
    ROAD_BUILDING = 'road_building',
    MONOPOLY = 'monopoly',
    YEAR_OF_PLPLENTY = 'year_of_plenty'
  }
  
  export interface DevelopmentCard {
    id: string;
    type: DevelopmentCardType;
  }
  
  // Implementierung der Klasse DevelopmentCard
  class DevelopmentCardImpl implements DevelopmentCard {
    id: string;
    type: DevelopmentCardType;
  
    constructor(id: string, type: DevelopmentCardType) {
      this.id = id;
      this.type = type;
    }
  }
  
  export default DevelopmentCardImpl;
  