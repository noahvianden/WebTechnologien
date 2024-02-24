// User.ts

import mongoose, { Schema, Document } from 'mongoose';

// Definition des Benutzer-Schemas
export interface UserDocument extends Document {
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Erstellen des Mongoose-Modells für den Benutzer
const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
