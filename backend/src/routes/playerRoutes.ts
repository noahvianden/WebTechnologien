import express from 'express';
import { createPlayer, getAllPlayers, updatePlayer, deletePlayer, updatePlayerResources, updateDevelopmentCards, updatePlayerPosition } from '../controllers/playerController';
const router = express.Router();

router.get('/players', getAllPlayers);

router.post('/players', createPlayer);

router.put('/players/:playerId', updatePlayer);
router.put('/players/playerId', updatePlayerPosition)
router.put('/players/playerId', updatePlayerResources)
router.put('/players/:playerId', updateDevelopmentCards);

router.delete('/players/:playerId', deletePlayer);

export default router;
