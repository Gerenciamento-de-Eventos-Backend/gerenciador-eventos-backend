import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class productionsController {
    async create(req: Request, res: Response) {
        const { name, local, date, tickets } = req.body;
    
        try {
            await prisma.productions.create ({
                data: {
                    name,
                    local,
                    date,
                    tickets
                }
            })

            return res.status(201).json({message: "Usuário criado!"})

        } catch (err) {
            return res.status(500).json({message: "Error ao criar usuário!"})
        }
    }
}