import { Request, Response } from 'express';
import PlayerModel, { Resource } from '../models/playerModel'; 

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

// Aktualisieren eines Spielers
export const updatePlayer = async (req: Request, res: Response) => {
    try {
        const { playerId } = req.params;
        const update = req.body;
        const updatedPlayer = await PlayerModel.findByIdAndUpdate(playerId, update, { new: true });
        res.status(200).json(updatedPlayer);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Löschen eines Spielers
export const deletePlayer = async (req: Request, res: Response) => {
    try {
        const { playerId } = req.params;
        await PlayerModel.findByIdAndDelete(playerId);
        res.status(200).json({ message: 'Spieler erfolgreich gelöscht' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getPlayerById = async (req: Request, res: Response) => {
    try {
        const player = await PlayerModel.findById(req.params.playerId);
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden.' });
        }
        res.status(200).json(player);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const players = await PlayerModel.find();
        res.status(200).json(players);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Aktualisieren der Ressourcen eines Spielers
export const updatePlayerResources = async (req: Request, res: Response) => {
    const { playerId } = req.params;
    const { resources } = req.body;
    try {
        const player = await PlayerModel.findById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden' });
        }

        player.resources.brick += resources.brick;
        player.resources.wood += resources.wood;
        player.resources.wheat += resources.wheat;
        player.resources.sheep += resources.sheep;
        player.resources.ore += resources.ore;

        await player.save();
        res.status(200).json(player);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePlayerPosition = async (req: Request, res: Response) => {
    try {
        const { positions } = req.body; // Nehmen Sie an, dass die Positionen im Body gesendet werden
        const player = await PlayerModel.findByIdAndUpdate(req.params.playerId, { $set: { positions } }, { new: true });
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden.' });
        }
        res.status(200).json(player);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const tradeResources = async (req: Request, res: Response) => {
    try {
        const { fromPlayerId, toPlayerId, resourcesOffered, resourcesRequested } = req.body;
        // Assuming resourcesOffered and resourcesRequested are arrays of Resource objects

        // Subtract resources from fromPlayer
        await PlayerModel.findByIdAndUpdate(fromPlayerId, {
            $inc: { resources: resourcesOffered.map((resource: Resource) => -resource.amount) }
        });

        // Add resources to toPlayer
        await PlayerModel.findByIdAndUpdate(toPlayerId, {
            $inc: { resources: resourcesRequested.map((resource: Resource) => resource.amount) }
        });

        res.status(200).json({ message: 'Handel erfolgreich.' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateDevelopmentCards = async (req: Request, res: Response) => {
    try {
        const { developmentCards } = req.body; // Nehmen Sie an, dass die Entwicklungs-Karten im Body gesendet werden
        const player = await PlayerModel.findByIdAndUpdate(req.params.playerId, { $set: { developmentCards } }, { new: true });
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden.' });
        }
        res.status(200).json(player);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


