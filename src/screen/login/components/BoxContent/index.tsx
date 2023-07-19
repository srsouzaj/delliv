import Image from 'next/image'
import styles from './BoxContent.module.css'
import Logo from "../../../../../public/logo.jpeg"
import { BoxSocialLogin } from '../BoxSocialLogin'
import { BoxRegister } from '../BoxRegister'
import Link from 'next/link'

export const BoxContent = () => {
    return (
        <div className={styles.boxContent}>
            <Image src={Logo} width={80} height={80} alt="Logo da Delliv" />
            <h1>Acesse com seu login</h1>
            <form>
                <fieldset>
                    <label htmlFor='email'>E-mail:</label>
                    <input className={styles.input} placeholder='seumelhor@email.com.br' id="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor='password'>Digite sua senha:</label>
                    <input className={styles.input} placeholder='Digite sua Senha' id="password" type="password" />
                    <Link href="/signup">
                        <a className={styles.link}>Esqueceu sua senha?</a>
                    </Link>
                </fieldset>
                <button className={styles.button}>Login</button>
            </form>

            <BoxSocialLogin />

            <BoxRegister />
        </div>
    )
}