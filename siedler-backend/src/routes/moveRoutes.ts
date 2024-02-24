// routes/moveRoutes.ts

import express from 'express';
import { performMove } from '../controllers/moveController';

const router = express.Router();

// Route zum Durchführen eines Spielzugs
router.post('/:gameId/moves', performMove);

export default router;
