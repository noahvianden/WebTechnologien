import express from 'express';
import { createPlayer } from '../controllers/playerController';
import { getAllPlayers } from '../controllers/playerController';

const router = express.Router();

router.post('/players', createPlayer);

router.get('/players', getAllPlayers);

export default router;
