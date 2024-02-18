import { Request, Response } from 'express';
import PlayerModel from '../models/playerModel'; // Annahme: Modell für Spieler

export const createPlayer = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const player = new PlayerModel({ name });
        await player.save();
        res.status(201).json(player);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
