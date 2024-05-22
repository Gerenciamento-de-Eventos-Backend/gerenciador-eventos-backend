import { PrismaClient } from "@prisma/client";
import { production } from "../../models/constructors/productions"
import { ProductionSchema, ProductionInfer } from "../../models/constructors/schemas/ProductionSchema"


const prisma = new PrismaClient();

class productionService {
    async create(production: production) {


        try {
            const response = await prisma.production.create({
                data: {
                    name: production.name,
                    local: production.local,
                    date: production.date,
                    tickets: production.tickets,
                }
            })
            return response
        } catch (error) {
            console.log("error", error);
        }
    }

    async searchById(id: number) {
        try {
            const response = await prisma.production.findUnique({
                where: {
                    id,
                }
            })
            return response
        } catch (error) {
            console.log("error", error);

        }
    }

    async delete(id: number) {
        try {
            
            const response = await prisma.production.delete({
                where: {
                  id,
                },
              })

            return response
        } catch (error) {
            console.log("error", error);
        }
    }

    async update(id: number, data: Partial<production>) {
        try {
            const response = await prisma.production.update({
                where: {
                    id,
                }, 
                data,

            })
            return response;
        } catch (error) {
            console.log("error", error);
        }
    }
}



export default new productionService();