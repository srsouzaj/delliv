import { useForm } from "react-hook-form"
import styles from "./FormSignup.module.css"
import { useRouter } from "next/router"
import { FormSignUpTypes } from "../../../../models/interfaces/forms/signup.interface"
import { SignupFormSchema } from "../../../../models/schemas/signup.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const FormSignUp = () => {
    const router = useRouter()
    const { register, formState: { isSubmitted, errors }, handleSubmit } = useForm<FormSignUpTypes>(
        {
            defaultValues: { name: "", email: "", password: "" },
            resolver: zodResolver(SignupFormSchema)
        }
    )

    const OnSubmit = (data: FormSignUpTypes) => {
        console.log(data)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(OnSubmit)}>
            <fieldset>
                <label htmlFor='name'>Nome:</label>
                <input
                    className={styles.input}
                    placeholder='Digite seu nome'
                    id="name"
                    {...register("name")}
                />
            </fieldset>
            <fieldset>
                <label htmlFor='email'>E-mail:</label>
                <input
                    className={styles.input}
                    placeholder='seumelhor@email.com.br'
                    id="email"
                    {...register("email")}
                />
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