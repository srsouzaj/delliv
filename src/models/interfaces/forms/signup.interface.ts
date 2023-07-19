import * as z from 'zod'
import { SignupFormSchema } from '../../schemas/signup.schema'

export type FormSignUpTypes = z.infer<typeof SignupFormSchema>