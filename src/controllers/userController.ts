import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export class userController {
    async create(req: Request, res: Response) {
        const { name, cpf, phone, email, password } = req.body;
    
        try {
            await prisma.user.create ({
                data: {
                    name,
                    cpf,
                    phone,
                    email,
                    password
                }
            })

            return res.status(201).json({message: "Usuário criado!"})

        } catch (err) {
            return res.status(500).json({message: "Error ao criar usuário!"})
        }
    }
}