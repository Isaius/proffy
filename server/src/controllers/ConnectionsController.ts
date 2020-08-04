import { Request, Response } from "express";
import db from "../database/connection";

class ConnectionController {
    async index(req: Request, res: Response) {
        const connections = await db('connections').count('* as total');

        return res.json(connections[0]);
    }

    async store(req: Request, res: Response) {
        const { user_id } = req.body;

        await db('connections').insert({ user_id });

        return res.sendStatus(201);
    }
}

export default new ConnectionController();