// importiere die benötigten Module
import { Request, Response } from 'express';
import User from '../models/User'; 

// Controller-Funktion für die Registrierung eines neuen Benutzers
export const registerUser = async (req: Request, res: Response) => {
  
  console.log("sfsf");
  console.log(req.body);
  
  try {
    // Extrahiere Benutzerdaten aus der Anfrage
    const { username, password } = req.body;


    // Überprüfe, ob der Benutzer bereits existiert
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).send('Benutzername bereits vergeben');
    }

    // Erstelle einen neuen Benutzer
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).send('Registrierung erfolgreich');
  } catch (error) {
    console.error('Fehler bei der Registrierung:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion für das Einloggen eines Benutzers
export const loginUser = async (req: Request, res: Response) => {
  try {
    // Extrahiere Benutzerdaten aus der Anfrage
    const { username, password } = req.body;

    // Überprüfe, ob der Benutzer existiert und das Passwort korrekt ist
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).send('Ungültige Anmeldeinformationen');
    }

    // Hier könntest du auch eine Authentifizierungstoken erstellen und zurückgeben

    res.send('Login erfolgreich');
  } catch (error) {
    console.error('Fehler beim Einloggen:', error);
    res.status(500).send('Interner Serverfehler');
  }
};
export const logoutUser = (_req: Request, res: Response) => {
  try {
    // Hier können Sie die Authentifizierungssitzung beenden oder das Token ungültig machen
    // Zum Beispiel können Sie eine Session-Zeitüberschreitung für das Token setzen
    // oder das Token aus dem Benutzerobjekt entfernen, wenn Sie eine Authentifizierung mit Tokens verwenden

    // Senden Sie eine Bestätigungsmeldung
    res.send('Logout erfolgreich');
  } catch (error) {
    console.error('Fehler beim Ausloggen:', error);
    res.status(500).send('Interner Serverfehler');
  }
};
