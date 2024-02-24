// controllers/moveController.ts

import { Request, Response } from 'express';

// Controller-Funktion zum Durchführen eines Spielzugs
export const performMove = (req: Request, res: Response) => {
  // Implementiere die Logik zum Durchführen eines Spielzugs hier
  const { gameId } = req.params;
  // Die Details des Spielzugs sollten im Request-Body enthalten sein
  const moveDetails = req.body;
  res.send(`Spielzug im Spiel mit ID ${gameId} durchgeführt: ${JSON.stringify(moveDetails)}`);
};
