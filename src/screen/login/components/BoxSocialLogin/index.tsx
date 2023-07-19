import { GoogleLogo } from "phosphor-react"
import styles from "./SocialLogin.module.css"

export const BoxSocialLogin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span />
                <p>Login fácil com</p>
                <span />
            </div>

            <div className={styles.buttons}>
                <button> <GoogleLogo size={20} color="#7f16e1" /> Google</button>
            </div>

        </div>
    )
}