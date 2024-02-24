import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController';

const router = express.Router();

// Route für die Registrierung eines neuen Benutzers
router.post('/register', registerUser);

// Route für das Einloggen eines Benutzers
router.post('/login', loginUser);

// Route für das Ausloggen eines Benutzers
router.get('/logout', logoutUser);

export default router;
