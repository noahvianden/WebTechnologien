import express from 'express';
import { getGames, getGameById, createGame, updateGame, deleteGame } from '../controllers/gameController';

const router = express.Router();

// Route zum Abrufen aller Spiele
router.get('/getAll', getGames);

// Route zum Abrufen eines bestimmten Spiels
router.get('/getGame', getGameById);

// Route zum Erstellen eines neuen Spiels
router.post('/add', createGame);

// Route zum Aktualisieren eines Spiels
router.put('/updateGame', updateGame);

// Route zum Löschen eines Spiels
router.delete('/deleteGame', deleteGame);

export default router;