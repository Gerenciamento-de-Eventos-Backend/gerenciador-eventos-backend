import { PrismaClient } from "@prisma/client";
import { production } from "../../models/constructors/productions"

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

}

export default new productionService();