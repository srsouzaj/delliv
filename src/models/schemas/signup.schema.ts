import * as z from 'zod'

export const SignupFormSchema = z.object({
    email: z
        .string()
        .nonempty('Campo Obrigatório')
        .email('Digite um email válido'),
    password: z.string().nonempty('Campo Obrigatório'),
})