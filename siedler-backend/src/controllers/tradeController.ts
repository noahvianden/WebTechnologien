import { Request, Response } from 'express';
import Trade from '../models/Trade'; // Annahme: Ein Modell namens "Trade" für die Trades existiert

// Controller-Funktion zum Initiieren eines Handels
export const initiateTrade = async (req: Request, res: Response) => {
  try {
    // Extrahiere die Spiel-ID aus den Routenparametern
    const { gameId } = req.params;
    // Die Details des Handels sollten im Request-Body enthalten sein
    const tradeDetails = req.body;

    // Erstelle einen neuen Handel
    const newTrade = new Trade({ gameId, ...tradeDetails });
    // Speichere den neuen Handel in der Datenbank
    await newTrade.save();

    res.status(201).json(newTrade);
  } catch (error) {
    console.error('Fehler beim Initiieren des Handels:', error);
    res.status(500).send('Interner Serverfehler');
  }
};

// Controller-Funktion zum Akzeptieren eines Handels
export const acceptTrade = async (req: Request, res: Response) => {
    try {
      // Extrahiere die Spiel-ID und die Handels-ID aus den Routenparametern
      const { gameId, tradeId } = req.params;
  
      // Suche den Handel in der Datenbank anhand der Handels-ID
      const trade = await Trade.findById(tradeId);
  
      if (!trade) {
        return res.status(404).send('Handel nicht gefunden');
      }
  
      // Füge hier die Logik zum Akzeptieren des Handels hinzu
      trade.status = 'accepted'; // Beispiel: Setze den Status des Handels auf "akzeptiert"
      await trade.save();
  
      res.send(`Handel mit ID ${tradeId} im Spiel mit ID ${gameId} akzeptiert`);
    } catch (error) {
      console.error('Fehler beim Akzeptieren des Handels:', error);
      res.status(500).send('Interner Serverfehler');
    }
  };
  
  // Controller-Funktion zum Ablehnen eines Handels
  export const rejectTrade = async (req: Request, res: Response) => {
    try {
      // Extrahiere die Spiel-ID und die Handels-ID aus den Routenparametern
      const { gameId, tradeId } = req.params;
  
      // Suche den Handel in der Datenbank anhand der Handels-ID
      const trade = await Trade.findById(tradeId);
  
      if (!trade) {
        return res.status(404).send('Handel nicht gefunden');
      }
  
      // Füge hier die Logik zum Ablehnen des Handels hinzu
      trade.status = 'rejected'; // Beispiel: Setze den Status des Handels auf "abgelehnt"
      await trade.save();
  
      res.send(`Handel mit ID ${tradeId} im Spiel mit ID ${gameId} abgelehnt`);
    } catch (error) {
      console.error('Fehler beim Ablehnen des Handels:', error);
      res.status(500).send('Interner Serverfehler');
    }
  };

  // Controller-Funktion zum Anzeigen des Handelsverlaufs
export const getTradeHistory = async (req: Request, res: Response) => {
    try {
      // Extrahiere die Spiel-ID aus den Routenparametern
      const { gameId } = req.params;
  
      // Suche den Handelsverlauf in der Datenbank anhand der Spiel-ID
      const tradeHistory = await Trade.find({ gameId });
  
      res.json(tradeHistory);
    } catch (error) {
      console.error('Fehler beim Abrufen des Handelsverlaufs:', error);
      res.status(500).send('Interner Serverfehler');
    }
  };