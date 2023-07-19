import * as z from 'zod'
import { LoginFormSchema } from '../../schemas/login.schema'

export type FormLoginTypes = z.infer<typeof LoginFormSchema>