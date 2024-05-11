import { PrismaClient } from "@prisma/client";
import { User } from "../../models/constructors/user"

const prisma = new PrismaClient();

class userService {
    async create(user: User) {
        try {
            const response = await prisma.user.create({
                data: {
                    name: user.name,
                    cpf: user.cpf,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,

                }
            })
            return response
        } catch (error) {
            console.log("error", error);
        }
    }

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

    async update(id: number, data: Partial<User>) {
        try {
            const response = await prisma.user.update({
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
    async delete(id: number) {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    id,
                }
            })
            return deleteUser
        } catch (error) {
            console.log("error", error);
        }
    }
}

export default new userService();