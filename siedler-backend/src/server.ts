import express, { Request, Response } from 'express';
import * as http from 'http';
import WebSocket from 'ws';
import authRoutes from './routes/authRoutes';
import playerRoutes from './routes/playerRoutes';
import gameRoutes from './routes/gameRoutes';
import moveRoutes from './routes/moveRoutes';
import tradeRoutes from './routes/tradeRoutes';
import gameManagementRoutes from './routes/gameManagementRoutes'

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket-Verbindung
wss.on('connection', (ws) => {
  console.log('Neuer Client verbunden');

  ws.on('message', (data) => {
      console.log('Nachricht vom Client:', data);
      // Verarbeiten der Nachricht und Aktualisieren des Spielstands

      // Beispiel: Senden einer Nachricht an alle verbundenen Clients
      wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
              client.send('Spielstand aktualisiert');
          }
      });
  });

  ws.on('close', () => {
      console.log('Client hat die Verbindung getrennt');
  });
});

// MongoDB-Verbindung
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/siedler', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Erfolgreich mit der MongoDB-Datenbank verbunden');
  })
  .catch((error: Error) => {
    console.error('Fehler beim Verbinden mit der MongoDB-Datenbank:', error);
  });

// Middleware hinzufügen
app.use(express.json());

// Routen hinzufügen
app.use('/api/auth', authRoutes)
app.use('/api/games', gameRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/moves', moveRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/gameManagement', gameManagementRoutes)

// HTTP-Endpunkt für GET-Anfragen
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Starten Sie den HTTP-Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
