import express, { Request, Response } from 'express';
import WebSocket from 'ws';
import * as http from 'http';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

import playerRoutes from './routes/playerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app); // `app` ist Ihre Express-Anwendung
const wss = new WebSocket.Server({ server });

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


// Set up MongoDB connection. Here, we're connecting to a local MongoDB instance
// using a database named 'catan'.
mongoose.connect('mongodb://localhost/catan');

// Configure session middleware. This setup is crucial for maintaining user sessions
// across HTTP requests. Make sure to replace 'yourSecretKey' with a secure key for production.
app.use(session({
  secret: 'yourSecretKey', // This is the key used to sign the session ID cookie.
  resave: false, // This means the session will not be saved back to the session store if it wasn't modified.
  saveUninitialized: true, // This allows sessions that are new and not modified to be saved to the store.
  cookie: { secure: false } // For development, 'secure: false' is fine. In production, set to 'true' for HTTPS.
}));

// Initialize Passport and its session handling. This enables your application
// to authenticate users and manage user sessions.
app.use(passport.initialize());
app.use(passport.session());

// Use additional middleware for security and cross-origin requests.
app.use(cors()); // Allows or restricts requested resources on a web server based on the request's origin.
app.use(helmet()); // Helps secure your app by setting various HTTP headers.

app.use(express.json());
app.use('/api', playerRoutes);

// Start the server on the defined PORT. This will listen for incoming requests.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
