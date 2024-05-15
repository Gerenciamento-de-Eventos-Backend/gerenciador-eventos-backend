import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { production } from '../models/constructors/productions';
import  productionService from '../services/database/production'


const prisma = new PrismaClient();

export class productionsController {
    async create(req: Request, res: Response) {
        try {
            const Production = new production({ ...req.body});

            const response = await Production.create();
            return res.status(201).json({response})

        } catch (error) {
            return res.status(500).json({message: "Error ao criar produção!"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await prisma.production.findMany();
            res.status(200).send(response);
        } catch (error) {
            return res.status(500).json({message: "Erro ao listar todos os eventos"})
        }
    }

    async getOne(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const response = await productionService.searchById(Number(id));

            if(!response) {
                return res.status(404).json({message: "Evento não encontrado!"})
            }
            return res.status(200).json(response);
        } catch(error) {
            return res.status(500).json({message: "Erro ao encontrar evento"});
        }
    }
   
    async update(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const updateData = req.body;

            await productionService.searchById(Number(id));

            const response = await productionService.update(Number(id), updateData);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({message: "Erro ao encontrar o evento"});
        }
    }

    async delete(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const response = await productionService.delete(Number(id));

            if(!response) {
                return res.status(404).json({message: "Evento não encontrado!"})
            }
            return res.status(200).json({message: "O evento foi deletado."});
        } catch(error) {
            return res.status(500).json({message: "Erro ao deletarevento"});
        }
    }

}
