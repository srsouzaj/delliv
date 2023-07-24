import { useForm } from "react-hook-form"
import styles from "./FormSignup.module.css"
import { useRouter } from "next/router"
import { FormSignUpTypes } from "../../../../models/interfaces/forms/signup.interface"
import { SignupFormSchema } from "../../../../models/schemas/signup.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../../../hooks/context/useAuth"
import { Typography } from "../../../../components/Typography"
import { AppRoutes } from "../../../../utils/routes/appRoutes"
import { toast } from "react-toastify"


export const FormSignUp = () => {
    const { signUp } = useAuth()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormSignUpTypes>(
        {
            defaultValues: { email: "", password: "" },
            resolver: zodResolver(SignupFormSchema)
        }
    )

    const OnSubmit = async ({ email, password }: FormSignUpTypes) => {
        try {
            await signUp({ email, password })
            toast.success("Cadastro realizado com sucesso")
            router.push(AppRoutes.login.url())
        }
        catch (e) {
            toast.error("Houve um erro ao efetuar o Cadastro, tente novamente mais tarde")
            return Promise.reject(e)
        }
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(OnSubmit)}>

            <fieldset>
                <label htmlFor='email'>E-mail:</label>
                <input
                    className={styles.input}
                    placeholder='seumelhor@email.com.br'
                    id="email"
                    {...register("email")}
                />
                {errors.email && <Typography as="error">{errors.email.message}</Typography>}
            </fieldset>

            <fieldset>
                <label htmlFor='password'>Digite sua senha:</label>
                <input
                    className={styles.input}
                    placeholder='Digite sua Senha'
                    id="password"
                    type="password"
                    {...register("password")}
                />
                {errors.password && <Typography as="error">{errors.password.message}</Typography>}
            </fieldset>

            <div className={styles.policy}>
                <p>Ao continuar, você confirma que leu e concorda com nossos</p>
                <a>Termos de uso e nossa Política de Privacidade </a>
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>Cadastrar</button>
                <button onClick={() => router.push("/")} className={styles.back}>Voltar</button>
            </div>
        </form>
    )
}