import mongoose, { Schema, Document } from 'mongoose';

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
        ore: { type: Number, default: 0 }
    }
    // Weitere Felder und Validierungen hier...
});

export default mongoose.model<IPlayer>('Player', playerSchema);
