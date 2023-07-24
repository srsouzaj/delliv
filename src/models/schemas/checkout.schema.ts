import * as z from 'zod'

export const CheckoutFormSchema = z.object({
    zip_code: z
        .string()
        .nonempty('Campo Obrigatório'),
    street: z.string().nonempty('Campo Obrigatório'),
    number: z.string().nonempty('Campo Obrigatório'),
    complement: z.string().nonempty('Campo Obrigatório'),
    neighborhood: z.string().nonempty('Campo Obrigatório'),
    city: z.string().nonempty('Campo Obrigatório'),
    uf: z.string().nonempty('Campo Obrigatório'),
})