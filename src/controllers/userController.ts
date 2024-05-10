import { Request, Response } from "express";
import userService from "../services/database/user"
import { PrismaClient } from "@prisma/client";

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

        } catch (error) {
            return res.status(500).json({message: "Error ao criar usuário!"})
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const response = await prisma.user.findMany();
            res.status(200).send(response);
        } catch (error) {
            return res.status(500).json({message: "Erro ao listar todos os usuários"})
        }
    }

    async getOne(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const response = await userService.searchById(Number(id));

            if(!response) {
                return res.status(404).json({message: "Usuário não encontrado!"})
            }
            return res.status(200).json(response);
        } catch(error) {
            return res.status(500).json({message: "Erro ao econtrar o usuário"})
        }
    }
}