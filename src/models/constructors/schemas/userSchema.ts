import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(5, "O nome é obrigatório"),
    cpf: z.string().min(11, "O cpf é obrigatório"),
    phone: z.string().min(11, "O telefone é obrigatório"),
    email: z.string().min(1, "O email é obrigatório"),
})

export type ProductionInfer = z.infer<typeof userSchema>