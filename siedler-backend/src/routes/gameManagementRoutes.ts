// routes/gameManagementRoutes.ts

import express from 'express';
import { startGame, endGame, resetGame } from '../controllers/gameManagementController';

const router = express.Router();

// Route zum Starten eines Spiels
router.post('/:gameId/start', startGame);

// Route zum Beenden eines Spiels
router.post('/:gameId/end', endGame);

// Route zum Zurücksetzen eines Spiels
router.post('/:gameId/reset', resetGame);

export default router;
