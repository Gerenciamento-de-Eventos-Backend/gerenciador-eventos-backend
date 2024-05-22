import { z } from 'zod';

export const ProductionSchema = z.object({
    name: z.string().min(5, "O nome é obrigatório"),
    local: z.string().min(1, "O local é obrigatório"),
    date: z.string().refine(val => !isNaN(Date.parse(val)), "Data inválida"), // Supondo que a data seja uma string válida
    tickets: z.number().int().min(1, "Deve haver pelo menos 1 ingresso"),
})

export type ProductionInfer = z.infer<typeof ProductionSchema>