import { Request, Response } from 'express';
import GameModel from "../models/Game";

// Controller-Funktion zum Starten eines Spiels
export const startGame = async (req: Request, res: Response) => {
  const { gameId } = req.params;

  try {
    const game = await GameModel.findById(gameId);

    if (!game) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    if (game.status !== 'pending') {
      return res.status(400).send('Spiel kann nicht gestartet werden, da es bereits läuft oder beendet ist');
    }

    game.status = 'started';
    await game.save();

    return res.send(`Spiel mit ID ${gameId} gestartet`);
  } catch (error) {
    console.error('Fehler beim Starten des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Beenden eines Spiels
export const endGame = async (req: Request, res: Response) => {
  const { gameId } = req.params;

  try {
    const game = await GameModel.findById(gameId);

    if (!game) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    if (game.status !== 'started') {
      return res.status(400).send('Spiel kann nicht beendet werden, da es nicht läuft');
    }

    game.status = 'ended';
    await game.save();

    return res.send(`Spiel mit ID ${gameId} beendet`);
  } catch (error) {
    console.error('Fehler beim Beenden des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Zurücksetzen eines Spiels
export const resetGame = async (req: Request, res: Response) => {
  const { gameId } = req.params;

  try {
    const game = await GameModel.findById(gameId);

    if (!game) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    game.status = 'pending';
    await game.save();

    return res.send(`Spiel mit ID ${gameId} zurückgesetzt`);
  } catch (error) {
    console.error('Fehler beim Zurücksetzen des Spiels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};
