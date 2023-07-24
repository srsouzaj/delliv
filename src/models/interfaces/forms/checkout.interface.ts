import * as z from 'zod'
import { CheckoutFormSchema } from '../../schemas/checkout.schema'

export type FormCheckoutTypes = z.infer<typeof CheckoutFormSchema>