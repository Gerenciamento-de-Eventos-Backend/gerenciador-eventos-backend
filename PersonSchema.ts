import { z } from 'zod'

const PersonSchema = z.object({
    name: z.string().min(10, "O nome deve ter mais de 10 caracteres"),
    email: z.string().email("Email precisa ser valido")
})

type Person = z.infer<typeof PersonSchema>

const result = PersonSchema.safeParse({
    nome: "Italo",
    email: "opaitalo@gmail.com",
    isAdmin: true
})

