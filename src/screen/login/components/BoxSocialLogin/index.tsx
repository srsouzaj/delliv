import { GoogleLogo } from "phosphor-react"
import styles from "./SocialLogin.module.css"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../../service/firebase";
import nookies from "nookies"
import { toast } from "react-toastify";

export const BoxSocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const onSubmit = async () => {
        try {

            const userLogged = await signInWithGoogle()
            if (userLogged) {
                nookies.set(null, 'dellivToken', userLogged.user.refreshToken, {
                    maxAge: 60 * 24 * 60, //1 day
                    path: '/',
                    secure: true,
                })
            }
            toast.success("Login efetuado com sucesso")
        }
        catch (e) {
            toast.error("Houve um erro ao efetuar o login, tente novamente mais tarde")
            return Promise.reject(e)

        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span />
                <p>Login fácil com</p>
                <span />
            </div>

            <div className={styles.buttons}>
                <button onClick={onSubmit}> <GoogleLogo size={20} color="#7f16e1" /> Google</button>
            </div>

        </div>
    )
}