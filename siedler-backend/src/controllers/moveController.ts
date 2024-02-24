import { Request, Response } from 'express';

// Beispiel-Funktion zum Aktualisieren des Spielstands in einer Datenbank
function updateGameStatus(gameId: string, moveDetails: any) {
  // Hier wird der Spielstand aktualisiert
  console.log(`Spielstand für Spiel mit ID ${gameId} aktualisiert:`, moveDetails);
}

// Controller-Funktion zum Durchführen eines Spielzugs
export const performMove = (req: Request, res: Response) => {
  try {
    // Extrahiere die Spiel-ID aus den Routenparametern
    const { gameId } = req.params;

    // Überprüfe, ob das Spiel existiert (beispielhaft)
    const gameExists = true;
    if (!gameExists) {
      return res.status(404).send('Spiel nicht gefunden');
    }

    // Überprüfe, ob alle erforderlichen Informationen im Anforderungskörper vorhanden sind
    const { moveType, player, position } = req.body;
    if (!moveType || !player || !position) {
      return res.status(400).send('Ungültige Anforderung: Fehlende Informationen für den Spielzug');
    }

    // Führe den Spielzug aus (beispielhaft)
    const moveDetails = { moveType, player, position };
    updateGameStatus(gameId, moveDetails);

    // Senden der Erfolgsmeldung
    res.send(`Spielzug im Spiel mit ID ${gameId} durchgeführt: ${JSON.stringify(moveDetails)}`);
  } catch (error) {
    console.error('Fehler beim Durchführen des Spielzugs:', error);
    res.status(500).send('Interner Serverfehler');
  }
};
