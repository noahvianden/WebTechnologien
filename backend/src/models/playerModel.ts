import mongoose, { Schema, Document } from 'mongoose';

interface IStructure {
  type: 'Settlement' | 'City';
  position: { x: number; y: number };
}

interface IRoad {
  position: { start: { x: number; y: number }, end: { x: number; y: number } };
}

export interface IPlayer extends Document {
  name: string;
  color: string;
  resources: {
    brick: number;
    wood: number;
    wheat: number;
    sheep: number;
    ore: number;
  };
  structures: IStructure[];
  roads: IRoad[];
  developmentCards: string[];
  victoryPoints: number;
  // Weitere Attribute und Methoden hier...
}

const playerSchema: Schema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  resources: {
    brick: { type: Number, default: 0 },
    wood: { type: Number, default: 0 },
    wheat: { type: Number, default: 0 },
    sheep: { type: Number, default: 0 },
    ore: { type: Number, default: 0 },
  },
  structures: [{
    type: { type: String, enum: ['Settlement', 'City'] },
    position: { x: Number, y: Number },
  }],
  roads: [{
    position: { start: { x: Number, y: Number }, end: { x: Number, y: Number } },
  }],
  developmentCards: [{ type: String }],
  victoryPoints: { type: Number, default: 0 },
  // Weitere Felder und Validierungen hier...
});

export default mongoose.model<IPlayer>('Player', playerSchema);
