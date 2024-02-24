// models/Trade.ts

import mongoose, { Schema, Document } from 'mongoose';

// Definiere das Schema für das Trade-Modell
export interface TradeModel extends Document {
  gameId: string;
  initiator: string; // Benutzer, der den Handel initiiert
  recipient: string; // Benutzer, der den Handel empfängt
  offeredResources: { [key: string]: number }; // Angebotene Ressourcen (z. B. Holz: 3, Lehm: 2, ...)
  requestedResources: { [key: string]: number }; // Angeforderte Ressourcen (z. B. Getreide: 2, Wolle: 1, ...)
  status: 'pending' | 'accepted' | 'rejected'; // Status des Handels
}

const TradeSchema: Schema = new Schema({
  gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true }, // Annahme: Verweis auf das Spielmodell
  initiator: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Annahme: Verweis auf das Benutzermodell für den Initiator
  recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Annahme: Verweis auf das Benutzermodell für den Empfänger
  offeredResources: { type: Map, of: Number, required: true }, // Angebotene Ressourcen als Map (z. B. Holz: 3, Lehm: 2, ...)
  requestedResources: { type: Map, of: Number, required: true }, // Angeforderte Ressourcen als Map (z. B. Getreide: 2, Wolle: 1, ...)
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }, // Status des Handels
});

// Erstelle das Mongoose-Modell basierend auf dem Schema
const Trade = mongoose.model<TradeModel>('Trade', TradeSchema);

export default Trade;
