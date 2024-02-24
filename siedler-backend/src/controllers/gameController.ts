import { Request, Response } from 'express';
import Game from '../models/Game'; // Annahme: Ein Modell namens "Game" für die Spiele existiert

// Controller-Funktion zum Abrufen aller Spiele
export const getGames = async (req: Request, res: Response) => {
  try {
    // Abrufen aller Spiele aus der Datenbank
    const games = await Game.find();
    res.json(games); // Senden der Spiele als JSON-Antwort
  } catch (error) {
    console.error('Fehler beim Abrufen der Spiele:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Abrufen eines bestimmten Spiels
export const getGameById = async (req: Request, res: Response) => {

    try {
      // Abrufen der Spiel-ID aus den Routenparametern
      const { id } = req.params;
  
      // Suchen des Spiels in der Datenbank anhand der ID
      const game = await Game.findById(id);
      if (!game) {
        return res.status(404).send('Spiel nicht gefunden');
      }
  
      // Senden des Spiels als JSON-Antwort
      res.json(game);
    } catch (error) {
      console.error('Fehler beim Abrufen des Spiels:', error);
      res.status(500).send('Interner Serverfehler');
    }
  };
  

// Controller-Funktion zum Erstellen eines neuen Spiels
export const createGame = async (req: Request, res: Response) => {
  try {
    // Extrahieren der Spielinformationen aus dem Anforderungskörper
    const { name, description } = req.body;

    // Erstellen eines neuen Spiels mit den bereitgestellten Informationen
    const newGame = new Game({ name, description });

    // Speichern des neuen Spiels in der Datenbank
    await newGame.save();

    res.status(201).json(newGame); // Senden des neuen Spiels als JSON-Antwort
  } catch (error) {
    console.error('Fehler beim Erstellen des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Aktualisieren eines Spiels
export const updateGame = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    // Extrahieren der aktualisierten Informationen aus dem Anforderungskörper
    const { name, description } = req.body;

    // Suchen und Aktualisieren des Spiels in der Datenbank anhand der ID
    const updatedGame = await Game.findByIdAndUpdate(id, { name, description }, { new: true });

    if (!updatedGame) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    res.json(updatedGame); // Senden des aktualisierten Spiels als JSON-Antwort
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Löschen eines Spiels
export const deleteGame = async (req: Request, res: Response) => {
  try {
    // Abrufen der Spiel-ID aus den Routenparametern
    const { id } = req.params;

    // Suchen und Löschen des Spiels in der Datenbank anhand der ID
    const deletedGame = await Game.findByIdAndDelete(id);

    if (!deletedGame) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    res.send(`Spiel mit ID ${id} gelöscht`); // Senden der Bestätigungsnachricht
  } catch (error) {
    console.error('Fehler beim Löschen des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};
