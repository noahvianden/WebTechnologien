import express from 'express';
import { createPlayer } from '../controllers/playerController';

const router = express.Router();

router.post('/players', createPlayer);

export default router;
