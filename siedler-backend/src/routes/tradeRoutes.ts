// routes/tradeRoutes.ts

import express from 'express';
import { initiateTrade } from '../controllers/tradeController';

const router = express.Router();

// Route zum Initiieren eines Handels
router.post('/:gameId/trades', initiateTrade);

export default router;
