import mongoose, { Schema, Document } from 'mongoose';

// Definition des Schemas für das Spiel
interface IGame {
  // Andere Eigenschaften von IGame
  status: string; // oder den korrekten Typ für den Status
}

const gameSchema: Schema = new Schema({
  // Ihre Schema-Definition hier
});

// Exportieren Sie das Mongoose-Modell für das Spiel
const Game = mongoose.model<IGame>('Game', gameSchema);

export default Game;