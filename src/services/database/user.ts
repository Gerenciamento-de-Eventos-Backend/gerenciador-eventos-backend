import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class userService {
    async searchById(id: number) {
        try {
            const response = await prisma.user.findUnique({
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

export default new userService();