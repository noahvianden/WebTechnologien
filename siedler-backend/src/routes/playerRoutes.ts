// routes/playerRoutes.ts

import express from 'express';
import { getPlayers, getPlayerById, addPlayer, updatePlayer, deletePlayer, getPlayerResources, updatePlayerResources } from '../controllers/playerController';

const router = express.Router();

// Route zum Abrufen aller Spieler eines Spiels
router.get('/:gameId/players', getPlayers);

// Route zum Abrufen eines bestimmten Spielers eines Spiels
router.get('/:gameId/players/:playerId', getPlayerById);

// Route zum Hinzufügen eines neuen Spielers zu einem Spiel
router.post('/:gameId/players', addPlayer);

// Route zum Aktualisieren eines Spielers
router.put('/:gameId/players/:playerId', updatePlayer);

// Route zum Löschen eines Spielers aus einem Spiel
router.delete('/:gameId/players/:playerId', deletePlayer);

// Route zum Abrufen der Ressourcen eines Spielers
router.get('/:gameId/players/:playerId/resources', getPlayerResources);

// Route zum Aktualisieren der Ressourcen eines Spielers
router.put('/:gameId/players/:playerId/resources', updatePlayerResources);

export default router;
