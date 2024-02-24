// tradeRoutes.ts

import express from 'express';
import * as tradeController from '../controllers/tradeController';

const router = express.Router();

// Route zum Initiieren eines Handels
router.post('/initiate', tradeController.initiateTrade);

// Weitere Routen für andere Funktionen im tradeController hinzufügen
router.post('/accept', tradeController.acceptTrade);
router.post('/reject', tradeController.rejectTrade);
router.post('/getAll', tradeController.getTradeHistory);

export default router;
