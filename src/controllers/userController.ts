import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

import userService from "../services/database/user"
import { User } from "../models/constructors/user";


const prisma = new PrismaClient();

export class userController {
    async create(req: Request, res: Response) {
        try {
            const user = new User({ ...req.body});

            const response = await user.create();
            //validar cpf @unique
            //validar email @unique
            return res.status(201).json({response})

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
            return res.status(500).json({message: "Erro ao econtrar o usuário"});
        }
    }

    async update(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const updateData = req.body;

            await userService.searchById(Number(id));

            const response = await userService.update(Number(id), updateData);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({message: "Erro ao econtrar o usuário"});
        }
    }
}