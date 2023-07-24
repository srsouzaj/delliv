import Link from "next/link"
import styles from "./FormLogin.module.css"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "../../../../models/schemas/login.schema"
import { FormLoginTypes } from "../../../../models/interfaces/forms/login.interface"
import { Typography } from "../../../../components/Typography"
import { useAuth } from "../../../../hooks/context/useAuth"
import { useRouter } from "next/router"
import { AppRoutes } from "../../../../utils/routes/appRoutes"
import { toast } from "react-toastify"


export const FormLogin = () => {
    const { signIn } = useAuth()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isSubmitting } }
        = useForm<FormLoginTypes>({
            resolver: zodResolver(LoginFormSchema),
            defaultValues: {
                email: "",
                password: ""
            }
        })

    const OnSubmit = async ({ email, password }: FormLoginTypes) => {
        try {
            await signIn({ email, password })
            toast.success("Login efetuado com sucesso")
            router.push(AppRoutes.home.url())
        }
        catch (e) {
            toast.error("Houve um erro ao efetuar o login, tente novamente mais tarde")
            return Promise.reject(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className={styles.container}>
            <fieldset>
                <label htmlFor='email'>E-mail:</label>
                <input
                    className={styles.input}
                    placeholder='seumelhor@email.com.br'
                    id="email"
                    {...register("email")}
                />
                {errors && <Typography as="error">{errors.email?.message}</Typography>}
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
                {errors && <Typography as="error">{errors.password?.message}</Typography>}


                <Link href="/">
                    <a className={styles.link}>Esqueceu sua senha?</a>
                </Link>
            </fieldset>
            <button className={styles.button}>Login</button>
        </form>
    )
}