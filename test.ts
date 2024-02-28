// server.ts

import express, { Request, Response } from 'express';
import * as http from 'http';
import WebSocket from 'ws';
import authRoutes from './routes/authRoutes';
import playerRoutes from './routes/playerRoutes';
import gameRoutes from './routes/gameRoutes';
import moveRoutes from './routes/moveRoutes';
import tradeRoutes from './routes/tradeRoutes';
import gameManagementRoutes from './routes/gameManagementRoutes'
import path from 'path'; // Importieren Sie path für den Dateipfad

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

// Fortsetzung von server.ts folgt auf der nächsten Seite
